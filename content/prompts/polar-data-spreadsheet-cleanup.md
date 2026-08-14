---
title: Spreadsheet Cleanup Pass Into a Safe Duplicate Tab
emoji: "🧹"
description: Normalizes dates, phone numbers, company names, and stray whitespace in a messy tab, does the work in a copy so the original survives, and flags the rows it could not fix.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-05-27
does:
  - Standardizes dates to YYYY-MM-DD, phone numbers to one format, company names without legal suffixes, and text without stray whitespace.
  - Works in a duplicate tab named clean so the original data stays intact.
  - Adds a notes column flagging rows it could not confidently normalize and reports cells changed per column.
tips:
  - title: Name the columns to touch
    detail: because a whole-sheet pass will normalize something you needed left alone.
  - title: Read the flagged rows yourself
    detail: since those are the ones where a guess would have lost data.
  - title: Keep the original tab
    detail: as the comparison is the only way to check the pass did what you wanted.
steps:
  - title: Identify the messy columns
    detail: and the exact tab they sit on.
  - title: "Fill in {{sheet-url}}, {{tab-name}}, and {{column-names}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets.
---

## Prompt

Open the Google Sheet at {{sheet-url}} and clean the {{tab-name}} tab. Standardize the {{column-names}} columns so dates use YYYY-MM-DD, phone numbers use a single format, company names drop suffixes like Inc and Ltd, and text fields lose leading and trailing whitespace. Do the work in a duplicate tab named "clean" so the original stays intact, and add a notes column flagging any row you could not confidently normalize. Reply with the count of cells changed per column and the list of flagged rows.

## Works with

- sheets.google.com

## Variables

- {{sheet-url}}: sheet URL
- {{tab-name}}: tab name
- {{column-names}}: column names
