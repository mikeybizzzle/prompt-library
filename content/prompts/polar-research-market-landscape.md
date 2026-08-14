---
title: Market Landscape Map Grouped by Sub-Segment
emoji: "🗺️"
description: Searches Crunchbase, Product Hunt, and the web for everyone selling into a segment, then writes a Google Doc grouping the live companies by sub-segment with positioning, size, and funding.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-02-20
does:
  - Captures each company name, homepage, one-line positioning in their own words, headcount band, last disclosed round, and target customer size.
  - Drops anything that has not shipped or updated its site in two years and records why it was dropped.
  - Writes the survivors into a Google Doc grouped by sub-segment with a paragraph on which clusters are crowded and which are thin.
tips:
  - title: Use the words buyers use
    detail: "in {{market-segment}}, because the search relies on the category term plus \"alternatives\" and \"vs\"."
  - title: Read the drop list first
    detail: as the companies it discarded tell you how much of the category has already died off.
  - title: Follow up on one sub-segment
    detail: by asking for the same map limited to the cluster you care about.
steps:
  - title: Settle on the segment wording
    detail: you would use in a search, not the wording from your own deck.
  - title: "Fill in {{market-segment}}"
    detail: with that phrase and nothing broader.
  - title: Run it in a browser agent
    detail: that can reach Crunchbase, Product Hunt, and Google Docs.
---

## Prompt

Find companies operating in {{market-segment}} by searching Crunchbase, Product Hunt, and Google for the category term plus "alternatives" and "vs". For each company capture the name, homepage, one-line positioning in their own words, headcount band, last disclosed funding round, and which customer size they aim at. Drop anything that has not shipped or updated its site in over two years, and note why you dropped it. Write the survivors into a Google Doc grouped by sub-segment, with a short paragraph on where the clusters are crowded and where they are thin.

## Works with

- crunchbase.com
- producthunt.com
- docs.google.com

## Variables

- {{market-segment}}: market segment
