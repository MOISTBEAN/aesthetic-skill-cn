# Chinese UI Dials

Set all three dials before generation. Values guide tradeoffs; they are not decorative labels.

## PRODUCT_REALISM: 1-10

- `1-3`: generic objects and success-only demos
- `4-6`: plausible domain nouns with incomplete workflow
- `7-8`: real roles, states, constraints, and actions
- `9-10`: traceable evidence, edge cases, decision history, and product-specific recovery paths

If below 7, do not generate final UI.

## VISUAL_DENSITY: 1-10

- `1-3`: campaign or editorial density
- `4-6`: daily product workspace
- `7-8`: compact operational or research interface
- `9-10`: expert terminal; use only when scanning speed and comparison justify it

Density means useful relationships per viewport, not more cards.

## VISUAL_RESTRAINT: 1-10

- `1-3`: decoration competes with work
- `4-6`: controlled brand expression with some visual emphasis
- `7-8`: quiet surfaces, one accent, semantic status colors
- `9-10`: highly utilitarian; every visual element has an operational reason

## Defaults

| Preset | PRODUCT_REALISM | VISUAL_DENSITY | VISUAL_RESTRAINT |
|---|---:|---:|---:|
| finance-terminal | 9 | 8 | 8 |
| xiaohongshu-creator-tool | 8 | 6 | 6 |
| premium-ai-saas | 7 | 5 | 8 |
| local-business-clean | 8 | 5 | 7 |
| dark-devtool | 7 | 6 | 8 |

Adjust by at most 2 points without documenting why. Never lower realism to make a screenshot cleaner.
