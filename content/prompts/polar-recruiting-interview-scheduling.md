---
title: Interview Scheduling Round With Held Slots and Drafted Offers
emoji: "📆"
description: Finds blocks where the whole panel is free, drafts an email offering three of them in the candidate time zone, and holds each slot as a tentative calendar event.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-04-06
does:
  - Finds blocks of your chosen length where you and both interviewers are free inside your working window.
  - Drafts an email per candidate offering three slots in their time zone and naming who they will meet.
  - Creates tentative holds on the calendar and reports which candidates had no workable overlap.
tips:
  - title: Keep the working window narrow
    detail: because a wide one produces slots nobody on the panel actually wants.
  - title: Clear the holds after booking
    detail: since the tentative events stay on the calendar until someone removes them.
  - title: Handle the no-overlap names by hand
    detail: as those are the candidates worth a direct message rather than another sweep.
steps:
  - title: Confirm the panel
    detail: and that their calendars are visible to you.
  - title: "Fill in {{interviewer-1}}, {{interviewer-2}}, {{number}}, {{duration}}, {{start-time}}, {{end-time}}, and {{candidate-list-or-sheet-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Calendar and Gmail.
---

## Prompt

Look at my Google Calendar and the calendars of {{interviewer-1}} and {{interviewer-2}} for the next {{number}} business days and find {{duration}} blocks where the required panel is free between {{start-time}} and {{end-time}}. For each candidate in {{candidate-list-or-sheet-url}}, draft an email offering three of those slots in their stated time zone and explaining who they will meet. Hold the slots by creating tentative calendar events named "HOLD — {{candidate}} interview". Save the emails as drafts and tell me which candidates had no workable overlap.

## Works with

- calendar.google.com
- gmail.com

## Variables

- {{interviewer-1}}: interviewer 1
- {{interviewer-2}}: interviewer 2
- {{number}}: how many business days ahead to search
- {{duration}}: how long each interview block should be
- {{start-time}}: start time
- {{end-time}}: end time
- {{candidate-list-or-sheet-url}}: candidate list or sheet URL
- {{candidate}}: used in the hold event title
