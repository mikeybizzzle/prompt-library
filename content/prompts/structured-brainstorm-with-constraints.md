---
title: Structured Idea Generation With Forced Constraints
emoji: "🌱"
description: Runs a four round brainstorm that produces 40 raw ideas under changing constraints, then clusters, stress tests, and ranks the five worth pursuing.
category: productivity
subcategory: brainstorming
models: [claude, chatgpt, grok]
roles: [founders, product-managers, agencies]
type: text
featured: false
publishedAt: 2026-02-13
does:
  - Produces 40 ideas across four rounds covering obvious, zero budget, inverted, and mechanisms borrowed from other industries.
  - Clusters the 40 into named themes and cuts every idea that breaks a hard limit, naming the limit each one violated.
  - Stress tests the eight strongest ideas for cost and two week signal, ranks five, and names the first concrete step.
tips:
  - title: Be specific about hard limits
    detail: because the elimination round only bites when budget, time, and headcount ceilings are named.
  - title: List what has already been tried
    detail: so repeats only survive when the reason the earlier attempt failed is named and addressed.
  - title: Push round three harder
    detail: by asking for ten more ways to make the problem worse before you accept the inversions.
steps:
  - title: Start a long thread with the prompt
    detail: in a model that holds context well, since it produces 40 ideas in a single pass.
  - title: Replace the placeholder fields
    detail: "{{problem}}, {{who}}, {{prior-attempts}}, {{hard-constraints}}, {{resources}}, and {{success-definition}}."
  - title: Run it in Claude or Grok
    detail: then ask it to break the first step on the winning idea into actions for this week.
---

## Role

You are a facilitator who knows that unconstrained brainstorming produces obvious ideas. You impose constraints to force the interesting ones out.

## Context

**Problem to solve:** {{problem}}
**Who has this problem:** {{who}}
**What has already been tried:** {{prior-attempts}}
**Hard limits:** {{hard-constraints}}
**Resources available:** {{resources}}
**What a good idea would achieve:** {{success-definition}}

## Task

Run four rounds. Produce ten ideas per round, stated in one sentence each. Do not evaluate during rounds.

1. **Round one, obvious.** The ten ideas anyone would name. Get them out so they stop occupying the space.
2. **Round two, constrained.** Ten ideas assuming zero budget and one week.
3. **Round three, inverted.** Ten ideas that would make the problem worse, then note next to each what its opposite suggests.
4. **Round four, borrowed.** Ten ideas that copy a mechanism from a different industry. Name the industry and the mechanism for each.

Then:

5. Cluster all 40 ideas into themes and name each theme.
6. Discard ideas that break the hard limits, listing which limit each violates.
7. Take the eight strongest surviving ideas and stress test each: what has to be true for it to work, what it costs, and how you would know within two weeks whether it is working.
8. Rank the top five and state the first concrete step for the winner.

## Constraints

- No idea may be repeated across rounds, even reworded.
- No evaluation language during the rounds. Save all judgement for the stress test.
- Round three must genuinely try to make things worse before inverting.
- Ideas that were already tried are only allowed if the reason for the earlier failure is named and addressed.

## Output

**Rounds**: four numbered lists of ten.

**Themes**: clusters with names and the idea numbers in each.

**Eliminated**: ideas cut, with the limit each violated.

**Stress tests**: eight entries with must be true, cost, and two week signal.

**Top five ranking**: with one line of reasoning each.

**First step**: the specific next action for the top idea.
