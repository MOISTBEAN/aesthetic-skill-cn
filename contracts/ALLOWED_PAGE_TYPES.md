# Allowed Page Types

Select one generic page type before choosing a case overlay or visual direction.

## 1. Internal Workbench

**Use case:** repeatedly process business objects while keeping context, detail, status, and next actions visible.

**Target users:** operators, editors, analysts, support teams, researchers, and internal specialists.

**Allowed skeletons:** `Workbench Layout`.

**Allowed primitive sets:** `Internal Workbench Primitive Set`.

**Required actions:** select item, inspect detail, change state, assign owner, record next step.

**Required states:** active, pending, blocked, changed, completed.

**Banned:** marketing hero, feature grid, decorative preview, KPI wall, vague productivity copy.

**Example case packs:** creator operations, customer support, research workspace, catalog operations.

## 2. Review Queue

**Use case:** review, approve, reject, compare, return, or escalate items.

**Target users:** reviewers, approvers, editors, legal teams, QA teams, moderators.

**Allowed skeletons:** `Review Queue Layout`, `Workbench Layout`.

**Allowed primitive sets:** `Review Queue Primitive Set`, `Internal Workbench Primitive Set`.

**Required actions:** approve, reject, return for revision, compare, mark risk, assign owner.

**Required states:** pending, needs review, rejected, approved, changed, blocked.

**Banned:** hero, generic KPI dashboard, decorative preview, vague AI assistant copy, all-positive state sets.

**Example case packs:** Xiaohongshu editorial review, AI human approval, contract review, content moderation, design review.

## 3. Admin Table

**Use case:** search, filter, inspect, update, and bulk-manage structured records.

**Target users:** administrators, operations teams, finance operations, permission managers.

**Allowed skeletons:** `Admin Table Layout`.

**Allowed primitive sets:** `Admin Table Primitive Set`.

**Required actions:** filter, sort, inspect row, edit row, run bulk action, review audit history.

**Required states:** active, disabled, incomplete, failed, partially updated, no permission.

**Banned:** large metric cards, decorative charts, abstract feature cards, row actions hidden behind presentation blocks.

**Example case packs:** account permissions, order operations, inventory records, billing administration.

## 4. Content Calendar

**Use case:** schedule objects over time, resolve conflicts, assign ownership, and move work through approval.

**Target users:** editors, campaign teams, project coordinators, publishing operations.

**Allowed skeletons:** `Calendar + Detail Layout`.

**Allowed primitive sets:** `Internal Workbench Primitive Set`.

**Required actions:** schedule, reschedule, assign, open detail, resolve conflict, submit for review.

**Required states:** draft, scheduled, conflict, awaiting approval, returned, published or completed.

**Banned:** thumbnail-only calendar, fake engagement forecast, decorative mobile mockup, generic growth overview.

**Example case packs:** Xiaohongshu publishing, campaign calendar, training schedule, release planning.

## 5. Form Flow

**Use case:** collect, validate, save, and submit information across one or more steps.

**Target users:** applicants, customers, employees, operators entering structured data.

**Allowed skeletons:** `Form Flow Layout`.

**Allowed primitive sets:** `Form Flow Primitive Set`.

**Required actions:** enter data, validate, save draft, continue, go back, submit, recover from error.

**Required states:** untouched, incomplete, invalid, saving, saved, submission failed, submitted.

**Banned:** decorative step cards, progress without validation, hidden errors, fake success confirmation.

**Example case packs:** onboarding, reimbursement, application, service intake, checkout details.

## 6. Dashboard Workspace

**Use case:** monitor operational state and move from an exception or trend into a concrete action.

**Target users:** analysts, team leads, operations managers, researchers.

**Allowed skeletons:** `Dashboard Workspace Layout`.

**Allowed primitive sets:** `Dashboard Workspace Primitive Set`, `Internal Workbench Primitive Set`.

**Required actions:** filter period, inspect source, open exception, compare, acknowledge risk, record decision.

**Required states:** normal, warning, failed, delayed, missing, needs review.

**Banned:** unsupported KPIs, decorative charts, all-green metrics, dashboard with no drill-down or action.

**Example case packs:** service operations, inventory monitoring, research monitoring; finance terminal is an advanced WIP overlay.

## 7. Service Landing

**Use case:** explain a concrete service, scope, price basis, availability, and conversion path.

**Target users:** customers evaluating a local, professional, or specialized service.

**Allowed skeletons:** `Service Landing Layout`.

**Allowed primitive sets:** `Landing Page Primitive Set`.

**Required actions:** inspect service scope, check price basis, verify availability, contact, book or request a quote.

**Required states:** available, unavailable, outside service range, price requires confirmation, booking pending.

**Banned:** vague SaaS slogan, fake product dashboard, fake metrics, empty abstract hero, four-tier SaaS pricing.

**Example case packs:** local repair, clinic booking, studio service, consulting intake.

## 8. Mobile H5

**Use case:** complete a focused task on mobile, such as booking, applying, submitting, confirming, or contacting.

**Target users:** mobile customers, field workers, event participants, private-domain users.

**Allowed skeletons:** `Mobile H5 Layout`.

**Allowed primitive sets:** `Mobile H5 Primitive Set`, `Form Flow Primitive Set`.

**Required actions:** complete primary flow, validate input, return safely, retry failure, contact support when blocked.

**Required states:** loading, incomplete, invalid, unavailable, failed, completed.

**Banned:** desktop dashboard squeezed into mobile, fake app mockup, excessive gradients, multiple competing CTAs.

**Example case packs:** WeChat booking, event registration, quote request, lightweight approval.

## Page type audit

Before generation, prove that the selected page type matches the primary user decision. If the page requires two unrelated primary workflows, split the output rather than combining page types.
