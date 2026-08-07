---
title: Structured Interview Guide With Rating Anchors
emoji: "🗣️"
description: Builds a competency based interview guide with behavioural questions, follow up probes, rating anchors from 1 to 4, and a debrief format that reduces bias.
category: human-resources
subcategory: interview-questions
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, product-managers]
type: text
featured: false
publishedAt: 2025-11-10
does:
  - Allocates competencies across the panel in a table of interviewer, competencies, and minutes so none is doubled or missed.
  - Writes one behavioural question per competency with three probes covering situation, personal contribution, and outcome.
  - Builds observable rating anchors at 1 to 4, a work sample scenario, a minute by minute plan, and a debrief tie break rule.
tips:
  - title: Describe the real problems concretely
    detail: because the work sample scenario is built entirely out of whatever you list there.
  - title: Say who covers what on the panel
    detail: so the allocation matches the interviewers you have actually booked into the loop.
  - title: Ask for a printable scorecard
    detail: version of the rating anchors that each panellist can fill in during the interview.
steps:
  - title: Open the prompt in a new chat
    detail: with the job description and your competency list nearby, ready to paste in.
  - title: Supply the role and panel details
    detail: "at {{role}}, {{competencies}}, {{interview-length}}, {{panel}}, {{seniority}}, and {{real-problems}}."
  - title: Run it in Claude or Gemini
    detail: and check every anchor describes something observable before you circulate the guide.
---

## Role

You are an interviewer trained in structured hiring. You ask every candidate the same questions in the same order and you score against defined anchors.

## Context

**Role:** {{role}}
**Competencies to assess:** {{competencies}}
**Interview length:** {{interview-length}}
**Panel members and what each covers:** {{panel}}
**Seniority level:** {{seniority}}
**Real problems this person will face:** {{real-problems}}

## Task

1. Allocate the competencies across the panel so no competency is assessed twice and none is missed. Show the allocation.
2. For each competency write one primary behavioural question asking for a specific past situation, plus three probes: one for the situation, one for the candidate's own contribution, and one for the outcome and what they would change.
3. Build one work sample or scenario question from the real problems listed. Describe the scenario, what the candidate is asked to produce in the time available, and what you are looking for in their approach rather than their answer.
4. Write rating anchors for each competency at 1, 2, 3, and 4. Each anchor describes what the candidate said or demonstrated, not how the interviewer felt.
5. Write the timing plan for the interview in minutes, including time for candidate questions.
6. Write the debrief protocol: scores submitted before discussion, order of speaking, and the rule for resolving a split panel.

## Constraints

- No hypothetical questions phrased as "what would you do" except in the work sample.
- No brain teasers and no questions about hobbies, family, or background.
- Every probe must ask for detail already implied by the candidate's answer, never lead them.
- Anchors must be observable. Ban "seems", "feels", and "culture fit".

## Output

**Panel allocation** — a table of Interviewer, Competencies, Minutes.

**Question set** — per competency: primary question, three probes, and why this question tests this competency.

**Work sample** — scenario, task, time, and evaluation criteria.

**Rating anchors** — a table per competency with descriptions at 1, 2, 3, and 4.

**Timing plan** — minute by minute.

**Debrief protocol** — the steps and the tie break rule.
