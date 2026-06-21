# Chinese Copy Self-Audit

Audit every visible label, button, state, helper message, error, and claim before release.

## Hard rules

1. Ban vague slogans and phrases listed in `gates/BANNED_AI_PATTERNS_CN.md`.
2. Replace abstract value copy with a concrete user action and object.
3. Prefer: `核对`、`标记`、`提交`、`复核`、`安排`、`记录`、`对比`、`确认`.
4. Make button results predictable: `确认 6 月 26 日发布`, not `确认`.
5. Show cause, consequence, and recovery in error copy.
6. Keep domain nouns stable across navigation, filters, tables, and detail panels.
7. Ban fake precision unless the source, calculation, time range, and denominator are visible.
8. Distinguish observed facts, user-entered assumptions, system calculations, and AI drafts.

## Rewrite examples

| Bad | Better |
|---|---|
| 智能洞察 | 3 项卖出条件需要核对 |
| 提升创作效率 | 安排下周三篇笔记的发布时间 |
| AI 已完成审核 | AI 已标出 4 处差异，等待法务复核 |
| 操作成功 | 已将合同提交给周婧复核 |
| 暂无数据 | 还没有交易复盘。先记录最近一笔加仓理由。 |
| 风险较高 | 毛利率连续两季低于原定卖出条件 |

## Final questions

- Does every phrase name an object, state, action, constraint, or result?
- Can the user predict what happens after every button?
- Does the copy sound originally written in Chinese?
- Are units, dates, ownership, and risk visible where needed?

Delete any sentence that exists only to sound innovative.
