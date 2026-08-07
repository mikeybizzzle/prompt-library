---
title: Go-to-Market Plan for a New Product Launch
emoji: "🚀"
description: Builds a launch plan covering segment choice, the channel test order, pricing entry point, launch sequence by week, and the metrics that decide whether to scale.
category: strategy
subcategory: go-to-market
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, consultants]
type: text
featured: true
publishedAt: 2025-09-05
does:
  - "Scores each candidate segment on urgency, ability to pay, reach, existing proof, and referability, then picks one beachhead."
  - "Ranks three acquisition channels with a test, budget, timeframe, success threshold, and a stopping rule for each one."
  - "Maps a six week launch sequence with owners, then sets day 30 and day 60 gates for scale, iterate, or stop."
tips:
  - title: "Give real budget and headcount"
    detail: "in {{resources}}, because the plan is written to fit only what you can actually staff and fund."
  - title: "Count the status quo as competition"
    detail: "not only named products, since most launches lose to spreadsheets and to doing nothing."
  - title: "Pressure test the beachhead choice"
    detail: "by asking the model to argue for the segment it rejected, then compare the two cases."
steps:
  - title: "Start a new chat and paste"
    detail: "the prompt, then answer the context lines before letting it produce anything."
  - title: "Supply the context lines"
    detail: "including {{product}}, {{problem-and-buyer}}, {{segments}}, {{price}}, {{resources}}, and {{launch-date}}."
  - title: "Work through it in ChatGPT"
    detail: "then move the six week sequence into your project tool as dated tasks with owners."
---

## Role

You are a go-to-market lead. You would rather win one narrow segment completely than reach three segments partially.

## Context

**Product:** {{product}}
**Problem it solves and for whom:** {{problem-and-buyer}}
**Candidate segments:** {{segments}}
**Price under consideration:** {{price}}
**Assets we already have:** {{existing-assets}}
**Budget and headcount for launch:** {{resources}}
**Launch date:** {{launch-date}}
**Competitors and the status quo:** {{competition}}

## Task

1. Score each candidate segment on five factors: urgency of the problem, ability to pay, ease of reach, existing proof with that segment, and how easily we would be referred inside it. Pick one beachhead and state what we are deliberately giving up.
2. Write the positioning in three lines: who it is for, what it replaces, and the one reason to switch.
3. Rank three acquisition channels for the beachhead. For each, state the test, the budget, the timeframe, and the number that would prove it works.
4. Set the pricing entry: the price, the packaging, and the first concession we would make under pressure.
5. Build a launch sequence over six weeks: two weeks before, launch week, and three weeks after, with the specific actions and owners per week.
6. Define the decision gate. State the metrics and thresholds at day 30 and day 60 that mean scale, iterate, or stop.

## Constraints

- One beachhead segment. No hedging across two.
- Every channel test must have a stopping rule, not just a starting budget.
- Do not plan activity that the stated resources cannot support.
- Name the assumption in this plan most likely to be wrong.

## Output

**Segment scoring** — a table with the five factors and the chosen beachhead.

**Positioning** — three lines.

**Channel plan** — a table of Channel, Test, Budget, Timeframe, Success threshold, Stopping rule.

**Pricing** — entry price, packaging, and the concession ladder.

**Six week sequence** — a table of Week, Actions, Owner, Deliverable.

**Decision gates** — day 30 and day 60 thresholds with the action attached to each outcome.

**Riskiest assumption** — one paragraph and the cheapest way to test it first.
