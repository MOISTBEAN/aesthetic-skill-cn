# Anti-AI Style Gate

Run this gate after generating any Chinese product UI and before presenting it. Treat every test as a hard release condition. A polished result can still fail.

## Gate result

- `PASS`: every hard test passes.
- `FAIL`: any hard test fails. Do not present the output as final. Run [OUTPUT_REWRITE_PROTOCOL.md](OUTPUT_REWRITE_PROTOCOL.md).

Record evidence as `test / pass or fail / visible evidence / required rewrite`.

## 1. Product Swap Test

Replace the product name, logo, and accent color with those of an unrelated product.

**Fail when:** the same navigation, hero, cards, metrics, preview, and copy still make sense. A contract review tool that can become a creator tool by renaming labels is generic.

**Pass evidence:** identify at least three modules that could not survive the swap, such as `原定卖出条件`, `合同条款来源`, or `封面待品牌复核`.

## 2. Fake SaaS Copy Test

Search all visible text using [BANNED_AI_PATTERNS_CN.md](BANNED_AI_PATTERNS_CN.md).

**Fail when:** a vague claim is used as a headline, feature name, CTA, metric, or explanation without a measurable definition and source.

**Rewrite:** replace the claim with a user action, business object, state, constraint, or result. Write `提交合同条款复核`, not `AI 驱动高效协同`.

## 3. Fake Dashboard Test

**Fail when the dashboard has any four of these traits:**

- random KPI cards with no calculation or period
- a decorative line chart that supports no comparison
- only positive or green states
- no warning, pending, failed, missing, stale, or risk state
- no action to review, correct, approve, record, or revisit
- no identifiable user decision
- invented precise metrics without a source

**Pass evidence:** state the decision supported by each summary metric or chart. Remove any element with no decision value.

## 4. Card Grid Slop Test

**Fail when:** the first viewport is mostly equal cards with repeated icons, vague feature names, similar visual weight, and no primary workflow.

**Pass when:** the first viewport exposes one dominant work area plus a clear exception, detail, queue, table, timeline, calendar, editor, or review action. Cards may contain bounded objects; they may not replace information architecture.

## 5. Decorative Preview Test

A product preview must show all of the following:

1. input or source
2. output or changed result
3. current status
4. one risk, pending, failed, changed, or needs-review state
5. next valid action

**Fail when:** the preview is a fake terminal, generic dashboard mockup, empty browser frame, decorative chart, or rectangle collage that cannot be operated or reviewed.

## 6. Workflow Reality Test

The interface must let the target user answer:

- What do I check?
- What do I decide?
- What do I change?
- What do I approve?
- What do I revisit later?

At least three answers must be visible in the UI, and one must be a primary action. If the product legitimately supports fewer than three, document why and show the complete smaller workflow.

## 7. Visual Tell Test

Fail output that relies on any of these as its main identity:

- blue-purple gradient hero
- dark mesh background with floating cards
- meaningless glassmorphism
- random sparkles or AI stars
- oversized empty hero
- fake terminal windows
- generic dashboard mockups
- perfectly positive metrics
- repeated rounded cards with equal weight
- decorative status pills with no state meaning

Remove the tell and rebuild hierarchy from product objects and actions. Do not replace one decoration with another.

## Final rule

If the output feels polished but generic, it fails. If changing the product name leaves the page credible, it fails.
