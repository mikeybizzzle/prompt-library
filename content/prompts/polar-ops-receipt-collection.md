---
title: Expense Receipt Roundup Filed Against a Card Statement
emoji: "📎"
description: Matches every charge on a month of statement lines to a receipt in your email, files each one as a named PDF in Drive, and returns the list of charges with no receipt.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-04-24
does:
  - Searches email for the receipt matching each charge within three days of the charge date.
  - Saves every receipt found as a PDF in your Drive folder named by date, merchant, and amount.
  - Marks each statement row as found with a file link or as missing, and replies with the missing amounts.
tips:
  - title: Do it in the first week of the month
    detail: because merchants purge receipt links faster than you expect.
  - title: Keep the file naming
    detail: since a bookkeeper can reconcile the folder without opening a single PDF.
  - title: Chase the missing list the same day
    detail: as the merchant will resend while the charge is still recent.
steps:
  - title: Export the statement
    detail: into a sheet with one row per charge.
  - title: "Fill in {{statement-sheet-url}}, {{month}}, and {{folder-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Gmail and Google Drive.
---

## Prompt

For the charges listed in {{statement-sheet-url}} for {{month}}, search Gmail for the matching receipt from each merchant within three days of the charge date. Save every receipt you find as a PDF into the Drive folder {{folder-url}}, naming files "YYYY-MM-DD merchant amount". Mark the sheet row as found with a link to the file, or as missing when no receipt exists. Reply with the list of missing receipts and their amounts so I can chase them.

## Works with

- gmail.com
- drive.google.com
- sheets.google.com

## Variables

- {{statement-sheet-url}}: statement sheet URL
- {{month}}: the statement month being reconciled
- {{folder-url}}: folder URL
