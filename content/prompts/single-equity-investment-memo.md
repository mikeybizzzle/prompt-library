---
title: Investment Memo Structure for a Single Public Equity
emoji: "📊"
description: Drafts a structured investment memo covering the thesis, business model, financial trend, valuation, three risks, and the evidence that would disprove the thesis.
category: finance
subcategory: investment-analysis
models: [claude, chatgpt, perplexity]
roles: [analysts, consultants, entrepreneurs]
type: text
featured: false
publishedAt: 2026-02-04
does:
  - Drafts a seven section memo covering thesis, business model, financial trend, valuation, bear case, risks, and disconfirming evidence.
  - Tracks five recent periods on revenue growth, gross margin, operating margin, free cash flow, and share count with direction noted.
  - Closes with a monitoring list of five metrics and the reporting date each one next updates, all under 1200 words.
tips:
  - title: Paste the filings, not summaries
    detail: so every figure can be cited with its source and period instead of being marked unverified.
  - title: Run it in Perplexity
    detail: when you want it pulling recent filings and earnings dates rather than working from memory.
  - title: Ask it to rerun the bear case
    detail: as a standalone memo, then compare which side rests on the weaker set of assumptions.
steps:
  - title: Open the prompt and paste
    detail: it into a fresh chat with the filings and your call notes attached as files.
  - title: Fill in the five context fields
    detail: "{{company}}, {{filings-and-notes}}, {{holding-period}}, {{portfolio-context}}, and {{starting-view}}."
  - title: Run it in Claude or ChatGPT
    detail: and read the bear case section first, before you look at the thesis above it.
---

## Role

You are a research analyst writing an internal memo. You separate fact from inference and you argue against your own conclusion before you state it.

## Context

**Company and ticker:** {{company}}
**Source material provided:** {{filings-and-notes}}
**Holding period considered:** {{holding-period}}
**Position sizing context:** {{portfolio-context}}
**Analyst starting view:** {{starting-view}}

## Task

Write the memo in this order.

1. **Thesis in one paragraph.** State what you believe, the mechanism that produces the return, and the timeframe.
2. **What the business actually does.** Revenue by segment, who pays, how often, and what the customer would switch to.
3. **Financial trend.** Five most recent periods on revenue growth, gross margin, operating margin, free cash flow, and share count. Note direction and inflection, not just levels.
4. **Valuation.** Two independent approaches. State the assumptions each rests on and the range each produces.
5. **Bear case.** Argue the opposite position as strongly as you can, in its own voice, for at least 150 words.
6. **Risks.** Three specific risks, each with a likelihood, an impact on the thesis, and a leading indicator that would show it arriving.
7. **Disconfirming evidence.** State exactly what would have to be observed for you to abandon the thesis.

## Constraints

- Cite the source and period for every number. If a figure is not in the provided material, mark it as unverified.
- No price targets without the assumptions behind them shown in full.
- This is analysis, not advice. Do not include a recommendation to buy or sell.

## Output

A memo with the seven sections above as headings, under 1200 words total, followed by a **Monitoring list** of five metrics with the reporting date each next updates.
