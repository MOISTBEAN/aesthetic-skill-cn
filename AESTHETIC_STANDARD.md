# Aesthetic Standard

This standard defines what “product-grade Chinese UI” means. Use it as a decision framework, not a mood board.

## Contents

- [Product feeling over decoration](#1-product-feeling-over-decoration)
- [Hierarchy before color](#2-hierarchy-before-color)
- [Real business details](#3-real-business-details)
- [Natural Chinese copy](#4-natural-chinese-copy)
- [Platform-aware design](#5-platform-aware-design)
- [Fewer cards, more structure](#6-fewer-cards-more-structure)
- [Honest dashboards](#7-honest-dashboards)
- [Quiet premium visual language](#8-quiet-premium-visual-language)
- [Release standard](#release-standard)

## 1. Product feeling over decoration

Make the interface reveal what the product does, who operates it, and what changes after an action.

**Weak:** A hero reading “智能驱动增长” above three glowing cards named 数据洞察、智能协作、无限可能.

**Strong:** A content workspace opening on “本周待发布 6 篇,” with cover status, assigned editor, planned publish time, and “提交主编复核.”

A user should be able to point at the main object and say what it is: a draft, holding, order, lead, approval, alert, or request. If the page contains only benefits and components, it does not yet feel like a product.

## 2. Hierarchy before color

Establish importance with position, scale, spacing, alignment, and type weight before adding color.

- Put the current task or decision at the top of the reading path.
- Keep one primary action per local context.
- Use section spacing to separate workflows; use borders only when adjacency remains ambiguous.
- Reserve saturated color for action, status, or risk—not for filling empty space.

**Example:** On a contract review page, “4 处待确认条款” is the page-level focus. “提交复核” is the primary action. File metadata is smaller and quieter. A blue-purple background does not create hierarchy.

## 3. Real business details

Use details that expose how the business actually works. Generic nouns create generic UI.

- Replace “项目” with the domain object: 选题、投顾组合、维修工单、供应商合同.
- Show ownership: 王晨负责、待法务复核、客户经理：林岚.
- Show time precisely: 今天 19:30 发布、数据截至 15:45、预计明日 10:00 到店.
- Show units and scope: HKD、万元、近 30 天、含上门费、不含税.
- Show exceptions: 报价延迟 15 分钟、封面缺少广告标识、库存不足、无查看权限.

Never invent revenue, users, awards, customer logos, returns, or conversion rates to make an example look impressive. Use neutral sample data or clearly mark “示例数据.”

## 4. Natural Chinese copy

Write as a Chinese product team would speak to its users, not as an English SaaS site translated word by word.

**Weak:** 解锁您的团队潜能，开启无缝协作之旅.

**Strong:** 邀请同事加入空间 / 将 3 条修改意见发给负责人.

Button labels should state the result: `保存草稿`, `提交复核`, `导出本月账单`, `确认停用`. Error copy should explain cause and next action: `文件超过 20 MB，请压缩后重新上传`.

Apply [COPYWRITING_RULES_CN.md](COPYWRITING_RULES_CN.md) to every user-facing string.

## 5. Platform-aware design

Adapt the interface to where and how it is used.

- A desktop finance terminal may be dense, keyboard-friendly, and table-led.
- A Xiaohongshu creator tool needs cover previews, title length, publishing time, review status, and mobile output preview.
- A WeChat H5 flow needs thumb-reachable actions, explicit phone authorization, safe-area spacing, and a credible return path.
- A Feishu-style enterprise tool needs ownership, approval history, permissions, and batch operations.

Do not transplant a 1440 px foreign SaaS dashboard onto a 375 px mobile flow. Read [PLATFORM_RULES_CN.md](PLATFORM_RULES_CN.md).

## 6. Fewer cards, more structure

Use cards only for repeatable, independently meaningful objects. Do not wrap every heading, metric, chart, filter, and paragraph in separate rounded containers.

Prefer:

- page header + toolbar + table
- master list + detail panel
- timeline + contextual actions
- editor canvas + inspector
- summary strip + primary work area

**Example:** A portfolio page should use one account summary, one positions table, and one risk panel. It should not use twelve equally weighted cards for 市值、盈亏、仓位、现金、风险、行业、消息、策略、提醒、收益、指数、日历.

## 7. Honest dashboards

A dashboard must support a decision. Every number needs a definition, unit, time range, source state, and comparison when relevant.

**Weak:** 今日收益 `+88%`, AI 建议 `强力买入`.

**Strong:** 今日浮动盈亏 `+HK$1,284` · 截至 15:45 · 未含费用; quote state `延迟 15 分钟`.

Show missing and stale data honestly. Use `—` plus an explanation rather than a plausible-looking fabricated value. Separate observed facts from model output or editorial judgment.

## 8. Quiet premium visual language

Make premium quality come from precision, not effects.

- Use a restrained neutral foundation and one controlled accent.
- Keep radius, border, and shadow values consistent.
- Prefer crisp typography and deliberate whitespace over glass surfaces.
- Use animation to explain state change, not to make the page feel expensive.
- Let dense professional screens remain dense when density improves work.

“Quiet” does not mean empty. A quiet finance terminal can contain hundreds of values because alignment, contrast, and status semantics remain disciplined.

## Release standard

Before accepting an interface, verify that a real user can answer:

1. What am I looking at?
2. What needs my attention now?
3. What happens if I use the primary action?
4. Which values are real, delayed, estimated, or unavailable?
5. Does the language sound native to this product and platform?

If any answer is unclear, revise the structure before adding polish.
