# 中文产品 UI 最终质量门

Run this immediately before final delivery. One checked failure blocks delivery.

## Hard failures

- [ ] 更换产品名称后，结构和文案仍可直接用于另一类产品。
- [ ] 页面没有清晰的用户动作，或按钮不能说明操作结果。
- [ ] 没有负面、警告、待处理、失败、风险、变化或待复核状态。
- [ ] 页面只显示数据，不支持比较、判断、批准、修改、记录或复核。
- [ ] 出现 [BANNED_AI_PATTERNS_CN.md](BANNED_AI_PATTERNS_CN.md) 中的空泛 AI 文案。
- [ ] 精确数字没有来源、口径、时间范围或示例标记。
- [ ] 第一视口主要由装饰性等宽卡片组成。
- [ ] 中文文案存在翻译腔、抽象按钮或术语混用。
- [ ] 产品预览没有输入、输出、状态、异常和下一步动作。
- [ ] 页面只是更漂亮的通用 AI 模板。

## Required evidence

Before passing, name:

1. target user
2. primary decision
3. primary workflow
4. visible exception state
5. next action
6. three modules that fail the Product Swap Test

If any answer is missing, return to the rewrite protocol. Do not present the artifact as final.
