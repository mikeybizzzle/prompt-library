---
title: Eval Set and Guardrail Rules for an Agent Release
emoji: "🛑"
description: Builds a graded eval set with pass criteria, adversarial cases, guardrail rules at input and output, and the release thresholds that decide whether to ship.
category: ai-agents
subcategory: evaluation-and-guardrails
models: [claude, chatgpt, gemini]
roles: [ai-engineers, product-managers, developers]
type: text
featured: false
publishedAt: 2026-02-20
does:
  - "Builds an eval set of 40 or more cases across routine, edge, adversarial, and out of scope bands with pass criteria."
  - "Returns a failure taxonomy table of failure type, what it looks like, and cost, covering tool misuse and leaked prompts."
  - "Defines input and output guardrail tables of check, trigger, action, and fallback plus release thresholds per band."
tips:
  - title: "Paste real transcripts when you have them"
    detail: "so the adversarial band is written the way your users actually phrase things rather than as generic attacks."
  - title: "State the cost of a bad output"
    detail: "in concrete terms like a refund, a lawsuit, or a support ticket, since high cost failures block release outright."
  - title: "Follow up by asking for the grader"
    detail: "as a script that runs the eval set and prints the pass rate for each of the four bands."
steps:
  - title: "Open the prompt in a chat"
    detail: "with the agent's system prompt and tool list on hand before you start."
  - title: "Swap the eight bracketed fields"
    detail: "for your own: {{agent-purpose}}, {{system-prompt}}, {{tools}}, {{failure-cost}}, and {{release-date}}."
  - title: "Run it in Claude or Gemini"
    detail: "then export the eval set table into whatever test harness your team already runs."
---

## Role

You are an evaluation engineer. You define what failure looks like before the release, and you refuse to grade on vibes.

## Context

**What the agent does:** {{agent-purpose}}
**System prompt in use:** {{system-prompt}}
**Tools available to it:** {{tools}}
**Users and their context:** {{user-context}}
**Consequences of a bad output:** {{failure-cost}}
**Regulatory or policy limits:** {{policy-limits}}
**Real transcripts available:** {{transcript-samples}}
**Release date:** {{release-date}}

## Task

1. Define the failure taxonomy for this agent. Name each failure type, describe what it looks like in an output, and rate its cost. Include: wrong answer stated confidently, correct answer in the wrong format, out of scope compliance, tool misuse, missing escalation, leaked instructions, and unsafe content.
2. Build the eval set with at least 40 cases across four bands: routine, edge, adversarial, and out of scope. For each case give the input, the pass criteria as an observable condition, and the failure type it tests.
3. Write pass criteria that a second grader would apply identically. Ban criteria containing helpful, appropriate, or reasonable. Replace them with the specific thing the output must contain or must not contain.
4. Build the adversarial band from real attack shapes: instruction override attempts, requests for the system prompt, role play framing, encoded requests, requests that split a prohibited task into innocent steps, and emotional pressure to bypass a rule.
5. Define input guardrails: what is checked before the model sees it, and what happens on a hit.
6. Define output guardrails: what is checked after generation, whether the check blocks or flags, and the fallback response when it blocks.
7. Set the release thresholds: the pass rate required per band, the failure types that block release at any rate, and the sample size needed for the number to mean anything.
8. Define the regression process: which cases run on every change, how new failures found in production become eval cases, and who owns the set.

## Constraints

- Every eval case must be graded automatically or with a rubric that fits in one sentence.
- No pass criterion that requires reading the model's reasoning rather than its output.
- Adversarial cases must be written as a real user would write them, not as a description of an attack.
- Any failure type rated high cost blocks release at a single occurrence.

## Output

**Failure taxonomy**: a table of Failure type, What it looks like, Cost.

**Eval set**: 40 or more cases as a table of ID, Band, Input, Pass criteria, Failure type tested.

**Guardrails**: input and output tables of Check, Trigger, Action, Fallback response.

**Release thresholds**: pass rate per band, blocking failure types, minimum sample size.

**Regression process**: the steps, the cadence, and the owner.
