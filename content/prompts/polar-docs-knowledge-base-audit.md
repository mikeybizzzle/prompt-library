---
title: Knowledge Base Audit for Stale, Duplicate, and Orphan Pages
emoji: "🗄️"
description: Inventories every page under a workspace parent with its age, author, and length, then flags stale, duplicated, stub, and unlinked pages with a keep, merge, update, or archive call.
category: polar
subcategory: polar-docs
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2026-07-29
does:
  - Inventories title, last edited date, last editor, and word count for every page under the parent.
  - Flags pages untouched past your threshold, duplicate topics, stubs under 100 words, and pages nothing links to.
  - Checks each flagged page before recommending keep, merge, update, or archive in a Google Sheet.
tips:
  - title: Set the stale threshold generously
    detail: because a reference page that is finished does not need editing.
  - title: Start with the duplicates
    detail: since two half-right pages cause more damage than one old page.
  - title: Archive rather than delete
    detail: as the audit is a recommendation and not everything flagged is dead.
steps:
  - title: Choose the parent page
    detail: that covers the section you want audited.
  - title: "Fill in {{parent-page}} and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Notion and Google Sheets.
---

## Prompt

Crawl the Notion workspace under {{parent-page}} and inventory every page with its title, last edited date, last editor, and word count. Flag pages untouched for more than {{number}} months, pairs of pages covering the same topic, pages under 100 words that look like abandoned stubs, and pages nothing else links to. Check each flagged page briefly to confirm it is genuinely stale rather than simply finished and stable. Write the inventory to a Google Sheet with a recommendation column of keep, merge, update, or archive.

## Works with

- notion.so
- sheets.google.com

## Variables

- {{parent-page}}: the Notion page to crawl under
- {{number}}: how many months untouched counts as stale
