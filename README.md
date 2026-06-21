# Stop generating AI-looking UI.

Aesthetic Skill CN is a general-purpose **Anti-AI Style Skill for AI coding agents**.

It does not rely on vague taste advice such as “make it premium,” “make it clean,” or “make it modern.” Instead, it reduces model freedom before generation through:

1. Output Contracts
2. Layout Skeletons
3. Module Locks
4. Visual Primitive Locks
5. Copy Audit
6. Anti-AI Style Gate
7. Rewrite Until Pass

> Stop generating AI-looking UI by reducing the model’s freedom before it writes the interface.

The goal is not to make UI prettier. The goal is to prevent generic AI-looking interfaces:

- gradient hero sections
- fake SaaS dashboards
- six-card feature grids
- decorative product previews
- vague AI copy
- fake precision metrics
- over-polished but workflow-empty pages

## What this is

This is not a prompt collection and not a UI component library. It is an AI-readable constraint system for Cursor, Claude Code, Codex, and other coding agents.

Before an agent can write final UI, it must select a contract, generic page type, layout skeleton, locked modules, allowed visual primitives, required states, user actions, and banned patterns. Free-form UI generation is not allowed.

## Core gates

1. **Product Swap Test:** if renaming the product leaves the interface credible, it fails.
2. **Banned AI Defaults:** reject gradient theater, fake dashboards, equal feature-card grids, decorative mockups, and unsupported precision.
3. **Real Workflow Requirement:** require visible objects, actions, states, exceptions, and next steps.
4. **Negative State Requirement:** require a relevant pending, warning, failed, blocked, rejected, or changed state.
5. **Rewrite Until Pass:** failed output cannot be presented as final; rewrite it under the same locks and run every gate again.

## Constrained pipeline

```text
Task
  -> Output Contract
  -> Generic Page Type
  -> Layout Skeleton
  -> Module Locks
  -> Visual Primitive Locks
  -> Copy Audit
  -> 3 Constrained Directions
  -> Output
  -> Anti-AI Style Gate
  -> Rewrite Until Pass
  -> Score Before Final
```

Start with [`SKILL.md`](SKILL.md). The primary controls live in [`contracts/`](contracts/), hard failure tests live in [`gates/`](gates/), and supporting audits live in [`rules/`](rules/).

## Generic page types

The core supports Internal Workbench, Review Queue, Admin Table, Content Calendar, Form Flow, Dashboard Workspace, Service Landing, and Mobile H5.

Xiaohongshu creator operations, AI human approval, local business, and finance are optional case packs. They demonstrate how the general system can be applied; they do not define the core skill. Finance remains an advanced WIP case.

## Repository map

- [`contracts/OUTPUT_CONTRACTS.md`](contracts/OUTPUT_CONTRACTS.md): required pre-generation contract
- [`contracts/ALLOWED_PAGE_TYPES.md`](contracts/ALLOWED_PAGE_TYPES.md): generic page types and compatibility rules
- [`contracts/LAYOUT_SKELETONS.md`](contracts/LAYOUT_SKELETONS.md): fixed structural hierarchies
- [`contracts/MODULE_LOCKS.md`](contracts/MODULE_LOCKS.md): allowed product modules
- [`contracts/VISUAL_PRIMITIVE_LOCKS.md`](contracts/VISUAL_PRIMITIVE_LOCKS.md): allowed and banned visual building blocks
- [`contracts/STYLE_DIRECTION_PROTOCOL.md`](contracts/STYLE_DIRECTION_PROTOCOL.md): three constrained structural directions
- [`gates/ANTI_AI_STYLE_GATE.md`](gates/ANTI_AI_STYLE_GATE.md): hard rejection tests
- [`gates/NON_AI_STYLE_SCORECARD.md`](gates/NON_AI_STYLE_SCORECARD.md): score required before final
- [`examples/quality-cases/`](examples/quality-cases/): rejected and passing text cases

Existing examples, screenshots, presets, and platform rules remain available as reference material. They are evidence and overlays, not the product definition.

## Minimal usage

```text
Read aesthetic-skill-cn/SKILL.md.
Design an internal review queue for a team that approves supplier changes.
Do not generate UI until the contract, generic page type, skeleton,
module locks, visual primitive set, states, actions, and banned patterns are recorded.
Run the Anti-AI Style Gate and rewrite until it passes.
```

## Ethics

Use the system to improve product specificity, not to copy proprietary layouts, screenshots, brand assets, or visual identities. Do not invent metrics, customer claims, capabilities, integrations, or success states.

## Status

v0.2 generalizes the project around constrained generation. Current case packs remain useful, but the next validation target is whether the same contracts and gates produce credible interfaces across unrelated products.
