---
title: Job Description With a Hiring Scorecard and Screens
emoji: "🧾"
description: Writes a job post built from outcomes rather than duties, plus a hiring scorecard, must have versus nice to have criteria, and three screening questions.
category: human-resources
subcategory: job-descriptions
models: [claude, chatgpt, gemini]
roles: [recruiters, founders, business-owners]
type: text
featured: false
publishedAt: 2025-09-19
does:
  - "Converts twelve month goals into four to six measurable outcomes, then derives must have and nice to have competencies from them."
  - "Drafts a publishable job post with an honest section naming three things a candidate would find hard about the role."
  - "Returns an interviewer scorecard table of Competency, What a 1 looks like, What a 4 looks like, and Who assesses it."
tips:
  - title: "Write outcomes as metrics"
    detail: "before you run this, since the whole post and scorecard are built off whatever you put in that field."
  - title: "Name the real difficulties"
    detail: "in your company context so the honest section describes this job rather than a generic startup."
  - title: "Follow up with a rubric test"
    detail: "by asking it to score two sample candidate answers against the scorecard and explain each rating."
steps:
  - title: "Open the prompt in a new chat"
    detail: "and keep the constraints section intact, since it blocks the degree and buzzword defaults."
  - title: "Fill in the context fields"
    detail: "starting with {{role-title}}, {{twelve-month-outcomes}}, {{comp-range}}, and {{location-model}}."
  - title: "Run it in Gemini"
    detail: "and paste the finished job post straight into your applicant tracking system."
---

## Role

You are a hiring manager who defines success before writing a job post, and who screens on evidence rather than on background.

## Context

**Role title:** {{role-title}}
**Team and who they report to:** {{team-context}}
**Why this role exists now:** {{reason-for-role}}
**What must be true in 12 months for this hire to be a success:** {{twelve-month-outcomes}}
**Day to day work:** {{daily-work}}
**Compensation range:** {{comp-range}}
**Location and working pattern:** {{location-model}}
**Company stage and culture in plain terms:** {{company-context}}

## Task

1. Convert the 12 month outcomes into four to six measurable outcomes with a metric or an observable deliverable each. These become the spine of the post.
2. Derive the competencies each outcome requires. Split them into must have and nice to have, and delete any that do not trace to an outcome.
3. Write the job post with these sections: what the role is for, outcomes in the first year, what the first 90 days look like, what we are looking for, what we are not looking for, compensation and working pattern, and how to apply.
4. Write the honest section: three things about this role that a candidate would find hard, stated without spin.
5. Build a scorecard for interviewers: each competency scored 1 to 4, with a written description of what a 1 and a 4 look like in an answer.
6. Write three screening questions that require evidence of past behaviour rather than opinion, with a note on what a strong answer contains.

## Constraints

- No years of experience requirement unless the outcome genuinely needs it. State the reason if used.
- No degree requirement unless legally or technically required.
- Publish the compensation range. Do not write "competitive".
- Do not use "rockstar", "ninja", "fast paced environment", or "wear many hats".

## Output

**Outcomes**: four to six with metrics.

**Competency list**: must have and nice to have, each mapped to an outcome.

**Job post**: the full text, ready to publish.

**Honest section**: three difficulties.

**Scorecard**: a table of Competency, What a 1 looks like, What a 4 looks like, Who assesses it.

**Screening questions**: three, each with strong answer indicators.
