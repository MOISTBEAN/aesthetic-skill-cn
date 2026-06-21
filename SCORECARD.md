# UI Review Scorecard

Score six dimensions from 0 to 5. Cite visible evidence for each score in UI Review Mode. The maximum score is 30.

## Contents

- [Score meaning](#score-meaning)
- [Information hierarchy](#1-information-hierarchy)
- [Business realism](#2-business-realism)
- [Chinese copy naturalness](#3-chinese-copy-naturalness)
- [Platform fit](#4-platform-fit)
- [Visual restraint](#5-visual-restraint)
- [AI-slop risk](#6-ai-slop-risk)
- [Release thresholds](#release-thresholds)
- [Review template](#review-template)

## Score meaning

| Score | Meaning |
|---:|---|
| 5 | Product-grade; specific, coherent, and ready with only minor polish |
| 4 | Strong; one or two contained weaknesses do not block the main task |
| 3 | Usable; noticeable generic or incomplete decisions need revision |
| 2 | Weak; the problem materially affects comprehension or trust |
| 1 | Severe; the interface barely supports the intended task |
| 0 | Missing, deceptive, or fundamentally incompatible with the product |

## 1. Information hierarchy

Evaluate whether the page makes the current context, primary object, urgent state, and next action obvious.

- **5:** A portfolio page clearly prioritizes risk exceptions and positions; filters and account metadata remain subordinate.
- **3:** The right information exists, but four equal cards compete with the primary table.
- **1:** A slogan and decorative metrics dominate while the actual work is below the fold.

Check: reading order, action priority, grouping, density, table alignment, mobile reflow, and whether color is doing work that structure should do.

## 2. Business realism

Evaluate whether the UI reflects credible objects, data, roles, units, timing, states, and constraints.

- **5:** `港股交易中 · 延迟 15 分钟 · HKD`; positions include quantity, cost, market value, and unavailable states.
- **3:** Plausible data is present but lacks ownership or edge cases.
- **1:** `效率提升 98%` and `AI 强力买入` appear without definition or source.

Any invented returns, customers, endorsements, or operational claims cap this dimension at 1.

## 3. Chinese copy naturalness

Evaluate whether labels, instructions, errors, and empty states sound like native product Chinese.

- **5:** `文件超过 20 MB，请压缩后重新上传`; buttons describe outcomes consistently.
- **3:** Most labels are usable, but some terms are abstract or inconsistent.
- **1:** The page relies on `解锁潜能`, `无缝体验`, `开启旅程`, or awkward English word order.

Check terminology consistency, sentence length, punctuation, mixed English, button verbs, error recovery, and whether copy reflects the user’s domain.

## 4. Platform fit

Evaluate whether structure and interaction match the actual environment.

- **5:** A Xiaohongshu tool includes cover ratio, title length, publishing time, review state, and mobile preview.
- **3:** The responsive shell works, but platform-specific workflow is shallow.
- **1:** A generic foreign desktop SaaS layout is merely translated into Chinese.

Check viewport, input method, sharing/authorization, navigation, platform output preview, local contact patterns, and enterprise permissions as relevant.

## 5. Visual restraint

Evaluate whether typography, spacing, color, radius, shadow, illustration, and motion support the work without competing with it.

- **5:** One controlled accent, consistent surfaces, semantic status colors, and deliberate density.
- **3:** Generally calm, with unnecessary card nesting or inconsistent radius.
- **1:** Gradients, glass, shadows, pills, emojis, and animations appear everywhere.

Minimalism alone does not earn a high score. An empty page with poor information density is not restrained; it is unfinished.

## 6. AI-slop risk

Score higher when slop risk is lower.

- **5:** The design is product-specific and contains no unsupported copy, fake data, generic feature grids, or imported SaaS theater.
- **3:** One or two familiar template patterns remain but do not define the page.
- **1:** The product could be renamed without changing its layout or copy.
- **0:** The interface is deceptive or built primarily from fabricated metrics, logos, or claims.

Use [ANTI_AI_SLOP.md](ANTI_AI_SLOP.md) for the deletion pass.

## Release thresholds

- **27–30:** strong product-grade direction
- **24–26:** deliverable after minor corrections
- **18–23:** revise before delivery
- **0–17:** redesign the structure, not the decoration

Block delivery when the total is below 24, when information hierarchy, business realism, or Chinese copy scores below 3, or when any deceptive financial or commercial claim remains.

## Review template

```text
Total: 24/30

Information hierarchy: 4/5 — The content queue is primary; account summary still occupies too much height.
Business realism: 5/5 — Owner, publish time, review state, and failed-publish state are present.
Chinese copy: 4/5 — Replace “开启创作” with “新建选题”.
Platform fit: 4/5 — Mobile preview is strong; add title-length feedback near the editor.
Visual restraint: 4/5 — Remove the gradient from status chips.
AI-slop risk: 3/5 — The empty-state illustration and slogan remain generic.

Required revisions:
1. P1 ...
2. P2 ...
```
