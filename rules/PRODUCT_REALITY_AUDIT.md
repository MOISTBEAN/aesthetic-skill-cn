# Product Reality Audit

Complete this audit before choosing colors, layouts, or components. Write concrete answers; `普通用户`, `提升效率`, and `数据管理` are invalid.

## Required answers

1. **Who is the user?** Name role, expertise, team context, and platform. Example: `管理 4 个家居账号的内容主编，在桌面端安排选题并复核品牌稿。`
2. **What decision or action does this page support?** Use one main verb: 核对、比较、批准、修改、记录、安排、复核、提交.
3. **What must the user check, compare, approve, record, or revisit?** Name the business objects and evidence.
4. **What failure, risk, or negative state must be visible?** Name cause, consequence, and recovery action.
5. **Which modules make the product real?** Select from [REAL_CONTENT_LIBRARY.md](REAL_CONTENT_LIBRARY.md) and add product-specific modules when necessary.
6. **Which generic SaaS patterns must be avoided?** Name at least three likely failure modes for this request.
7. **Does the page survive a product-name replacement?** If yes, the proposed structure fails. Add modules that belong only to this product.

## Audit output

```text
User:
Primary decision:
Objects and evidence:
Required workflow:
Negative state:
Required modules:
AI-slop risks:
Product Swap Test:
```

Do not generate UI until each line is specific enough to verify in the output.
