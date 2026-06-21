# Chinese Platform Rules

Select the section matching the delivery environment. Platform fit affects information architecture, copy, permissions, and state design—not only screen width.

## Contents

- [Shared requirements](#shared-chinese-product-requirements)
- [Web SaaS](#1-web-saas)
- [Xiaohongshu creator tools](#2-xiaohongshu-creator-tools)
- [Finance dashboards](#3-finance-dashboards)
- [WeChat H5 / mobile web](#4-wechat-h5--mobile-web)
- [Local business pages](#5-local-business-pages)
- [Feishu / enterprise tools](#6-feishu--enterprise-tools)
- [Platform-fit check](#platform-fit-check)

## Shared Chinese-product requirements

Apply these rules across platforms when relevant:

- Design for Chinese navigation and label lengths; do not size controls around short English words.
- Format dates unambiguously: `2026 年 6 月 19 日` in formal contexts or `6 月 19 日（周五）` in schedules.
- State currency and tax scope: `¥299 / 月，含税` or `HK$1,280，不含平台费用`.
- Use Chinese phone, address, company, invoice, and identity formats where the workflow needs them.
- Explain consent before requesting phone, location, camera, files, or contact access.
- Provide complete loading, empty, failure, expired, no-permission, and disconnected states.
- Do not add QR codes, WeChat buttons, ICP text, or identity verification unless the product context requires them.

## 1. Web SaaS

### Structure

Use a stable application shell for repeated work: product/workspace switcher, task-oriented navigation, page context, primary work area, and contextual actions. Avoid making the logged-in product look like its marketing homepage.

**Good:** `客户合同` navigation → status filters → contract table → selected contract detail.

**Weak:** Dashboard → six generic KPI cards → “AI 洞察” chart → feature promotion.

### Interaction

- Support keyboard focus, browser back/forward, direct URLs to meaningful objects, and persistent filters when users return.
- Use tables for comparison-heavy records; provide sorting, filters, batch selection, column meaning, and empty states.
- Keep primary action contextual: `新建合同`, not `开始探索`.
- For destructive actions, name affected records and whether recovery is possible.

### Chinese business details

Show roles, organization, and billing facts where relevant: `企业空间`, `管理员`, `可开具增值税专用发票`, `按成员计费`. Do not import USD pricing tiers or `Book a demo` wording by default. Use `申请试用`, `联系实施顾问`, or `查看计费规则` based on the actual sales motion.

### Responsive behavior

Do not squeeze a full data table into cards automatically. On narrow screens, preserve the key identifier and urgent status, allow horizontal comparison where necessary, or state that the operation is desktop-only when that is honest.

## 2. Xiaohongshu creator tools

### Core objects

Model `选题`, `笔记草稿`, `封面版本`, `素材`, `账号`, `发布排期`, `复核意见`, and `效果数据` explicitly. A generic “task” model is insufficient.

### Required item metadata

For every scheduled draft, show enough to operate:

- cover thumbnail and asset state
- full or reviewable title
- content format: 图文 / 视频
- owner and reviewer
- workflow state
- planned publish time
- account
- sponsorship or compliance flag where relevant

**Example:** `租房改造：8㎡卧室收纳` · 图文 · 小岚负责 · 封面待复核 · 周五 19:30 · 生活研究所.

### Creation and preview

- Provide a phone-proportioned preview for cover, title, body, tags, and line breaks.
- Show title or field-length feedback next to the editor, not only after submission.
- Keep cover versions comparable; comments should identify the version.
- If actual publishing is unavailable, use `复制发布素材` or `导出发布包`, not fake `一键发布`.
- Treat platform rules as changeable; do not hard-code an unsupported promise about ranking or reach.

### Performance data

Show the observation window and publication context: `发布后 7 天 · 12,430 浏览 · 618 收藏`. Do not display `爆款概率 96%` unless there is a defensible model and clear explanation. Historical performance is reference, not a guarantee.

### Visual direction

Allow more imagery and editorial energy than enterprise SaaS, but do not clone Xiaohongshu branding or turn every state red/pink. The tool should serve creators without pretending to be the consumer app.

## 3. Finance dashboards

### Data semantics

Every financial value should expose applicable:

- currency or unit
- time range
- quote or calculation timestamp
- live, delayed, estimated, suspended, or missing state
- fee and tax treatment
- comparison baseline

**Example:** `当日浮动盈亏 +HK$1,284 · 截至 15:45 · 未含费用`.

### Tables and numbers

- Right-align numerical columns and use tabular numerals.
- Keep decimal precision consistent by instrument type.
- Put units in headers where repeated: `成交额 (百万 HKD)`.
- Keep code and name together when users scan both: `00700 腾讯控股`.
- Use sticky headers and the first identifying column for long tables.
- Preserve `—` for missing values; do not silently convert missing data to zero.

### Red and green

Follow the selected market context and user expectation. Pair color with `+ / -`, arrows, labels, or position so the state remains readable without color. Do not reuse market red/green for unrelated buttons.

### Charts

State instrument, period, frequency, currency, time zone, and benchmark. Show market-session gaps honestly. Prefer a table when exact comparison matters; do not use a donut chart for twenty holdings.

### Risk and compliance

Separate market data, system signals, analyst opinions, and user actions. Avoid guaranteed or directive language. Confirm orders and cancellations with instrument, side, quantity, price type, and consequence.

## 4. WeChat H5 / mobile web

### Entry and navigation

Assume users may arrive from a chat, QR code, official account, or shared link. Provide recognizable context immediately and a safe return path. Do not recreate a desktop sidebar at mobile width.

Use a focused flow with a short top bar, clear progress for multi-step tasks, and a bottom primary action when it improves thumb reach. Respect device safe areas and the on-screen keyboard.

### Authorization and identity

Explain the benefit before asking for phone, location, camera, album, or WeChat profile access.

**Weak:** `授权手机号`.

**Better:** `用于接收预约变更通知。我们不会公开你的手机号。` → `授权并继续`.

Provide a fallback or explain why the permission is required. Do not request all permissions on first load.

### Forms and payments

- Use appropriate mobile input modes for phone, amount, and verification code.
- Keep visible labels; do not rely on placeholders.
- Preserve entered data after recoverable errors.
- Show order scope, amount, refund/cancellation terms, and merchant identity before payment.
- Make verification-code resend timing explicit: `48 秒后可重新获取`.

### Sharing

Do not rely on a generic `分享` button if the browser cannot invoke native WeChat sharing. Provide clear guidance or copy-link behavior based on actual capability.

## 5. Local business pages

### Decision information

Place the facts needed to visit or book above promotional storytelling:

- service scope and price basis
- current availability
- location and service radius
- opening hours and closure dates
- phone or WeChat contact
- booking, cancellation, deposit, and refund policy
- credentials where the category requires them

**Example:** `基础保养 ¥99 起（不含配件）` · `今天 18:30 后可到店` · `上海市静安区康定路 238 号`.

### Trust

Use verifiable proof: named technician credentials, real project photos with consent, clear warranty, map, and dated customer cases. Do not invent review counts, star ratings, badges, or “服务 10 万家庭.”

### Conversion

Choose the action that matches operations: `预约到店`, `咨询上门范围`, `拨打电话`, or `添加企业微信`. Do not use `立即体验`. If response is not instant, set expectations: `工作时间内通常 30 分钟内回复`.

### Mobile priority

Make address, navigation, opening state, and contact thumb-accessible. Keep sticky contact bars from covering content or system safe areas.

## 6. Feishu / enterprise tools

### Structure

Optimize for daily work inside an organization: stable navigation, dense lists, clear ownership, comments, notifications, approval state, and history. Visual novelty is secondary to coordination clarity.

### Required enterprise states

- owner, department, collaborators, and watchers
- draft, submitted, approved, rejected, withdrawn, and expired states
- permission inheritance and no-access state
- version history and audit trail
- batch actions with selected count and partial-failure feedback

**Example:** `已选择 18 条报销单` → `批量提交复核`; result: `成功 16 条，2 条缺少发票，请补充后重试`.

### Copy and actions

Use organization language consistently: `提交审批`, `转交处理`, `加签`, `抄送`, `撤回申请`. Do not mix workflow terms without defining their different consequences.

### Tables and detail panels

Use tables or structured lists for operational queues and side panels for fast review. Preserve selection and filters when users inspect an item. Make comments and approval history anchor to the relevant record or field.

### Integrations

Name the actual integration and state: `同步到飞书日历`, `同步失败：日历权限已失效`. Do not imply integration through a decorative Feishu icon.

## Platform-fit check

Before delivery, answer:

1. What platform-specific object or state appears in this design?
2. Which interaction was adapted for desktop, mobile, or embedded use?
3. Which local business, permission, payment, data, or publishing constraint is visible?
4. Could the interface be moved to an unrelated foreign SaaS product unchanged?

If the answer to question 4 is yes, the platform work is incomplete.
