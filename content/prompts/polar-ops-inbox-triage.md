---
title: Morning Inbox Triage Into Reply, Read, and Noise
emoji: "📬"
description: Reads the overnight unread mail, sorts each thread by what it needs rather than who sent it, labels and archives accordingly, and returns the reply list in the order to work it.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-04-27
does:
  - Sorts each unread message into needs a reply from you, needs a decision elsewhere, useful to read, or noise.
  - Applies the matching label, archives the noise, and leaves everything else unread.
  - Returns a numbered reply list with the sender, what they want in one line, and any stated deadline.
tips:
  - title: Create the four labels first
    detail: because the sort only holds if the labels already exist.
  - title: Trust the order it returns
    detail: since it ranks by stated deadline rather than by arrival time.
  - title: Check the noise bucket weekly
    detail: for the first fortnight, until you trust what it archives.
steps:
  - title: Set up your Gmail labels
    detail: for reply, decide, read, and noise.
  - title: "Fill in {{number}}"
    detail: with how many hours back to read.
  - title: Run it in a browser agent
    detail: signed in to Gmail.
---

## Prompt

Read every unread Gmail message from the last {{number}} hours. Sort each into needs a reply from me, needs a decision but not from me, useful to read, or noise, using the thread content rather than the sender alone. Apply the matching Gmail label, archive everything in the noise bucket, and leave the rest unread. Reply with a numbered list of the needs-a-reply items in the order I should handle them, each with the sender, one line on what they want, and the deadline if one was stated.

## Works with

- gmail.com

## Suggested cadence

Every day at 7:45am.

## Variables

- {{number}}: how many hours of unread mail to read
