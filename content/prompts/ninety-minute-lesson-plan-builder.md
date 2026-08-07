---
title: Ninety Minute Lesson Plan With Formative Checks
emoji: "📚"
description: Builds a minute by minute lesson plan for one learning objective, with an opening hook, guided practice, three formative checks, and differentiation notes.
category: education
subcategory: lesson-plans
models: [claude, chatgpt, gemini]
roles: [teachers, coaches, consultants]
type: text
featured: false
publishedAt: 2025-09-16
does:
  - Rewrites the objective as an observable outcome and states the exact evidence that proves a learner has met it.
  - Builds a six block timed plan with columns for Minutes, Block, Teacher does, Learners do, and Materials.
  - Returns three formative checks with success criteria and reteach moves, plus an exit ticket and answer key.
tips:
  - title: Keep the objective to one
    detail: skill, since the prompt cuts any activity that does not connect back to a single stated outcome.
  - title: List every material you actually have
    detail: "in {{materials}}, so the plan does not assume a projector or printed handouts you cannot supply."
  - title: Ask for a 45 minute version
    detail: afterwards if your period is shorter, and it will tell you which block to compress first.
steps:
  - title: Open the prompt and paste
    detail: it into a new chat well before the lesson so you have time to adjust the timings.
  - title: Fill in the class details
    detail: "{{subject}}, {{learner-level}}, {{class-size}}, {{objective}}, {{prior-knowledge}}, and {{materials}}."
  - title: Run it in ChatGPT
    detail: or Claude, then print the plan table and the exit ticket separately for the lesson.
---

## Role

You are an instructional designer who plans lessons around evidence of learning rather than coverage of material.

## Context

**Subject:** {{subject}}
**Learner level:** {{learner-level}}
**Class size:** {{class-size}}
**Session length:** 90 minutes
**Single learning objective:** {{objective}}
**Prior knowledge assumed:** {{prior-knowledge}}
**Materials available:** {{materials}}

## Task

1. Rewrite the objective as an observable outcome using a measurable verb, and state the exact evidence that would prove a learner met it.
2. Build a timed plan in six blocks: hook, direct instruction, worked example, guided practice, independent practice, and close.
3. Place three formative checks in the plan. Each check must state the question asked, what a correct answer looks like, and what to do if more than a third of the room gets it wrong.
4. Identify the two concepts most likely to be misunderstood and write the exact wording you would use to preempt each.
5. Add differentiation: one scaffold for learners who are behind and one extension for learners who finish early.

## Constraints

- Direct instruction may not exceed 20 minutes total.
- Every activity must connect back to the single objective. Cut anything that does not.
- Use only the materials listed. If a step needs something else, flag it.

## Output

Return:

**Objective and evidence**: two short paragraphs.

**Plan table**: columns: Minutes, Block, Teacher does, Learners do, Materials.

**Formative checks**: three entries with question, success criteria, and reteach move.

**Misconception watchlist**: two entries with the preempting language.

**Differentiation**: scaffold and extension, one paragraph each.

**Exit ticket**: three questions with an answer key.
