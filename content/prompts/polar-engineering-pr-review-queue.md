---
title: Pull Request Review Queue Split by Who Is Blocking
emoji: "🔀"
description: Lists every pull request waiting longer than your threshold, records CI state and unresolved comments, and posts two Slack lists separating reviewer blockers from author blockers.
category: polar
subcategory: polar-engineering
models: [claude, chatgpt, gemini]
roles: [developers, ai-engineers, product-managers]
type: text
featured: false
publishedAt: 2026-07-02
does:
  - Records author, title, lines changed, requested reviewers, CI state, and unresolved comments for each waiting PR.
  - Separates the pull requests blocked on a reviewer from the ones blocked on the author.
  - Posts both lists to Slack oldest first and mentions the specific person each PR is waiting on.
tips:
  - title: Set the threshold to your norm
    detail: because a queue that lists everything open gets read as background noise.
  - title: Post it before standup
    detail: so the blocked list is resolved in the meeting rather than after it.
  - title: Watch the author-blocked side
    detail: since those are usually forgotten rather than contested.
steps:
  - title: Pick the repository
    detail: and decide how long is too long to wait.
  - title: "Fill in {{owner-repo}}, {{number}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub and Slack.
---

## Prompt

List every open pull request in {{owner-repo}} that has been waiting on review for more than {{number}} hours. For each one record the author, title, lines changed, requested reviewers, whether CI is green, and whether a review comment is unresolved. Separate the ones blocked on a reviewer from the ones blocked on the author. Post the two lists to Slack in {{channel-name}}, oldest first, and mention the specific person each PR is waiting on.

## Works with

- github.com
- slack.com

## Suggested cadence

Every day at 9:30am.

## Variables

- {{owner-repo}}: the repository, written as owner/repo
- {{number}}: how many hours of waiting counts as blocked
- {{channel-name}}: channel name
