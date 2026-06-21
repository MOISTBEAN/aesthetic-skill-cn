# Allowed Page Types

Public-facing v0.2 supports three page types. Finance remains an advanced WIP case and is not public proof.

## 1. Xiaohongshu Creator Workbench

**Use case:** plan, review, approve, publish, and revisit content across creator or brand accounts.

**Target user:** 内容运营、博主、主编、设计师、品牌合作团队.

**Default dials:** `PRODUCT_REALISM 8 / VISUAL_DENSITY 6 / VISUAL_RESTRAINT 6`.

**Allowed modules:** 选题池、内容日历、封面状态、标题 A/B 测试、笔记状态、负责人、品牌合作 CRM、待修改项、评论反馈、爆文复盘、移动端预览.

**Required states:** 待发布、待改封面、标题需重写、品牌待确认、数据低于近 7 篇均值. Show at least three, including one blocking state.

**Required actions:** 安排发布时间、标记封面待改、提交品牌确认、复盘爆文原因、修改标题. Show at least three, including one approval or revision action.

**Allowed skeletons:** `Calendar + Detail Layout`, `Workbench Layout`.

**Banned:** 一键爆款、全粉色界面、假增长数据、创作神器、AI 自动爆文、无来源互动预测、通用 KPI 卡墙.

## 2. AI Review / Human Approval Workflow

**Use case:** compare AI output with source evidence, route risk, and preserve human approval history.

**Target user:** 法务、采购、质检、研究、内容审核或其他对 AI 结果负责的专业人员.

**Default dials:** `PRODUCT_REALISM 8 / VISUAL_DENSITY 6 / VISUAL_RESTRAINT 8`.

**Allowed modules:** 输入内容、AI 输出结果、来源依据、风险等级、人工复核队列、待确认项、版本差异、审计记录、提交复核、权限状态.

**Required states:** 待人工复核、来源缺失、低可信、版本已变化、已退回修改. Show at least three, including one failed or blocked state.

**Required actions:** 对比差异、标记风险、提交人工复核、退回修改、确认通过. Show all five in the complete workflow; the initial viewport must expose at least three.

**Allowed skeletons:** `Review Queue Layout`, `Workbench Layout`.

**Banned:** AI-powered everything、generic productivity hero、robot mascot、模糊的“智能洞察”、虚假准确率、只有聊天输入框的产品、装饰性终端窗口.

## 3. Local Business Clean Landing Page

**Use case:** help a local customer understand a concrete service, price range, location, availability, and booking path.

**Target user:** 搜索门店、到店服务、上门服务、诊所、维修或工作室的本地消费者.

**Default dials:** `PRODUCT_REALISM 8 / VISUAL_DENSITY 5 / VISUAL_RESTRAINT 7`.

**Allowed modules:** 服务项目、价格区间、到店流程、预约入口、真实评价、常见问题、门店信息、营业时间、服务范围、微信联系.

**Required states:** 今日可约 / 已约满、价格需到店确认、服务范围外、休息中、预约待确认. Show at least two and never imply guaranteed availability.

**Required actions:** 查看价格、预约服务、联系门店、查看地址、确认营业时间. Show all five across the page.

**Allowed skeleton:** `Local Landing Layout`.

**Banned:** corporate SaaS language、fake platform metrics、overdesigned dashboard sections、融资或增长叙事、虚假客户数量、四档 SaaS 定价表.

## 4. Finance Terminal / Investment Discipline Workspace

**Status:** WIP / advanced case. Do not use this as a README hero until a human approves the screenshot.

**Use case:** review an investment thesis, sell conditions, risk triggers, catalysts, and decision history.

**Target user:** 记录持仓纪律的个人投资者或研究团队.

**Default dials:** `PRODUCT_REALISM 9 / VISUAL_DENSITY 8 / VISUAL_RESTRAINT 8`.

**Allowed modules:** thesis tracker、sell condition review、risk trigger panel、catalyst tracker、trade review log、next review action.

**Required states:** thesis unchanged、thesis partially broken、sell condition not triggered、risk needs review、catalyst delayed、position requires next review.

**Required actions:** 核对 thesis、检查卖出条件、标记风险、记录决定、安排下次复核.

**Allowed skeleton:** `Finance Workspace Layout`.

**Banned:** generic KPI overview、all-green metrics、fake chart as main proof、crypto neon、Bloomberg cosplay without workflow、AI 买入建议.
