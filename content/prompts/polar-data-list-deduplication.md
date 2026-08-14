---
title: Contact List Dedupe That Keeps Every Field It Merges
emoji: "🔗"
description: Finds duplicate contacts by email and by name plus company, merges the missing fields into the fullest record, and moves the losing rows to a separate tab instead of deleting them.
category: polar
subcategory: polar-data
models: [claude, chatgpt, gemini]
roles: [analysts, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-02
does:
  - Matches duplicates on email first, then on full name plus company so near-duplicates still surface.
  - Keeps the record with the most filled fields and copies any missing value across from the others.
  - Moves losing rows to a merged tab, records what each survivor absorbed, and names any group left alone as ambiguous.
tips:
  - title: Take a copy first
    detail: because a merge is the one cleanup step that is painful to undo.
  - title: Read the ambiguous groups
    detail: since two people with the same name at one company is a real case.
  - title: Keep the merged tab
    detail: as it is the audit trail for every field that moved.
steps:
  - title: Check the column headers
    detail: so email, full name, and company are all clearly named.
  - title: "Fill in {{sheet-url}}"
    detail: with the list to dedupe.
  - title: Run it in a browser agent
    detail: signed in to Google Sheets.
---

## Prompt

Open {{sheet-url}} and find duplicate contacts, matching on email first and then on the combination of full name and company so that near-duplicates with different emails still surface. For each duplicate group choose the record with the most filled fields as the survivor and copy any value the survivor is missing from the others. Move the losing rows to a tab named "merged" rather than deleting them, and add a column recording which row each survivor absorbed. Reply with how many groups you merged and any group you left alone because the match was ambiguous.

## Works with

- sheets.google.com
- airtable.com

## Variables

- {{sheet-url}}: sheet URL
