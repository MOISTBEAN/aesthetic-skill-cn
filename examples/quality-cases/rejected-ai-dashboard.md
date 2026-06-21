# Rejected: Generic AI Dashboard

## Candidate

A Chinese operations dashboard opens with six KPI cards: `效率提升 86%`, `用户增长 32%`, `智能评分 94`, and three other positive metrics. A rising line chart fills the center. The right side contains `智能洞察` and an `AI Recommendation`. No metric has a source, no item can be reviewed, and no negative state appears.

## Why it feels AI-generated

- The product can be renamed without changing structure or copy.
- Equal KPI cards replace a primary workflow.
- The chart creates motion but supports no comparison or decision.
- Every state is positive.
- Labels describe abstract capabilities, not user actions.

## Violated gates

- Product Swap Test
- Fake SaaS Copy Test
- Fake Dashboard Test
- Card Grid Slop Test
- Workflow Reality Test
- Negative State Requirement

## Better structure

First select an allowed contract. For an AI approval product, use `Review Queue Layout`:

1. top actionable exceptions
2. left pending review queue
3. center selected source and output difference
4. right evidence and risk decision
5. sticky actions: `退回修改`, `标记风险`, `确认通过`

Delete any KPI or chart that cannot name the decision it supports.
