---
title: Trip Options Paired Into Three Costed Itineraries
emoji: "✈️"
description: Finds three flight options and three places to stay near a chosen area, pairs them into complete itineraries at different price points, and says which one gives the best value.
category: polar
subcategory: polar-personal
models: [claude, chatgpt, gemini]
roles: [solopreneurs, freelancers, virtual-assistants]
type: text
featured: false
publishedAt: 2026-08-01
does:
  - Records airline, times, stops, duration, and price for three flight options across different times of day.
  - Records nightly rate, total, cancellation policy, and walking distance for three places to stay.
  - Pairs them into three complete itineraries with totals and names the best value with a reason.
tips:
  - title: Anchor the stay to a landmark
    detail: because walking distance is the number that decides how the trip feels.
  - title: Ask for a cheaper tier
    detail: if all three itineraries land in the same price band.
  - title: Book it yourself
    detail: since prices move between the research and the checkout.
steps:
  - title: Fix the dates
    detail: and the part of town you want to stay near.
  - title: "Fill in {{origin}}, {{destination}}, {{departure-date}}, {{return-date}}, {{number}}, and {{neighborhood-or-landmark}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: that can reach travel sites and Google Docs.
---

## Prompt

Plan options for a trip from {{origin}} to {{destination}} departing {{departure-date}} and returning {{return-date}} for {{number}} travelers. Find three flight options across different times of day, recording airline, times, stops, total duration, and price, then find three places to stay near {{neighborhood-or-landmark}} with nightly rate, total, cancellation policy, and walking distance to it. Pair them into three complete itineraries at different price points and total each one. Put the comparison into a Google Doc and say which pairing gives the best value and why.

## Works with

- google.com
- docs.google.com

## Variables

- {{origin}}: origin
- {{destination}}: destination
- {{departure-date}}: departure date
- {{return-date}}: return date
- {{number}}: how many travelers
- {{neighborhood-or-landmark}}: neighborhood or landmark
