---
title: Resume Screening Pass With Evidence for Every Decision
emoji: "📄"
description: Opens every resume in a Drive folder, scores each against three role requirements with the line that proves it, and sorts the pile into advance, maybe, and reject in a Google Sheet.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-04-03
does:
  - Records years of relevant experience, whether each requirement is met, and the resume line that proves it.
  - Notes any employment gap longer than six months and never infers a requirement without textual evidence.
  - Sorts candidates into advance, maybe, and reject with a notes column explaining every rejection.
tips:
  - title: Write requirements a resume can prove
    detail: "because \"strong communicator\" leaves the evidence column empty every time."
  - title: Read the rejects, not the advances
    detail: since that is where a screen loses someone it should have kept.
  - title: Keep the maybe pile short
    detail: by tightening the requirements and running the folder again.
steps:
  - title: Put the resumes in one Drive folder
    detail: with nothing else in it.
  - title: "Fill in {{folder-url}}, {{role-title}}, {{requirement-1}}, {{requirement-2}}, and {{requirement-3}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Google Drive and Sheets.
---

## Prompt

Open every resume in the Drive folder at {{folder-url}} and screen it against these requirements for {{role-title}}: {{requirement-1}}, {{requirement-2}}, {{requirement-3}}. For each candidate record the file name, years of relevant experience, whether each requirement is met with the line of the resume that proves it, and any gap longer than six months. Sort into advance, maybe, and reject, and never infer a requirement is met without textual evidence. Write the results to a Google Sheet with one row per candidate and a notes column explaining every reject.

## Works with

- drive.google.com
- sheets.google.com

## Variables

- {{folder-url}}: folder URL
- {{role-title}}: role title
- {{requirement-1}}: requirement 1
- {{requirement-2}}: requirement 2
- {{requirement-3}}: requirement 3
