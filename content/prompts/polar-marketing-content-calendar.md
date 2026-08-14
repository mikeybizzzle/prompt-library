---
title: Content Calendar Filled From Real Audience Questions
emoji: "📅"
description: Collects the questions people ask about a topic on Reddit, Hacker News, and in Google, turns the themes into dated content ideas, and adds each one to your calendar as a row.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-12
does:
  - Groups collected questions into themes and turns each into an idea with a working title, format, question answered, and target term.
  - Slots the ideas across the month at your cadence without repeating a format back to back.
  - Adds each idea to your content calendar with a publish date and a status of idea.
tips:
  - title: Keep the source questions
    detail: because the exact wording people used is the headline you should test.
  - title: Set a cadence you can hold
    detail: since a full month of ideas nobody publishes is worse than four that ship.
  - title: Watch the format mix
    detail: as the alternating rule is what stops a month of identical posts.
steps:
  - title: Pick the topic
    detail: people already discuss in public rather than your internal category name.
  - title: "Fill in {{topic}}, {{number}}, {{month}}, {{cadence}}, and {{calendar-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Notion.
---

## Prompt

Collect the questions people are actually asking about {{topic}} from Reddit, Hacker News, and the "People also ask" box in Google search. Group them into {{number}} themes and turn each theme into a content idea with a working title, the format that suits it, the specific question it answers, and the search term it targets. Slot the ideas across {{month}} at {{cadence}}, avoiding two of the same format back to back. Add each one as a row in the content calendar at {{calendar-url}} with the publish date and status set to idea.

## Works with

- reddit.com
- news.ycombinator.com
- notion.so

## Variables

- {{topic}}: topic
- {{number}}: how many themes to produce
- {{month}}: the month to schedule across
- {{cadence}}: how often you publish, such as twice a week
- {{calendar-url}}: calendar URL
