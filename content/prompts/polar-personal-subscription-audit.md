---
title: Personal Subscription Audit With Cancellation Links
emoji: "🧯"
description: Finds every recurring personal charge in a year of email receipts, works out the annual cost of each, and records the direct cancellation URL alongside anything you have stopped using.
category: polar
subcategory: polar-personal
models: [claude, chatgpt, gemini]
roles: [solopreneurs, freelancers, virtual-assistants]
type: text
featured: false
publishedAt: 2026-08-04
does:
  - Records service, plan, amount, billing frequency, annualized cost, next charge date, and the cancellation page URL.
  - Flags anything whose price rose during the year.
  - Flags anything with no usage or activity email in three months, sorted by annual cost with a total.
tips:
  - title: Read the annual column
    detail: because a monthly charge you ignore is a number you would notice yearly.
  - title: Cancel from the recorded URL
    detail: since the hard part of cancelling is finding the page.
  - title: Rerun it every six months
    detail: as new subscriptions appear faster than old ones get cancelled.
steps:
  - title: Point it at the inbox
    detail: that receives your receipts.
  - title: Run it as written
    detail: because this one has no placeholders to fill.
  - title: Run it in a browser agent
    detail: signed in to Gmail and Google Sheets.
---

## Prompt

Search Gmail for receipts and renewal notices from the last 12 months and identify every recurring personal subscription. For each one record the service, plan, amount, billing frequency, the annualized cost, the next charge date, and the direct URL of the page where it can be cancelled. Flag anything whose price rose during the year and anything I have not received a usage or activity email from in over three months. Save the list to a Google Sheet sorted by annual cost with a total at the bottom.

## Works with

- gmail.com
- sheets.google.com
