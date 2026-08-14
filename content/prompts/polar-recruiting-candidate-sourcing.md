---
title: Passive Candidate Sourcing Sweep With Evidence per Person
emoji: "🧭"
description: Searches LinkedIn and GitHub for people who could fill an open role, records the strongest piece of evidence each one can do the job, and loads the top names into Airtable.
category: polar
subcategory: polar-recruiting
models: [claude, chatgpt, gemini]
roles: [recruiters, business-owners, founders]
type: text
featured: false
publishedAt: 2026-03-31
does:
  - Captures name, current title and company, tenure, profile link, and the single strongest piece of evidence per candidate.
  - Skips anyone who started their current role in the last six months.
  - Writes the top candidates into an Airtable base with an empty outreach status column.
tips:
  - title: Insist on one must-have skill
    detail: because a list of five requirements returns nobody on a passive search.
  - title: Read the evidence column first
    detail: since a shipped project separates a real candidate from a keyword match.
  - title: Leave the status column empty
    detail: so your outreach tracking stays yours rather than being pre-filled.
steps:
  - title: Define the role in one line
    detail: with the location policy and the one skill that cannot be missing.
  - title: "Fill in {{role-title}}, {{location-or-remote}}, {{must-have-skill}}, {{years}}, and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn, GitHub, and Airtable.
---

## Prompt

Search LinkedIn and GitHub for people who could fill {{role-title}} in {{location-or-remote}}, filtering for {{must-have-skill}} and {{years}} years of experience. For each candidate record name, current title and company, tenure in that role, profile link, and the single strongest piece of evidence they can do the job, such as a shipped project or a relevant repo. Skip anyone who started their current role in the last six months. Put the top {{number}} into an Airtable base with a column for outreach status left blank.

## Works with

- linkedin.com
- github.com
- airtable.com

## Variables

- {{role-title}}: role title
- {{location-or-remote}}: location or remote
- {{must-have-skill}}: must-have skill
- {{years}}: the minimum years of relevant experience
- {{number}}: how many candidates to load into Airtable
