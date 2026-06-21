---
name: aesthetic-skill-cn
description: Enforce an Anti-AI Style Gate when designing, implementing, rewriting, or reviewing Chinese product UI. Use for Chinese Web SaaS, finance research dashboards, Xiaohongshu creator tools, enterprise workspaces, local-business interfaces, and other product surfaces that must avoid fake SaaS copy, generic dashboards, card-grid slop, decorative previews, translated Chinese, unsupported metrics, and generic AI visual tells.
---

# Aesthetic Skill CN

Aesthetic Skill CN is an Anti-AI Style Gate for Chinese Product UI.

Do not merely make output prettier. Force product reality into the structure, copy, states, and actions. If output fails a gate, do not present it as final.

## Phase 1: Product Read

Infer:

- product type and platform
- target user and operating context
- primary business object
- decision the page supports
- real workflow that must be visible
- likely AI-slop risks
- requested deliverable: specification, review, before / after, or implemented page

Produce internally:

```text
Reading this as: <product type> for <target user>,
using <real workflow>,
avoiding <AI-style risks>.
```

Do not replace missing product facts with generic SaaS assumptions. Ask one focused question only when different answers would materially change the workflow.

## Phase 2: Product Reality Audit

Read and complete [rules/PRODUCT_REALITY_AUDIT.md](rules/PRODUCT_REALITY_AUDIT.md).

Block generation until the audit names a user, decision, business objects, workflow, required exception state, and modules that fail the Product Swap Test.

## Phase 3: Structure Before Style

Read [rules/REAL_CONTENT_LIBRARY.md](rules/REAL_CONTENT_LIBRARY.md) and [rules/DESIGN_SYSTEM_MAP_CN.md](rules/DESIGN_SYSTEM_MAP_CN.md).

Select modules before choosing color, radius, shadow, chart, or page composition. Connect modules into a decision path:

```text
check source → compare change → inspect risk → decide → record action → revisit later
```

Use only the relevant platform rules from [PLATFORM_RULES_CN.md](PLATFORM_RULES_CN.md). Read a preset `DESIGN.md` only when its category matches; presets are subordinate to the product-reality audit.

## Phase 4: Chinese UI Dials

Read [rules/CHINESE_UI_DIALS.md](rules/CHINESE_UI_DIALS.md). Set:

- `PRODUCT_REALISM`
- `VISUAL_DENSITY`
- `VISUAL_RESTRAINT`

Use the preset defaults unless the product context justifies a change. Never lower realism to create a cleaner screenshot.

For `1440 × 1200` proof pages, also apply [rules/VISUAL_DENSITY_RULES.md](rules/VISUAL_DENSITY_RULES.md).

## Phase 5: Generate Output

Generate the requested artifact around the selected workflow.

Required behavior:

- use natural Chinese product copy
- identify units, time, source, ownership, and limitations where relevant
- show a pending, warning, failed, risk, changed, unchanged, or needs-review state
- give every major module a user action or decision purpose
- label invented data as sample data
- preserve existing functionality unless the request authorizes change
- make responsive behavior explicit for implemented UI

Read [rules/COPY_SELF_AUDIT_CN.md](rules/COPY_SELF_AUDIT_CN.md) whenever visible Chinese copy is generated.

## Phase 6: Anti-AI Style Gate

Run every test in [gates/ANTI_AI_STYLE_GATE.md](gates/ANTI_AI_STYLE_GATE.md). Search copy using [gates/BANNED_AI_PATTERNS_CN.md](gates/BANNED_AI_PATTERNS_CN.md).

One failed test means the output fails. Visual polish does not override a failure.

## Phase 7: Rewrite If Failed

Use [gates/OUTPUT_REWRITE_PROTOCOL.md](gates/OUTPUT_REWRITE_PROTOCOL.md).

List the top three failures, rewrite product structure and copy, add relevant real states, remove decorative cards, regenerate, and rerun all gates. Maximum: three passes.

Do not show a failed candidate as final. After three failed passes, report the missing product fact or implementation constraint.

## Phase 8: Score Before Final

Score the candidate with [gates/NON_AI_STYLE_SCORECARD.md](gates/NON_AI_STYLE_SCORECARD.md).

Pass only when:

- average score is at least `8.0 / 10`
- no category is below `6 / 10`

Use evidence from the artifact, not intended behavior. Keep the score internal unless the user requests a review or the deliverable requires scoring.

## Phase 9: Final Quality Gate

Run [gates/FINAL_QUALITY_GATE_CN.md](gates/FINAL_QUALITY_GATE_CN.md) immediately before delivery.

Do not deliver when the page can be renamed into another product, lacks an actionable negative state, displays data without a decision, contains banned AI copy, relies on fake precision, or looks like a prettier generic AI template.

## Final rule

If the output fails the gate, do not present it as final.
