# Layout Skeletons

Free layout generation is not allowed. Select one skeleton and preserve its hierarchy across desktop and mobile.

If the output does not match its selected skeleton, it fails.

## 1. Workbench Layout

**Use for:** Internal Workbench and compatible Review Queue tasks.

**Desktop:** navigation or context bar → queue or object list → dominant workflow area → detail / evidence panel → secondary log or action area.

**Mobile:** context → urgent queue → selected workflow → detail / evidence → actions → secondary log.

Do not turn the workflow into a dashboard card grid.

## 2. Review Queue Layout

**Use for:** Review Queue.

**Desktop:** actionable exceptions → review queue → selected item and comparison → evidence / risk / decision panel → sticky approval actions.

**Mobile:** selected item → difference → evidence → decision → remaining queue.

The selected item must remain dominant. Summary values may filter the queue but may not replace it.

## 3. Admin Table Layout

**Use for:** Admin Table.

**Desktop:** scope and search → filter / bulk-action bar → dense table → row detail or drawer → pagination and audit access.

**Mobile:** scope → search / critical filters → record list → row detail → actions. Do not squeeze all desktop columns into the viewport.

## 4. Calendar + Detail Layout

**Use for:** Content Calendar.

**Desktop:** scope and filters → calendar / schedule → selected period list → object detail → conflicts / approval queue.

**Mobile:** filters → selected date → object list → conflict / approval state → detail.

Every scheduled item must show owner, state, and next action. Do not show thumbnails alone.

## 5. Form Flow Layout

**Use for:** Form Flow.

**Structure:** task context → progress → current field group → validation / evidence → back, save, and continue actions → submission record.

On mobile, keep one primary action sticky and preserve entered data after validation failure.

## 6. Dashboard Workspace Layout

**Use for:** Dashboard Workspace.

**Desktop:** time / scope filters → compact actionable exceptions → source-labelled monitoring view → selected exception detail → decision or follow-up log.

**Mobile:** urgent exceptions → selected signal → source and context → action → remaining monitoring view.

Charts and metrics are subordinate to exceptions and actions. Finance Terminal may use this skeleton only as an advanced WIP overlay.

## 7. Service Landing Layout

**Use for:** Service Landing.

**Structure:** compact concrete service hero → scope and price basis → process / preparation → availability and booking → location / contact / FAQ.

The hero must not exceed 30% of the first desktop viewport. Do not add dashboard sections or generic feature grids.

## 8. Mobile H5 Layout

**Use for:** Mobile H5.

**Structure:** task identity → current status or eligibility → primary single-column flow → inline validation / exception → sticky action → support and recovery path.

Do not reproduce desktop navigation or place multiple competing primary actions above the fold.

## Case overlay mapping

- Xiaohongshu editorial review → Review Queue Layout
- Xiaohongshu publishing → Calendar + Detail Layout
- AI human approval → Review Queue Layout or Workbench Layout
- local business → Service Landing Layout or Mobile H5 Layout
- finance terminal WIP → Dashboard Workspace Layout

The overlay may specialize labels and fields but cannot change the skeleton hierarchy.

## Skeleton audit

Before final delivery, map every major page region to the selected skeleton. Missing, reordered, or additional regions require a documented product reason. Otherwise the output fails.
