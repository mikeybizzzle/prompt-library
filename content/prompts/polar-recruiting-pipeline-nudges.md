---
title: Pipeline Stall Report With Drafted Candidate Nudges
emoji: "⏳"
description: Finds candidates whose stage has not moved, checks who owes whom a reply, drafts a warm nudge for the ones you are blocking, and posts the stalled list to Slack.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-04-15
does:
  - Finds every candidate whose stage has not changed inside your day threshold.
  - Checks the last message in Gmail to decide whether you or the candidate is the blocker.
  - Drafts a short email with a concrete next step for each one you are blocking and posts the stalled list to Slack.
tips:
  - title: Set the threshold to your promise
    detail: because a nudge at day ten is late if you told them you would reply in three.
  - title: Read the blocker column
    detail: since the stalls you cause are the ones you can fix this afternoon.
  - title: Fix the stage names first
    detail: as the report is only as accurate as the tracker it reads.
steps:
  - title: Make sure the tracker is current
    detail: with a stage and a last-changed date per candidate.
  - title: "Fill in {{tracker-url}}, {{number}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Airtable, Gmail, and Slack.
---

## Prompt

Open the candidate tracker at {{tracker-url}} and find everyone whose stage has not changed in more than {{number}} days. For each one check Gmail for the last message exchanged so you know whether we owe them a reply or they owe us one. Draft a short, warm email for every candidate we are the blocker on, stating a concrete next step and date, and save it as a draft. Post a summary to Slack in {{channel-name}} listing stalled candidates, days stalled, and who is blocking.

## Works with

- airtable.com
- gmail.com
- slack.com

## Suggested cadence

Every Wednesday at 9:30am.

## Variables

- {{tracker-url}}: tracker URL
- {{number}}: how many days in one stage counts as stalled
- {{channel-name}}: the Slack channel the summary is posted to
