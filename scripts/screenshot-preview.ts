import { access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, type BrowserContext, type ViewportSize } from "playwright";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE_URL = (process.env.PREVIEW_BASE_URL ?? "http://localhost:8000").replace(/\/$/, "");

const examples = [
  "examples/before-after/hongkong-stock-dashboard",
  "examples/before-after/ai-saas-landing",
  "examples/before-after/xiaohongshu-content-calendar",
] as const;

const variants = ["before", "after"] as const;

const viewports: ReadonlyArray<{
  name: "desktop" | "mobile";
  size: ViewportSize;
  suffix: "" | "-mobile";
}> = [
  { name: "desktop", size: { width: 1440, height: 1200 }, suffix: "" },
  { name: "mobile", size: { width: 390, height: 844 }, suffix: "-mobile" },
];

async function assertServerIsRunning(): Promise<void> {
  let response: Response;

  try {
    response = await fetch(BASE_URL, {
      method: "HEAD",
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    throw new Error(
      `无法连接 ${BASE_URL}。请先运行 npm run preview。`,
      { cause: error },
    );
  }

  if (!response.ok) {
    throw new Error(`预览服务器返回 ${response.status}：${BASE_URL}`);
  }
}

async function captureViewport(
  context: BrowserContext,
  viewportName: "desktop" | "mobile",
  suffix: "" | "-mobile",
): Promise<number> {
  const page = await context.newPage();
  let captured = 0;

  try {
    for (const directory of examples) {
      for (const variant of variants) {
        const relativeHtml = `${directory}/${variant}.html`;
        const sourcePath = join(ROOT, relativeHtml);
        const outputPath = join(ROOT, directory, `screenshot-${variant}${suffix}.png`);
        const url = `${BASE_URL}/${relativeHtml}`;

        await access(sourcePath);

        console.log(`[${viewportName}] 正在打开 ${relativeHtml}`);

        const response = await page.goto(url, {
          waitUntil: "load",
          timeout: 30_000,
        });
        if (!response?.ok()) {
          throw new Error(`页面加载失败 ${response?.status() ?? "未知状态"}：${url}`);
        }

        await page.evaluate(async () => {
          await document.fonts?.ready;
        });
        await page.waitForTimeout(100);

        await page.screenshot({
          path: outputPath,
          fullPage: true,
          animations: "disabled",
        });

        captured += 1;
        console.log(`[${viewportName}] ${relativeHtml} -> ${outputPath}`);
      }
    }
  } finally {
    await page.close();
  }

  return captured;
}

async function main(): Promise<void> {
  console.log(`检查预览服务器：${BASE_URL}`);
  await assertServerIsRunning();

  console.log("启动 Chromium");
  const browser = await chromium.launch({ headless: true });
  let captured = 0;

  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: viewport.size,
        deviceScaleFactor: 1,
        locale: "zh-CN",
      });

      try {
        captured += await captureViewport(
          context,
          viewport.name,
          viewport.suffix,
        );
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log(`已生成 ${captured} 张截图。`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
