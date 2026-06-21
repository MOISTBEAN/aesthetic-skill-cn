# Installation

Copy or clone `aesthetic-skill-cn` into your agent’s skills or rules directory, preserving `SKILL.md` and its relative references. Restart or reload the agent, then invoke the skill by name.

No runtime application or SaaS service is installed.

## Preview and screenshots

Install the repository development dependencies:

```bash
npm install
npx playwright install chromium
```

Start the static preview server in one terminal:

```bash
npm run preview
```

With `http://localhost:8000` running, capture desktop and mobile screenshots in another terminal:

```bash
npm run screenshot
```

The screenshot script writes PNG files beside each before/after HTML example. Set `PREVIEW_BASE_URL` only when the preview server uses a different local address.
