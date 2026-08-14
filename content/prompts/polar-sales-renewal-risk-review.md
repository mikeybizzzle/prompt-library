---
title: Renewal Risk Review of Accounts Coming Up for Renewal
emoji: "⚠️"
description: Lists customers renewing in the coming weeks, checks last activity, open tickets, and Stripe billing failures, then posts the at-risk accounts to Slack with the trigger and the owner tagged.
category: polar
subcategory: polar-sales
models: [claude, chatgpt, gemini]
roles: [sales-teams, founders, agencies]
type: text
featured: false
publishedAt: 2026-03-22
does:
  - Lists every customer with a renewal date inside your window, taken from the accounts view you point it at.
  - Checks last logged activity, open support tickets, and Stripe failed payments or downgrades per account.
  - Posts the at-risk accounts to Slack with the renewal date, the trigger that flagged them, and the owner tagged.
tips:
  - title: Match the window to your notice period
    detail: so an account is flagged while there is still time to save it.
  - title: Trust the trigger, not the score
    detail: because the flag names the exact fact you need to raise in the call.
  - title: Post it to the owners channel
    detail: rather than a management one, since the fix is a conversation someone has to have.
steps:
  - title: Open your accounts view
    detail: and confirm renewal dates and last activity are both visible there.
  - title: "Fill in {{crm-url}}, {{number}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to your CRM, Stripe, and Slack.
---

## Prompt

Open the accounts view in {{crm-url}} and list every customer with a renewal date in the next {{number}} days. For each account check the date of the last logged activity, whether any support ticket is still open, and whether the Stripe subscription shows a failed payment or a downgrade. Mark an account at risk if it has been silent for over 30 days, has an open ticket older than a week, or has any billing failure. Post the at-risk accounts to Slack in {{channel-name}} with the renewal date, the trigger, and the owner tagged.

## Works with

- stripe.com
- slack.com
- sheets.google.com

## Suggested cadence

Every Monday at 8:00am.

## Variables

- {{crm-url}}: CRM URL
- {{number}}: how many days ahead to look for renewals
- {{channel-name}}: the Slack channel the at-risk list is posted to
