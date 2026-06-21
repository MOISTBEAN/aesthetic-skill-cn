# 别再生成一眼 AI 味的界面。

**Aesthetic Skill CN 是一个面向 AI 编程智能体的通用 Anti-AI Style Skill。**

它不靠“更高级、更有设计感、更干净”这种模糊建议，而是在生成前通过输出合约、布局骨架、模块锁、视觉原子锁、文案审计和质量门禁，主动压缩 AI 的自由发挥空间。

> Stop generating AI-looking UI by reducing the model’s freedom before it writes the interface.

它的目标不是让界面更漂亮，而是阻止 AI 生成：

- 蓝紫渐变大 Hero
- 假 SaaS Dashboard
- 六张等权功能卡片
- 装饰性产品预览
- 翻译腔与模糊 AI 文案
- 没有来源的假精确数字
- 漂亮但没有真实工作流的页面

[English README](README.md) · [读取 SKILL.md](SKILL.md) · [运行质量门](gates/ANTI_AI_STYLE_GATE.md)

## 这是什么

这不是提示词合集，也不是 UI 组件库。

它是一套 AI 可读的生成约束系统，适用于 Cursor、Claude Code、Codex 和其他编程智能体。智能体在写最终界面之前，必须先确定：

1. Output Contract
2. Generic Page Type
3. Layout Skeleton
4. Module Locks
5. Visual Primitive Locks
6. Required States
7. User Actions
8. Banned Patterns

**Free-form UI generation is not allowed.** 没有完成这些选择，就不能生成最终 UI。

## 七层约束

### 1. Output Contracts

先固定任务类型、页面类型、用户、主要决策、状态、动作与通过标准。不能从“做一个高级后台”直接跳到页面。

### 2. Layout Skeletons

从工作台、复核队列、管理表格、日历详情、表单流程、Dashboard Workspace、服务落地页或 Mobile H5 中选择固定结构。

### 3. Module Locks

每个模块必须说明用途、用户动作、当前状态、下一步和存在理由。`智能洞察`、`增长概览`、`效率中心` 不是合格模块。

### 4. Visual Primitive Locks

界面只能使用所选集合允许的视觉原子。内部工具可以使用表格、队列、筛选器、日志、表单、评论和审批条；不能擅自加入 Hero、漂浮卡片、假图表或装饰性 Mockup。

如果让界面更漂亮会降低产品特异性，选择产品特异性。

### 5. Copy Audit

检查标题、按钮、状态、错误、数字和能力声明。删除翻译腔、抽象承诺、虚构精度和无法验证的结果。

### 6. Anti-AI Style Gate

执行 Product Swap Test、Fake Dashboard Test、Card Grid Slop Test、Decorative Preview Test、Workflow Reality Test 和 Negative State Requirement。

### 7. Rewrite Until Pass

失败后必须在同一合约、骨架和视觉原子锁内重写。不能通过增加新卡片、新图表或新模块绕过失败。

## 核心机制

### Product Swap Test

如果只替换名称、Logo 和主题色，就能把页面变成另一类产品，输出失败。

### Banned AI Defaults

拒绝渐变舞台、六卡功能墙、无意义 KPI、假终端、装饰预览、Sparkles、玻璃拟态和全是成功状态的 Demo。

### Real Workflow Requirement

页面必须让用户检查、比较、修改、批准、驳回、分配或继续处理真实业务对象。每个状态都需要下一步。

### Negative State Requirement

真实软件必须包含与任务相关的待处理、失败、阻塞、驳回、变更、空状态或权限不足，不能把所有内容做成绿色成功状态。

### Rewrite Until Pass

未通过 [`gates/ANTI_AI_STYLE_GATE.md`](gates/ANTI_AI_STYLE_GATE.md) 和 [`gates/NON_AI_STYLE_SCORECARD.md`](gates/NON_AI_STYLE_SCORECARD.md) 的输出不能进入 final。

## 通用生成流程

```text
识别任务类型
    ↓
选择 Output Contract
    ↓
选择 Generic Page Type
    ↓
选择 Layout Skeleton
    ↓
锁定 Modules 与 Visual Primitives
    ↓
设置 Required States、Actions、Banned Patterns
    ↓
运行 Copy Audit
    ↓
提出 3 个产品结构方向
    ↓
生成选中方向
    ↓
运行 Anti-AI Style Gate
    ↓
失败则在原约束内重写
    ↓
评分后交付
```

## 通用页面类型

