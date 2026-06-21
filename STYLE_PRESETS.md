# Style Presets

Select one preset as the visual and structural base. A preset is not a theme switch; it encodes the product’s density, hierarchy, content model, and interaction posture.

## Contents

- [Selection table](#selection-table)
- [premium-ai-saas](#1-premium-ai-saas)
- [finance-terminal](#2-finance-terminal)
- [xiaohongshu-creator-tool](#3-xiaohongshu-creator-tool)
- [local-business-clean](#4-local-business-clean)
- [dark-devtool](#5-dark-devtool)

## Selection table

| Preset | Use for | Default density | Primary structure |
|---|---|---:|---|
| `premium-ai-saas` | AI workspaces, review tools, B2B operations | Medium | task header + work canvas + evidence |
| `finance-terminal` | markets, portfolios, risk, research | High | command bar + table/chart + detail |
| `xiaohongshu-creator-tool` | planning, drafting, cover review, publishing | Medium | calendar/board + preview + inspector |
| `local-business-clean` | bookings, services, stores, lead capture | Low–medium | service proof + price + location + action |
| `dark-devtool` | API, logs, infrastructure, debugging | High | navigation + editor/console + diagnostics |

## 1. premium-ai-saas

### Product posture

Make AI feel like a controlled professional capability inside a real workflow. Emphasize sources, differences, uncertainty, review, and approval. Do not make a chat box the entire product unless conversation is genuinely the primary job.

### Suitable products

- contract, tender, or policy review
- research synthesis with citations
- customer-support quality inspection
- internal knowledge and operations assistants
- AI-assisted document or content workflows

### Information architecture

Use this default order:

1. Workspace context: client, project, document, or task.
2. Current status: what AI completed, what remains, and who owns review.
3. Primary work area: comparison, editor, structured result, or source-linked analysis.
4. Evidence or inspector: citations, original text, version history, confidence, or comments.
5. Approval action: save, assign, submit, accept, or reject.

**Example shell:** left project navigation; center contract comparison; right source and comment panel. Avoid a home screen made of eight generic capability cards.

### Visual system

- **Background:** warm white or light stone, not pure white over a blue-purple wash.
- **Text:** near-black with clear secondary gray; use one deep blue, ink green, or product-specific accent.
- **Typography:** Chinese sans-serif for interface text; use editorial scale sparingly for page titles. Body text should remain compact and readable.
- **Surfaces:** mostly flat. Use borders and spacing for containment; reserve shadow for dialogs and floating tools.
- **Radius:** controlled, typically 6–10 px for work surfaces. Do not apply pill shapes to every label.
- **Motion:** reveal source links, accepted changes, and progress. Avoid ambient floating blobs.

### Components and states

- Mark AI output as `AI 初稿`, `待复核`, `已采纳`, or `已驳回`.
- Link conclusions to evidence: `查看原文第 4.2 条`.
- Show partial failure: `已完成 18 / 20 页，2 页扫描质量较低`.
- Keep destructive or irreversible AI actions reviewable.
- Make manual editing possible where the user remains accountable.

### Copy direction

Use `比较两个版本`, `生成修改说明`, `提交法务复核`, `保留原条款`. Avoid `释放 AI 潜能`, `智能赋能`, `全新范式`.

### Reference scenario

For a procurement contract review page, show: `华东仓配续约合同`, supplier, amount, version time, four detected changes, cited clauses, reviewer, and deadline. Primary action: `提交法务复核`. The page should communicate accountability before novelty.

### Failure conditions

Reject the preset application if it contains an unsupported accuracy percentage, invented customer logos, an ornamental prompt bar with no workflow, or equal visual weight for AI output and verified source material.

## 2. finance-terminal

### Product posture

Optimize for rapid scanning, comparison, and risk recognition. Density is useful when alignment and semantics are disciplined. Never beautify away timing, units, missing data, or uncertainty.

### Suitable products

- Hong Kong, A-share, fund, or multi-asset watchlists
- portfolio and P&L monitoring
- risk and compliance dashboards
- research terminals and event tracking
- brokerage or investment operations tools

### Information architecture

Use this default order:

1. Market/account context: account, currency, trading session, and data timestamp.
2. Command layer: symbol search, date range, filters, saved views, export.
3. Primary instrument: positions table, watchlist, orders, or risk exceptions.
4. Contextual detail: chart, company/event data, order detail, or exposure breakdown.
5. Alerts and audit information.

Use list-detail behavior so selecting `00700 腾讯控股` updates the chart and detail without losing the watchlist position.

### Visual system

- **Density:** compact rows and narrow control spacing; provide a comfortable-density option only if users need it.
- **Numbers:** use tabular numerals; right-align comparable values; keep signs, decimals, and units consistent.
- **Color:** apply red/green according to the market and user context, then pair color with a sign, arrow, or label. Do not rely on color alone.
- **Background:** neutral light or restrained charcoal. Use subtle row separators and sticky headers.
- **Charts:** label axes, currency, time zone, session gaps, and comparison baseline. Avoid 3D charts and decorative area fills.
- **Status:** distinguish live, delayed, estimated, suspended, closed, and unavailable data.

### Components and states

- Table columns should state unit in the header where useful: `现价 (HKD)`, `持仓市值 (万元)`.
- Use `—` for unavailable values and expose the reason on focus or in detail.
- Show quote freshness near the data, not buried in a footer: `延迟 15 分钟 · 15:45`.
- Confirm order cancellation and other irreversible actions with instrument, quantity, and consequence.
- Separate `系统信号` from `研究观点`; never label either as guaranteed advice.

### Copy direction

Use concise domain language: `当日浮动盈亏`, `可用现金`, `南向净流入`, `风险敞口`, `撤销委托`. Avoid `财富增长引擎`, `AI 精准预测`, `抓住每一次机会`.

### Reference scenario

For a Hong Kong stock monitor, show a watchlist with code/name, price, change, turnover, spread, southbound flow, and alert state. Above it display `港股交易中 · 报价延迟 15 分钟 · HKD`. Selecting a row opens company detail and synchronized events.

### Failure conditions

Reject the design if values lack units or timestamps, green/red is used decoratively, P&L excludes fees without disclosure, a pie chart contains too many holdings, or “AI 建议：强力买入” appears without provenance and risk language.

## 3. xiaohongshu-creator-tool

### Product posture

Support the creator’s real loop: collect an idea, plan a topic, draft a title and body, review a cover, schedule publication, publish, and learn from results. Make visual assets and mobile output first-class.

### Suitable products

- Xiaohongshu content calendars
- creator studio collaboration
- cover and title review
- brand collaboration workflows
- multi-account publishing operations

### Information architecture

Use this default order:

1. Account or brand context and current publishing period.
2. Calendar, board, or content queue as the primary work area.
3. Cover thumbnail, title, format, owner, publish time, and review state on every item.
4. Mobile preview and editing inspector.
5. Compliance, sponsorship, link, or asset checks before publication.

A content card should represent a real draft, not a generic task. Show `封面待复核`, `标题 16 / 20 字`, `周五 19:30`, and `小岚负责`.

### Visual system

- **Canvas:** light neutral background with clear white editing surfaces; avoid copying Xiaohongshu’s proprietary brand treatment.
- **Color:** use one lively editorial accent plus semantic review states. Do not turn every tag pink.
- **Imagery:** use believable cover ratios and thumbnail crops. Provide asset-missing and processing states.
- **Typography:** prioritize Chinese title rhythm and readable metadata. Keep long titles visible enough to review.
- **Layout:** combine a calendar or queue with a phone-proportioned preview and compact inspector.
- **Drag behavior:** make drop targets and unsaved schedule changes visible; support keyboard or menu alternatives.

### Components and states

- Workflow states: `选题`, `撰写中`, `待封面`, `待复核`, `已排期`, `已发布`, `发布失败`.
- Expose title length, prohibited or risky terms, sponsorship disclosure, and missing assets.
- When publishing is not integrated, say `复制发布素材` rather than pretending `一键发布` works.
- Treat performance data as historical context, not a promise of virality.
- Keep comments anchored to a title, paragraph, or cover version.

### Copy direction

Use creator language: `新建选题`, `换一版封面`, `提交主编复核`, `排到周五 19:30`, `复制正文与标签`. Avoid `打造爆款矩阵`, `全域增长`, `AI 保证高赞`.

### Reference scenario

For a three-person home-lifestyle studio, show the week of 15–21 June, six drafts, two empty publishing slots, real Chinese titles, owner avatars with names, cover review status, and a mobile preview. The primary action changes with state: `提交复核` before approval and `确认排期` after approval.

### Failure conditions

Reject the design if it is merely a generic kanban board, hides covers, uses fake engagement forecasts, has no publish time or owner, or promises direct platform publishing without a real integration.

## 4. local-business-clean

Use for repair shops, clinics, studios, classes, restaurants, and appointment services. Lead with service scope, price basis, today’s availability, location, opening hours, and booking path.

- Use bright, direct surfaces and real photo slots.
- Show `基础保养 ¥99 起（不含配件）`, not `超值套餐` without scope.
- Prefer verifiable trust: technician credentials, refund policy, map, and recent real work.
- Make phone and WeChat actions explicit; do not use fake testimonials or “已有 100,000+ 客户.”

Default structure: service summary → prices → process → availability → address/contact → policy.

## 5. dark-devtool

Use for API consoles, logs, deployment, debugging, and infrastructure tools. Make sustained technical work fast, legible, and keyboard-friendly.

- Use charcoal surfaces, crisp type, sparse chroma, and monospace only for technical values.
- Expose environment, request time, status code, duration, copy actions, and failure cause.
- Keep navigation + editor/console + diagnostics stable across states.
- Use `鉴权失败：Token 已于 14:32 过期` instead of `Oops! Something went wrong`.
- Reserve bright red for failures and destructive operations; avoid neon cyberpunk decoration.
