---
title: API Doc Drift Check Between Published Reference and Code
emoji: "🧭"
description: Compares every documented endpoint against the routes and schemas in the repository, reports each mismatch with what the docs claim and what the code does, and opens an issue.
category: polar
subcategory: polar-docs
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2026-07-20
does:
  - Checks method, path, required parameters, and response fields for every documented endpoint against the code.
  - Lists any endpoint that exists in code but is missing from the docs.
  - Reports each mismatch with links to both sides and opens a GitHub issue, or replies that nothing has drifted.
tips:
  - title: Point it at the source path
    detail: because a whole-repo scan finds internal routes that were never meant to be public.
  - title: Run it after each release
    detail: since drift accumulates fastest in the week a version ships.
  - title: Fix the missing endpoints first
    detail: as an undocumented route is worse than a stale parameter.
steps:
  - title: Find the published reference
    detail: and the directory the routes actually live in.
  - title: "Fill in {{docs-url}}, {{owner-repo}}, and {{source-path}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub.
---

## Prompt

Compare the published API reference at {{docs-url}} against the route and schema definitions in {{owner-repo}} under {{source-path}}. For every documented endpoint check that the method, path, required parameters, and response fields still match the code, and list any endpoint that exists in code but is missing from the docs. Report each mismatch with the endpoint, what the docs claim, what the code does, and links to both. Open a GitHub issue containing the list, or reply that nothing has drifted.

## Works with

- github.com

## Suggested cadence

Every Tuesday at 11:00am.

## Variables

- {{docs-url}}: docs URL
- {{owner-repo}}: the repository, written as owner/repo
- {{source-path}}: source path
