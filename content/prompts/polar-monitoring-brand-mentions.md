---
title: Brand Mention Sweep With Negative Mentions on Top
emoji: "📡"
description: Searches X, Reddit, and Hacker News for new mentions since the last run, ignores your own posts and list mentions, and posts the real ones to Slack with sentiment and permalinks.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-17
does:
  - Finds mentions posted since the last run and ignores your own accounts and posts that only name you in a list.
  - Captures author, platform, permalink, a one-line summary, and whether sentiment is positive, negative, or neutral.
  - Posts new mentions to Slack with negative ones and large accounts at the top.
tips:
  - title: Use the name people type
    detail: because the mention search misses anything written the way your logo spells it.
  - title: Reply to the negative ones fast
    detail: since the ordering exists to make that possible within the hour.
  - title: Widen the interval if it is quiet
    detail: as an empty check every four hours is a check you will start ignoring.
steps:
  - title: Decide what counts as a mention
    detail: including product names and any common misspelling.
  - title: "Fill in {{brand-or-product-name}} and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Slack.
---

## Prompt

Search X, Reddit, and Hacker News for mentions of {{brand-or-product-name}} posted since the last run. Ignore anything from our own accounts and any post that only names the brand in a list. For each real mention capture the author, platform, permalink, a one-line summary, and whether the sentiment is positive, negative, or neutral. Post the new mentions to Slack in {{channel-name}}, putting anything negative or from an account with a large following at the top.

## Works with

- x.com
- reddit.com
- news.ycombinator.com
- slack.com

## Suggested cadence

Every 4 hours.

## Variables

- {{brand-or-product-name}}: brand or product name
- {{channel-name}}: the Slack channel mentions are posted to
