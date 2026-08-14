---
title: Paginated Web Table Extracted Into One Clean Sheet
emoji: "🧷"
description: Follows a table through every page of pagination, converts abbreviated and currency values into plain numbers, and records the source URL for each row so any value can be traced back.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-08
does:
  - Follows pagination to the last page and keeps only the columns you name.
  - Converts values written as 1.2k or with currency symbols into plain numbers.
  - Records the source page URL per row and reports the total row count and any row skipped for a missing field.
tips:
  - title: Check the last page yourself
    detail: because a row count you can verify is what makes the extract trustworthy.
  - title: Name the columns you need
    detail: since a full-width table usually arrives with three columns you will never use.
  - title: Keep the source URL column
    detail: as it is the fastest way to settle a dispute about a number.
steps:
  - title: Open the source page
    detail: and note how the pagination works.
  - title: "Fill in {{table-description}}, {{source-url}}, {{column-1}}, {{column-2}}, and {{column-3}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets.
---

## Prompt

Extract the {{table-description}} table from {{source-url}}, following pagination until you reach the last page. Keep the columns {{column-1}}, {{column-2}}, and {{column-3}}, converting any values written as "1.2k" or with currency symbols into plain numbers. Record the source page URL for every row so each value can be traced back. Write everything into a new Google Sheet and tell me the total row count and any row you had to skip because a field was missing.

## Works with

- sheets.google.com

## Variables

- {{table-description}}: table description
- {{source-url}}: source URL
- {{column-1}}: column 1
- {{column-2}}: column 2
- {{column-3}}: column 3
