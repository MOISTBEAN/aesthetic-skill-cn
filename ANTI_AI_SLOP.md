# Anti-AI-Slop Rules

AI slop is not a visual style. It is evidence that the interface was generated without understanding the product. Use the patterns below as hard review checks.

## Contents

- [Meaningless feature cards](#1-meaningless-feature-cards)
- [Fake dashboards](#2-fake-dashboards)
- [Too many cards](#3-too-many-cards)
- [Translated SaaS copy](#4-translated-saas-copy)
- [Cheap gradients](#5-cheap-gradients)
- [Emoji overuse](#6-emoji-overuse)
- [Glassmorphism abuse](#7-glassmorphism-abuse)
- [Foreign SaaS template look](#8-foreign-saas-template-look)
- [Final deletion pass](#final-deletion-pass)

## 1. Meaningless feature cards

**Bad**

Three equal cards: `智能分析`、`高效协作`、`安全可靠`, each with a generic line icon and no workflow.

**Better**

Show the operating surface: `待复核合同 4 份`, a list of named contracts, risk type, owner, deadline, and `打开审阅`.

**Why**

Capabilities are believable only when tied to objects, actions, and states. Feature cards describe marketing abstractions; product UI helps someone finish work.

## 2. Fake dashboards

**Bad**

Cards display `效率提升 98%`, `用户满意度 99.9%`, and `AI 建议：立即买入` without definitions, dates, or sources.

**Better**

Display `本周按时发布 8 / 10`, define the period, link to the ten items, and mark the two delayed items. In finance, show currency, quote time, fees, and whether a value is calculated or observed.

**Why**

Unsupported metrics create false confidence. A dashboard is an instrument panel, not decorative numerology.

## 3. Too many cards

**Bad**

Every filter, number, chart, paragraph, and button sits in its own rounded card with identical visual weight.

**Better**

Use a page title and toolbar, a compact summary row, a table as the primary work area, and one distinct exception panel for risk or approval.

**Why**

Cards erase relationships when everything becomes an island. Structure, alignment, and spacing produce stronger hierarchy with less chrome.

## 4. Translated SaaS copy

**Bad**

`解锁无限可能` / `无缝管理您的工作流` / `开启增长之旅` / `强大且直观的平台`.

**Better**

`查看待处理审批` / `把本周选题排进日历` / `导入 6 月账单` / `邀请财务同事复核`.

**Why**

Translated slogans speak about the vendor. Concrete Chinese product copy speaks about the user’s next action and expected result.

## 5. Cheap gradients

**Bad**

A blue-purple-pink gradient covers the hero, buttons, chart fills, icon backgrounds, and text accents because the product mentions AI.

**Better**

Use a quiet neutral base, one ink or brand accent, and semantic colors only for states. If a gradient communicates a real scale—such as heat intensity—label the scale and keep it out of unrelated UI.

**Why**

Uncontrolled gradients substitute fashion for identity and weaken status color. AI products do not require “AI purple.”

## 6. Emoji overuse

**Bad**

`🚀 开始创作` `✨ AI 灵感` `🔥 爆款预测` `🎉 发布成功` across a professional tool.

**Better**

Use text labels and a consistent icon set: `新建选题`, `生成提纲`, `趋势参考`, `已发布`. Keep an emoji only when it is actual content or part of the platform’s user language.

**Why**

Emoji are not a substitute for iconography, tone, or status design. Excess makes operational software feel unserious and visually unstable.

## 7. Glassmorphism abuse

**Bad**

Transparent cards float over a blurred illustration; text contrast changes with the background; nested glass panels attempt to signal premium quality.

**Better**

Use solid surfaces, one consistent border system, and elevation only for temporary layers such as menus, popovers, and dialogs.

**Why**

Glass effects reduce readability and obscure containment. Premium interfaces feel precise because their layers are unambiguous.

## 8. Foreign SaaS template look

**Bad**

English-first navigation, a 72 px slogan, fake global logos, `Book a demo`, four pricing tiers in USD, avatar stacks, and a Product Hunt-style testimonial wall—all translated after layout.

**Better**

Start from the Chinese buying and operating context: `申请试用`, `联系实施顾问`, WeChat or phone contact where appropriate, RMB pricing with billing scope, local roles, realistic approval flows, and Chinese-length navigation labels.

**Why**

Localization is not replacing English strings. Product structure must reflect how Chinese users evaluate, purchase, share, approve, and operate software.

## Final deletion pass

Before delivery, delete or rewrite any element that cannot answer at least one question:

- What real information does this show?
- What decision does this support?
- What action can the user take?
- What product identity does this express?

If the answer is “it makes the page look modern,” remove it.
