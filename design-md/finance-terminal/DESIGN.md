# Finance Terminal — Design System

Create a modern investment research and holding-discipline dashboard for self-directed investors. Design for Hong Kong stock workflows first while keeping the information model compatible with US stocks, A-shares, ETFs, and crypto research. Make it retail-readable and institution-grade in data hygiene.

This is a research and decision-record system, not a trading casino and not a fake professional terminal clone.

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

- Hong Kong stock watchlists and portfolio research
- thesis tracking and position review
- buy-reason and sell-condition discipline
- valuation range and scenario analysis
- earnings, policy, product, and corporate catalyst tracking
- portfolio risk alerts and concentration review
- transaction journal and post-trade review
- cross-market research across HK, US, A-share, ETF, and crypto instruments

Do not use it for high-frequency execution, guaranteed signal selling, meme-token promotion, or decorative “wealth dashboards.”

The core user loop is:

`发现标的 → 写下投资逻辑 → 定义估值与风险 → 建立观察 → 记录交易 → 检查持有条件 → 复盘结果`.

## Visual Atmosphere

Aim for a calm research desk with disciplined density:

- dark or light neutral mode may be used; dark is recommended for sustained multi-panel monitoring
- compact, aligned, information-rich surfaces
- retail-friendly labels and explanations without diluting domain precision
- quiet confidence, with alerts carrying more chroma than decoration
- clear separation between market facts, personal thesis, system calculations, and editorial notes
- no flashing prices, glowing coins, neon grids, or “up only” celebration

Do not imitate a legacy institutional terminal’s exact black/orange styling, command syntax, or panel chrome. Build a contemporary product from first principles.

## Color Tokens

Use semantic roles. Market-direction colors must adapt to market convention and user preference; never rely on color alone.

| Token | Value | Use |
|---|---:|---|
| `--bg-canvas` | `#0B0E12` | application background |
| `--bg-surface-1` | `#11151B` | tables and primary panels |
| `--bg-surface-2` | `#171C23` | selected rows and controls |
| `--bg-surface-3` | `#1D242D` | hover and overlay surfaces |
| `--border-subtle` | `#27303B` | rows and panels |
| `--text-primary` | `#EDF1F5` | names, values, headings |
| `--text-secondary` | `#A7B0BB` | metadata and labels |
| `--text-muted` | `#6F7A87` | disabled and tertiary text |
| `--accent-research` | `#6D9EEB` | selection, links, research actions |
| `--positive` | `#D45A63` | price/return up in CN/HK convention |
| `--negative` | `#35A979` | price/return down in CN/HK convention |
| `--warning` | `#E1A94B` | thesis drift, catalyst due, stale data |
| `--critical` | `#E05F67` | breached sell condition or severe risk |
| `--neutral-info` | `#7296B8` | delayed, estimated, or informational state |
| `--focus-ring` | `#8AB4F8` | keyboard focus |

Rules:

- Provide a preference to swap market up/down colors for users operating in US conventions.
- Pair direction color with `+ / -`, arrow, or label.
- Do not use market red as the universal primary-button color.
- Use amber for attention, not profit; reserve critical red for risk when it is not already carrying market direction.
- Keep charts legible in color-vision-deficiency simulations.

## Typography

Use a Chinese UI sans-serif plus tabular numerals. Use monospace selectively for symbols, order identifiers, and dense numeric tables.

```css
font-family: Inter, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
font-variant-numeric: tabular-nums lining-nums;
```

| Role | Size / line height | Weight | Notes |
|---|---|---:|---|
| Page title | `20/28` | 600 | portfolio, research view, or instrument |
| Instrument price | `24/30` | 600 | pair with currency and timestamp |
| Panel title | `14/20` | 600 | compact and scannable |
| Table row | `13/20` | 400–500 | primary operating density |
| Metadata | `12/18` | 400 | timestamp, source, market state |
| Research body | `14/22` | 400 | thesis and transaction notes |

Right-align comparable numbers. Align decimal precision by instrument and metric. Keep symbol and name readable together: `00700 腾讯控股`.

## Layout Rules

### Desktop shell

Use a research-oriented four-region shell:

1. **Global rail:** portfolio, watchlist, thesis, catalysts, transactions, review.
2. **Context bar:** market/session, account, currency, quote state, search, date.
3. **Primary work area:** positions, watchlist, thesis list, or transaction table.
4. **Detail workspace:** instrument chart, thesis, valuation, catalyst, and risk detail.

