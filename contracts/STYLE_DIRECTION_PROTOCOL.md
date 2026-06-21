# Style Direction Protocol

Before final UI generation, propose three constrained directions. Do not generate one free-form page.

Do not generate full HTML for all three directions unless the user requests it.

## Direction record

Each direction must include:

```text
Direction:
Contract selected:
Layout skeleton:
Density level:
Restraint level:
Modules used:
Banned patterns avoided:
Why it is less AI-like:
```

All three directions must stay inside the same selected contract. Vary emphasis, density, or module priority; do not invent new page types or modules.

## Interaction rule

When working interactively, ask the user to choose one direction before generating final UI.

When running autonomously, select the least generic direction. Prefer the direction with the clearest decision path, strongest negative-state handling, fewest decorative containers, and highest Product Swap resistance. State the choice internally before generation.

## Example directions

### Direction A: 运营工作台型

- Contract: Xiaohongshu Creator Workbench
- Skeleton: Calendar + Detail Layout
- Emphasis: calendar, status queue, mobile preview
- Why less AI-like: the page is organized by publishing decisions instead of engagement metrics

### Direction B: 编辑复核型

- Contract: Xiaohongshu Creator Workbench
- Skeleton: Workbench Layout
- Emphasis: pending revisions, selected note detail, concrete next actions
- Why less AI-like: negative states and revision ownership dominate the first viewport

### Direction C: 轻 CRM 型

- Contract: Xiaohongshu Creator Workbench
- Skeleton: Workbench Layout
- Emphasis: brand collaboration pipeline, delivery status, approval deadlines
- Why less AI-like: business commitments replace generic creator-growth cards

## Failure conditions

- only one direction was considered
- directions use different contracts
- a direction adds unlocked modules
- differences are merely color palettes
- the chosen direction is not recorded
