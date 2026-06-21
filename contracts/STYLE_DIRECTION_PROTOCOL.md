# Style Direction Protocol

Before final UI generation, propose three constrained directions. Do not generate a free-form page.

Direction names must describe product structure, not visual taste.

Bad names:

- premium
- clean
- modern
- minimalist

Good names:

- Review Queue First
- Table-First Operations
- Calendar + Detail
- Form Flow with Audit Trail
- Service Booking Flow
- Internal Workbench

## Direction record

Each direction must include:

```text
Direction name:
Selected contract:
Generic page type:
Layout skeleton:
Visual primitive set:
Locked modules:
Required states:
User actions:
Banned AI patterns avoided:
Why it is less AI-like:
Remaining AI-style risk:
```

All three directions must remain inside the same contract, page type, module locks, and compatible primitive sets. Vary workflow emphasis, information order, density, or module priority. Do not vary only colors, typefaces, radii, or decoration.

Do not generate full HTML for all three directions unless requested.

## Selection rule

When interactive, ask the user to choose one direction before generating final UI.

When autonomous, choose the direction with:

1. the clearest primary decision
2. the strongest negative-state handling
3. the shortest path from exception to action
4. the fewest decorative containers
5. the highest Product Swap resistance

Record the choice before generation.

## Failure conditions

- only one direction was considered
- directions use different contracts or page types
- a direction adds unlocked modules or primitives
- names are aesthetic adjectives
- differences are merely color palettes or styling
- required states and actions are omitted
- remaining AI-style risk is not acknowledged
- the selected direction is not recorded
