# Mission Control 2.0 — Internal Command Center

## Overview
Mission Control 2.0 is a personal command center that unifies business operations into a single dashboard. It combines an Astro frontend with n8n-powered APIs for tasks (Notion) and email captures (Gmail), giving a single source of truth for execution.

## Problem
Business operations were spread across multiple tools with no unified view:
- Tasks lived in Notion without a purpose-built control panel
- Email triage required constant context switching
- Operational metrics and quick actions were scattered

## Solution
A custom dashboard with dedicated modules for tasks, captures, analytics, and planning, backed by a lightweight API layer built in n8n.

### Key Features
- **Captures:** Gmail-backed inbox view with searchable email details
- **Tasks:** Notion-backed Kanban and task list views
- **Dashboard:** High-level KPIs and quick actions
- **Extensible Modules:** Projects, Calendar, Docs, Analytics (ready for data source wiring)

## Architecture
- **Frontend:** Astro 5.x (component-driven UI, fast SSR)
- **Backend:** n8n workflows exposed as REST-like webhooks
- **Integrations:** Gmail OAuth2, Notion API
- **Hosting:** Self-hosted n8n via Docker, front-end ready for Vercel

```
Browser (Astro UI)
    ↓
Mission Control API (n8n webhooks)
    ↓            ↓
Notion (Tasks)  Gmail (Captures)
```

## Tech Stack
- Astro, TypeScript
- n8n (self-hosted)
- Notion API
- Gmail OAuth2

## Outcome
- Unified operations dashboard
- Live data flows for tasks and email captures
- Reduced context switching and faster operational response

---
**Status:** Active internal system; expanding modules and data sources.
