---
title: Vendor Renewal Audit of Every Recurring Software Charge
emoji: "🔁"
description: Builds a year of software spend from email receipts, confirms seat counts on each billing page, and flags the subscriptions where most seats are unused or nothing has billed in months.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-04-21
does:
  - Inventories vendor, plan, seat count, amount, billing period, and next renewal date for every recurring subscription.
  - Confirms assigned versus purchased seats on each vendor admin or billing page.
  - Flags subscriptions above your unused-seat threshold or with no charge in six months, sorted by annual cost.
tips:
  - title: Run it a month before renewals cluster
    detail: because cancelling the day before a charge rarely works.
  - title: Set the unused-seat percent low
    detail: since seats bought for a team that shrank are the usual saving.
  - title: Keep the sheet as the record
    detail: as the next audit compares against it rather than starting over.
steps:
  - title: Make sure receipts reach one inbox
    detail: so a year of billing email is actually searchable.
  - title: "Fill in {{percent}}"
    detail: with the share of unused seats that should raise a flag.
  - title: Run it in a browser agent
    detail: signed in to Gmail, Stripe, and the vendor admin pages.
---

## Prompt

Search Gmail for receipts and renewal notices from the last 12 months and build an inventory of every recurring software subscription, capturing vendor, plan, seat count, amount, billing period, and next renewal date. Cross-check each vendor against the admin or billing page where you can reach it to confirm the current seat count and how many seats are actually assigned. Flag any subscription where more than {{percent}} of seats are unused or where nothing has been billed in over six months. Save the inventory to a Google Sheet sorted by annual cost, with the flagged rows highlighted at the top.

## Works with

- gmail.com
- stripe.com
- sheets.google.com

## Variables

- {{percent}}: the share of unused seats that should raise a flag
