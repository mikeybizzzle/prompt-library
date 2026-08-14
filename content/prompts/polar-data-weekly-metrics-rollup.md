---
title: Weekly Metrics Rollup Pulled From Every Source at Once
emoji: "🧾"
description: Collects last week revenue, subscriptions, closed issues, and one analytics metric, compares each against the prior week and a month ago, and posts the summary to Slack.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-11
does:
  - Pulls revenue and new subscriptions from Stripe, issues closed from Linear, and your chosen analytics metric.
  - Compares each figure to the prior week and the same week a month ago as percentages.
  - Appends a dated row to the rollup sheet and posts a Slack summary leading with whichever metric moved most.
tips:
  - title: Run it before your weekly meeting
    detail: so the numbers are on the table rather than being gathered during it.
  - title: Keep the month-ago comparison
    detail: because week-on-week alone makes every seasonal dip look like a problem.
  - title: Read the reason it gives
    detail: then check it, since the explanation is inferred from the data it saw.
steps:
  - title: Create the rollup sheet
    detail: with a date column and one column per metric.
  - title: "Fill in {{metric}}, {{analytics-url}}, {{sheet-url}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Stripe, Linear, Google Sheets, and Slack.
---

## Prompt

Pull last week's numbers from each source: revenue and new subscriptions from Stripe, issues closed from Linear, and {{metric}} from {{analytics-url}}. Compare each figure to the prior week and the same week a month ago, and calculate both changes as percentages. Append the figures to the rollup sheet at {{sheet-url}} as a new dated row. Then post a short summary to Slack in {{channel-name}} leading with whichever metric moved most and why the underlying data suggests it moved.

## Works with

- stripe.com
- linear.app
- sheets.google.com
- slack.com

## Suggested cadence

Every Monday at 7:30am.

## Variables

- {{metric}}: the analytics metric to pull
- {{analytics-url}}: analytics URL
- {{sheet-url}}: sheet URL
- {{channel-name}}: the Slack channel the summary is posted to
