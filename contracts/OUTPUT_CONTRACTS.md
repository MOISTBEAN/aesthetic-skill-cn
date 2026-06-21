# Output Contracts

Free-form UI generation is not allowed.

Before generating any UI, select exactly one output contract. The contract fixes the product boundary and limits all later choices.

## Contract fields

Record all fields before generation:

```text
Contract:
Page type:
Target user:
Primary decision:
Allowed modules:
Required states:
Required user actions:
Layout skeleton:
Banned patterns:
Pass criteria:
```

The selected contract determines:

- page type
- target user
- allowed modules
- required negative and pending states
- required user actions
- layout skeleton
- banned patterns
- pass / fail criteria

## Selection rules

1. Select one page type from [ALLOWED_PAGE_TYPES.md](ALLOWED_PAGE_TYPES.md).
2. Select one compatible skeleton from [LAYOUT_SKELETONS.md](LAYOUT_SKELETONS.md).
3. Lock modules using [MODULE_LOCKS.md](MODULE_LOCKS.md).
4. Set required states and actions before writing copy or markup.
5. Generate three constrained directions using [STYLE_DIRECTION_PROTOCOL.md](STYLE_DIRECTION_PROTOCOL.md).
6. Generate only the chosen direction.

Do not combine contracts. Do not add modules because the page looks empty. Do not replace a missing module with generic dashboard cards.

## No-fit behavior

If no contract fits, ask exactly one clarifying question instead of generating UI. Ask whether the user wants to map the request to an existing page type or explicitly authorize a new product category.

The agent may invent a new structure only when the user explicitly asks for a new product category. Document the new contract before generating.

## Failure conditions

Output fails when:

- no contract was selected
- more than one contract controls the page
- modules appear outside the selected contract
- required states or actions are missing
- the page does not match the selected skeleton
- banned patterns appear
- pass criteria cannot be proven from visible output
