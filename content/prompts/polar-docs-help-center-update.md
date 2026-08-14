---
title: Help Center Update Pass After a Product Change
emoji: "🩹"
description: Reads the changelog entry for a release, finds every help article still describing the old names or steps, and writes the exact corrected text for each affected sentence.
category: polar
subcategory: polar-docs
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2026-07-26
does:
  - Identifies what changed in the interface, the naming, or the workflow from the changelog entry.
  - Finds every help article mentioning the old names, screenshots, or steps.
  - Lists the exact sentences that are now wrong with corrected replacement text, and flags articles needing new screenshots.
tips:
  - title: Run it per release
    detail: because batching three releases makes it impossible to tell which change broke what.
  - title: Handle the screenshot flags separately
    detail: since retaking images is a different job than editing sentences.
  - title: Paste the replacements as given
    detail: as the corrections are written against the sentences already published.
steps:
  - title: Find the changelog entry
    detail: for the release you shipped.
  - title: "Fill in {{release-or-feature}} and {{help-center-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to your help center and Google Docs.
---

## Prompt

Read the changelog entry for {{release-or-feature}} and identify what changed in the interface, the naming, or the workflow. Search the help center at {{help-center-url}} for every article that mentions the old names, screenshots, or steps. For each affected article list the exact sentences that are now wrong and write the corrected replacement text. Put the article-by-article edit list into a Google Doc and flag any article whose screenshots need retaking.

## Works with

- notion.so
- docs.google.com

## Variables

- {{release-or-feature}}: release or feature
- {{help-center-url}}: help center URL
