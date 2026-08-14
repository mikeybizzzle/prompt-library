---
title: Compensation Benchmark Built From Live Job Postings
emoji: "💰"
description: Collects at least 15 open postings for a role at comparable companies, records the disclosed ranges and remote policy, and writes the percentile summary into a Google Sheet.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-04-12
does:
  - Records company, exact title, posted salary range, equity mention, remote policy, and required experience per posting.
  - Computes the median and the 25th and 75th percentiles of the disclosed ranges.
  - Notes how many postings disclosed nothing and saves the table and summary to a Google Sheet.
tips:
  - title: Match the company size band
    detail: because a range from a 5,000-person company tells you nothing about your offer.
  - title: Read the non-disclosure count
    detail: since a benchmark built on four disclosed ranges is not a benchmark.
  - title: Rerun it each hiring round
    detail: as posted ranges move faster than published salary surveys.
steps:
  - title: Decide the comparison set
    detail: by role title, location, and the employee range you compete with.
  - title: "Fill in {{role-title}}, {{location}}, and {{employee-range}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: that can reach Indeed, LinkedIn Jobs, and Google Sheets.
---

## Prompt

Find at least 15 currently open postings for {{role-title}} in {{location}} at companies with {{employee-range}} employees, using Indeed and LinkedIn Jobs. For each posting record the company, exact title, posted salary range where disclosed, equity mention, remote policy, and the required years of experience. Compute the median, 25th, and 75th percentile of the disclosed ranges and note how many postings disclosed nothing. Write the table and the percentile summary into a Google Sheet named "{{role-title}} comp benchmark".

## Works with

- indeed.com
- linkedin.com
- sheets.google.com

## Variables

- {{role-title}}: role title
- {{location}}: location
- {{employee-range}}: employee range
