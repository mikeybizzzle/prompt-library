---
title: Compliance Gap Assessment Against a Named Standard
emoji: "🧭"
description: Maps your current controls against a named standard, rates each requirement as met, partial, or missing, and returns a prioritised remediation plan with evidence needed.
category: legal
subcategory: compliance
models: [claude, chatgpt, gemini]
roles: [consultants, business-owners, lawyers]
type: text
featured: false
publishedAt: 2026-01-12
does:
  - "Rates every in scope requirement as met, partially met, or not met, with the evidence behind each rating named."
  - "Returns a risk ranking of gap, consequence, likelihood, effort, and priority, flagging open prior findings as repeats."
  - "Delivers a three wave remediation plan with an action, owner role, artefact, and effort in days for every item."
tips:
  - title: "Paste your actual policy documents"
    detail: "into {{current-controls}}, because an undocumented control is rated partial no matter how well it works."
  - title: "Include the last audit report"
    detail: "so open findings are marked as repeats and pushed up the priority order rather than assessed fresh."
  - title: "Ask it to rewrite each gap"
    detail: "as a ticket with acceptance criteria once you agree with the three remediation waves."
steps:
  - title: "Start with your evidence inventory"
    detail: "open beside the prompt, so every rating can point at a document that actually exists."
  - title: "Fill the standard and scope fields"
    detail: "with {{standard}}, {{scope}}, {{current-controls}}, {{evidence-available}}, and {{target-date}}."
  - title: "Paste it into Claude"
    detail: "which holds long policy documents in one pass, then check the timeline verdict against your date."
---

## Role

You are a compliance analyst. You separate what is documented from what is actually practised, and you treat undocumented practice as a gap.

## Context

**Standard or regulation:** {{standard}}
**Scope of assessment:** {{scope}}
**Business description:** {{business-description}}
**Controls and policies currently in place:** {{current-controls}}
**Evidence available:** {{evidence-available}}
**Previous audit findings:** {{prior-findings}}
**Target date for readiness:** {{target-date}}
**Internal owner:** {{owner}}

## Task

1. List the requirements of the named standard that fall inside the stated scope. Group them by domain. Note explicitly any requirement you are uncertain applies and why.
2. For each requirement, assess the current state as met, partially met, or not met. Assessment rests on evidence, not on intent. A control that exists but is not documented or not consistently followed is partial at best.
3. For each requirement record: the evidence that supports the rating, the evidence that would be required to demonstrate compliance to an assessor, and where that evidence would come from.
4. Rate each gap by risk: the consequence of the gap being found, the likelihood of it being tested, and the effort to close it.
5. Build the remediation plan in three waves ordered by risk and dependency. Each item needs an action, an owner role, an artefact produced, and an estimated effort in days.
6. Identify the requirements that need external help, such as an auditor, a penetration test, or legal sign off.
7. State whether the target date is realistic given the total effort, and if not, what the earliest realistic date is.

## Constraints

- Do not rate a requirement as met without naming the evidence.
- Do not restate the standard's language. Describe what the organisation must actually do.
- Where prior audit findings remain open, mark them as repeat findings and raise their priority.
- Note that this assessment does not replace a formal audit or legal advice.

## Output

**Applicability note**: requirements in scope, out of scope, and uncertain.

**Assessment table**: Requirement, Domain, Rating, Current evidence, Evidence required, Source.

**Risk ranking**: a table of Gap, Consequence, Likelihood, Effort, Priority.

**Remediation plan**: three waves with action, owner, artefact, effort.

**External support needed**: items and the type of provider.

**Timeline verdict**: realistic date with the calculation behind it.
