---
title: One-Page Account Brief Written Before the Call
emoji: "📋"
description: Builds a one-page Google Doc on an account covering what they sell, recent funding and leadership changes, news, hiring signals, and your contact background, ending with three opening questions.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-13
does:
  - Covers what the company sells and to whom, recent funding or leadership changes, and news from the last 90 days.
  - Pulls the technologies named in their job postings and the contact background and tenure from LinkedIn.
  - Ends with three specific opening questions and one credible reason they might need what you sell.
tips:
  - title: Run it the morning of the call
    detail: so the 90-day news window still includes anything that broke this week.
  - title: Name the contact and their title
    detail: because the brief leans on their tenure to judge what they own.
  - title: Ask for the questions again
    detail: if all three read as generic discovery rather than specific to this account.
steps:
  - title: Confirm the meeting details
    detail: including who is actually attending from the other side.
  - title: "Fill in {{company-name}}, {{contact-and-title}}, and {{my-product}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to LinkedIn and Google Docs.
---

## Prompt

Build a briefing on {{company-name}} ahead of my call with {{contact-and-title}}. Cover what the company sells and to whom, recent funding or leadership changes, any news from the last 90 days, the technologies they mention in job postings, and the contact's background and tenure from LinkedIn. Close with three specific questions I could open the call with and one credible reason they might need {{my-product}}. Keep it to one page and save it as a Google Doc titled "{{company-name}} call brief".

## Works with

- linkedin.com
- crunchbase.com
- docs.google.com

## Variables

- {{company-name}}: company name
- {{contact-and-title}}: contact name and title
- {{my-product}}: what you sell to them
