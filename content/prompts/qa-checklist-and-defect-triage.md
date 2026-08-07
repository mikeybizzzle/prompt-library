---
title: QA Checklist and Defect Triage Rules for a Service
emoji: "✅"
description: Builds an inspection checklist with pass criteria for each step, a severity model for defects, triage routing rules, and a weekly quality report format.
category: operations
subcategory: quality-assurance
models: [chatgpt, claude, gemini]
roles: [business-owners, agencies, consultants]
type: text
featured: false
publishedAt: 2026-01-06
does:
  - Converts top customer complaints into quality attributes with observable definitions rather than adjectives.
  - Builds an ordered inspection checklist giving each check a pass criterion, the evidence recorded, and a time cost.
  - Defines four defect severity levels, triage routing with escalation limits, and a weekly report with metric formulas.
tips:
  - title: Quote complaints in customer words
    detail: so the observable definitions stay tied to what people actually report rather than internal language.
  - title: State the inspection time honestly
    detail: because the prompt cuts lower value checks to make the whole checklist fit inside it.
  - title: Follow up by asking for
    detail: a printable one page version of the checklist that an inspector can tick through.
steps:
  - title: Open the prompt in a new chat
    detail: and keep the constraints block, since it forces thresholds instead of vague wording.
  - title: Replace the context placeholders
    detail: "with {{deliverable}}, {{producer-role}}, {{customer}}, {{top-complaints}}, {{production-steps}}, and {{inspection-time}}."
  - title: Run it in ChatGPT
    detail: and ask for the checklist and triage tables as CSV so you can load them into a tracker.
---

## Role

You are a quality lead. You define pass criteria precisely enough that two inspectors reach the same verdict on the same work.

## Context

**Service or deliverable:** {{deliverable}}
**Who produces it:** {{producer-role}}
**Who receives it:** {{customer}}
**What the customer complains about most:** {{top-complaints}}
**Steps in production:** {{production-steps}}
**Cost of a defect reaching the customer:** {{defect-cost}}
**Inspection time available per unit:** {{inspection-time}}

## Task

1. Translate the top complaints into quality attributes. For each attribute state what it means in observable terms, not in adjectives.
2. Build the inspection checklist. Each item needs the check performed, the pass criterion stated as a threshold or a binary condition, and the evidence recorded. Order items so the cheapest checks that catch the most defects run first.
3. Place checks at the right stage. Distinguish checks that must happen during production from checks that happen before release.
4. Define four severity levels for defects. For each, give the customer facing impact, the response time, who is notified, and whether release is blocked.
5. Write triage routing: which role handles which defect type, and the escalation path when the first responder cannot resolve it within the response time.
6. Define the root cause step: after a severity one or two defect, the questions the team answers before closing it.
7. Specify the weekly quality report: which metrics, how each is calculated, and the threshold that triggers a process review.

## Constraints

- No checklist item may use a subjective word without a defined threshold.
- The full checklist must fit inside the stated inspection time. Cut lower value checks if it does not.
- Severity is set by customer impact, never by how hard the fix is.

## Output

**Quality attributes** — a table of Complaint, Attribute, Observable definition.

**Checklist** — a table of Order, Stage, Check, Pass criterion, Evidence recorded, Time.

**Severity model** — four levels with impact, response time, notification, and release block.

**Triage routing** — a table of Defect type, First responder, Escalation, Time limit.

**Root cause questions** — five questions.

**Weekly report** — metrics with formulas and review triggers.
