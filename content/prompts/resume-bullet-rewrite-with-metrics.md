---
title: Resume Bullet Rewrite With Metrics and Scope
emoji: "📄"
description: Rewrites resume bullets to lead with outcome, scope, and a number, flags the ones with no evidence behind them, and matches wording to a target job posting.
category: careers
subcategory: resumes
models: [claude, chatgpt, gemini]
roles: [students, freelancers, consultants]
type: text
featured: false
publishedAt: 2025-10-19
does:
  - Diagnoses each bullet as duty, activity, or outcome stated, then rewrites it to lead with result and scope.
  - Returns a coverage check mapping posting competencies to the bullets that evidence them and the ones with no evidence.
  - Produces a cut list, a two sentence summary, and direct questions for the numbers you have not supplied.
tips:
  - title: Paste raw numbers alongside each bullet
    detail: such as team size, budget, and volume, so fewer bullets come back as questions to answer.
  - title: Include the full job posting
    detail: rather than the title alone, since the coverage check reads competencies straight out of it.
  - title: Ask for a second variant
    detail: of the top four bullets tuned one seniority level higher to see how the framing shifts.
steps:
  - title: Start a new chat with the prompt
    detail: and keep the banned openings list, since it blocks phrases like responsible for.
  - title: Drop your details into the placeholders
    detail: "{{current-bullets}}, {{job-posting}}, {{supporting-details}}, {{target-level}}, {{industry}}, and {{gaps-or-changes}}."
  - title: Send it to Claude
    detail: then answer the questions it returns and rerun so every bullet carries a real number.
---

## Role

You are a resume editor. You know a hiring manager reads a bullet in two seconds and looks for scope and result, not responsibility.

## Context

**Current resume bullets:** {{current-bullets}}
**Target job posting:** {{job-posting}}
**Real details behind each bullet, including numbers:** {{supporting-details}}
**Seniority target:** {{target-level}}
**Industry:** {{industry}}
**Gaps or career changes to handle:** {{gaps-or-changes}}

## Task

1. Diagnose each existing bullet. Mark it as duty stated, activity stated, or outcome stated. Duty and activity bullets are the ones to fix.
2. Rewrite each bullet in the pattern: outcome achieved, followed by the action taken, followed by the scope. Scope means team size, budget, user count, volume, or geography. Lead with the strongest element for that specific bullet rather than forcing one order.
3. Add a number to every bullet where the supporting details allow it. Where they do not, ask the user the specific question that would surface the number rather than inventing one.
4. Compare against the job posting. Identify the competencies the posting emphasises and mark which bullets already evidence them. Note which required competencies have no bullet at all.
5. Reorder the bullets within each role so the ones matching the posting appear first.
6. Cut. Reduce each role to the four strongest bullets and list what was removed so the user can decide.
7. Write a two sentence professional summary that names the target role, the scope of experience, and one differentiator.
8. Address any gap or career change in one line of factual framing.

## Constraints

- No bullet longer than two lines on a standard page.
- Ban these openings: responsible for, tasked with, helped, worked on, assisted in.
- Never fabricate a metric. Missing numbers become questions.
- Match the posting's vocabulary only where the underlying experience genuinely matches.

## Output

**Diagnosis table** — Original bullet, Type, Problem.

**Rewritten bullets** — grouped by role, ordered by relevance, with the metric marked as supplied or requested.

**Questions to answer** — the specific numbers needed, phrased as direct questions.

**Coverage check** — a table of Posting competency, Evidenced by, Gap.

**Cut list** — removed bullets with the reason.

**Summary** — two sentences.

**Gap framing** — one line.
