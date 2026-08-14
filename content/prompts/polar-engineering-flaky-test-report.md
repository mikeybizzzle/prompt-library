---
title: Flaky Test Report Ranked by Failure Rate and Cause
emoji: "🎲"
description: Compares recent CI runs to find tests that both failed and passed on unchanged commits, reads the failure logs for the top offenders, and posts a ranked table to Slack.
category: polar
subcategory: polar-engineering
models: [claude, chatgpt, gemini]
roles: [developers, ai-engineers, product-managers]
type: text
featured: false
publishedAt: 2026-07-14
does:
  - Finds every test that failed at least once but also passed on an unchanged commit, with a count of failed runs.
  - Opens the failure logs for the worst offenders and classifies each as a timeout, a race, or an ordering dependency.
  - Posts a ranked table of test name, failure rate, and suspected cause to Slack.
tips:
  - title: Use enough runs to be sure
    detail: because a test that failed once is not yet flaky.
  - title: Run it at the end of the week
    detail: so the fix lands before the next sprint inherits the noise.
  - title: Fix by cause, not by rank
    detail: since one shared timeout usually explains several entries.
steps:
  - title: Pick the branch
    detail: that everyone actually merges into.
  - title: "Fill in {{number}}, {{branch-name}}, {{owner-repo}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub and Slack.
---

## Prompt

Look at the last {{number}} CI runs on the {{branch-name}} branch of {{owner-repo}}. Find every test that failed at least once but also passed on an unchanged commit, and count how many runs each one failed. For the top offenders open the failure logs and note whether the error looks like a timeout, a race, or an ordering dependency. Post a ranked table of flaky test name, failure rate, and suspected cause to Slack in {{channel-name}}.

## Works with

- github.com
- slack.com

## Suggested cadence

Every Friday at 4:00pm.

## Variables

- {{number}}: how many recent CI runs to compare
- {{branch-name}}: branch name
- {{owner-repo}}: the repository, written as owner/repo
- {{channel-name}}: channel name
