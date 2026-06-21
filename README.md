# aesthetic-skill-cn

An Anti-AI Style Gate for Chinese Product UI, built for Cursor, Claude Code, Codex, and other coding agents.

Most AI-generated Chinese interfaces do not fail because they are ugly. They fail because they are generic.

This skill forces agents to establish the user, decision, workflow, negative states, and natural Chinese product copy before generation. Output that survives a product-name swap, relies on fake SaaS copy, or looks like a polished generic template must be rewritten before final delivery.

> If changing the product name leaves the interface credible, the output fails.

## Start

Point your coding agent to `SKILL.md` and describe the real product context. The workflow runs the rules in `rules/`, generates the artifact, then blocks generic output through `gates/ANTI_AI_STYLE_GATE.md`.

This is not a prompt collection or UI component library. It is an AI-readable quality gate with product-reality rules, rewrite protocols, review criteria, existing style references, and Before/After evidence. It is not a SaaS application.
