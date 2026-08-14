---
title: Search Result Audit of the Terms You Want to Win
emoji: "🔍"
description: Records the top ten organic results for each term with format and length, notes where your site sits, and writes a doc ranking the terms by how beatable the current top three look.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-09
does:
  - Records URL, page title, content format, and rough word count for the top ten results on each term.
  - Notes where your domain ranks on each term, or that it does not appear at all.
  - Ranks the terms by how beatable the top three look and states the format needed to compete.
tips:
  - title: Audit three terms, not thirty
    detail: because the format read is the valuable part and it takes real page opens.
  - title: Include one term you already rank for
    detail: so the beatability judgement has a known reference point.
  - title: Note the format, not just the rank
    detail: as losing to a docs page is a different problem than losing to a listicle.
steps:
  - title: Pick three terms
    detail: a buyer would actually search rather than three you like.
  - title: "Fill in {{keyword-1}}, {{keyword-2}}, {{keyword-3}}, and {{my-domain}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: that can reach Google and Google Docs.
---

## Prompt

Search Google for each of these terms: {{keyword-1}}, {{keyword-2}}, {{keyword-3}}. For every term record the top ten organic results with their URL, page title, content format such as listicle or docs page or comparison, and rough word count from opening the page. Note where my site at {{my-domain}} ranks, or that it does not appear at all. Write a Google Doc that ranks the terms by how beatable the current top three look and says what format I would need to publish to compete.

## Works with

- google.com
- docs.google.com

## Variables

- {{keyword-1}}: keyword 1
- {{keyword-2}}: keyword 2
- {{keyword-3}}: keyword 3
- {{my-domain}}: my domain
