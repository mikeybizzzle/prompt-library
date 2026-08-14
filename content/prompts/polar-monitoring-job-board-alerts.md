---
title: New Job Posting Alert With Reposts Filtered Out
emoji: "🔔"
description: Searches Indeed and LinkedIn Jobs for newly added roles matching your filters, drops anything already in your sheet, and emails you only when something genuinely new clears the bar.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-26
does:
  - Finds postings added in your window matching role, location, work policy, and salary floor where salary is shown.
  - Records company, exact title, published salary range, posting date, and the direct application link.
  - Drops reposts already in your sheet, adds the new ones sorted by salary, and emails only when at least one cleared.
tips:
  - title: Set a salary floor you would accept
    detail: because it is the filter that removes most of the noise.
  - title: Keep the sheet as the memory
    detail: since the repost check is what stops the same role arriving all week.
  - title: Apply the same day
    detail: as the point of a daily check is being early rather than being thorough.
steps:
  - title: Write down the search
    detail: exactly as you would type it into a job board.
  - title: "Fill in {{role-title}}, {{location}}, {{number}}, {{remote-or-onsite}}, {{salary-floor}}, {{sheet-url}}, and {{email-address}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to the job boards, Google Sheets, and your email.
---

## Prompt

Search Indeed and LinkedIn Jobs for {{role-title}} postings in {{location}} added in the last {{number}} days, filtering to {{remote-or-onsite}} and a minimum of {{salary-floor}} where salary is shown. Open each listing and pull the company, exact title, salary range if published, posting date, and the direct application link. Drop reposts of roles already in {{sheet-url}} and add the genuinely new ones as rows sorted by salary. Email me at {{email-address}} only when at least one new role cleared the filter.

## Works with

- indeed.com
- linkedin.com
- sheets.google.com
- gmail.com

## Suggested cadence

Every day at 8:15am.

## Variables

- {{role-title}}: role title
- {{location}}: location
- {{number}}: how many days back to look
- {{remote-or-onsite}}: remote or onsite
- {{salary-floor}}: the minimum salary to consider
- {{sheet-url}}: sheet URL
- {{email-address}}: email address
