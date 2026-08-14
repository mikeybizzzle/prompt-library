---
title: Price Drop Watch That Only Emails When It Matters
emoji: "💸"
description: Checks three product pages for price and stock, logs a dated row every run whether or not anything changed, and emails you only when a price crosses your target or stock returns.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-14
does:
  - Reads current price and stock status for each product page you list.
  - Appends a dated row per product to your sheet on every run, changed or not.
  - Emails you with the old price, new price, and a direct link only when a threshold is crossed, and stays silent otherwise.
tips:
  - title: Set the target price honestly
    detail: because a threshold you would not actually act on turns this into noise.
  - title: Keep the unchanged rows
    detail: since the price history is what tells you whether a drop is real or routine.
  - title: Watch three products, not thirty
    detail: as a daily check across a long list will trip retailer rate limits.
steps:
  - title: Collect the product URLs
    detail: and create the tracking sheet.
  - title: "Fill in {{product-url-1}}, {{product-url-2}}, {{product-url-3}}, {{sheet-url}}, {{target-price}}, and {{email-address}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets and your email.
---

## Prompt

Check the current price and stock status for each of these product pages: {{product-url-1}}, {{product-url-2}}, {{product-url-3}}. Compare against the last recorded price in {{sheet-url}} and append a dated row for each product regardless of whether it changed. If a price dropped below {{target-price}} or an out-of-stock item came back, email me at {{email-address}} with the product name, old price, new price, and a direct link. Stay silent when nothing crossed a threshold.

## Works with

- amazon.com
- sheets.google.com
- gmail.com

## Suggested cadence

Every day at 9:00am.

## Variables

- {{product-url-1}}: product URL 1
- {{product-url-2}}: product URL 2
- {{product-url-3}}: product URL 3
- {{sheet-url}}: sheet URL
- {{target-price}}: the price that should trigger an email
- {{email-address}}: email address
