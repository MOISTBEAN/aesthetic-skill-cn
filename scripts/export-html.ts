/** Wrap a Markdown source in a simple escaped HTML document for local review. */
import { readFile, writeFile } from "node:fs/promises";

const [input, output = "preview.html"] = process.argv.slice(2);
if (!input) throw new Error("Usage: export-html.ts <input.md> [output.html]");
const source = await readFile(input, "utf8");
const escaped = source.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
await writeFile(output, `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>Design preview</title><body><pre>${escaped}</pre></body></html>`);
