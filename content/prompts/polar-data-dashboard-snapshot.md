---
title: Dashboard Snapshot Logged as Dated Trend History
emoji: "📊"
description: Reads three metrics off a dashboard for a set period, appends them as a dated row to a tracking sheet so history builds up, and calls out anything that moved past your threshold.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-05-30
does:
  - Sets the dashboard date range and reads each metric with the period-over-period change it shows.
  - Appends a dated row to your tracking sheet with each metric in its own column and never overwrites earlier rows.
  - Reports any metric that moved more than your threshold against the previous row, with both values.
tips:
  - title: Log it even when nothing moved
    detail: because the flat rows are what make a later spike readable.
  - title: Keep the period fixed
    detail: since a snapshot taken on a different range is not comparable to the row above it.
  - title: Track three metrics, not ten
    detail: as a wide sheet stops being read within a month.
steps:
  - title: Create the tracking sheet
    detail: with a date column and one column per metric.
  - title: "Fill in {{dashboard-url}}, {{period}}, {{metric-1}}, {{metric-2}}, {{metric-3}}, {{sheet-url}}, and {{percent}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to the dashboard and Google Sheets.
---

## Prompt

Open the dashboard at {{dashboard-url}} and set the date range to {{period}}. Read the values for {{metric-1}}, {{metric-2}}, and {{metric-3}}, along with the period-over-period change each one shows. Append a dated row to the tracking sheet at {{sheet-url}} with today's date and each metric in its own column, never overwriting earlier rows. If any metric moved more than {{percent}} against the previous row, say so in your reply with the metric name and both values.

## Works with

- sheets.google.com
- stripe.com

## Variables

- {{dashboard-url}}: dashboard URL
- {{period}}: the date range to read, such as last 7 days
- {{metric-1}}: metric 1
- {{metric-2}}: metric 2
- {{metric-3}}: metric 3
- {{sheet-url}}: sheet URL
- {{percent}}: the move that should be called out
