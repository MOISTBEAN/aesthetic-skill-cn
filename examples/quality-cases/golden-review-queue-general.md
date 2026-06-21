# Golden Case: General Review Queue

## Contract

A compliance team reviews policy changes before publication.

- **Generic page type:** Review Queue
- **Skeleton:** Review Queue Layout
- **Primitive set:** Review Queue Primitive Set
- **Primary decision:** approve, reject, or return the selected change

## Locked modules

- Queue Module
- Comparison Module
- Evidence Module
- Review / Approval Module
- Activity Log Module

## Required reality

The queue shows owner, deadline, blocking reason, and last change. The comparison identifies changed clauses. Evidence links to the governing policy. Approval is disabled while evidence is missing. Rejection requires a reason and assignee.

## Why it passes

The interface is organized around an auditable decision, not a dashboard or AI assistant. Every state has an action and every approval has evidence.

