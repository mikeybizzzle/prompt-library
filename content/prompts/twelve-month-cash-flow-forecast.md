---
title: Twelve Month Cash Flow Forecast for a Small Business
emoji: "💵"
description: Builds a monthly cash flow forecast with opening and closing balances, a driver list, three scenarios, and the month the business runs short of cash.
category: finance
subcategory: budgeting-and-forecasting
models: [claude, chatgpt, gemini]
roles: [business-owners, accountants, founders]
type: text
featured: false
publishedAt: 2025-10-21
does:
  - Builds a 12 month table of opening cash, cash in by revenue line, cash out by category, net movement, and closing cash.
  - Applies the stated payment terms so booked revenue and received cash never land in the same month.
  - Runs base, minus 25 percent downside, and plus 20 percent upside scenarios and names the lowest cash month in each.
tips:
  - title: Give payment terms as real numbers
    detail: such as net 30 on invoices out and net 14 on your two largest suppliers, not a vague average.
  - title: List one off items you already know
    detail: like a tax bill, an annual insurance renewal, or a deposit you owe, so the dips show up early.
  - title: Ask for the forecast as CSV
    detail: after the first pass, then paste it into a sheet and keep updating actuals against it monthly.
steps:
  - title: Paste the prompt into a chat
    detail: and have your last three months of bank statements open beside you for accurate inputs.
  - title: "Fill {{opening-cash}} and {{revenue-lines}}"
    detail: "then {{business-description}}, {{fixed-costs}}, {{variable-cost-percent}}, {{payment-terms}}, {{one-offs}}, and {{start-month}}."
  - title: Run it in Gemini
    detail: and ask it to redo the downside scenario at minus 40 percent to see where the runway truly ends.
---

## Role

You are a fractional finance lead who builds forecasts that a non finance owner can maintain without help.

## Context

**Business:** {{business-description}}
**Opening cash balance:** {{opening-cash}}
**Revenue lines and current monthly values:** {{revenue-lines}}
**Fixed costs:** {{fixed-costs}}
**Variable costs as a share of revenue:** {{variable-cost-percent}}
**Payment terms in and out:** {{payment-terms}}
**Known one off items:** {{one-offs}}
**Forecast start month:** {{start-month}}

## Task

1. List the drivers that actually move cash in this business. For each, state the current value, the assumption you are applying, and why.
2. Build a 12 month forecast by month with these rows: opening cash, cash in by revenue line, cash out by cost category, net movement, closing cash.
3. Apply the stated payment terms so revenue booked and cash received are not treated as the same month.
4. Produce three scenarios: base, a downside where revenue is 25 percent lower, and an upside where it is 20 percent higher. Costs must respond correctly in each.
5. Identify the lowest cash month in each scenario and state the shortfall if any.

## Constraints

- Show every assumption. Never bury a number inside a calculation without stating where it came from.
- Do not invent figures the user did not supply. Mark unknowns as TBC and list them.
- Round to whole currency units.

## Output

**Driver table**: Driver, Current value, Assumption, Rationale.

**Base case forecast**: a markdown table with months as columns.

**Scenario summary**: closing cash by month for all three cases, plus lowest point and month.

**Risk list**: the four assumptions most likely to be wrong, ranked by cash impact.

**Actions**: three specific moves that would extend the cash runway, each with an estimated effect.
