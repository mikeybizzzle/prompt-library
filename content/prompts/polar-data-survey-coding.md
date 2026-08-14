---
title: Open-Text Survey Coding Into Countable Categories
emoji: "🏷️"
description: Derives a small category set from the survey answers themselves, tags every response with a primary and optional secondary code, and adds definitions and frequency counts to a summary tab.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-05
does:
  - Derives categories from the responses rather than imposing a scheme, with a one-line definition for each.
  - Tags every response with one primary category and an optional secondary, leaving true outliers as other.
  - Adds the tags as new columns and puts the definitions and frequency counts into a summary tab.
tips:
  - title: Cap the category count low
    detail: because twenty categories over 200 responses cannot be counted meaningfully.
  - title: Read the definitions before the counts
    detail: since a category that means two things makes its count useless.
  - title: Check the other bucket
    detail: as a large one means the scheme missed a real theme.
steps:
  - title: Find the response column
    detail: and confirm one answer per row.
  - title: "Fill in {{column-name}}, {{sheet-url}}, and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets.
---

## Prompt

Read the free-text answers in the {{column-name}} column of {{sheet-url}}. Derive a set of no more than {{number}} mutually distinct categories from the responses themselves rather than imposing categories up front, and write a one-line definition of each. Tag every response with one primary category and an optional secondary, leaving anything genuinely unclassifiable as "other". Add the tags as new columns, then put the category definitions and a frequency count of each into a summary tab.

## Works with

- sheets.google.com
- docs.google.com

## Variables

- {{column-name}}: column name
- {{sheet-url}}: sheet URL
- {{number}}: the maximum number of categories to derive
