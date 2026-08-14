---
title: Vendor Shortlist Scored Against Your Own Requirements
emoji: "🧮"
description: Finds candidate tools through G2, Product Hunt, and search, checks each vendor doc rather than the listing copy, and saves a scored top five to Notion with a recommendation.
category: polar
subcategory: polar-research
models: [claude, chatgpt, gemini]
roles: [founders, analysts, consultants]
type: text
featured: false
publishedAt: 2026-03-04
does:
  - Scores every candidate as yes, partial, or no against each of your three requirements.
  - Records the pricing tier that actually unlocks the features you need, confirmed in vendor documentation.
  - Saves the top five to Notion with the scoring table and a one-paragraph recommendation.
tips:
  - title: Write requirements as tests
    detail: "because \"supports SSO\" can be scored and \"enterprise ready\" cannot."
  - title: Set a real budget ceiling
    detail: so the shortlist does not fill up with tools you will never buy.
  - title: Ask it to justify one rejection
    detail: when a vendor you expected to see is missing from the five.
steps:
  - title: Write down three requirements
    detail: that a vendor either meets or does not.
  - title: "Fill in {{tool-category}}, {{requirement-1}}, {{requirement-2}}, {{requirement-3}}, and {{budget}}"
    detail: before running it.
  - title: Run it in a browser agent
    detail: signed in to Notion.
---

## Prompt

I need a {{tool-category}} that must support {{requirement-1}}, {{requirement-2}}, and {{requirement-3}}, with a budget ceiling of {{budget}}. Find candidate vendors through G2, Product Hunt, and a plain web search, then check each vendor's own docs to confirm whether it actually meets each requirement rather than trusting listing copy. Score every candidate as yes, partial, or no against each requirement and record the pricing tier that unlocks the features I need. Save a shortlist of the top five to Notion with the scoring table and a one-paragraph recommendation.

## Works with

- g2.com
- producthunt.com
- notion.so

## Variables

- {{tool-category}}: tool category
- {{requirement-1}}: requirement 1
- {{requirement-2}}: requirement 2
- {{requirement-3}}: requirement 3
- {{budget}}: the most you are willing to spend, with the period