Recommended desktop proportions: 216–240 px rail; flexible 55–65% primary area; 360–440 px detail panel. On ultra-wide screens, allow a pinned research panel rather than stretching tables indefinitely.

### Default home view

Do not start with a wall of KPIs. Use:

- compact account summary: market value, cash, daily P&L, total P&L, timestamp, currency
- risk and discipline strip: breached conditions, concentration, thesis reviews due
- primary positions table
- upcoming catalyst list

The user should see what requires action before performance decoration.

### Instrument research view

Use a list-detail or stacked research structure:

1. instrument identity, price, market state, quote freshness
2. thesis summary and current stance
3. valuation range with assumptions
4. catalysts with expected dates and status
5. risk alerts and sell conditions
6. transaction history and review notes

### Responsive behavior

- At 1024–1279 px, collapse the rail and use a slide-over detail panel.
- Below 768 px, prioritize instrument identity, thesis status, alerts, and holdings; allow deliberate horizontal table scroll rather than turning every row into a tall card.
- Keep units and timestamps attached to values after reflow.
- On mobile, move charts below decision-critical alerts and thesis conditions.

## Component Rules

### Market context bar

Always show relevant context: `港股交易中 · 报价延迟 15 分钟 · HKD · 15:45`. For closed markets, show `已收市`. For crypto, show data source and 24/7 context without implying exchange-wide uniformity.

### Watchlist

Minimum useful columns:

- symbol and name
- last price + currency
- daily change
- valuation marker or watch range
- thesis status
- next catalyst
- alert state
- quote time

Allow saved views such as `重点跟踪`, `等待估值`, `财报前`, and `逻辑待验证`. Do not rank securities with unexplained “AI scores.”

### Thesis tracker

Store the thesis as structured, dated statements:

- `买入理由`: observable claim and evidence
- `关键假设`: what must remain true
- `反方证据`: evidence that weakens the thesis
- `最近复核`: date and reviewer
- `下次复核`: date or catalyst trigger
- `当前状态`: 成立 / 待验证 / 减弱 / 失效

Example: `买入理由：海外游戏收入连续两个季度同比增长，且利润率改善。` Avoid `公司很优秀，长期看好`.

### Holding discipline panel

Show position weight, average cost, current value, unrealized P&L, target range, risk budget, and review due date. State calculation scope: `未含交易费用`.

Use explicit discipline prompts:

- `当前仓位 12.4%，高于自设上限 10%`
- `持有逻辑 34 天未复核`
- `价格上涨，但盈利假设未改善`

### Buy reason

Require a dated reason before recording a planned entry:

- thesis statement
- evidence/source note
- expected holding horizon
- valuation assumption
- primary risk

Do not allow `看涨` or `朋友推荐` to masquerade as complete research. Permit the user to save an incomplete draft, but label missing fields.

### Sell condition

Make sell conditions observable and testable:

- `FY2026 毛利率低于 42%`
- `管理层下调全年指引`
- `估值进入 HK$420–450 区间且增长假设不变`
- `单一持仓超过组合 12%`

Track state: `未触发`, `接近`, `已触发`, `已处理`, `已忽略（需备注）`. Never reduce the decision to a red “SELL” badge.

### Risk alerts

Group alerts by meaning:

- thesis risk
- concentration risk
- valuation risk
- event/catalyst risk
- liquidity or market-data risk
- operational/account risk

Every alert needs evidence, timestamp, severity, and an action such as `复核假设`, `查看持仓`, or `更新条件`. Avoid generic `高风险` without cause.

### Valuation range

Show a range, method, assumptions, and update date:

`合理区间 HK$320–380 · 分部估值 · 假设 FY2027 经调整利润 12% 增长 · 更新于 6 月 18 日`.

Allow bear/base/bull scenarios, but do not present them as probabilities unless the user supplied a method. Visually distinguish user assumptions from market data.

### Catalyst tracker

Each catalyst includes event, expected date, source, thesis impact, state, and review action.

Example: `2026 Q2 业绩 · 预计 8 月中旬 · 验证海外收入增速 · 日期待公司确认`.

States: `待确认`, `即将发生`, `已发生`, `结果符合`, `结果不及`, `无关`. Never fabricate an exact date when only a window is known.

### Transaction review

Connect each buy or sell to the thesis and condition that justified it. Show:

