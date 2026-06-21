---
name: aesthetic-skill-cn
description: Enforce an Anti-AI Style Gate when designing, implementing, rewriting, or reviewing Chinese product UI. Use for Chinese Web SaaS, finance research dashboards, Xiaohongshu creator tools, enterprise workspaces, local-business interfaces, and other product surfaces that must avoid fake SaaS copy, generic dashboards, card-grid slop, decorative previews, translated Chinese, unsupported metrics, and generic AI visual tells.
---

# Aesthetic Skill CN

Aesthetic Skill CN is a constrained Anti-AI Style Gate for Chinese Product UI.

Do not trust free-form UI generation. Control the page type, structure, modules, states, actions, and visual direction before producing final output.

## Hard pre-generation lock

Do not generate a final UI until all six fields are selected and recorded:

```text
Contract:
Page type:
Layout skeleton:
Modules:
Required states:
User actions:
```

If any generated module falls outside the selected contract, the output fails.

## Controller workflow

Follow every step in order.

### 1. Detect task

Infer the requested deliverable, product context, target user, primary object, and decision. Complete [rules/PRODUCT_REALITY_AUDIT.md](rules/PRODUCT_REALITY_AUDIT.md).

### 2. Select output contract

Read [contracts/OUTPUT_CONTRACTS.md](contracts/OUTPUT_CONTRACTS.md). Select exactly one contract. Free-form UI generation is not allowed.

If no contract fits, ask one clarifying question instead of generating.

### 3. Select allowed page type

Read [contracts/ALLOWED_PAGE_TYPES.md](contracts/ALLOWED_PAGE_TYPES.md). Select one page type. Treat Finance Terminal as WIP / advanced, not public proof.

### 4. Select layout skeleton

Read [contracts/LAYOUT_SKELETONS.md](contracts/LAYOUT_SKELETONS.md). Select one compatible skeleton. Do not add or reorder major regions without a product reason.

### 5. Lock modules

Read [contracts/MODULE_LOCKS.md](contracts/MODULE_LOCKS.md) and [rules/REAL_CONTENT_LIBRARY.md](rules/REAL_CONTENT_LIBRARY.md). Define every visible module using:

```text
Module / Purpose / User action / State / Next step / Banned fallback
```

Do not invent generic insight, overview, recommendation, engagement, trend, or performance modules.

### 6. Set Chinese UI dials

Read [rules/CHINESE_UI_DIALS.md](rules/CHINESE_UI_DIALS.md). Set `PRODUCT_REALISM`, `VISUAL_DENSITY`, and `VISUAL_RESTRAINT` from the selected page type defaults.

### 7. Generate three constrained directions

Read [contracts/STYLE_DIRECTION_PROTOCOL.md](contracts/STYLE_DIRECTION_PROTOCOL.md). Propose three directions inside the same contract. Vary emphasis, density, or module priority, not page type or unlocked modules.

Do not generate full HTML for all three directions unless requested.

### 8. Choose one direction

When interactive, ask the user to choose. When autonomous, choose the direction with the clearest decision path, strongest negative-state handling, least decorative chrome, and highest Product Swap resistance.

### 9. Generate output

Generate only the chosen direction. Apply [rules/COPY_SELF_AUDIT_CN.md](rules/COPY_SELF_AUDIT_CN.md), relevant platform rules, and [rules/VISUAL_DENSITY_RULES.md](rules/VISUAL_DENSITY_RULES.md) for proof pages.

Preserve existing functionality unless change is authorized. Label invented data as sample data. Make responsive behavior explicit.

### 10. Run Anti-AI Style Gate

Run [gates/ANTI_AI_STYLE_GATE.md](gates/ANTI_AI_STYLE_GATE.md) and search copy with [gates/BANNED_AI_PATTERNS_CN.md](gates/BANNED_AI_PATTERNS_CN.md).

Also audit every visible top-level module against the locked module list. One unmatched module fails.

### 11. Run Non-AI Style Scorecard

Use [gates/NON_AI_STYLE_SCORECARD.md](gates/NON_AI_STYLE_SCORECARD.md). Require average `>= 8.0 / 10` and every category `>= 6 / 10`.

### 12. Rewrite if failed

Use [gates/OUTPUT_REWRITE_PROTOCOL.md](gates/OUTPUT_REWRITE_PROTOCOL.md). Rewrite within the same contract and skeleton. Do not solve failure by adding new modules. Maximum three passes.

Then run [gates/FINAL_QUALITY_GATE_CN.md](gates/FINAL_QUALITY_GATE_CN.md). Do not present failed output as final.
