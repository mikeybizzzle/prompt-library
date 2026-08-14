---
title: Investor Portfolio Scan With Sector Breakdown and Thesis
emoji: "📈"
description: Walks a fund portfolio page, pulls each company profile from Crunchbase, and writes a Google Doc breaking the portfolio down by sector share with a short read on the fund thesis.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-02-26
does:
  - Lists every company on the portfolio page with its sector, founding year, latest round stage, and total raised.
  - Groups the companies by sector and calculates what share of the portfolio each sector holds.
  - Writes the breakdown plus three sentences on the apparent thesis into a Google Doc.
tips:
  - title: Check the portfolio page is current
    detail: because funds often leave exited companies on it without marking them.
  - title: Run it before a pitch
    detail: so you can name the portfolio companies adjacent to what you are building.
  - title: Ask for the last two years only
    detail: when you want the current thesis rather than the whole history.
steps:
  - title: Open the fund site
    detail: and confirm the portfolio is listed on a page rather than in a PDF.
  - title: "Fill in {{fund-name}}"
    detail: exactly as the fund writes it.
  - title: Run it in a browser agent
    detail: that can reach Crunchbase and Google Docs.
---

## Prompt

Go to the portfolio page for {{fund-name}} and list every company shown. For each one open its Crunchbase profile and record the sector, founding year, latest round stage, and total raised. Group the results by sector and calculate what share of the portfolio each sector represents. Write the breakdown plus three sentences on the fund's apparent thesis into a Google Doc called "{{fund-name}} portfolio scan".

## Works with

- crunchbase.com
- docs.google.com

## Variables

- {{fund-name}}: fund name
