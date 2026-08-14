---
title: Competitor Pricing Teardown Table From Public Plan Pages
emoji: "🧾"
description: Reads the pricing page of three named competitors and builds one Google Sheet comparing every plan, its price, its limits, and the features it gates, with add-ons and demo-gated pricing flagged.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-02-17
does:
  - Records every named plan with its monthly and annual price, its seat or usage limit, and the two or three features that plan gates.
  - Lists anything sold as an add-on separately and flags any company that hides pricing behind a demo request.
  - Saves one comparison table with plans as rows and companies as columns to a new Google Sheet.
tips:
  - title: Name direct substitutes only
    detail: because a table that mixes adjacent tools has no shared tiers to line up.
  - title: Keep the sheet from the last run
    detail: since the difference between two teardowns is the part worth reading.
  - title: Ask for the demo-gated names separately
    detail: so the companies with no public pricing become a call list instead of blank cells.
steps:
  - title: Pick three competitors
    detail: that publish pricing without a login, and have their URLs to hand.
  - title: Fill in the placeholders
    detail: "for {{competitor-1}}, {{competitor-2}}, {{competitor-3}}, and {{market}}."
  - title: Run it in a browser agent
    detail: signed in to the Google account that should own the new sheet.
---

## Prompt

Visit the pricing page of each of these companies: {{competitor-1}}, {{competitor-2}}, {{competitor-3}}. For each one record every named plan, its monthly and annual price, the seat or usage limit, and the two or three features that plan gates. Note anything sold as an add-on separately, and flag any company that hides pricing behind a demo request. Build a single comparison table with plans as rows and companies as columns, and save it to a new Google Sheet titled "{{market}} pricing teardown".

## Works with

- sheets.google.com
- crunchbase.com

## Variables

- {{competitor-1}}: competitor 1
- {{competitor-2}}: competitor 2
- {{competitor-3}}: competitor 3
- {{market}}: the market name used in the sheet title
