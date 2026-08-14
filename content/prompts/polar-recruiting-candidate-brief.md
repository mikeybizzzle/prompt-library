---
title: Interview Prep Brief on One Candidate for the Panel
emoji: "🗒️"
description: Pulls a candidate career history, public work, and writing into a Notion brief under 400 words that names their two strongest areas, their two thinnest, and three probing questions.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-04-09
does:
  - Summarizes career history and tenure from LinkedIn plus their most substantial public work.
  - Names the two areas of the role where their background is strongest and the two where it is thinnest.
  - Proposes three probing questions aimed at the thin areas and posts the brief to the Notion interview page.
tips:
  - title: Send it the day before
    detail: so the panel reads it while there is still time to divide the questions up.
  - title: Hold the 400-word limit
    detail: because a longer brief goes unread and the panel improvises instead.
  - title: Assign the three questions
    detail: to different interviewers rather than letting all three get asked twice.
steps:
  - title: Gather the basics
    detail: including the exact role title and the interview date.
  - title: "Fill in {{candidate-name}}, {{role-title}}, and {{date}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Notion.
---

## Prompt

Prepare a brief on {{candidate-name}} for their {{role-title}} interview on {{date}}. Pull their career history and tenure from LinkedIn, their most substantial public work from GitHub or a portfolio site, and anything they have written or spoken about publicly. List the two areas of the role where their background is strongest and the two where it is thinnest, and propose three probing questions aimed at the thin areas. Post it into the Notion interview page for this candidate and keep it under 400 words.

## Works with

- linkedin.com
- github.com
- notion.so

## Variables

- {{candidate-name}}: candidate name
- {{role-title}}: role title
- {{date}}: the interview date
