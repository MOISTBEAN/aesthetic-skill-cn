# Visual Primitive Locks

Select one visual primitive set before generating UI. The set limits which visual building blocks the model may use.

If the output uses a primitive outside the selected lock, it fails.

If making the UI prettier reduces product specificity, choose product specificity.

Real software may be operational, dense, and slightly boring. It should not look like a portfolio shot unless the selected contract is explicitly a landing page.

## Generally allowed internal-product primitives

- tables
- queues
- filters
- tabs
- side panels
- status tags
- checklists
- logs
- forms
- comments
- version history
- approval bars
- compact cards only when necessary
- inline warnings
- empty states
- review panels
- action bars

## Banned AI primitives

- hero section outside an explicit landing-page contract
- gradient blob
- floating cards
- glassmorphism
- fake charts
- oversized icons
- six feature cards
- decorative mockups
- fake terminal windows
- huge metric cards without action
- generic dashboard preview
- full-screen marketing headline
- random sparkles
- overly symmetrical card grids

## Internal Workbench Primitive Set

**Allowed:** queue list, compact table, filter bar, detail panel, status tags, comments, action bar, revision log.

**Banned:** hero, feature grid, decorative preview, large empty cards, marketing slogan.

## Review Queue Primitive Set

**Allowed:** queue, selected-item panel, diff or comparison block, evidence panel, approval controls, rejection reason, operation log.

**Banned:** dashboard KPI grid, decorative mobile preview, AI assistant mascot, gradient header.

## Admin Table Primitive Set

**Allowed:** dense table, filters, bulk actions, pagination, inline status, row-level actions, audit log.

**Banned:** big data cards, decorative charts, abstract feature cards.

## Form Flow Primitive Set

**Allowed:** field groups, step indicator, inline validation, help text, draft state, error summary, sticky continue action, confirmation record.

**Banned:** decorative step cards, hidden validation, celebration screen without submission evidence, multiple primary actions.

## Dashboard Workspace Primitive Set

**Allowed:** compact exception summary, filters, source-labelled metrics, decision-supporting chart, comparison table, alert list, detail drawer, action log.

**Banned:** KPI wall, chart without source or action, all-green states, fake precision, generic “insights” panel.

Every visible metric or chart must name its source, time range, state, and supported decision.

## Landing Page Primitive Set

**Allowed:** compact hero, concrete service blocks, proof or examples, pricing or process, CTA, FAQ.

**Banned:** vague SaaS slogans, fake product dashboard, fake metrics, empty abstract hero.

## Mobile H5 Primitive Set

**Allowed:** single-column flow, sticky CTA, form steps, cards with concrete actions, inline validation, contact or booking blocks.

**Banned:** desktop dashboard squeezed into mobile, fake app mockup, excessive gradients.

## Primitive record

Before generation, record:

```text
Primitive set:
Allowed primitives used:
Banned primitives checked:
Reason each non-standard primitive is necessary:
```

## Primitive audit

After generation:

1. list every top-level visual primitive
2. match it to the selected set
3. remove unmatched primitives
4. reject any decoration that has no product action, state, evidence, or navigation purpose

