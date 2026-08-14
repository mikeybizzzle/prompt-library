---
title: Gift Shortlist Filtered by Budget, Delivery, and Reviews
emoji: "🎁"
description: Researches gift options across retailers, drops anything that cannot arrive in time or averages under four stars, and returns five ranked options with a reason each suits the person.
category: polar
subcategory: polar-personal
models: [claude, chatgpt, gemini]
roles: [solopreneurs, freelancers, virtual-assistants]
type: text
featured: false
publishedAt: 2026-08-10
does:
  - Records item, price, delivery estimate, return policy, and what reviewers complain about for each candidate.
  - Excludes anything that cannot arrive by your date or averages under four stars.
  - Returns five options ranked by fit with one sentence each on why it suits this person.
tips:
  - title: Describe the person, not the category
    detail: because the ranking is only as good as what you said about them.
  - title: Set the arrival date early
    detail: since the delivery filter is what makes this different from browsing.
  - title: Read the complaint line
    detail: as it is usually the reason a well-rated item is still wrong.
steps:
  - title: Write two sentences
    detail: about the person and what they already own.
  - title: "Fill in {{recipient-description}}, {{budget}}, {{date}}, {{other-retailer}}, and {{location}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to the retailers you buy from.
---

## Prompt

Find gift options for {{recipient-description}} with a budget of {{budget}} that must arrive by {{date}}. Search Amazon and {{other-retailer}} plus a couple of specialist sites, and for each candidate record the item, price, delivery estimate to {{location}}, return policy, and the gist of what reviewers complain about. Exclude anything that cannot arrive in time or averages under four stars. Give me five options ranked by fit with one sentence each on why it suits this person, and save the list as a note.

## Works with

- amazon.com
- reddit.com

## Variables

- {{recipient-description}}: recipient description
- {{budget}}: the most you want to spend
- {{date}}: the date it has to arrive by
- {{other-retailer}}: other retailer
- {{location}}: location
