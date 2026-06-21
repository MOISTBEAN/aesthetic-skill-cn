# aesthetic-skill-cn

A constrained Anti-AI Style Gate for Chinese Product UI, built for Cursor, Claude Code, Codex, and other coding agents.

Most AI-generated Chinese interfaces do not fail because they are ugly. They fail because they are generic.

This project does not trust free-form AI UI generation. It reduces model freedom by locking the output contract, allowed page type, modules, layout skeleton, required states, and user actions before generation.

> If changing the product name leaves the interface credible, the output fails.

## Core gates

1. **Product Swap Test**: if renaming the product leaves the interface credible, it fails.
2. **Banned AI Defaults**: reject gradient theater, fake dashboards, equal feature-card grids, translated slogans, and unsupported precision.
3. **Real Workflow Requirement**: require a visible check, comparison, approval, review, or decision.
4. **Negative State Requirement**: require a relevant pending, warning, failed, risk, changed, or needs-review state.
5. **Rewrite Until Pass**: failed output cannot be presented as final; rewrite it and run every gate again.

## Constrained pipeline

Every output must pass through:

1. output contract
2. allowed page type
3. module lock
4. layout skeleton
5. three constrained directions and one recorded choice
6. Anti-AI Style Gate
7. rewrite protocol

Free-form UI generation is not allowed. If no contract fits, the agent asks one clarifying question instead of inventing a page.

Public v0.2 contracts prioritize:

1. Xiaohongshu Creator Workbench
2. AI Review / Human Approval Workflow
3. Local Business Clean Landing Page

Finance Terminal remains an advanced WIP case and is not the primary proof.

## Start

Point your coding agent to `SKILL.md` and describe the real product context. The controller selects from `contracts/`, applies `rules/`, and blocks generic output through `gates/ANTI_AI_STYLE_GATE.md`.

This is not a prompt collection or UI component library. It is an AI-readable quality gate with product-reality rules, rewrite protocols, review criteria, existing style references, and Before/After evidence. It is not a SaaS application.

Rejected and golden text cases live in `examples/quality-cases/`. Finance rules remain available, but no finance screenshot represents the gate itself.
