---
title: Supplier Price Check Across Your Reorder List
emoji: "🏷️"
description: Prices every item on a reorder list at each supplier including shipping, records the results in dated columns so history survives, and reports the items that moved past your threshold.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-05-03
does:
  - Records price per unit including shipping, lead time, and product link from each supplier at your usual quantity.
  - Identifies the cheapest option that can still deliver inside your deadline.
  - Writes today prices into new dated columns and reports any item whose best price moved past your threshold.
tips:
  - title: Price at your real quantity
    detail: because the break points are where supplier rankings change.
  - title: Keep the dated columns
    detail: since the trend matters more than any single check.
  - title: Include shipping every time
    detail: as the cheapest unit price often loses once freight is added.
steps:
  - title: Keep the reorder list current
    detail: with one row per item you actually buy.
  - title: "Fill in {{sheet-url}}, {{supplier-site-1}}, {{supplier-site-2}}, {{location}}, {{quantity}}, {{days}}, and {{percent}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets and your supplier accounts.
---

## Prompt

For each item in the reorder list at {{sheet-url}}, search {{supplier-site-1}}, {{supplier-site-2}}, and Amazon for the current price per unit including shipping to {{location}} at our usual quantity of {{quantity}}. Record the price, lead time, and product link from each supplier and identify the cheapest option that can deliver within {{days}} days. Update the sheet with today's prices in new dated columns rather than overwriting history. Reply with any item whose best price moved more than {{percent}} since the previous check.

## Works with

- amazon.com
- sheets.google.com

## Variables

- {{sheet-url}}: sheet URL
- {{supplier-site-1}}: supplier site 1
- {{supplier-site-2}}: supplier site 2
- {{location}}: location
- {{quantity}}: the quantity you normally order
- {{days}}: the delivery deadline in days
- {{percent}}: the price move that should be reported
