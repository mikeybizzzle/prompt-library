---
title: Meeting Notes Rewritten Into Decisions and Owned Actions
emoji: "🗓️"
description: Turns raw notes into decisions, open questions, and action items with an owner and date taken from the notes, and posts the actions to Slack with each owner mentioned.
category: polar
subcategory: polar-docs
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2026-07-17
does:
  - Splits the notes into decisions made, open questions, and action items.
  - Gives every action item an owner and due date drawn from the notes rather than invented.
  - Saves a new document, leaves the original untouched, and posts the action items to Slack with owners mentioned.
tips:
  - title: Let the ambiguity stand
    detail: because an item listed as an open question is better than a guessed owner.
  - title: Post the actions same day
    detail: since a decision loses its owner within about 24 hours.
  - title: Keep the raw notes
    detail: as the rewrite is a summary and someone will want the original wording.
steps:
  - title: Get the raw notes into one doc
    detail: however messy they are.
  - title: "Fill in {{doc-url}}, {{meeting-name}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Docs and Slack.
---

## Prompt

Open the raw notes at {{doc-url}} from the {{meeting-name}} meeting. Rewrite them into decisions made, open questions, and action items, giving every action item an owner and a due date drawn from the notes rather than invented. Where the notes are ambiguous about who agreed to what, list it as an open question instead of guessing. Save the cleaned version as a new Google Doc, leave the original untouched, and post the action items to Slack in {{channel-name}} with each owner mentioned.

## Works with

- docs.google.com
- slack.com

## Variables

- {{doc-url}}: doc URL
- {{meeting-name}}: meeting name
- {{channel-name}}: the Slack channel the action items go to
