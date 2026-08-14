---
title: Dependency Status Watch That Posts Only on Incidents
emoji: "🚨"
description: Checks the status page of each critical vendor for incidents opened or updated in the last hour, posts immediately to Slack when something is degraded, and logs quietly when all is well.
category: polar
subcategory: polar-monitoring
models: [claude, chatgpt, gemini]
roles: [founders, product-managers, marketers]
type: text
featured: false
publishedAt: 2026-06-23
does:
  - Records the overall status and any incident opened or updated in the last hour, with affected components and the vendor update text.
  - Posts to Slack immediately when a service is degraded or down, with the component and the incident link.
  - Logs the check to your sheet and posts nothing when everything is operational.
tips:
  - title: List only what you depend on
    detail: because a channel that alerts on unused vendors gets muted within a week.
  - title: Point it at the status page
    detail: since a vendor homepage rarely admits to an incident.
  - title: Keep the quiet log
    detail: as it proves the check was running when someone asks later.
steps:
  - title: Find the status page URLs
    detail: for the services you would notice going down.
  - title: "Fill in {{service-1}}, {{service-2}}, {{service-3}}, {{channel-name}}, and {{sheet-url}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Slack and Google Sheets.
---

## Prompt

Check the status page for each service we depend on: {{service-1}}, {{service-2}}, {{service-3}}. Record the current overall status and any incident opened or updated in the last hour, including the affected components and the vendor's latest update text. If any service is degraded or down, post immediately to Slack in {{channel-name}} with the service, the affected component, and the incident link. If everything is operational, log the check to {{sheet-url}} and post nothing.

## Works with

- slack.com
- sheets.google.com

## Suggested cadence

Every 30 minutes.

## Variables

- {{service-1}}: service 1
- {{service-2}}: service 2
- {{service-3}}: service 3
- {{channel-name}}: the Slack channel incidents are posted to
- {{sheet-url}}: sheet URL
