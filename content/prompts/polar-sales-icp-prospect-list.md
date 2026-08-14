---
title: Prospect List Built From a Verified Buying Signal
emoji: "🎯"
description: Builds a list of companies matching your industry, size, and region filters, confirms the buying signal on the company own site, and writes the verified rows to a new Google Sheet.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-28
does:
  - Finds companies matching the industry, employee range, region, and signal you specify.
  - Confirms the signal on the company site or careers page before the company is included.
  - Records company, website, employee count, the verified signal, and the most likely buyer, sorted by signal recency.
tips:
  - title: Pick one signal, not three
    detail: because the list is only as sharp as the single trigger you can verify.
  - title: Keep the number modest
    detail: since 25 verified rows beat 200 rows nobody trusts.
  - title: Sort by recency, then work down
    detail: as a signal from last week is worth more than one from last quarter.
steps:
  - title: Write down the filter
    detail: "you would give a researcher: industry, size, region, and one signal."
  - title: "Fill in {{number}}, {{industry}}, {{employee-range}}, {{region}}, and {{signal}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Google Sheets.
---

## Prompt

Build a list of {{number}} companies matching this profile: {{industry}}, {{employee-range}}, based in {{region}}, and showing a signal of {{signal}}. Use LinkedIn search and Crunchbase to find them, and confirm the signal on the company's own site or careers page before including it. Capture company name, website, employee count, the signal you verified, and the name and title of the most likely buyer. Write the list to a new Google Sheet and sort it by how recent the signal is.

## Works with

- linkedin.com
- crunchbase.com
- sheets.google.com

## Variables

- {{number}}: how many companies you want on the list
- {{industry}}: industry
- {{employee-range}}: employee range
- {{region}}: region
- {{signal}}: the buying signal to verify, such as hiring for a role, using a tool, or recent funding
