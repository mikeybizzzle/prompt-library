---
title: Inbound Lead Triage With Drafted First Replies
emoji: "📥"
description: Reads yesterday inbound email, scores each sender against your ideal profile, saves a drafted reply for every hot and warm lead, and logs one row per lead to your tracking sheet.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-19
does:
  - Tags each inquiry hot, warm, or poor fit against your stated profile with a one-line reason.
  - Saves a Gmail draft for every hot and warm lead that answers the actual question and proposes a next step.
  - Appends one row per lead to the tracking sheet you name.
tips:
  - title: Describe the profile in specifics
    detail: "because {{icp-description}} is the only thing separating warm from poor fit."
  - title: Check the drafts before sending
    detail: since it saves them rather than sending on purpose.
  - title: Keep the poor fit rows
    detail: as the reasons show you which channel is sending you the wrong traffic.
steps:
  - title: Set up the Gmail label
    detail: that inbound inquiries already land under.
  - title: "Fill in {{inbound-label}}, {{icp-description}}, and {{sheet-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Gmail and Google Sheets.
---

## Prompt

Go through Gmail messages from the last 24 hours labeled {{inbound-label}} and treat each as a new inquiry. For each sender look up their company size, industry, and website to judge fit against my ideal profile of {{icp-description}}, then tag them as hot, warm, or poor fit with a one-line reason. Draft a reply for every hot and warm lead that answers their actual question and proposes a specific next step, saving each as a Gmail draft rather than sending. Append one row per lead to the tracking sheet at {{sheet-url}}.

## Works with

- gmail.com
- linkedin.com
- sheets.google.com

## Suggested cadence

Every day at 8:30am.

## Variables

- {{inbound-label}}: inbound label
- {{icp-description}}: your ideal customer profile in one sentence
- {{sheet-url}}: sheet URL
