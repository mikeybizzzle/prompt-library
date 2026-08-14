---
title: Competitor Messaging Scan With a Dated Run History
emoji: "📢"
description: Captures the current homepage headline, call to action, and top three benefits for three competitors, checks what they are pushing on social, and logs the changes since the last run.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-15
does:
  - Records the homepage headline and subhead, the primary call to action, and the three benefits given top billing.
  - Reads the last ten posts on X and LinkedIn to see which claim or feature they are pushing hardest.
  - Compares against the previous run and writes a dated section into your Notion page calling out what changed.
tips:
  - title: Keep every dated section
    detail: because a messaging change is only visible against what they said last month.
  - title: Read the call to action first
    detail: since a shift from trial to demo says more than any headline rewrite.
  - title: Pick competitors who ship copy
    detail: as a site that never changes produces an empty diff every week.
steps:
  - title: Choose three competitors
    detail: whose messaging you would actually respond to.
  - title: "Fill in {{competitor-1}}, {{competitor-2}}, {{competitor-3}}, and {{page-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Notion, X, and LinkedIn.
---

## Prompt

For each of {{competitor-1}}, {{competitor-2}}, and {{competitor-3}}, capture the current homepage headline and subhead, the primary call to action, and the three benefits given top billing. Then check their last ten posts on X and LinkedIn and note which claim or feature they are pushing hardest this month. Compare against what you recorded last run and call out anything that changed. Write the comparison into the Notion page {{page-name}} with a dated section per run.

## Works with

- x.com
- linkedin.com
- notion.so

## Suggested cadence

Every Thursday at 10:00am.

## Variables

- {{competitor-1}}: competitor 1
- {{competitor-2}}: competitor 2
- {{competitor-3}}: competitor 3
- {{page-name}}: the Notion page that holds the run history
