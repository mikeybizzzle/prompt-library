---
title: Competitor Ship Watch Logged Into a Notion Database
emoji: "🛠️"
description: Collects new changelog entries from three competitors, describes each release by what a customer can now do, tags it by type, and adds it to a Notion database.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-20
does:
  - Collects every changelog entry dated after the last run from all three competitors.
  - Summarizes each release in one sentence about what a customer can now do that they could not before.
  - Tags each entry as a feature, integration, pricing change, or fix, and adds it to your Notion database.
tips:
  - title: Name one area of interest
    detail: so the bug fixes that touch your weak spot still get through the filter.
  - title: Read a month at a time
    detail: because the pattern of what they ship matters more than any single entry.
  - title: Point it at real changelogs
    detail: since a marketing blog produces entries with no dates to compare.
steps:
  - title: Find each changelog URL
    detail: and confirm the entries carry dates.
  - title: "Fill in {{competitor-1-url}}, {{competitor-2-url}}, {{competitor-3-url}}, {{area-of-interest}}, and {{database-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Notion.
---

## Prompt

Open the changelog or release notes page for each of {{competitor-1-url}}, {{competitor-2-url}}, and {{competitor-3-url}} and collect every entry dated after the last run. Summarize each release in one sentence describing what a customer can now do that they could not before, and tag it as a new feature, an integration, a pricing change, or a fix. Skip pure bug fixes unless they touch {{area-of-interest}}. Add the entries to the Notion database {{database-name}} with fields for competitor, date, category, and summary.

## Works with

- notion.so
- github.com

## Suggested cadence

Every day at 8:00am.

## Variables

- {{competitor-1-url}}: competitor 1 URL
- {{competitor-2-url}}: competitor 2 URL
- {{competitor-3-url}}: competitor 3 URL
- {{area-of-interest}}: the area whose fixes are worth keeping
- {{database-name}}: database name
