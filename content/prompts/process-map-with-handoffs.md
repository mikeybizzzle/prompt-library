---
title: Process Map With Handoffs, Owners, and Failure Points
emoji: "🔗"
description: Maps an end to end process into stages with owners, inputs and outputs, handoff risks, cycle time estimates, and the three changes with the highest payoff.
category: operations
subcategory: workflow-design
models: [claude, chatgpt, gemini]
roles: [business-owners, consultants, product-managers]
type: text
featured: false
publishedAt: 2025-11-27
does:
  - Breaks the process into a stage table listing owner, input, output, system, active time, and elapsed time for each step.
  - Maps every handoff with wait time, information lost or re entered, notification method, and the risk it carries.
  - Ranks three changes by cycle time saved, each with implementation cost, what could break, and the stage it targets.
tips:
  - title: Give real elapsed times per stage
    detail: instead of guesses, so the active to elapsed ratio points at the right bottleneck.
  - title: Name the systems by product
    detail: so the handoff table can tell manual re entry apart from an automatic notification.
  - title: Ask it to rerun the map
    detail: as a future state after the top three changes, then compare total elapsed time.
steps:
  - title: Paste the prompt into a chat
    detail: and keep the Role, Context, Task, and Output sections intact.
  - title: Fill the context placeholders
    detail: "with {{process-name}}, {{trigger}}, {{end-state}}, {{participants}}, {{systems}}, {{reported-pain}}, and {{volume}}."
  - title: Run it in Claude
    detail: and ask for the stage table in markdown so you can paste it straight into a doc.
---

## Role

You are a process engineer. You know most delay lives in handoffs and waiting, not in the work itself.

## Context

**Process to map:** {{process-name}}
**Trigger that starts it:** {{trigger}}
**End state that completes it:** {{end-state}}
**People and teams involved:** {{participants}}
**Systems used:** {{systems}}
**Current pain described by the team:** {{reported-pain}}
**Volume per week:** {{volume}}

## Task

1. Break the process into stages from trigger to end state. For each stage record: owner role, input required, output produced, system used, and estimated active time.
2. Identify every handoff, meaning a point where responsibility moves between people or systems. For each, record the wait time, the information that gets lost or re entered, and whether the receiver is notified automatically or has to notice.
3. Separate active time from elapsed time and state the ratio. Name the stages where waiting dominates.
4. Mark failure points: places where work gets stuck, gets rejected and returns, or gets done twice.
5. Find rework loops. State what triggers each loop and how often it fires.
6. Identify decisions that require a specific person and would stall if that person were unavailable.
7. Propose three changes ranked by cycle time saved, each with what it costs to implement and what could break.

## Constraints

- Do not propose new software as a first fix. Sequence, ownership, and notification changes come first.
- Every proposed change must name the stage or handoff it targets.
- Estimates must be stated as estimates with the assumption behind them.

## Output

**Stage table**: Stage, Owner, Input, Output, System, Active time, Elapsed time.

**Handoff analysis**: a table of From, To, Wait, Information lost, Notification method, Risk.

**Time summary**: total active time, total elapsed time, ratio, and the three slowest stages.

**Failure points and rework loops**: each with trigger and frequency.

**Single points of dependency**: role and what stalls without them.

**Top three changes**: ranked, with saving, cost, and risk.
