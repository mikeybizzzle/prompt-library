---
title: Creator Partner Shortlist Ranked by Real Engagement
emoji: "🎬"
description: Finds creators publishing to your target audience, records typical recent engagement rather than their best post ever, drops the inactive ones, and ranks the rest in a Google Sheet.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-21
does:
  - Captures handle, follower count, posting frequency over three months, typical recent engagement, and prior sponsorship history.
  - Drops anyone below your engagement threshold or without a post in 60 days.
  - Saves the survivors to a Google Sheet ranked by engagement rate with a column for the angle to pitch each one.
tips:
  - title: Describe the audience, not the creator
    detail: because the match you need is between their viewers and your buyer.
  - title: Set the threshold before you look
    detail: since it is easy to talk yourself into a large account with dead comments.
  - title: Write the pitch angle yourself
    detail: if the suggested one reads like it would fit any creator on the list.
steps:
  - title: Define the audience
    detail: in the words that audience would use about itself.
  - title: "Fill in {{topic}}, {{audience-description}}, {{threshold}}, and {{number}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to YouTube, X, and Google Sheets.
---

## Prompt

Find creators on YouTube and X who publish about {{topic}} for an audience of {{audience-description}}. For each one record the handle, subscriber or follower count, posting frequency over the last three months, typical view or engagement count on recent posts rather than their best ever, and whether they have run sponsorships before. Drop anyone whose recent engagement is under {{threshold}} or who has not posted in 60 days. Save the surviving {{number}} to a Google Sheet ranked by engagement rate, with a column for the angle I would pitch each of them.

## Works with

- youtube.com
- x.com
- sheets.google.com

## Variables

- {{topic}}: topic
- {{audience-description}}: audience description
- {{threshold}}: the minimum recent engagement to stay on the list
- {{number}}: how many creators to keep
