---
title: Neighborhood Market Report From Recent Comparable Sales
emoji: "🏘️"
description: Turns a list of recent comps into a market report with price per square foot trends, days on market, absorption rate, and a pricing recommendation with a range.
category: real-estate
subcategory: market-reports
models: [claude, chatgpt, gemini]
roles: [real-estate-agents, analysts, consultants]
type: text
featured: false
publishedAt: 2025-11-16
does:
  - Cleans the comp set, excluding sales that are not genuinely comparable and stating the reason for each exclusion.
  - Calculates median sale price, median price per square foot, days on market, list to sale ratio, and the quartile spread.
  - Returns months of inventory, an interval trend table, segment divergences, and a pricing range with the stall price.
tips:
  - title: Paste comps as a table
    detail: with address, beds, square footage, sale price, close date, and days on market in separate columns.
  - title: Include the active and pending counts
    detail: "in {{active-listings}} and {{pending-sales}}, because absorption cannot be calculated without them."
  - title: Ask for a seller facing version
    detail: next, rewriting the same numbers without the analyst vocabulary so it can go straight into a client email.
steps:
  - title: Open the prompt and paste
    detail: it into a chat, then attach or paste your comp export underneath it.
  - title: Fill in the market fields
    detail: "{{area}}, {{comps-data}}, {{period}}, and {{subject-property}} if you are pricing a specific home."
  - title: Run it in Gemini
    detail: or ChatGPT, then read the exclusion list first before trusting any of the medians.
---

## Role

You are a real estate analyst producing a report a seller or buyer will use to set a number. You show the working so the conclusion can be challenged.

## Context

**Area covered:** {{area}}
**Comparable sales data:** {{comps-data}}
**Active listings:** {{active-listings}}
**Pending sales:** {{pending-sales}}
**Period covered:** {{period}}
**Subject property if any:** {{subject-property}}
**Audience for this report:** {{audience}}
**Seasonal context:** {{seasonal-context}}

## Task

1. Clean the comp set. Exclude sales that are not genuinely comparable and state the exclusion reason for each: different property type, non arm's length transaction, materially different condition, or outside the geographic boundary.
2. Calculate for the remaining set: median sale price, median price per square foot, median days on market, median list to sale price ratio, and the spread between the fastest and slowest quartile.
3. Show the trend across the period by splitting it into equal intervals and comparing the same metrics. State whether the direction is consistent or noisy given the sample size.
4. Calculate absorption: months of inventory from active listings and the recent sales pace. State what that level means for negotiating position.
5. Segment by the cuts that matter here, such as bed count, condition, or micro location, and note where a segment behaves differently from the overall market.
6. If a subject property is given, place it against the comp set on price per square foot and condition, then give a pricing recommendation as a range with the reasoning and the price at which it would likely sit unsold.
7. State the limitations: sample size, data recency, and anything the numbers cannot see.

## Constraints

- Never present a median from fewer than five comparable sales without labelling it as directional only.
- Do not describe the market as hot, cooling, or balanced without the absorption number that supports the label.
- Round prices sensibly and state the units for every figure.

## Output

**Comp set** — a table of the included sales with the key fields, plus an exclusion list with reasons.

**Headline metrics** — the five calculations with the sample size.

**Trend** — interval comparison table and a two sentence read.

**Absorption** — months of inventory with the calculation and the negotiating implication.

**Segment notes** — where a segment diverges and by how much.

**Pricing recommendation** — a range, the reasoning, and the level at which the property would stall.

**Limitations** — three to five bullets.
