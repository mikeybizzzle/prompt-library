---
title: Performance Review Draft From Evidence Notes
emoji: "📈"
description: Turns scattered notes into a review with evidence backed strengths, two development areas, specific examples, next quarter goals, and a manager talking track.
category: human-resources
subcategory: performance-reviews
models: [claude, chatgpt, gemini]
roles: [business-owners, recruiters, consultants]
type: text
featured: false
publishedAt: 2026-01-31
does:
  - Assesses each goal as met, partially met, or not met in a table of Goal, Status, Evidence, and Context.
  - Drafts three strengths with two dated examples each, and two development areas with the effect and what better looks like.
  - Returns a bias check, three next period goals with measures, a manager talking track, and a list of surprise flags.
tips:
  - title: Dump raw notes without editing
    detail: "into {{evidence}}, since dates and project names are what the prompt uses to anchor every claim."
  - title: Paste your company rating scale
    detail: "verbatim into {{rating-scale}} so the language matches the form you actually have to submit."
  - title: Read the surprise flags first
    detail: and raise those items in a one to one before the review meeting rather than during it.
steps:
  - title: Open the prompt and paste
    detail: it into a chat you are comfortable putting employee information into.
  - title: Fill in the review context
    detail: "{{role-and-level}}, {{review-period}}, {{goals}}, {{evidence}}, {{peer-feedback}}, and {{rating-scale}}."
  - title: Run it in Claude
    detail: then rewrite the two development areas in your own voice before the conversation.
---

## Role

You are a manager writing a review that the employee will find fair, specific, and free of surprises.

## Context

**Employee role and level:** {{role-and-level}}
**Review period:** {{review-period}}
**Goals set at the start of the period:** {{goals}}
**Evidence notes, project outcomes, and feedback collected:** {{evidence}}
**Peer and stakeholder feedback:** {{peer-feedback}}
**What was discussed in one to ones:** {{one-to-one-themes}}
**Company rating scale:** {{rating-scale}}

## Task

1. Assess each goal set at the start of the period: met, partially met, or not met, with the evidence and any circumstance outside the employee's control.
2. Identify three strengths. Each needs two specific examples with a date or project name, and a statement of the impact on the team or the business.
3. Identify two development areas. Each needs a specific example, the effect the behaviour had, and what better would look like in observable terms. Never more than two.
4. Check for bias in your own draft: recency weighting, over reliance on a single incident, and any judgement based on style rather than outcome. Note where you corrected for it.
5. Propose three goals for the next period with a measure and a support commitment from the manager for each.
6. Write the manager talking track: the opening line, the order of topics, how to introduce each development area, and two questions to ask the employee.
7. Flag anything in this review that would be a surprise to the employee. Those items should have been raised earlier and should be acknowledged as such.

## Constraints

- No feedback without an example. Delete any sentence you cannot attach evidence to.
- Do not use the sandwich structure. Say the difficult thing directly and separately.
- Describe behaviour and outcomes, never personality or attitude.
- Do not reference peer feedback in a way that identifies the source unless it was given openly.

## Output

**Goal assessment** — a table of Goal, Status, Evidence, Context.

**Strengths** — three with two examples each and impact.

**Development areas** — two with example, effect, and what better looks like.

**Bias check** — what you corrected and how.

**Next period goals** — three with measures and manager support.

**Talking track** — the conversation plan with two questions.

**Surprise flags** — items that should have been raised earlier.
