---
title: Account Hiring Signals That Point at an Open Budget
emoji: "📶"
description: Checks the careers page and LinkedIn jobs tab of every account on your list, flags the ones hiring into a function you care about or opening several roles at once, and posts them to Slack.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-29
does:
  - Lists roles posted since the last run for each company on your account list.
  - Flags any company hiring into your chosen function or posting more than your threshold of roles at once.
  - Records role titles, posting dates, and links, and posts the flagged accounts to Slack with a reason each is worth a touch.
tips:
  - title: Pick the function that implies your product
    detail: because that is what turns a hiring post into a buying signal.
  - title: Keep the account list short
    detail: since this is for named accounts rather than an open market sweep.
  - title: Act the same week
    detail: as the window between a posting and a budget decision is not long.
steps:
  - title: Build the account list
    detail: with a careers page URL per company where you have one.
  - title: "Fill in {{account-list-url}}, {{function}}, {{number}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Slack.
---

## Prompt

For each company in {{account-list-url}}, open its careers page and LinkedIn jobs tab and list roles posted since the last run. Flag any company that opened a role in {{function}} or that posted more than {{number}} roles at once, since both suggest budget is moving. Record the company, role titles, posting dates, and links. Post the flagged accounts to Slack in {{channel-name}} with one line on why each one is worth a touch this week.

## Works with

- linkedin.com
- indeed.com
- slack.com

## Suggested cadence

Every Tuesday at 9:00am.

## Variables

- {{account-list-url}}: account list URL
- {{function}}: the function whose hiring signals a budget, such as data engineering
- {{number}}: how many simultaneous roles should raise a flag
- {{channel-name}}: channel name
