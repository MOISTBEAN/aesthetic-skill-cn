# Output Rewrite Protocol

Run this loop whenever [ANTI_AI_STYLE_GATE.md](ANTI_AI_STYLE_GATE.md) returns `FAIL`. Maximum: three passes.

## Rewrite pass

1. **Detect traits.** Mark every generic visual, vague phrase, unsupported metric, decorative preview, missing state, and absent action.
2. **Name the top three failures.** Rank by impact on product specificity, workflow reality, and user decisions.
3. **Rewrite structure.** Rebuild the page around the primary object and workflow. Do not start with color or card styling.
4. **Rewrite copy.** Replace slogans with concrete actions using nouns from the product domain.
5. **Add real states.** Include relevant examples of `pending`, `warning`, `failed`, `needs review`, `changed`, and `unchanged`. Do not force irrelevant states.
6. **Remove decoration.** Delete feature-card grids, fake charts, glass panels, gradient theater, fake terminals, and preview frames that carry no workflow.
7. **Regenerate the artifact.** Preserve valid functionality and content while changing failed structure.
8. **Run all gates again.** Do not check only the failed test.

## Pass log

```text
Pass 1
Top failures:
1. Product Swap Test: ...
2. Workflow Reality Test: ...
3. Fake SaaS Copy Test: ...

Structural rewrite: ...
Copy rewrite: ...
States added: ...
Gate result: FAIL / PASS
```

## Stop conditions

- Stop immediately when all gates pass and the scorecard passes.
- After three failed passes, do not disguise the result as complete. Report the blocking product information or implementation constraint.
- Never show a failed candidate as the final output.
