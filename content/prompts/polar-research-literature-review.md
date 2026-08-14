---
title: Literature Review Starter With Foundational and Recent Splits
emoji: "📚"
description: Searches Google Scholar and arXiv on a topic, keeps the ten most cited and five most recent papers, and writes a Google Doc summarizing each method and finding plus where the field disagrees.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-03-01
does:
  - Records title, authors, venue, year, citation count, and PDF link for each paper it keeps.
  - Writes a two-sentence summary of each paper covering the method used and the headline finding.
  - Groups the list into foundational and recent, and ends with a note on the open disagreements.
tips:
  - title: Set the year cutoff deliberately
    detail: "because {{year}} decides whether you get the canon or only the current wave."
  - title: Phrase the topic as a field would
    detail: since search on Scholar rewards the terms used in abstracts, not plain description.
  - title: Follow up on the disagreements
    detail: by asking for the papers on each side of the split it found.
steps:
  - title: Write the topic in field language
    detail: and pick the earliest year worth reading from.
  - title: "Fill in {{research-topic}} and {{year}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: that can reach Scholar, arXiv, and Google Docs.
---

## Prompt

Search Google Scholar and arXiv for work on {{research-topic}} published since {{year}}. Keep the ten most cited plus the five most recent, and for each one record the title, authors, venue, year, citation count, and link to the PDF. Write a two-sentence summary of each covering the method used and the headline finding. Save the list to a Google Doc grouped into "foundational" and "recent", and end with a short note on which questions the papers disagree about.

## Works with

- scholar.google.com
- arxiv.org
- docs.google.com

## Variables

- {{research-topic}}: research topic
- {{year}}: the earliest publication year to include
