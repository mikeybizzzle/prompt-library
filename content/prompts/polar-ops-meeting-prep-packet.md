---
title: Daily Meeting Prep Packet for Every External Meeting
emoji: "☕"
description: Reads today calendar, and for each meeting with an outside attendee pulls the last email thread, the linked agenda, and a refresher on who they are into one dated Google Doc.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-04-30
does:
  - Takes every meeting with at least one external attendee in chronological order.
  - Finds the last email thread, the linked agenda or doc, and a one-line refresher on each attendee.
  - Ends every section with the open item from last time that is still unresolved, and saves it as a dated doc.
tips:
  - title: Let it run before you wake
    detail: because the packet is only useful if it is waiting rather than requested.
  - title: Read the unresolved lines first
    detail: since the open item from last time is what the meeting is actually for.
  - title: Attach agendas to invites
    detail: as the packet gets sharper when the invite links a doc.
steps:
  - title: Tidy today calendar
    detail: so external attendees are on the invite rather than in the notes.
  - title: "Fill in {{date}}"
    detail: used in the document title.
  - title: Run it in a browser agent
    detail: signed in to Google Calendar, Gmail, Docs, and LinkedIn.
---

## Prompt

Look at my Google Calendar for today and take each meeting with at least one external attendee. For each, find the last email thread with those attendees, the linked agenda or doc if the invite has one, and a one-line refresher on the attendee's role and company from LinkedIn. Write a prep packet with one section per meeting in chronological order, ending each section with the open item from last time that is still unresolved. Save it as a Google Doc titled "Prep — {{date}}" and send me the link.

## Works with

- calendar.google.com
- gmail.com
- docs.google.com
- linkedin.com

## Suggested cadence

Every day at 6:30am.

## Variables

- {{date}}: today's date, used in the document title
