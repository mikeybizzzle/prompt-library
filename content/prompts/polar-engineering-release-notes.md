---
title: Release Notes Drafted From Everything Merged Since the Tag
emoji: "📝"
description: Groups every pull request merged since the last tag into features, improvements, and fixes, rewrites each one in user language, and saves the draft with the change that matters most on top.
category: polar
subcategory: polar-engineering
models: [claude, chatgpt, gemini]
roles: [developers, ai-engineers, product-managers]
type: text
featured: false
publishedAt: 2026-07-11
does:
  - Lists every pull request merged since your previous tag and groups them into features, improvements, and fixes.
  - Discards refactors, test changes, and invisible dependency bumps.
  - Rewrites each entry from the user point of view with a link, and opens with a paragraph on the one change that matters most.
tips:
  - title: Tag before you run it
    detail: because the previous tag is the only boundary it has.
  - title: Check the discard decisions
    detail: since a refactor that changed behavior belongs in the notes.
  - title: Rewrite the lead paragraph
    detail: if the change it picked is not the one you would put in the email.
steps:
  - title: Confirm the previous tag
    detail: and the version you are about to publish.
  - title: "Fill in {{owner-repo}}, {{previous-version}}, and {{version}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub and Google Docs.
---

## Prompt

List every pull request merged into {{owner-repo}} since the tag {{previous-version}}. Group them into new features, improvements, and fixes, discarding pure refactors, test changes, and dependency bumps that a user would never notice. Rewrite each entry in plain language describing what changed from the user's point of view, not the implementation, and link the PR. Save the draft as a Google Doc titled "{{version}} release notes" with a short paragraph at the top naming the one change that matters most.

## Works with

- github.com
- docs.google.com

## Variables

- {{owner-repo}}: the repository, written as owner/repo
- {{previous-version}}: previous version
- {{version}}: version
