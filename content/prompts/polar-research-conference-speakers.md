---
title: Conference Speaker Dossier Sorted by Session Time
emoji: "🎤"
description: Reads the agenda for one track of an event and builds a Notion table of every speaker with their title, company, session slot, LinkedIn URL, and what they have been talking about lately.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-02-23
does:
  - Lists every speaker in the chosen track with name, title, company, session title and time, and LinkedIn profile URL.
  - Adds one line per speaker on what they have published or spoken about recently.
  - Saves the table to Notion under the page you name, sorted by session time.
tips:
  - title: Run it one track at a time
    detail: because a full multi-day agenda produces a table nobody reads before the event.
  - title: Do it the week before
    detail: so the recent-activity line is still recent when you walk in.
  - title: Ask for a shortlist afterwards
    detail: naming the five speakers closest to what you sell or study.
steps:
  - title: Find the public agenda page
    detail: and note which track or day you actually plan to attend.
  - title: "Fill in {{conference-name}}, {{event-url}}, {{track-or-day}}, and {{page-name}}"
    detail: before you run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Notion.
---

## Prompt

Open the agenda page for {{conference-name}} at {{event-url}} and list every speaker in the {{track-or-day}} track. For each speaker pull their name, title, company, session title and time, and their LinkedIn profile URL. Add one line on what they have published or spoken about recently so I know what to ask them. Save the result as a table in Notion under {{page-name}}, sorted by session time.

## Works with

- linkedin.com
- notion.so
- x.com

## Variables

- {{conference-name}}: conference name
- {{event-url}}: event URL
- {{track-or-day}}: track or day
- {{page-name}}: the Notion page the table should be saved under
