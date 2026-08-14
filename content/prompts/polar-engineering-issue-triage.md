---
title: Bug Report Triage With Duplicates Linked and Labels Applied
emoji: "🐞"
description: Reads every unlabelled issue from the last few days, assigns area and severity from the described impact, links duplicates, and comments asking for missing reproduction detail.
category: polar
subcategory: polar-engineering
models: [claude, chatgpt, gemini]
roles: [developers, ai-engineers, product-managers]
type: text
featured: false
publishedAt: 2026-07-08
does:
  - Decides the affected area, whether reproduction steps are present, and a severity based on how many users the behavior hits.
  - Searches existing issues for a duplicate and links it before anything new is filed.
  - Applies the labels and comments on any issue missing reproduction steps or a version number.
tips:
  - title: Run it on a short window
    detail: because triage on a two-year backlog produces labels nobody trusts.
  - title: Check the severity calls
    detail: since impact is a judgement about your users rather than about the stack trace.
  - title: Keep the duplicate links
    detail: as they are what stops the same report being worked twice.
steps:
  - title: Agree your label set
    detail: for area and severity before anything gets applied.
  - title: "Fill in {{owner-repo}} and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub with write access to issues.
---

## Prompt

Go through every issue in {{owner-repo}} with no labels created in the last {{number}} days. For each, read the report and decide the affected area, whether reproduction steps are present, and a severity from blocker to trivial based on how many users the described behavior would hit. Search existing issues for a duplicate before filing anything new and link it if you find one. Apply the labels, and comment asking for the missing detail on any issue that lacks reproduction steps or a version number.

## Works with

- github.com
- linear.app

## Variables

- {{owner-repo}}: the repository, written as owner/repo
- {{number}}: how many days of new issues to triage
