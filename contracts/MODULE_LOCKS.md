# Module Locks

Choose modules only from [rules/REAL_CONTENT_LIBRARY.md](../rules/REAL_CONTENT_LIBRARY.md) or the selected page type in [ALLOWED_PAGE_TYPES.md](ALLOWED_PAGE_TYPES.md).

Do not invent generic modules such as:

- Smart Insights
- Growth Overview
- AI Recommendation
- Performance Metrics
- Intelligent Dashboard
- User Engagement
- Market Trends
- Productivity Boost

If a necessary product-specific module is missing, stop and ask for explicit authorization to extend the contract. Do not silently add it.

## Required module record

Define every visible module before generation:

```text
Module:
Purpose:
User action:
State:
Next step:
Banned fallback:
```

Every module must contain a visible user action, a meaningful state, a next step, and a reason for existence. A module that only explains a capability fails.

## Examples

```text
Module: 封面复核
Purpose: 确认周三笔记的封面可进入排期
User action: 标记封面待改
State: 字号过小，待设计师修改
Next step: 修改后重新提交主编确认
Banned fallback: AI 创作建议
```

```text
Module: 条款差异
Purpose: 对比供应商合同与公司规则
User action: 标记付款周期为高风险
State: 与规则 PR-04 冲突，待法务复核
Next step: 提交给周婧，截止今天 17:00
Banned fallback: 智能洞察
```

```text
Module: 营业时间
Purpose: 确认用户到店前门店是否营业
User action: 查看周末营业时间
State: 周日休息
Next step: 预约周六 14:30
Banned fallback: 极致服务体验
```

## Lock audit

After generation, list every top-level visible module and match it to the locked list. Any unmatched module fails the output. Cosmetic wrappers do not count as modules.
