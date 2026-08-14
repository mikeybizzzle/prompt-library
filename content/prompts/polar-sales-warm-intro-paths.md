---
title: Warm Intro Paths Ranked by Relationship Strength
emoji: "🤝"
description: Searches LinkedIn connections and your Gmail history for a route into three target accounts, then ranks the paths and drafts the two-line intro request for each one.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-16
does:
  - Finds first-degree connections who work at each company now or worked there in the last two years.
  - Notes the date and subject of the most recent Gmail thread with anyone at that company domain.
  - Returns a table of company, best contact, relationship evidence, and a two-line intro request.
tips:
  - title: Give it three accounts at a time
    detail: because the ranking is only useful when you can act on all of it the same day.
  - title: Read the evidence column first
    detail: since a connection you have never emailed is not a warm path.
  - title: Send the request yourself
    detail: as the draft is written to be pasted into your own message, not sent for you.
steps:
  - title: Pick the three accounts
    detail: you would most like an introduction into this month.
  - title: "Fill in {{company-1}}, {{company-2}}, and {{company-3}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Gmail.
---

## Prompt

For each company on this list — {{company-1}}, {{company-2}}, {{company-3}} — search LinkedIn for my first-degree connections who currently work there or worked there in the last two years. Also search my Gmail for any prior thread with someone at that company domain and note the date and subject of the most recent one. Rank the paths by strength, treating a current employee I have emailed recently as strongest. Give me a table of company, best contact, relationship evidence, and a two-line intro request I could send them.

## Works with

- linkedin.com
- gmail.com

## Variables

- {{company-1}}: company 1
- {{company-2}}: company 2
- {{company-3}}: company 3
