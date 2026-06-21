/** Generate a minimal Markdown index for the available design presets. */
import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(process.cwd(), "design-md");
const presets = (await readdir(root, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

await writeFile(join(root, "PREVIEWS.md"), `# Preset previews\n\n${presets.map((name) => `- [${name}](./${name}/preview.md)`).join("\n")}\n`);
