---
title: Appointment Search That Only Offers Slots You Are Free For
emoji: "🦷"
description: Finds local providers who take your payment method, checks your calendar first so only free slots count, and returns the three best matches with a tentative hold on the top one.
category: polar
subcategory: polar-personal
models: [claude, chatgpt, gemini]
roles: [solopreneurs, freelancers, virtual-assistants]
type: text
featured: false
publishedAt: 2026-08-13
does:
  - Finds providers near you with availability in your window who accept your insurance or payment method.
  - Checks your calendar first and prefers the days and times you named.
  - Records name, address, distance, review average, earliest fitting slot, and booking link, then holds the top option.
tips:
  - title: Name your preferred times
    detail: because the first available slot is rarely the one you want.
  - title: Confirm by phone
    detail: since online availability is often out of date at small practices.
  - title: Remove the hold if you decline
    detail: as the tentative event stays on the calendar otherwise.
steps:
  - title: Decide the constraints
    detail: including how far you will travel and what you can pay with.
  - title: "Fill in {{service}}, {{location}}, {{insurance-or-payment-method}}, {{number}}, and {{preferred-days-and-times}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Calendar.
---

## Prompt

Find {{service}} near {{location}} that takes {{insurance-or-payment-method}} and has availability within the next {{number}} weeks. Check my Google Calendar first so you only consider slots when I am free, preferring {{preferred-days-and-times}}. For each provider record the name, address, distance, review average, the earliest slot that fits, and the booking link or phone number. Give me the three best matches in order and add a tentative calendar hold for the top option.

## Works with

- google.com
- calendar.google.com

## Variables

- {{service}}: the service you need, such as a dentist
- {{location}}: location
- {{insurance-or-payment-method}}: insurance or payment method
- {{number}}: how many weeks ahead to search
- {{preferred-days-and-times}}: preferred days and times
