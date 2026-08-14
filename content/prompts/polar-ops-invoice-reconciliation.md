---
title: Invoice Reconciliation Against Payments and the Ledger
emoji: "🧾"
description: Extracts every invoice from a date range of email, matches each against Stripe or your ledger sheet, and replies with only the mismatches, missing payments, and overdue items.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-04-18
does:
  - Extracts vendor, invoice number, amount, currency, and due date from each invoice attachment.
  - Looks for a matching charge in Stripe or in your ledger sheet and flags anything unmatched, out of tolerance, or past due.
  - Writes every invoice into the ledger sheet with a status column and replies with the flagged items only.
tips:
  - title: Reconcile one month at a time
    detail: because a wide date range makes the flagged list too long to chase.
  - title: Set the tolerance in currency
    detail: so rounding and fee differences do not show up as real mismatches.
  - title: Keep the status column
    detail: as the next run reads it and skips what is already settled.
steps:
  - title: Set up the ledger sheet
    detail: with columns for vendor, invoice number, amount, due date, and status.
  - title: "Fill in {{start-date}}, {{end-date}}, {{sheet-url}}, and {{tolerance}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Gmail, Stripe, and Google Sheets.
---

## Prompt

Search Gmail for messages with invoice attachments received between {{start-date}} and {{end-date}}. For each invoice extract the vendor, invoice number, amount, currency, and due date, then look for a matching charge in Stripe or in the ledger sheet at {{sheet-url}}. Flag anything with no match, an amount differing by more than {{tolerance}}, or a due date already past. Write every invoice as a row in the ledger sheet with a status column, and reply with just the flagged items.

## Works with

- gmail.com
- stripe.com
- sheets.google.com

## Variables

- {{start-date}}: start date
- {{end-date}}: end date
- {{sheet-url}}: sheet URL
- {{tolerance}}: the amount difference you are willing to ignore
