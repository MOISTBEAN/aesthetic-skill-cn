# Module Locks

Lock every visible module before generation. Start with generic modules, then apply optional platform or industry fields.

## Required module record

```text
Module:
Purpose:
User action:
State:
Next step:
Reason for existence:
```

A module that only explains a capability fails. Every module must support an action, expose a meaningful state, and lead to a next step.

## Generic module categories

### Queue Module

- **Purpose:** order items that require attention.
- **Actions:** filter, select, assign, reprioritize.
- **Required states:** pending, blocked, overdue, changed.

### Detail Panel Module

- **Purpose:** inspect the selected business object without losing queue context.
- **Actions:** edit, open source, change status.
- **Required states:** loading, unavailable, changed, read-only.

### Status Summary Module

- **Purpose:** expose actionable exceptions, not decorative KPIs.
- **Actions:** filter to affected records or open the exception.
- **Required states:** normal, warning, failed, missing.

Remove this module if a summary value cannot lead to a specific record or action.

### Review / Approval Module

- **Purpose:** record a decision and its responsibility.
- **Actions:** approve, reject, return, assign reviewer.
- **Required states:** pending, blocked, approved, rejected, changed after approval.

### Comparison Module

- **Purpose:** compare versions, options, periods, or source and output.
- **Actions:** select difference, accept, reject, annotate.
- **Required states:** unchanged, added, removed, conflicting, unresolved.

### Evidence Module

- **Purpose:** show the source that supports a claim or decision.
- **Actions:** open source, verify location, mark missing evidence.
- **Required states:** verified, missing, outdated, inaccessible.

### Activity Log Module

- **Purpose:** preserve who changed what and when.
- **Actions:** filter actor, inspect event, restore or revisit when allowed.
- **Required states:** recorded, failed action, reverted, permission restricted.

### Form Step Module

- **Purpose:** collect and validate a bounded group of fields.
- **Actions:** edit, validate, save draft, continue.
- **Required states:** untouched, invalid, saving, saved, failed.

### Table Row Action Module

- **Purpose:** act on one structured record without leaving the table unnecessarily.
- **Actions:** inspect, edit, disable, retry, open history.
- **Required states:** available, disabled, processing, failed.

### Mobile Preview Module

- **Purpose:** verify truncation, order, safe area, or published appearance when mobile rendering affects the decision.
- **Actions:** switch state, inspect issue, open source field.
- **Required states:** current, outdated, rendering failed, content truncated.

Do not render this as a decorative phone mockup.

### Booking / Contact Module

- **Purpose:** turn service evaluation into a concrete booking, quote, or contact request.
- **Actions:** select time, submit request, call, message.
- **Required states:** available, full, outside range, awaiting confirmation, failed.

## Banned generic modules

Do not invent:

- Smart Insights
- Growth Overview
- AI Recommendation
- Performance Metrics
- Intelligent Dashboard
- User Engagement
- Market Trends
- Productivity Boost

If a necessary module is missing, define it with the required record and obtain authorization to extend the contract. Do not silently add it.

## Optional overlays

Overlays may specialize a generic module without replacing it:

- Xiaohongshu editorial review: Queue + Review + Comparison + Mobile Preview
- AI human approval: Queue + Evidence + Comparison + Approval + Activity Log
- local business: Booking / Contact + Form Step
- finance WIP: Status Summary + Evidence + Comparison + Activity Log

## Lock audit

After generation, list every top-level visible module and match it to the locked list. Cosmetic wrappers do not count as modules. Any unmatched module fails.
