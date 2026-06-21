# Output Contracts

Free-form UI generation is not allowed.

Before generating UI, select exactly one output contract. A contract defines the task boundary and limits all later choices.

## Required contract record

```text
Task type:
Output contract:
Generic page type:
Target user:
Primary business object:
Primary decision:
Layout skeleton:
Visual primitive set:
Locked modules:
Required states:
Required user actions:
Banned patterns:
Pass criteria:
Optional case overlay:
```

A contract defines:

- task type
- generic page type
- layout skeleton
- visual primitive set
- module locks
- required states
- required actions
- banned patterns
- pass / fail criteria

## Selection rules

1. Select one generic page type from [ALLOWED_PAGE_TYPES.md](ALLOWED_PAGE_TYPES.md).
2. Select one compatible skeleton from [LAYOUT_SKELETONS.md](LAYOUT_SKELETONS.md).
3. Select one compatible primitive set from [VISUAL_PRIMITIVE_LOCKS.md](VISUAL_PRIMITIVE_LOCKS.md).
4. Lock modules using [MODULE_LOCKS.md](MODULE_LOCKS.md).
5. Set required states, actions, and banned patterns before writing copy or markup.
6. Run the copy audit.
7. Generate three constrained directions using [STYLE_DIRECTION_PROTOCOL.md](STYLE_DIRECTION_PROTOCOL.md).
8. Generate only the selected direction.

Do not combine contracts. Do not add modules because a page looks empty. Do not use visual primitives outside the selected set.

## Platform and industry overlays

Platform-specific cases are optional overlays. Xiaohongshu, AI approval, local business, and finance may add vocabulary, domain fields, platform constraints, or example content.

An overlay cannot override the generic page type, skeleton, primitive set, module locks, required states, required actions, banned patterns, or pass criteria.

Finance is an advanced WIP case under `Dashboard Workspace`, not a top-level contract. Xiaohongshu is a case pack for `Content Calendar` or `Review Queue`, not a top-level contract.

## No-fit behavior

If no generic page type fits, ask one focused clarification question. Do not generate a free-form page.

Create a new page type only when the user explicitly authorizes expanding the system. Document its contract, compatible skeleton, primitive set, modules, states, actions, and failure conditions before generating UI.

## Failure conditions

Output fails when:

- no contract was recorded
- more than one contract controls the page
- a platform overlay acts as the core contract
- modules or visual primitives appear outside their locks
- required states or actions are missing
- the page does not match the selected skeleton
- banned patterns appear
- copy contains unsupported claims or precision
- pass criteria cannot be proven from the visible output
