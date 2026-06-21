# Golden Case: AI Review / Human Approval Workflow

## Selected contract

`AI Review / Human Approval Workflow` for a procurement and legal team reviewing supplier-contract changes.

## Selected skeleton

`Review Queue Layout`.

1. top status summary for blocking exceptions
2. left contract review queue
3. center selected source and AI-identified difference
4. right evidence, risk, and decision panel
5. sticky approval action bar

## Allowed modules

- 输入内容
- AI 输出结果
- 来源依据
- 风险等级
- 人工复核队列
- 待确认项
- 版本差异
- 审计记录
- 提交复核

No generic AI assistant, productivity score, or decorative terminal module is allowed.

## User actions

- 对比 2025 与 2026 版付款周期
- 将违约金上限标记为高风险
- 退回缺少责任上限的条款
- 提交法务人工复核
- 确认低风险差异通过

## Negative states

- 来源缺失
- 待人工复核
- 扫描页无法识别
- 版本已变化
- 已退回修改

The selected item always shows evidence location, reviewer, deadline, and next action.

## Why it passes Product Swap Test

Source clauses, version differences, evidence links, risk routing, human approval, and immutable audit records form a contract-review workflow. Renaming the product cannot turn this structure into a creator calendar or local-business landing page.
