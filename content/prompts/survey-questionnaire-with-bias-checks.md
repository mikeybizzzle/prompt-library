---
title: Survey Questionnaire With Bias Checks and Scales
emoji: "📋"
description: Designs a survey with a screener, ordered question blocks, consistent scales, and a bias review that flags leading, double barrelled, and unanswerable items.
category: research
subcategory: surveys
models: [chatgpt, claude, gemini]
roles: [analysts, marketers, product-managers]
type: text
featured: false
publishedAt: 2026-02-08
does:
  - Maps each objective to a measurable variable and the analysis planned for it, cutting any variable with no stated analysis.
  - Writes a screener plus blocked questions with one consistent labelled scale family, skip logic, and two open text items.
  - Returns a bias review table of original question, problem, and rewrite, with a time estimate and cross tab plan.
tips:
  - title: State the decision it informs
    detail: so any question that cannot change that decision gets cut before you field the survey.
  - title: Set a realistic completion time
    detail: since it trims questions until the estimate fits the maximum minutes you hand it.
  - title: Ask for the cut list
    detail: naming every question dropped for length, so you can argue the important ones back in.
steps:
  - title: Start a chat with the prompt
    detail: and your research objective written out as the decision you actually need to make.
  - title: Complete the seven context lines
    detail: "{{research-objective}}, {{decision}}, {{population-and-channel}}, {{sample-size}}, {{max-minutes}}, {{incentive}}, {{segments}}."
  - title: Run it in ChatGPT or Gemini
    detail: then move the finished questionnaire into your survey tool with the skip logic intact.
---

## Role

You are a survey methodologist. You know a badly worded question produces confident numbers that mean nothing.

## Context

**What we want to learn:** {{research-objective}}
**Decision it informs:** {{decision}}
**Population and how we will reach them:** {{population-and-channel}}
**Target sample size:** {{sample-size}}
**Maximum completion time:** {{max-minutes}}
**Incentive offered:** {{incentive}}
**Segments we need to compare:** {{segments}}

## Task

1. Translate the objective into the specific variables the survey must measure. For each, state how it will be analysed once collected. Cut any variable you cannot state an analysis for.
2. Write a screener of three to five questions that removes respondents outside the population, using at least one question that does not signal the correct answer.
3. Order the questionnaire in blocks: screener, behaviour, attitude, the key measure, demographics last. State why each block sits where it does.
4. Write the questions. Use a consistent scale family throughout, define the scale points with labels rather than numbers alone, and include a genuine opt out option where a respondent may have no view.
5. Include two open text questions placed where they will actually be answered, worded to elicit a specific example rather than a general opinion.
6. Run a bias review of your own draft. Flag every leading question, double barrelled question, question relying on unreliable recall, and question with overlapping answer options. Rewrite each.
7. Estimate completion time by question type and cut until it fits the maximum.
8. Specify the analysis plan: which cross tabs will be run, the minimum cell size for a segment claim, and how open text will be coded.

## Constraints

- No question may contain the word "and" joining two ideas.
- Answer options must be mutually exclusive and collectively exhaustive.
- No recall period longer than 30 days for frequency questions.
- Demographics only where a stated cross tab needs them.

## Output

**Variables and analysis**: a table of Variable, Question number, Analysis planned.

**Questionnaire**: full text with question types, scales, and skip logic.

**Bias review**: a table of Original question, Problem, Rewrite.

**Time estimate**: by block and total.

**Analysis plan**: cross tabs, minimum cell size, open text coding scheme.
