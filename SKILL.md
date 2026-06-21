---
name: aesthetic-skill-cn
description: Design, implement, or review product-grade Chinese software interfaces for Web SaaS, Xiaohongshu and Douyin creator tools, finance and investment dashboards, WeChat H5, local-business pages, and Feishu-style enterprise tools. Use when a coding agent must select a credible visual direction, write natural Chinese UI copy, replace generic foreign SaaS patterns, produce a DESIGN.md, review an existing UI, create a before/after redesign, or build a full page.
---

# Aesthetic Skill CN

Stop generating fake SaaS UI. Start building real Chinese product interfaces.

别再生成假的 SaaS 界面了。让 AI 写出来的中文软件界面，终于有产品感。

Treat every request as product design work, not as a request to decorate rectangles. Make the interface specific to its business, users, platform, and operating state.

## Workflow map

- [Required workflow](#required-workflow)
- [Working principle](#working-principle)

## Required workflow

Follow these steps in order. Do not begin visual styling before steps 1–4 are resolved.

### 1. Detect the deliverable mode

Read [DELIVERABLE_MODES.md](DELIVERABLE_MODES.md). Select exactly one primary mode:

- `DESIGN.md Mode` for a reusable design specification.
- `UI Review Mode` for diagnosis and prioritized corrections.
- `Before / After Mode` for an explicit transformation.
- `Full Page Mode` for implemented or implementation-ready UI.

Infer the mode from the request. If the user asks to “review” or “audit,” do not silently rebuild. If the user asks to “build,” do not stop at advice.

### 2. Detect the product category

Name the category in one concrete phrase before designing. Prefer “小红书三人内容团队的排期工具” over “创作者 SaaS.”

Classify it as one of the following, or state a more precise category:

- Web SaaS / operations workspace
- Xiaohongshu or Douyin creator tool
- Finance or investment dashboard
- WeChat H5 / mobile web flow
- Local-business service page
- Feishu / enterprise tool
- Developer tool

Identify the primary user, repeated task, decision they must make, and business object they act on. Examples of business objects: 合同、选题、组合持仓、客户线索、预约单、审批单、接口请求.

### 3. Select one style preset

Read [STYLE_PRESETS.md](STYLE_PRESETS.md). Select one base preset:

- `premium-ai-saas`
- `finance-terminal`
- `xiaohongshu-creator-tool`
- `local-business-clean`
- `dark-devtool`

Do not blend presets merely to add variety. Borrow a rule from a second preset only when a product requirement demands it, such as using tabular numerals inside an otherwise light enterprise workspace.

### 4. Read the preset DESIGN.md

Open `design-md/<preset>/DESIGN.md` and treat it as the local visual contract. Use its hierarchy, density, typography, color, surface, and interaction direction.

If the task is `DESIGN.md Mode`, use the preset as a starting point and produce a product-specific specification; do not copy it unchanged.

### 5. Apply Chinese platform rules

Read the matching section in [PLATFORM_RULES_CN.md](PLATFORM_RULES_CN.md). Apply platform conventions before visual polish:

- realistic Chinese text length and terminology
- desktop versus mobile information density
- local identity, phone, address, currency, time, consent, and sharing patterns
- platform-specific creation, review, approval, or transaction states

Do not make every Chinese product look like a translated US marketing site.

### 6. Apply the aesthetic standard and anti-slop rules

Read [AESTHETIC_STANDARD.md](AESTHETIC_STANDARD.md) and [ANTI_AI_SLOP.md](ANTI_AI_SLOP.md).

Before generating output, remove:

- unsupported claims and invented statistics
- decorative feature-card grids
- gradients, glass, emojis, or pills without semantic purpose
- translated SaaS copy such as “释放无限潜能”
- empty dashboard metrics that do not support a decision

Read [COPYWRITING_RULES_CN.md](COPYWRITING_RULES_CN.md) whenever the output contains Chinese product copy.

### 7. Generate the requested output

Build around a real task and representative data. Include the states the user will actually encounter: loading, empty, error, no permission, stale data, destructive confirmation, or success where relevant.

For implemented UI:

- preserve existing functionality unless the request authorizes a change
- use semantic HTML and accessible interaction states
- make responsive behavior explicit
- use charts only when a chart answers a comparison or trend question
- keep sample data plausible and label it as sample data when necessary

For written deliverables, make each recommendation executable. Replace “提升层次感” with a concrete instruction such as “将账户余额从四张卡片合并为页头摘要；风险预警保留独立区块并固定在持仓表上方.”

### 8. Self-review before delivery

Read [SCORECARD.md](SCORECARD.md) and score the result across all six dimensions. Revise any dimension below 3.

Do not deliver when:

- total score is below 24/30
- `information hierarchy`, `business realism`, or `Chinese copy naturalness` is below 3
- any critical deception, accessibility, stale-data, or financial-semantics issue remains

Report the score only when the selected deliverable mode calls for a review. Otherwise use it silently as a quality gate.

## Working principle

Prefer product feeling over decoration, hierarchy over color, structure over card grids, credible detail over slogans, and quiet confidence over visual noise.
