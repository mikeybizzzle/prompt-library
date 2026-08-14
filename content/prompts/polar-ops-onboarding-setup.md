---
title: New Hire Account Setup and Welcome Email Draft
emoji: "🪪"
description: Creates the accounts and invitations a new starter needs, adds them to the recurring meetings and team channel, and drafts a welcome email listing everything that was set up.
category: polar
subcategory: polar-ops
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2026-05-06
does:
  - Creates accounts or invitations in each tool on your standard list at the access level that team normally gets.
  - Adds the new starter to the recurring team meetings and the Slack channel you name.
  - Drafts a welcome email listing every account created and reports the steps that needed an admin you are not.
tips:
  - title: Keep one standard tool list
    detail: because onboarding drifts as soon as each manager picks their own.
  - title: Read the admin-blocked list
    detail: since those are the steps that will otherwise be found on day one.
  - title: Run it a week ahead
    detail: as invitations sitting unaccepted are easier to fix before the start date.
steps:
  - title: Confirm the standard tools
    detail: and the access level that team normally receives.
  - title: "Fill in {{new-hire-name}}, {{start-date}}, {{team}}, {{tool-1}}, {{tool-2}}, {{tool-3}}, {{work-email}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in as an admin on each tool.
---

## Prompt

Run the onboarding checklist for {{new-hire-name}} starting {{start-date}} in the {{team}} team. Create their accounts or invitations in each tool on the standard list — {{tool-1}}, {{tool-2}}, {{tool-3}} — using {{work-email}} and the access level normally given to that team. Add them to the recurring team meetings on Google Calendar and to the {{channel-name}} Slack channel. Then write a welcome email listing every account created and the first-week reading, save it as a draft, and tell me which steps needed an admin I do not have.

## Works with

- calendar.google.com
- slack.com
- notion.so
- gmail.com

## Variables

- {{new-hire-name}}: new hire name
- {{start-date}}: start date
- {{team}}: the team they are joining
- {{tool-1}}: tool 1
- {{tool-2}}: tool 2
- {{tool-3}}: tool 3
- {{work-email}}: work email
- {{channel-name}}: the Slack channel to add them to
