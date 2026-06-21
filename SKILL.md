---
name: aesthetic-skill-cn
description: Constrain AI-generated product UI before implementation and reject generic AI-looking output. Use when designing, implementing, rewriting, or reviewing workbenches, review queues, admin tables, content calendars, form flows, dashboard workspaces, service landing pages, or mobile H5 interfaces that must avoid fake SaaS structure, card-grid slop, decorative previews, vague copy, unsupported metrics, and workflow-empty polish.
---

# Aesthetic Skill CN

Aesthetic Skill CN is a general-purpose Anti-AI Style Skill for AI coding agents.

Reduce model freedom before generation. Do not rely on free-form taste instructions.

## Hard rules

Free-form UI generation is not allowed.

Do not generate final UI until every field below is selected and recorded:

```text
Task type:
Output contract:
Generic page type:
Layout skeleton:
Locked modules:
Visual primitive set:
Allowed visual primitives:
Required states:
User actions:
Banned patterns:
Pass criteria:
```

If the UI uses a module or visual primitive outside the selected locks, it fails.

Platform-specific cases are optional overlays. They may add domain fields and constraints, but may not override the core contract, skeleton, locks, or gates.

## Mandatory workflow

Follow every step in order.

### 1. Detect task type

Identify the requested deliverable, product context, target user, primary business object, main decision, runtime, and existing functionality. For product UI, complete [rules/PRODUCT_REALITY_AUDIT.md](rules/PRODUCT_REALITY_AUDIT.md).

### 2. Select output contract

Read [contracts/OUTPUT_CONTRACTS.md](contracts/OUTPUT_CONTRACTS.md). Select exactly one contract and record every field. If critical information is missing, ask one focused clarification question.

### 3. Select generic page type

Read [contracts/ALLOWED_PAGE_TYPES.md](contracts/ALLOWED_PAGE_TYPES.md). Select one generic page type. Do not treat a platform, industry, or visual style as a page type.

### 4. Select layout skeleton

Read [contracts/LAYOUT_SKELETONS.md](contracts/LAYOUT_SKELETONS.md). Select one compatible skeleton. Preserve its hierarchy unless a documented product requirement demands a change.

### 5. Select module locks

Read [contracts/MODULE_LOCKS.md](contracts/MODULE_LOCKS.md). Define every visible module using:

```text
Module / Purpose / User action / State / Next step / Reason for existence
```

Do not invent generic insight, overview, recommendation, engagement, trend, or performance modules.

### 6. Select visual primitive locks

Read [contracts/VISUAL_PRIMITIVE_LOCKS.md](contracts/VISUAL_PRIMITIVE_LOCKS.md). Select one primitive set and record its allowed and banned primitives.

If a generated visual primitive is outside the selected lock, reject the output. If making the UI prettier reduces product specificity, choose product specificity.

### 7. Run copy audit

Audit every headline, label, button, status, error, number, capability claim, and empty state before generation. For Chinese UI, apply [rules/COPY_SELF_AUDIT_CN.md](rules/COPY_SELF_AUDIT_CN.md) and [gates/BANNED_AI_PATTERNS_CN.md](gates/BANNED_AI_PATTERNS_CN.md).

Reject vague benefits, translated slogans, unsupported precision, invented capabilities, and labels that do not name an object or action.

### 8. Generate constrained directions

Read [contracts/STYLE_DIRECTION_PROTOCOL.md](contracts/STYLE_DIRECTION_PROTOCOL.md). Propose three product-structure directions inside the same locks. Direction names must describe workflow structure, not aesthetic adjectives.

### 9. Generate output

Generate only the selected direction. Preserve existing functionality unless change is authorized. Mark invented content as sample data. Include responsive behavior where relevant.

### 10. Run Anti-AI Style Gate

Run [gates/ANTI_AI_STYLE_GATE.md](gates/ANTI_AI_STYLE_GATE.md). Audit every visible module and primitive against the recorded locks. One unmatched module or primitive fails the output.

### 11. Rewrite if failed

Use [gates/OUTPUT_REWRITE_PROTOCOL.md](gates/OUTPUT_REWRITE_PROTOCOL.md). Rewrite within the same contract, page type, skeleton, module locks, and primitive locks. Do not add decoration or modules to hide a failure. Maximum three passes.

### 12. Score before final

Use [gates/NON_AI_STYLE_SCORECARD.md](gates/NON_AI_STYLE_SCORECARD.md). Require an average score of at least `8.0 / 10` and every category at least `6 / 10`. Then run [gates/FINAL_QUALITY_GATE_CN.md](gates/FINAL_QUALITY_GATE_CN.md) for Chinese output.

Do not present failed output as final.
