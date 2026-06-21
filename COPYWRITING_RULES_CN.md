# Chinese Product Copy Rules

Write Chinese UI copy that helps a user understand, decide, and act. Do not translate an English SaaS landing page sentence by sentence.

## Contents

- [Write the action and result](#1-write-the-action-and-result)
- [Replace translated claims](#2-replace-translated-saas-claims-with-product-facts)
- [Put the useful distinction first](#3-put-the-useful-distinction-first)
- [Use domain nouns consistently](#4-use-domain-nouns-consistently)
- [Make labels short](#5-make-labels-short-make-help-text-useful)
- [Write complete system states](#6-write-complete-system-states)
- [Write honest AI copy](#7-write-honest-ai-copy)
- [Write honest finance copy](#8-write-honest-finance-copy)
- [Control tone and punctuation](#9-control-tone-and-punctuation)
- [Final copy pass](#10-final-copy-pass)

## 1. Write the action and result

Use a verb plus the actual object or outcome.

| Avoid | Write instead |
|---|---|
| 立即体验 | 打开示例项目 / 申请 14 天试用 |
| 开始使用 | 新建选题 / 导入持仓 / 创建审批 |
| 确认 | 确认排期 / 确认停用 / 确认撤单 |
| 提交 | 提交法务复核 / 提交报销申请 |
| 了解更多 | 查看计费规则 / 查看条款差异 |
| 智能生成 | 生成标题备选 / 根据会议记录生成纪要 |

Use `确认` alone only when the surrounding dialog makes the consequence impossible to misunderstand.

## 2. Replace translated SaaS claims with product facts

| Translated SaaS Chinese | Product-grade Chinese |
|---|---|
| 解锁团队无限潜能 | 将待复核合同分配给法务同事 |
| 无缝管理您的工作流 | 从选题、封面复核到发布排期集中管理 |
| 一站式赋能内容增长 | 管理 3 个账号的选题、素材和发布时间 |
| 开启智能投资新旅程 | 导入持仓后查看行业暴露与当日盈亏 |
| 重新定义协作方式 | 评论会定位到具体段落，并通知负责人 |
| 强大、灵活且易用 | 支持批量导入、字段映射和失败行重试 |

Describe what the product changes. Do not claim “效率提升” unless a defined measurement supports it.

## 3. Put the useful distinction first

Chinese users scan quickly. Lead with the state or consequence.

- `上传失败：文件超过 20 MB` is better than `很抱歉，上传文件时发生了一些问题`.
- `还差 2 项才能提交` is better than `请完善相关信息`.
- `报价延迟 15 分钟` is better than hiding delay information inside a tooltip.
- `停用后，3 名成员将无法继续访问` is better than `是否确认此操作？`.

## 4. Use domain nouns consistently

Choose the term users already use and keep it stable across navigation, buttons, filters, and empty states.

- Creator tool: choose `选题` for planned content; do not alternate among 项目、任务、内容单元.
- Finance: distinguish `当日盈亏`, `持仓盈亏`, and `累计收益`; do not label all three `收益`.
- Enterprise: distinguish `提交人`, `审批人`, and `抄送人`.
- Local service: distinguish `预约`, `到店`, `上门`, and `咨询`.

Use English only when it is the established domain term or exact identifier: API, Token, SKU, ETF, ROAS. Explain unfamiliar acronyms on first use where the audience may not know them.

## 5. Make labels short; make help text useful

Labels name the field. Help text explains a constraint or consequence.

**Good form copy**

- Label: `发布时间`
- Help: `建议选择粉丝活跃时段；实际发布仍需人工确认`
- Error: `发布时间不能早于当前时间`

Do not use placeholder text as the only label. `请输入内容` explains nothing. Use a visible label such as `合同名称`, with a representative placeholder such as `例：华东仓配 2026 年续约合同`.

## 6. Write complete system states

### Empty states

Name why the area is empty and offer the next valid action.

- First use: `还没有选题。先添加一个准备本周发布的主题。` → `新建选题`
- Filtered empty: `没有“待复核”的内容。` → `清除筛选`
- Permission empty: `你没有查看该客户合同的权限。` → `申请权限`

Do not write `暂无数据` when the cause is known.

### Loading and progress

Describe work when it may take time: `正在解析 20 页合同…` / `已导入 368 / 520 条记录`. Avoid indefinite spinners for multi-step operations.

### Errors

Use cause + consequence + recovery:

`第 42–47 行日期格式无法识别，其他 493 行已导入。修改后可重新导入失败行。`

Avoid blame (`你输入错了`) and empty apology (`哎呀，出错了`).

### Success

Confirm the completed outcome: `已排期到 6 月 21 日 19:30` is better than `操作成功`. Do not use confetti for routine saves.

## 7. Write honest AI copy

Distinguish generation, inference, and verified fact.

- `AI 初稿，待人工复核`
- `根据已上传的 6 份访谈整理`
- `未找到支持该结论的原文`
- `置信度较低：扫描件第 8 页文字模糊`
- `采纳并保留原文链接`

Do not write `AI 已完成审核` when a qualified human remains responsible. Do not use a confidence percentage unless the product can define and validate it.

## 8. Write honest finance copy

Always include applicable unit, period, timing, and exclusions.

- `当日浮动盈亏 +HK$1,284（未含费用）`
- `近 30 日收益率 -2.4%`
- `报价延迟 15 分钟 · 15:45`
- `系统信号，仅供研究参考，不构成投资建议`

Never write `稳赚`, `精准抄底`, `强力买入`, or a guaranteed return.

## 9. Control tone and punctuation

- Use professional, direct, calm sentences.
- Prefer one instruction per sentence.
- Use full-width Chinese punctuation in prose.
- Avoid repeated exclamation marks and decorative tildes.
- Avoid forced friendliness in serious states: `撤单失败：订单已成交` is better than `糟糕～没能帮你撤单！`.
- Use `你` or omit the pronoun for most product UI. Use `您` only when the service context consistently requires formal address.

## 10. Final copy pass

For every string, ask:

1. Does it name a real object, state, or outcome?
2. Can the user predict what the button will do?
3. Does it sound written in Chinese rather than translated into Chinese?
4. Does it disclose constraints, timing, units, and risk where needed?
5. Could a shorter concrete phrase replace an abstract claim?

Delete copy that exists only to make the interface sound innovative.
