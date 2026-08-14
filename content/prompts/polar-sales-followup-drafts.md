---
title: Follow-Up Drafts for Threads That Went Quiet
emoji: "✉️"
description: Finds email threads where you sent the last message and got nothing back, reads each one for what was promised, and saves a specific follow-up draft on the existing thread.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-25
does:
  - Finds threads matching your label or domain where your message was last and older than your cutoff.
  - Writes a short follow-up per thread that references a specific detail and offers one easy way to reply.
  - Saves every follow-up as a draft on the existing thread and never sends anything.
tips:
  - title: Set the cutoff past your sales cycle
    detail: because chasing at five days reads as pressure in a deal that moves in thirty.
  - title: Read the varied openings
    detail: since the batch is written not to look like one template sent nine times.
  - title: Check the skipped list
    detail: as those are the threads where a reply arrived and you missed it.
steps:
  - title: Decide which threads count
    detail: by picking a Gmail label or a single company domain.
  - title: "Fill in {{label-or-domain}} and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Gmail.
---

## Prompt

Search Gmail for threads with {{label-or-domain}} where I sent the last message more than {{number}} days ago and got no reply. For each one read the thread to recall what was promised or asked, then write a short follow-up that references a specific detail from the conversation and gives them one easy way to respond. Vary the openings so the batch does not read as templated, and never send anything — save each as a draft on the existing thread. Reply with a list of the threads you drafted for and the ones you skipped because a reply had already arrived.

## Works with

- gmail.com

## Variables

- {{label-or-domain}}: label or domain
- {{number}}: how many days of silence before a thread qualifies