| Page Type | 典型任务 |
|---|---|
| Internal Workbench | 连续处理多个对象，并查看详情、状态和下一步 |
| Review Queue | 比较、批准、驳回或退回待处理项 |
| Admin Table | 查询、筛选、批量处理和审计记录 |
| Content Calendar | 按日期规划对象并处理冲突与审批 |
| Form Flow | 分步骤提交资料、验证错误并恢复草稿 |
| Dashboard Workspace | 监控异常并进入具体处理流程 |
| Service Landing | 解释具体服务、价格、范围和转化路径 |
| Mobile H5 | 在移动端完成预约、申请、提交或联系 |

完整定义见 [`contracts/ALLOWED_PAGE_TYPES.md`](contracts/ALLOWED_PAGE_TYPES.md)。

## 案例包，不是核心产品

小红书、AI 人工复核、本地服务和金融不再是顶层产品定义。它们是验证通用约束能否落到真实业务的可选 Case Packs：

- 小红书创作者运营：Review Queue / Content Calendar 的案例包
- AI 人工复核：Review Queue / Internal Workbench 的案例包
- 本地服务：Service Landing / Mobile H5 的案例包
- 金融研究：Dashboard Workspace 的高级 WIP 案例

这些案例可以补充行业字段、平台限制和真实文案，但不能覆盖核心合约、骨架、视觉原子锁或质量门。

现有 Before / After、截图、设计预设和平台规则继续保留，作为历史证据与可选参考。它们不承担核心定位。

## 如何使用

最小请求：

```text
读取 aesthetic-skill-cn/SKILL.md。
为采购团队设计供应商变更复核队列。
在生成 UI 前记录输出合约、通用页面类型、布局骨架、模块锁、
视觉原子锁、必需状态、用户动作和禁止模式。
运行 Anti-AI Style Gate，失败则重写。
```

不要只说：

```text
做一个高级、现代、干净的 SaaS 后台。
```

应该提供：

- 用户是谁
- 处理什么业务对象
- 主要判断或动作是什么
- 哪些失败、阻塞或待处理状态真实存在
- 运行在桌面、移动端还是响应式网页
- 需要评审、规范、原型还是完整页面

## 在 Cursor / Claude Code / Codex 中使用

让智能体先读取 [`SKILL.md`](SKILL.md)，并确保它能访问相对引用的 `contracts/`、`gates/` 和 `rules/`。不要只复制某个示例 Prompt，因为真正的约束存在于合约和门禁文件中。

```text
Read aesthetic-skill-cn/SKILL.md.
Use the Admin Table page type for an account-permission console.
The user must filter accounts, inspect permission conflicts, revoke access,
and review the audit log. Include blocked and partially failed states.
Do not generate final UI until every pre-generation lock is recorded.
```

## 仓库结构

```text
aesthetic-skill-cn/
├── SKILL.md
├── contracts/
│   ├── OUTPUT_CONTRACTS.md
│   ├── ALLOWED_PAGE_TYPES.md
│   ├── LAYOUT_SKELETONS.md
│   ├── MODULE_LOCKS.md
│   ├── VISUAL_PRIMITIVE_LOCKS.md
│   └── STYLE_DIRECTION_PROTOCOL.md
├── gates/
├── rules/
├── design-md/                 # 可选风格与案例参考
├── examples/                  # case packs、quality cases 与历史截图
├── docs/
└── scripts/
```

## 伦理与使用边界

- 不复制真实品牌 Logo、截图、专有布局或视觉身份。
- 不伪造客户、收入、增长率、准确率、评价或平台能力。
- 不隐藏失败、延迟、权限、费用和数据缺失。
- 可以研究通用工作流和业务约束，但必须形成原创结构。
- 行业案例包不能伪装成官方平台界面。

完整边界见 [`docs/ethics.md`](docs/ethics.md)。

## 路线图

### v0.2

- [x] 通用 Output Contract
- [x] 八种 Generic Page Types
- [x] Layout Skeletons 与 Module Locks
- [x] Visual Primitive Locks
- [x] Anti-AI Style Gate 与 Rewrite Protocol
- [ ] 用三个互不相关的产品验证同一套约束
- [x] 增加通用 Review Queue 质量案例
- [ ] 增加通用 Admin Table 质量案例
- [ ] 继续将现有平台预设降级为可选 Case Packs

### v0.3

- [ ] 增加合约一致性检查器
- [ ] 增加可机器读取的 Lock Record
- [ ] 建立跨框架的输出验证样例
- [ ] 验证移动端与内部工具的原子集合边界

项目的优先级不是增加更多视觉风格，而是减少无依据的选择，并让失败可以被明确拒绝。
