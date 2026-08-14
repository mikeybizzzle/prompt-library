---
title: Weekly Review of Where the Time Went and What Is Next
emoji: "🔄"
description: Summarizes the last seven days across calendar, sent mail, and completed tasks, then lists every commitment next week that needs preparation and what has been rolling over unfinished.
category: polar
subcategory: polar-personal
models: [claude, chatgpt, gemini]
roles: [solopreneurs, freelancers, virtual-assistants]
type: text
featured: false
publishedAt: 2026-08-07
does:
  - Summarizes what got done and where the time went by category across calendar, sent mail, and completed tasks.
  - Lists every commitment in the coming week that needs preparation and what specifically needs doing.
  - Calls out any task rolling over unfinished for more than two weeks, in a doc under 500 words.
tips:
  - title: Run it before the week starts
    detail: so the preparation list still has a day to be acted on.
  - title: Read the rollover list first
    detail: because a task that survived two weeks usually needs deleting rather than doing.
  - title: Hold the word limit
    detail: since a review you skim is a review you stop writing.
steps:
  - title: Make sure tasks are logged
    detail: wherever you actually track them.
  - title: "Fill in {{task-tool-url}} and {{date}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Calendar, Gmail, and Docs.
---

## Prompt

Look back at the last seven days across my Google Calendar, sent Gmail messages, and completed items in {{task-tool-url}}, and summarize what actually got done and where the time went by category. Then look at the coming week's calendar and list every commitment that needs preparation, with what specifically needs doing before it. Call out any task that has been rolling over unfinished for more than two weeks. Save the review as a Google Doc titled "Week of {{date}}" and keep it under 500 words.

## Works with

- calendar.google.com
- gmail.com
- docs.google.com

## Suggested cadence

Every Sunday at 5:00pm.

## Variables

- {{task-tool-url}}: task tool URL
- {{date}}: the week start date used in the title
