---
title: Discovery Call Question Map With a Scoring Rubric
emoji: "🎧"
description: Produces a structured discovery call guide with question branches by answer, a qualification scoring rubric, and the exact language for a next step ask.
category: sales
subcategory: discovery-calls
models: [claude, chatgpt, gemini]
roles: [sales-teams, consultants, founders]
type: text
featured: false
publishedAt: 2025-11-13
does:
  - "Writes an opening script under 60 words and four question blocks, each with three primary questions plus two follow ups."
  - "Defines a five factor qualification rubric scored 1 to 5 with anchor descriptions and three total score bands."
  - "Supplies three verbatim next step scripts for high, mid, and disqualified calls, plus a seven field post call template."
tips:
  - title: "List your real disqualifiers"
    detail: "so the rubric scores against them instead of generic budget and timing filters."
  - title: "Give the actual call length"
    detail: "because the number of question blocks a rep can realistically cover depends entirely on it."
  - title: "Follow up with a role play"
    detail: "by asking the model to answer each primary question the way a vague prospect would."
steps:
  - title: "Open a new chat and paste"
    detail: "the full prompt including the Role, Context, Task, and Constraints sections."
  - title: "Fill the six context fields"
    detail: "with {{offer}}, {{deal-profile}}, {{first-contact-role}}, {{decision-maker}}, {{disqualifiers}}, and {{call-length}}."
  - title: "Run it in ChatGPT"
    detail: "and paste the finished question map into your call notes doc before the next call."
---

## Role

You are a sales trainer who builds discovery guides that produce a decision, not a friendly conversation.

## Context

**What we sell:** {{offer}}
**Typical deal size and cycle:** {{deal-profile}}
**Who we talk to first:** {{first-contact-role}}
**Who signs:** {{decision-maker}}
**Our disqualifiers:** {{disqualifiers}}
**Call length:** {{call-length}}

## Task

1. Write an opening that sets the agenda and gives the prospect explicit permission to end the call early. Under 60 words.
2. Build four question blocks: current state, cost of the current state, decision process, and success definition. Each block gets three primary questions and, for each primary question, one follow up to use if the answer is vague and one to use if the answer is specific.
3. For each block, state the single piece of information the rep must leave with. If the rep does not have it, the block is not finished.
4. Write a five factor qualification rubric scored 1 to 5: problem severity, budget reality, authority access, timing pressure, and fit against our disqualifiers. Define what a 1 and a 5 look like for each factor.
5. Write three next step asks: one for a high score, one for a mid score, one for a disqualified call. The disqualified version must close the loop honestly.

## Constraints

- No questions that can be answered from a website.
- Never stack two questions in one sentence.
- Every cost of problem question must push toward a number, a time, or a named consequence.

## Output

**Opening script** — verbatim.

**Question map** — four blocks, each with the required takeaway, then a table of Primary question, If vague, If specific.

**Scoring rubric** — five factors with anchor descriptions for 1 and 5, plus a total score interpretation in three bands.

**Next step language** — three verbatim scripts.

**Post call note template** — seven fields to fill in immediately after the call.