- transaction facts: side, quantity, price, fees, time
- decision context: thesis version, valuation range, catalyst
- emotional/process note: optional, user-authored
- later review: outcome, process quality, rule change

Use `交易后 7 天复盘` or a user-defined cadence. Do not judge a good process solely by short-term P&L.

### Negative states — required

Implement negative and incomplete states explicitly:

- negative P&L and drawdown
- thesis `减弱` or `失效`
- sell condition `已触发`
- catalyst `结果不及`
- position beyond self-set limit
- missing valuation or missing buy reason
- stale or delayed quote
- suspended instrument
- unavailable source data
- failed import or partial sync
- empty watchlist or no transactions

Examples:

- `持仓逻辑已失效：核心产品收入连续两个季度低于假设`
- `报价不可用；最后更新于昨日 16:08`
- `导入完成 48 / 52 笔，4 笔币种无法识别`
- `暂无卖出条件。补充后才能启用纪律提醒。`

Never hide negative states behind neutral gray or celebratory visuals.

### Charts

Label instrument, period, frequency, currency, time zone, benchmark, and adjusted/unadjusted price. Use line, candlestick, drawdown, or valuation-band charts only when they answer a stated question. Do not use 3D, glossy volume bars, or decorative radial gauges.

## Motion

- Keep table and quote updates stable; briefly tint changed cells for 500–900 ms without flashing.
- Use 120–160 ms for row selection and filter changes.
- Use 180–220 ms for detail-panel transitions.
- Animate chart-range changes only when continuity helps comparison.
- Never animate profit confetti, spinning coins, jackpot counters, or pulsing trade buttons.
- Respect reduced motion and pause updates when the tab is inactive where appropriate.

## Do

- Design Hong Kong stock semantics first: HKD, market session, quote delay, code + Chinese name.
- Keep the data model compatible with US, A-share, ETF, and crypto research.
- Connect each holding to a thesis, valuation range, catalyst, risk, and sell condition.
- Show negative, stale, suspended, missing, and failed states.
- Separate facts, calculations, assumptions, and opinions.
- Make dense data readable through alignment and stable structure.
- Evaluate discipline independently from short-term return.

## Don't

- Do not use neon crypto-casino aesthetics, glowing coins, leaderboards, or FOMO countdowns.
- Do not copy a real institutional terminal’s visual identity.
- Do not fabricate prices, returns, news, quote freshness, or recommendations.
- Do not write `稳赚`, `强力买入`, `精准抄底`, or guaranteed outcomes.
- Do not hide currency, fees, source state, timestamp, or missing data.
- Do not turn every metric into a card or every allocation into a donut chart.
- Do not celebrate trades as wins before the thesis is reviewed.

## Example Prompt

```text
使用 finance-terminal 设计一个面向港股个人投资者的中文研究与持仓纪律工作台，同时保留扩展到美股、A 股和加密资产研究的数据结构。页面包含观察列表、持仓表、投资逻辑、买入理由、卖出条件、估值区间、催化剂、风险提醒和交易复盘。示例标的使用中性示例数据，并标注“示例数据”。显示 HKD、交易时段、报价延迟和数据时间。必须包含负收益、逻辑减弱、卖出条件已触发、停牌、数据缺失和部分导入失败状态。界面零售用户可理解，但数据语义达到专业研究标准。不要使用加密赌场风、霓虹币图标、虚假 AI 评分、保证收益或模仿任何真实金融终端。
```

## Self-Check

Before delivery, confirm:

- [ ] Hong Kong market context, currency, quote state, and timestamp are explicit.
- [ ] The same information model can support US stocks, A-shares, and crypto research without visual mimicry.
- [ ] Watchlist, thesis, holding discipline, buy reason, sell condition, risk, valuation, catalysts, and transaction review exist.
- [ ] Negative P&L, thesis failure, triggered conditions, stale data, suspension, missing data, and sync failure are represented.
- [ ] Numbers use aligned tabular figures, consistent precision, units, and definitions.
- [ ] Facts, assumptions, system calculations, and opinions are visibly distinct.
- [ ] Red/green semantics include non-color cues and configurable convention.
- [ ] Charts answer a research question and disclose period, currency, source state, and benchmark.
- [ ] There is no casino aesthetic, fake urgency, guaranteed outcome, invented recommendation, or copied terminal identity.
- [ ] The result scores at least 24/30 using the repository `SCORECARD.md`.
