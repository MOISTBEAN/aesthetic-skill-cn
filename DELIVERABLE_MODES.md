# Deliverable Modes

Select one primary mode before working. A request may include secondary artifacts, but the primary mode determines the depth, evidence, and output format.

## Contents

- [DESIGN.md Mode](#1-designmd-mode)
- [UI Review Mode](#2-ui-review-mode)
- [Before / After Mode](#3-before--after-mode)
- [Full Page Mode](#4-full-page-mode)
- [Mode conflicts](#mode-conflicts)

## 1. DESIGN.md Mode

### Use when

The user asks for a design system, visual direction, design brief, reusable agent instruction, or a `DESIGN.md` for a product or page family.

### Required output

Write a product-specific specification containing:

1. product and user context
2. design intent and non-goals
3. information architecture
4. layout and responsive behavior
5. typography, color, spacing, surface, and radius rules
6. component and interaction rules
7. Chinese copy direction with examples
8. realistic content/data examples
9. loading, empty, error, permission, and success states
10. anti-patterns and acceptance checks

Do not write only adjectives such as “高级、简洁、现代.” Convert each quality into a rule: `卡片圆角统一为 8px；工作区不使用大面积渐变；状态色只用于风险和进度`.

### Completion test

Another coding agent should be able to build a consistent page without guessing the product hierarchy or inventing copy.

## 2. UI Review Mode

### Use when

The user asks to review, audit, critique, score, or diagnose an existing design or implementation.

### Required output

Do not rebuild unless requested. Inspect the available artifact and report:

- **Finding:** what is wrong, stated precisely.
- **Evidence:** the visible component, string, layout, or state causing it.
- **Impact:** which user task or decision becomes harder.
- **Correction:** a concrete change.
- **Priority:** P0 blocking, P1 major, P2 moderate, or P3 polish.
- **Score:** use [SCORECARD.md](SCORECARD.md).

**Weak review:** “层次感不足，建议优化配色.”

**Useful review:** “P1 — 页头的 4 张指标卡与待处理合同列表权重相同，用户无法判断下一步。将合同列表提升为主工作区；页头只保留‘待复核 4 份 / 今日到期 1 份’的文字摘要.”

### Completion test

Each issue must be locatable and actionable. Do not praise generic visual cleanliness while ignoring false metrics, missing states, or unnatural Chinese copy.

## 3. Before / After Mode

### Use when

The user asks for a redesign comparison, transformation example, migration guide, or educational before/after artifact.

### Required output

Keep the business scenario constant so the comparison is honest.

- **Before:** isolate the actual failure pattern without exaggerating it beyond recognition.
- **After:** solve the same task with stronger hierarchy, realistic detail, and platform fit.
- **Notes:** map each change to a reason and user impact.

Compare at least:

1. page purpose
2. primary object and action
3. information structure
4. Chinese copy
5. data credibility
6. card and decoration usage
7. platform-specific behavior

**Example:** Replace `重新定义内容增长 / AI 一键爆款` with a real weekly publishing queue containing cover, title, owner, review state, and time. Explain that the change turns a claim into an operating workflow.

### Completion test

The after version must not merely apply better colors to the same weak structure.

## 4. Full Page Mode

### Use when

The user asks to build, implement, code, prototype, or deliver a complete page or screen.

### Required output

Deliver a coherent page with:

- page shell and navigation appropriate to the platform
- one obvious primary task
- realistic Chinese content and domain objects
- responsive behavior for the required breakpoints
- interactive and semantic states
- accessibility: labels, focus, contrast, keyboard behavior, and reduced motion where relevant
- no unsupported claims or fabricated dashboard data

For an existing codebase, preserve its framework, design tokens, conventions, and working behavior unless the user requests a larger change. Verify the implementation at representative desktop and mobile widths.

### Completion test

The result must feel operable, not like a screenshot assembled from attractive cards. A user should know what requires attention and what the primary action will do.

## Mode conflicts

When a request combines modes, finish the user’s explicit outcome first:

- “Review and fix this page” → review briefly, then implement in Full Page Mode.
- “Create a DESIGN.md and example” → DESIGN.md Mode first, then one Before / After or full-page example.
- “Show before/after only” → do not add a broad design-system essay.

State material assumptions when the request lacks product context; do not invent a fictional company history to fill the gap.
