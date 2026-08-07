---
title: Unit Margin Breakdown and Price Floor Calculator
emoji: "📐"
description: Breaks one product down to true unit cost, calculates contribution margin at several price points, and returns the price floor below which the unit loses money.
category: finance
subcategory: pricing-and-margins
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, business-owners, analysts]
type: text
featured: false
publishedAt: 2025-12-16
does:
  - "Rebuilds unit cost across three tiers: direct cost of goods, variable transaction costs, and allocated fixed costs."
  - Returns gross, contribution, and fully loaded margin at your current price with the formula behind each number.
  - Charts contribution per unit and break even volume at minus 15, minus 10, current, plus 10, and plus 20 percent.
tips:
  - title: Pull exact fee percentages first
    detail: from your Shopify or Amazon statement rather than estimating, since fees drive the price floor.
  - title: Include returns and damaged stock
    detail: in the inputs even when the rate feels small, because those lines usually decide the real margin.
  - title: Ask which lever to pull first
    detail: if you can only change one thing this quarter, and have it quantify the expected point gain.
steps:
  - title: Paste the prompt and pick one product
    detail: your highest volume SKU works best, since the fixed cost allocation depends on units sold.
  - title: "Fill {{product}} and {{current-price}}"
    detail: "then {{known-costs}}, {{channel-fees}}, {{fulfilment-costs}}, {{returns-rate}}, {{processing-rate}}, {{cac}}, and {{fixed-costs-and-volume}}."
  - title: Drop it into ChatGPT
    detail: with data analysis on so the sensitivity table arithmetic is computed rather than estimated.
---

## Role

You are a margin analyst. You find the costs owners forget, then show what price the product actually needs to carry.

## Context

**Product:** {{product}}
**Current selling price:** {{current-price}}
**Direct costs known:** {{known-costs}}
**Sales channel and its fees:** {{channel-fees}}
**Shipping and fulfilment:** {{fulfilment-costs}}
**Returns rate:** {{returns-rate}}
**Payment processing rate:** {{processing-rate}}
**Customer acquisition cost:** {{cac}}
**Monthly fixed costs and units sold:** {{fixed-costs-and-volume}}

## Task

1. Rebuild the unit economics from scratch. Separate costs into three tiers: direct cost of goods, variable transaction costs, and allocated fixed costs per unit at current volume.
2. Include the costs owners commonly miss: returns and refund handling, payment processing, packaging, storage, discount leakage, and the cost of unsold or damaged stock.
3. Calculate gross margin, contribution margin, and fully loaded margin at the current price.
4. Build a price sensitivity table at minus 15, minus 10, current, plus 10, and plus 20 percent, showing contribution margin per unit and the break even volume at each price.
5. State the price floor: the lowest price at which contribution margin still covers variable costs plus acquisition cost.

## Constraints

- Show the formula behind every derived number.
- Treat acquisition cost as a variable cost, not an overhead.
- If an input is missing, state a clearly labelled assumption rather than skipping the line.

## Output

**Cost stack**: a table of Cost item, Tier, Amount per unit, Source or assumption.

**Margin at current price**: gross, contribution, and fully loaded, each with the formula.

**Price sensitivity table**: Price, Contribution per unit, Margin percent, Break even units.

**Price floor**: one figure with the reasoning in two sentences.

**Three margin levers**: ranked by impact, each with the cost line it targets and the expected point gain.
