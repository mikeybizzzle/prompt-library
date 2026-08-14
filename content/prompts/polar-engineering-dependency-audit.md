---
title: Dependency Upgrade Audit Sorted by How Risky Each Bump Is
emoji: "📦"
description: Compares pinned versions against the latest published ones, summarizes the breaking changes and advisories behind every major bump, and opens a GitHub issue with three sorted lists.
category: polar
subcategory: polar-engineering
models: [claude, chatgpt, gemini]
roles: [developers, ai-engineers, product-managers]
type: text
featured: false
publishedAt: 2026-07-05
does:
  - Compares each direct dependency pinned version against the latest published version.
  - Summarizes the breaking changes for anything a major version behind and notes open security advisories.
  - Opens a GitHub issue containing safe patch bumps, minor bumps worth batching, and major bumps needing real work.
tips:
  - title: Run it before a quiet week
    detail: because the batched minor bumps are the part you actually want to schedule.
  - title: Read the advisories first
    detail: since a security fix changes the priority of an otherwise boring upgrade.
  - title: Keep the issue open
    detail: as it becomes the record of what you chose not to upgrade and why.
steps:
  - title: Check the manifest is current
    detail: and that versions are pinned rather than floating.
  - title: "Fill in {{owner-repo}} and {{date}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub with issue permissions.
---

## Prompt

Read the dependency manifest in {{owner-repo}} and for each direct dependency look up the latest published version and the current pinned version. For anything behind by a major version, open the release notes and summarize the breaking changes in one or two lines, and note whether the package has an open security advisory. Sort into safe patch bumps, minor bumps worth batching, and major bumps needing real work. Open a GitHub issue in the repo titled "Dependency audit — {{date}}" containing the three lists.

## Works with

- github.com

## Variables

- {{owner-repo}}: the repository, written as owner/repo
- {{date}}: the date used in the issue title
