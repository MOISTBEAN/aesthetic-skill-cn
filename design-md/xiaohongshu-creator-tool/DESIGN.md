# Xiaohongshu Creator Tool — Design System

Create a warm editorial creator workstation for planning, producing, reviewing, publishing, and learning from Chinese social content. Center the content itself: topic, title, cover, draft, account, owner, schedule, collaboration, and outcome.

Use a soft red accent sparingly. Do not create a childish pink interface and do not reproduce any real platform’s consumer-app visual identity.

## Contents

- [Use Cases](#use-cases)
- [Visual Atmosphere](#visual-atmosphere)
- [Color Tokens](#color-tokens)
- [Typography](#typography)
- [Layout Rules](#layout-rules)
- [Component Rules](#component-rules)
- [Motion](#motion)
- [Do](#do)
- [Don't](#dont)
- [Example Prompt](#example-prompt)
- [Self-Check](#self-check)

## Use Cases

Use this system for:

- content calendars and publishing rhythm
- topic libraries and inspiration intake
- note drafting and editorial review
- cover/title variant testing
- high-performing post review and pattern extraction
- brand-collaboration CRM and deliverables
- multi-account creator-studio operations
- asset, comment, approval, and publishing handoff

Do not use it for a fan-facing social feed, an entertainment toy, or an “AI 爆款生成器” that promises reach.

The core creator loop is:

`收集选题 → 判断账号适配 → 写标题与正文 → 制作封面 → 团队复核 → 安排节奏 → 发布交接 → 复盘表现 → 沉淀方法`.

## Visual Atmosphere

Create a warm editorial studio:

- paper-like warm neutrals rather than cold enterprise gray
- bright, image-led content surfaces with disciplined metadata
- soft red as an action or editorial-mark accent, not a full interface wash
- strong Chinese title typography and generous image previews
- visible rhythm across week, account, campaign, and workflow state
- professional enough for a three-to-twenty-person studio

The interface may feel lively, but never sugary. Avoid bubblegum pink, sticker clutter, cartoon icons, excessive rounded capsules, and consumer-feed imitation.

Use editorial contrast: large cover or title where creative judgment happens; compact metadata where operational scanning happens.

## Color Tokens

| Token | Value | Use |
|---|---:|---|
| `--bg-canvas` | `#F4F0E9` | warm application canvas |
| `--bg-surface` | `#FFFDF9` | editor, calendar, and detail surfaces |
| `--bg-muted` | `#ECE7DE` | filters, empty slots, secondary regions |
| `--border-subtle` | `#DDD6CC` | rows and panel boundaries |
| `--border-strong` | `#C9BFB3` | selection and focused comparison |
| `--text-primary` | `#24211E` | titles and main content |
| `--text-secondary` | `#69625B` | metadata and helper copy |
| `--text-muted` | `#938B82` | disabled and low-priority content |
| `--accent-red` | `#C95E64` | primary action, editorial mark, active state |
| `--accent-red-soft` | `#F4DDDD` | selected background and light emphasis |
| `--accent-ink` | `#50647A` | links, neutral information, alternate selection |
| `--success` | `#5D9873` | approved, published, complete |
| `--warning` | `#C58B42` | review due, missing disclosure, schedule risk |
| `--danger` | `#B84B52` | failed publish, rejected, destructive action |
| `--draft` | `#8B7AA8` | draft or internal-only state |

Rules:

- Keep at least 70% of visible surfaces neutral.
- Use soft red for the main action, selection, or one editorial annotation—not all at once.
- Do not use multiple shades of pink to encode unrelated workflow states.
- Pair state color with labels such as `待复核`, `已排期`, or `发布失败`.
- Let cover imagery provide variety; keep the UI chrome consistent.

## Typography

Use a Chinese sans-serif with a readable editorial rhythm. A Chinese serif may be used for a single preview title or campaign heading only when it supports the content; never use it for dense controls.

```css
font-family: Inter, "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif;
```

| Role | Size / line height | Weight | Notes |
|---|---|---:|---|
| Page title | `24/32` | 600 | period, campaign, or content space |
| Note title | `18/27` | 600 | preserve enough lines for review |
| Panel title | `14/21` | 600 | calendar and inspector headings |
| Body/editor | `15/25` | 400 | Chinese long-form composition |
| Metadata | `12/18` | 400–500 | owner, time, account, state |
| Counter | `12/18` | 500 | `标题 16 / 20 字` |

Do not use playful bubble typefaces for the application shell. Let user-created covers carry expressive typography.

## Layout Rules

### Desktop creator workstation

Use a three-region structure:

1. **Workspace rail:** accounts, calendar, topics, drafts, collaborations, review library.
2. **Primary canvas:** calendar, content queue, topic library, or editor.
3. **Preview/inspector:** mobile note preview, metadata, checks, comments, and versions.

Recommended desktop widths: 208–240 px rail; flexible primary canvas; 340–420 px inspector. Let users collapse the inspector when planning at calendar scale.

### Content calendar

Default to week or month based on publishing volume. Every scheduled item must show:

- cover thumbnail or asset-missing state
- reviewable title
- account
- planned time
- owner
- note status
- campaign or collaboration marker when relevant

Use empty slots intentionally: `周四晚间暂无内容` → `添加选题`. Do not fill the calendar with decorative placeholders.

### Topic library

Use a filterable editorial table or masonry-like library only when images matter. Include:

- topic statement
- source or observation
- target audience
- suitable account
- content angle
- evidence or reference link
- status and owner
- planned window

Example: `租房改造：小卧室收纳` · 面向刚毕业独居人群 · 适合“生活研究所” · 待验证.

### Note editor

Place editor and mobile preview side by side on desktop. Keep title, body, tags, cover, disclosure, and asset checklist visible without hiding the content behind modal steps.

### Responsive behavior

- At 1024–1279 px, collapse the rail and switch the inspector to a drawer.
- Below 768 px, use a task sequence: content → preview → checks → schedule.
- Preserve cover aspect ratio and title line breaks in the mobile preview.
- Do not present the entire desktop calendar as tiny columns on mobile; switch to agenda view.

## Component Rules

### Note status

Use a clear workflow rather than a generic `进行中`:

`选题` → `撰写中` → `待封面` → `待复核` → `已排期` → `已发布`

Also support negative or exceptional states:

`已驳回`, `缺少素材`, `合作方待确认`, `发布失败`, `已取消`.

Show the state label beside owner and next action. Example: `待封面 · 小岚负责 · 今天 18:00 前`.

### Calendar item

Keep cards compact and content-led. Use cover thumbnail, two title lines, publish time, owner, and state. Do not add likes or predicted reach unless the item is already published and the observation period is explicit.

### Topic card/row

Show why the topic matters, not just its name. Include a short evidence note such as `近两周评论区反复出现“衣柜不够用”`. Distinguish observation from recommendation.

### Cover/title testing

Treat tests as structured variants, not a slot machine:

- compare A/B/C covers at the same readable size
- keep title variant, visual variant, and hypothesis linked
- record reviewer preference and reason
- record the actual selected variant
- after publication, show observed metrics with the time window

Example hypothesis: `封面 B 用“改造前后”对比，预计能更快说明内容价值`. Do not write `爆款率 96%`.

When no true randomized test occurred, label the feature `方案比较` rather than `A/B 测试`.

### Viral post review

Call it `高表现笔记复盘` or `内容复盘`, not `爆款复制`.

Capture:

- publication context and account size
- cover/title/body structure
- observed metrics and time window
- traffic or source caveats
- audience comments and questions
- reusable principle
- what should not be generalized

Example: `发布后 7 天：12,430 浏览，618 收藏。同期账号中位数为 4,100 浏览。数据不含后续投放。`

Do not claim causality from one successful post.

### Brand collaboration CRM

Model real commercial workflow:

- brand/contact
- campaign and product
- brief version
- deliverables and due dates
- quote, tax, invoice, and payment state
- sample/product receipt
- disclosure requirement
- review rounds
- publishing commitment
- performance report due

Use statuses such as `询价中`, `待确认 Brief`, `制作中`, `品牌复核`, `已发布`, `待开票`, `待回款`, `已完成`.

Example: `某家居品牌 · 1 篇图文 · 6 月 24 日初稿 · 含税 ¥8,000 · 第二轮修改中`. Use fictional or neutral sample names, never fabricated endorsements.

### Publishing rhythm

Show cadence across accounts and formats:

- weekly target versus scheduled count
- spacing between similar topics
- missing high-priority slots
- owner capacity
- campaign commitments

Use `本周计划 6 篇，已排期 4 篇` rather than `完成度 67%` alone. Allow the team to define rhythm; do not assert a universal best posting time.

### Mobile preview

Show a neutral device-proportioned preview without copying the exact consumer-app shell. Preview cover crop, title wrap, body paragraphs, tags, disclosure, and line length. Label the preview `发布效果参考`; final platform rendering may differ.

### Comments and review

Anchor comments to a cover version, title variant, paragraph, or campaign requirement. Use actions `提交主编复核`, `退回修改`, `确认封面`, and `解决意见`.

### Publishing handoff

If direct publishing is unavailable, provide:

- `复制标题`
- `复制正文与标签`
- `下载封面`
- `导出发布清单`
- `标记为已发布`

Do not fake `一键发布`. If an integration exists, disclose account, scheduled time, permission state, and failure recovery.

### Empty and failure states

- `本周还没有排期。先从选题库选择一篇。`
- `封面上传失败：图片宽度不足 1080 px。`
- `品牌复核已逾期 2 天，发布时间可能受影响。`
- `发布同步失败；草稿和素材已保留。`
- `你可以查看该合作，但无权修改报价。`

## Motion

- Use 140–200 ms ease-out for calendar moves, inspector reveal, and variant selection.
- Animate drag targets with border and surface change; always provide a menu or keyboard alternative.
- Use a short crossfade when switching cover variants so comparison remains stable.
- Show unsaved schedule changes explicitly; do not silently animate an item into a new day.
- Avoid bouncing stickers, floating hearts, confetti on routine publishing, and looping pink gradients.
- Respect reduced-motion preferences.

## Do

- Make calendar, topic library, note status, cover/title comparison, review, CRM, and rhythm first-class.
- Use realistic Chinese titles, roles, deadlines, fees, and collaboration states.
- Give covers and mobile preview enough size for editorial judgment.
- Keep the shell warm, professional, and mostly neutral.
- Use soft red sparingly for action and editorial emphasis.
- Label observed performance with a time window and context.
- Show failed publishing, missing assets, rejection, and overdue review states.

## Don't

- Do not make the interface childish, candy-pink, sticker-heavy, or filled with emojis.
- Do not copy any real social platform’s brand assets, exact feed shell, icons, or typography.
- Do not promise viral reach, “爆款率,” or universal best posting times.
- Do not reduce creator operations to a generic kanban board.
- Do not hide the cover, title, owner, status, account, or planned time.
- Do not call a simple preference vote an A/B test.
- Do not imply direct publishing or data access without a real integration.
- Do not fabricate brand deals, engagement, follower counts, or endorsements.

## Example Prompt

```text
使用 xiaohongshu-creator-tool 设计一个三人中文内容工作室的创作者工作台。风格温暖、编辑感、专业，使用克制的柔和红色强调，不使用幼稚粉色。页面包含周内容日历、选题库、笔记状态、封面与标题方案比较、高表现笔记复盘、品牌合作 CRM、发布节奏和移动端预览。示例内容围绕居住与收纳，显示真实中文标题、负责人、复核状态、发布时间、合作交付和回款状态。必须包含缺少封面、品牌复核逾期、发布失败和无报价权限状态。不要模仿任何真实平台视觉，不承诺爆款，不伪造 A/B 测试、数据或一键发布能力。
```

## Self-Check

Before delivery, confirm:

- [ ] The interface feels like a creator workstation, not a consumer social feed.
- [ ] Calendar, topic library, note status, cover/title comparison, review library, CRM, and publishing rhythm are represented.
- [ ] Cover, title, owner, account, status, and publish time are visible on operational items.
- [ ] The mobile preview is large enough to judge crop, wrapping, and disclosure.
- [ ] Soft red is restrained; most surfaces remain warm neutral.
- [ ] The UI is professional, not childish pink, sticker-heavy, or emoji-led.
- [ ] Performance data is observed, dated, contextualized, and never promised.
- [ ] Negative states include missing assets, rejection or overdue review, publish failure, and permission limits.
- [ ] No real platform visual identity, fake integration, fabricated collaboration, or “爆款” guarantee appears.
- [ ] The result scores at least 24/30 using the repository `SCORECARD.md`.
