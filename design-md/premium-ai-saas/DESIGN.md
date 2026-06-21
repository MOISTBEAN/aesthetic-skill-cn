# Premium AI SaaS — Design System

Create a dark-first AI workflow workstation for serious Chinese software products. Make real inputs, outputs, sources, status, and human review visible. The interface should feel precise and quietly advanced—not like a generic AI landing page.

## Contents

- [Use Cases](#use-cases)
- [Visual Atmosphere](#visual-atmosphere)
- [Color Tokens](#color-tokens)
- [Typography](#typography)
- [Layout Rules](#layout-rules)
- [Component Rules](#component-rules)
- [Motion](#motion)
- [Do](#do)
- [Don't](#dont)
- [Example Prompt](#example-prompt)
- [Self-Check](#self-check)

## Use Cases

Use this system for:

- AI contract, tender, policy, or document review
- cited research and knowledge synthesis
- customer-support quality inspection
- AI-assisted operations and approval workflows
- content, data, or code transformation with inspectable input/output
- model evaluation, prompt workflows, and internal AI workbenches

Do not use it for a consumer chat toy, an image-only campaign page, or a product whose only identity is “powered by AI.”

Anchor the page to a business object: `供应商合同`, `访谈材料`, `质检任务`, `知识库`, `评测集`, or `执行记录`.

## Visual Atmosphere

Create the feeling of a focused workstation after dusk:

- dark mode first, with stable low-glare surfaces
- dense enough for real work, spacious enough to inspect content
- restrained blue/violet accents used as active and AI-process signals
- crisp, cool neutrals rather than pure black
- product preview wall showing real workflow surfaces, not abstract illustrations
- quiet depth from surface contrast and hairline borders, not glass blur

The visual hierarchy should say: **context → active task → input/output → evidence → human decision**.

The AI should feel embedded in a workflow. Never use robot mascots, floating brains, magic wands as the primary identity, or glowing orbs as proof of intelligence.

## Color Tokens

Use semantic tokens. Values are starting points; preserve contrast and roles when adapting to an existing system.

| Token | Value | Use |
|---|---:|---|
| `--bg-canvas` | `#0B0D12` | application background |
| `--bg-sidebar` | `#0E1118` | navigation and project rail |
| `--bg-surface-1` | `#121620` | primary panels |
| `--bg-surface-2` | `#171C28` | raised controls, selected rows |
| `--bg-surface-3` | `#1D2331` | hover and temporary overlays |
| `--border-subtle` | `#242B3A` | panel and row boundaries |
| `--border-strong` | `#343D51` | focused or selected boundaries |
| `--text-primary` | `#F2F5FA` | titles and primary content |
| `--text-secondary` | `#A8B0C0` | metadata and supporting copy |
| `--text-muted` | `#717B8E` | disabled and low-priority copy |
| `--accent-blue` | `#6E8BFF` | primary action and active state |
| `--accent-violet` | `#9A7BFF` | AI-generated or model-specific state |
| `--accent-soft` | `#202B52` | subtle active background |
| `--success` | `#45C89A` | accepted, completed, verified |
| `--warning` | `#E8B65B` | low confidence, needs attention |
| `--danger` | `#F07178` | failure, rejection, destructive action |
| `--info` | `#68A7E8` | neutral system information |

Rules:

- Keep the canvas and surfaces neutral; do not tint the whole product violet.
- Use blue for user-controlled primary action and violet for AI/model provenance. Do not use them interchangeably.
- Pair status color with text or icon. `置信度较低` must not depend on yellow alone.
- Limit gradients to a tiny, controlled data or process indication if required. Never use a full-page blue-violet gradient.
- In light-mode adaptations, preserve semantic roles rather than inverting every color mechanically.

## Typography

Use a high-legibility Chinese sans-serif stack provided by the platform or product. Do not require a proprietary font.

```css
font-family: Inter, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
```

Use monospace only for code, identifiers, token counts, and structured output.

| Role | Size / line height | Weight | Notes |
|---|---|---:|---|
| Page title | `24/32` | 600 | one line when possible |
| Panel title | `15/22` | 600 | compact workstation heading |
| Body | `14/22` | 400 | default Chinese reading size |
| Dense row | `13/20` | 400–500 | lists, logs, metadata |
| Label | `12/18` | 500 | uppercase only for genuine codes |
| Code/output | `13/20` | 400 | use monospace and preserve wrapping controls |

Do not use a 64–80 px marketing headline inside the product. Create hierarchy through panel placement, not extreme type scale.

## Layout Rules

### Application shell

Use a stable three-zone workstation on desktop:

1. **Navigation rail:** 220–264 px for workspace, projects, and history.
2. **Primary canvas:** flexible, minimum 560 px for the active input/output task.
3. **Inspector:** 300–380 px for sources, parameters, comments, or run details.

Allow the inspector to collapse. Keep the primary action and run state visible without scrolling the entire page.

### Product preview wall

For marketing, onboarding, or a template gallery, use a wall of large, legible product previews:

- show 2–4 workflow surfaces at meaningful size
- vary width by importance rather than using identical feature cards
- include readable Chinese labels and realistic states
- show continuity: input → processing → output → review
- use the same surface tokens as the product; do not frame screenshots in glowing glass cards

At 1440 px, a representative wall may use one 8-column primary workstation preview and two stacked 4-column supporting previews. At smaller widths, stack previews and preserve their internal legibility.

### Input/output work area

Use split panels when comparison matters:

- input on the left, output on the right
- source/original above and AI revision below when chronology matters
- synchronized scroll only when it genuinely aids comparison
- visible panel labels: `原合同`, `AI 修改建议`, `引用来源`

Never present generated output without its origin, run state, or review action.

### Responsive behavior

- At 1024–1279 px, collapse navigation to icons or a drawer and keep two work panels.
- Below 768 px, stack input, output, and evidence in task order; do not squeeze three columns.
- Keep destructive and approval actions reachable but not sticky over content.
- Preserve long Chinese text and code with explicit wrap, expand, or horizontal-scroll behavior.

## Component Rules

### Run header

Show workflow name, object, model/run provenance when relevant, timestamp, status, and owner. Example: `华东仓配续约合同 · 第 3 次分析 · 16:42 · 待法务复核`.

### Input panel

- Name the input and supported format.
- Show attachment count, page count, or record count.
- Preserve the submitted input after failure.
- Use concrete empty copy: `拖入合同 PDF，或从项目文件中选择`.

### Output panel

- Label output as `AI 初稿`, `待复核`, `已采纳`, or `已驳回`.
- Anchor claims to source excerpts or structured evidence.
- Provide `采纳`, `保留原文`, `编辑后采纳`, and `添加批注` where appropriate.
- Distinguish partial completion: `已分析 18 / 20 页，2 页扫描质量较低`.

### Source citation

Render citations as compact, navigable references such as `第 4.2 条` or `访谈 03 · 12:18`. Opening a citation should reveal the exact excerpt without destroying the current work context.

### Status and progress

Use step labels for operations longer than a few seconds: `解析文件 → 提取条款 → 比较版本 → 生成说明`. Show elapsed time only if useful. Never fake progress percentages.

### Buttons

- Primary: one per local context, solid accent blue.
- Secondary: neutral surface with border.
- AI action: may use violet icon or subtle violet edge, but keep the label concrete: `生成修改说明`.
- Destructive: require explicit object and consequence.

### Cards and surfaces

Use panels for true workflow regions. Do not wrap individual labels, metrics, and paragraphs in nested cards. Radius: 8 px for panels, 6 px for controls, pill only for compact statuses.

### Empty, error, and permission states

- Empty: `还没有分析记录。上传第一个版本后，可比较条款变化。`
- Error: `第 8 页无法识别，其他 19 页已完成。上传清晰版本后可重试该页。`
- Permission: `你可以查看分析结果，但无权采纳条款修改。` → `申请编辑权限`

## Motion

- Use 120–180 ms ease-out for hover, selection, and panel reveal.
- Use 180–240 ms for inspector opening and layout transitions.
- Animate accepted changes with a brief background fade; keep the source anchor visible.
- Stream generated text only when generation is genuinely incremental; provide stop and preserve partial output.
- Respect reduced-motion preferences.
- Do not pulse every AI control, float background objects, or loop gradient animations.

## Do

- Show real input, processing, output, evidence, and review states.
- Use realistic Chinese business objects and timestamps.
- Keep dark surfaces neutral and readable for sustained work.
- Make human accountability explicit.
- Use the product preview wall to demonstrate workflow continuity.
- Let one controlled accent carry interaction priority.

## Don't

- Do not use robot mascots, magic brains, or anthropomorphic AI assistants.
- Do not use giant gradient heroes, glowing blobs, or “AI purple” everywhere.
- Do not build the page from equal feature cards.
- Do not invent `准确率 99.9%`, logos, testimonials, or model confidence.
- Do not make chat the default solution to every task.
- Do not hide sources, failure, or uncertainty behind polished output.
- Do not copy any real product or brand identity.

## Example Prompt

```text
使用 premium-ai-saas 设计一个中文采购合同审阅工作台。深色优先，桌面端 1440px，移动端可用。页面围绕“华东仓配 2026 年续约合同”：左侧项目导航，中间原合同与 AI 修改建议对照，右侧显示引用条款、批注和分析记录。显示 4 处差异、2 处待法务确认、1 页扫描质量较低。主操作为“提交法务复核”。使用克制的蓝色和紫罗兰色语义，不使用机器人、玻璃拟态、大渐变、虚假准确率或通用功能卡片。实现加载、部分失败、无权限和已采纳状态。
```

## Self-Check

Before delivery, confirm:

- [ ] Dark mode is the designed default, not a mechanical color inversion.
- [ ] The main screen shows a real AI workflow, not generic capabilities.
- [ ] Input, output, evidence, run status, and human review are visible.
- [ ] Blue and violet have separate semantic roles and remain restrained.
- [ ] The product preview wall contains large, readable workflow surfaces.
- [ ] Chinese copy names real objects and outcomes.
- [ ] Empty, error, partial-failure, permission, and success states exist where relevant.
- [ ] Cards are used for workflow regions, not every content fragment.
- [ ] There are no robots, glowing blobs, giant gradients, invented metrics, or copied brand motifs.
- [ ] The result scores at least 24/30 using the repository `SCORECARD.md`.
