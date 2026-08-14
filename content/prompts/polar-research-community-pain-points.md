---
title: Community Pain Point Scan Ranked by How Many People Raised It
emoji: "🔎"
description: Reads 30 days of Reddit and Hacker News threads for complaint language about a product category, clusters the specific problems into themes, and posts the ranked list to Slack with quotes.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-03-07
does:
  - Pulls the specific problem each commenter describes from the top 20 threads and ignores generic praise.
  - Clusters the problems into themes and counts how many distinct people raised each one.
  - Posts the ranked themes to Slack with two representative quotes and links per theme.
tips:
  - title: Name the category, not your brand
    detail: because the useful complaints are usually about the job, not about you.
  - title: Watch the count, not the quote
    detail: since one loud thread can make a rare problem look like a theme.
  - title: Compare two runs a month apart
    detail: to see which complaints are structural and which were one bad release.
steps:
  - title: Pick the product or category
    detail: people would actually name in a forum post.
  - title: "Fill in {{product-or-category}} and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: connected to the Slack workspace you want the digest in.
---

## Prompt

Search Reddit and Hacker News for posts and comments from the last 30 days mentioning {{product-or-category}} alongside complaint language such as "frustrating", "switched from", or "wish it could". Open the top 20 threads and pull out the specific problem each commenter describes, ignoring generic praise. Cluster the problems into themes and count how many distinct people raised each one. Post the ranked theme list with two representative quotes and links per theme into the {{channel-name}} Slack channel.

## Works with

- reddit.com
- news.ycombinator.com
- slack.com

## Suggested cadence

Every Monday at 9:00am.

## Variables

- {{product-or-category}}: product or category
- {{channel-name}}: the Slack channel the ranked list is posted to
