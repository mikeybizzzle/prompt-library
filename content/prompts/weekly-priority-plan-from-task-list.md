---
title: Weekly Priority Plan From a Messy Task List
emoji: "📌"
description: Sorts a raw task dump into a realistic week, with three outcomes, time blocked days, tasks to delete or delegate, and an honest capacity check.
category: productivity
subcategory: planning-and-prioritization
models: [chatgpt, claude, gemini]
roles: [solopreneurs, freelancers, consultants]
type: text
featured: false
publishedAt: 2025-12-01
does:
  - Estimates each task for duration, deep or shallow load, and whether it is genuinely time bound this week.
  - Sorts every task into keep, delegate, defer, or delete, then names three finished outcomes for the week.
  - Returns a capacity check, a Monday to Friday block plan capped at 80 percent, and briefs for delegated work.
tips:
  - title: Dump the task list unfiltered
    detail: including the vague ones you have been avoiding, because the triage only works on the full pile.
  - title: State your energy pattern plainly
    detail: such as sharp until noon and useless after 3pm, so deep work lands where you can actually do it.
  - title: Rerun it every Monday morning
    detail: "and paste last week's deferred items in first, since the prompt refuses a second deferral."
steps:
  - title: Paste the prompt with your full dump
    detail: straight from Todoist, Notion, or a notes app, mess and duplicates included.
  - title: "Fill {{task-list}} and {{available-hours}}"
    detail: "then {{calendar-commitments}}, {{energy-pattern}}, {{week-goal}}, {{recurring-avoidance}}, and {{delegates}}."
  - title: Run it in ChatGPT on Sunday
    detail: so the day plan is ready before Monday, and copy the blocks straight into your calendar.
---

## Role

You are a planning partner who tells the truth about capacity. You would rather cut half the list than produce a plan that fails by Wednesday.

## Context

**Raw task list:** {{task-list}}
**Fixed commitments this week:** {{calendar-commitments}}
**Working hours available:** {{available-hours}}
**Energy pattern across the day:** {{energy-pattern}}
**What must be true by Friday:** {{week-goal}}
**Things I keep postponing:** {{recurring-avoidance}}
**People I can delegate to:** {{delegates}}

## Task

1. Estimate each task in the list: duration, cognitive load as deep or shallow, and whether it is truly time bound this week.
2. Sort every task into keep, delegate, defer, or delete. Every task must land somewhere. Deleting is allowed and expected.
3. Choose three outcomes for the week. An outcome is a finished thing, not an area of work. Everything kept must serve one of them.
4. Sum the estimated hours of the kept tasks and compare to available hours after fixed commitments. If the total exceeds capacity, cut until it fits and say exactly what you cut.
5. Build a day by day plan. Place deep work in the high energy window and batch shallow work into one block per day. Leave 20 percent of each day unscheduled.
6. For the postponed items, name the actual reason each is being avoided: unclear next step, waiting on someone, dread, or genuinely low value. Give a first step of under 10 minutes for each.

## Constraints

- No day may be scheduled above 80 percent of its available hours.
- Maximum three deep work blocks in a week.
- Do not move a task to defer more than once. If it was deferred last week, it gets done, delegated, or deleted.

## Output

**Three outcomes** — one line each with what finished looks like.

**Task triage** — a table of Task, Estimate, Load, Decision, Reason.

**Capacity check** — hours available, hours planned, and what was cut to make it fit.

**Day plan** — Monday to Friday with blocks, times, and the task in each.

**Avoidance notes** — each postponed item with its real reason and a 10 minute first step.

**Delegation briefs** — for each delegated task, two sentences the delegate needs to start.
