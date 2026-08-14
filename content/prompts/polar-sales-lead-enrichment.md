---
title: Lead List Enrichment Written Back Into Your Sheet
emoji: "🗂️"
description: Works down a lead sheet filling the empty enrichment columns with headquarters, headcount band, industry, funding stage, and the LinkedIn URL of the person in the role you target.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-10
does:
  - Fills headquarters city, employee count band, industry, funding stage, and the target contact LinkedIn URL for every unenriched row.
  - "Writes \"not found\" instead of guessing when a field is genuinely unavailable."
  - Stops at your row limit and reports how many rows were enriched and how many were skipped.
tips:
  - title: Set a small row limit first
    detail: because the first 20 rows tell you whether the column mapping is right.
  - title: Name one job title, not a family
    detail: "since {{target-job-title}} decides which profile gets written into the row."
  - title: "Keep the \"not found\" values"
    detail: as they mark the rows a human should check rather than rows to rerun.
steps:
  - title: Prepare the sheet
    detail: with a filled Company column and empty, clearly named enrichment columns.
  - title: "Fill in {{sheet-url}}, {{target-job-title}}, and {{row-limit}}"
    detail: before you run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets and LinkedIn.
---

## Prompt

Open the Google Sheet at {{sheet-url}} and work through every row where the Company column is filled but the enrichment columns are empty. For each company find the headquarters city, employee count band, industry, funding stage, and the LinkedIn URL of the person holding the {{target-job-title}} role. Write the values into the matching columns and put "not found" rather than guessing when a field is genuinely unavailable. Stop after {{row-limit}} rows and reply with a count of rows enriched and rows skipped.

## Works with

- sheets.google.com
- linkedin.com
- crunchbase.com

## Variables

- {{sheet-url}}: sheet URL
- {{target-job-title}}: target job title
- {{row-limit}}: how many rows to process in one run
