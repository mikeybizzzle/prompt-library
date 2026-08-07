---
title: Quarterly OKR Set With Measurable Key Results
emoji: "🎯"
description: Turns a quarterly goal into three objectives with measurable key results, current baselines, owners, weekly leading indicators, and the work explicitly cut.
category: strategy
subcategory: okrs-and-goals
models: [chatgpt, claude, gemini]
roles: [founders, product-managers, business-owners]
type: text
featured: false
publishedAt: 2026-01-20
does:
  - Writes three number free objectives and nine key results, each with a metric, dated baseline, target, source, and owner.
  - Rewrites output style key results into outcomes and pushes the rest onto the initiative list.
  - Returns an initiative map, a stop list of in flight work serving no key result, and a weekly confidence check format.
tips:
  - title: Bring dated baselines for every metric
    detail: because the prompt refuses any key result without one and will spend a slot creating measurement.
  - title: List work already in flight
    detail: so the stop list has something real to cut instead of hypothetical projects.
  - title: Ask it to stress test targets
    detail: against your stated capacity and name which of the nine are unreachable this quarter.
steps:
  - title: Paste the prompt into a fresh chat
    detail: so no earlier planning context bleeds into the objectives it writes.
  - title: Fill in the context fields
    detail: "with {{company-context}}, {{quarter-goal}}, {{baselines}}, {{teams}}, {{constraints}}, {{quarter-dates}}, and {{existing-work}}."
  - title: Run it in Gemini
    detail: and ask for the initiative map as a table you can paste into your planning doc.
---

## Role

You are an operator who writes OKRs that force choices. You reject key results that measure activity instead of outcome.

## Context

**Company stage and size:** {{company-context}}
**The one thing this quarter must achieve:** {{quarter-goal}}
**Current metrics and their baselines:** {{baselines}}
**Teams involved:** {{teams}}
**Capacity constraints:** {{constraints}}
**Quarter start and end dates:** {{quarter-dates}}
**Work already in flight:** {{existing-work}}

## Task

1. Write three objectives. Each is a sentence in plain language describing a state the business is in by quarter end. Objectives contain no numbers.
2. Under each objective write three key results. Every key result needs a metric name, a baseline value with the date it was measured, a target value, and the source system where it is read.
3. Reject any key result that measures output. Ship a feature, run a campaign, and hire two people are tasks, not results. Convert each into the outcome it is supposed to produce, or move it to the initiative list.
4. Assign a single named owner per key result. Shared ownership is not permitted.
5. For each key result, name one weekly leading indicator that moves before the key result does.
6. List the initiatives that serve each key result, and mark the ones already in flight that do not serve any. Recommend stopping them.
7. Define the confidence check: how each owner reports a score from 0 to 10 each week and what triggers an escalation.

## Constraints

- Maximum three objectives and nine key results in total.
- No key result without a baseline. If no baseline exists, the first key result is to establish measurement.
- Targets must be reachable with the stated capacity. Flag any that are not.

## Output

**Objectives and key results** — nested list with metric, baseline and date, target, source, owner, leading indicator.

**Initiative map** — a table of Initiative, Key result served, Status, Keep or stop.

**Stop list** — work to end this quarter with the reason.

**Weekly check in format** — the four questions each owner answers, and the escalation trigger.
