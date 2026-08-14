---
title: Onboarding Guide Written by Actually Doing the Setup
emoji: "🧑‍💻"
description: Walks the setup exactly as a new person would, records every step including the undocumented ones, and publishes a numbered guide with expected output and a troubleshooting section.
category: polar
subcategory: polar-docs
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2026-07-23
does:
  - Follows the existing README and docs from your starting point and records every step actually required.
  - Notes each point where the instructions were wrong, out of date, or assumed knowledge.
  - Publishes a numbered guide with expected output after each step and a troubleshooting section built from the failures it hit.
tips:
  - title: Name the role precisely
    detail: because the setup a designer needs is not the setup a backend engineer needs.
  - title: Keep the undocumented steps visible
    detail: since those are the reason the current guide fails.
  - title: Rerun it after the fixes
    detail: as the second pass is what proves the guide now works.
steps:
  - title: Pick the starting URL
    detail: a new person would genuinely be sent to first.
  - title: "Fill in {{product-or-repo}}, {{role}}, {{starting-url}}, and {{parent-page}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to GitHub and Notion.
---

## Prompt

Walk through setting up {{product-or-repo}} exactly as a new {{role}} would, starting from {{starting-url}} and following whatever the README and existing docs tell you. Record every step you actually had to take, including the ones no document mentions, and note each point where the instructions were wrong, out of date, or assumed knowledge. Write the result as a numbered guide with expected output after each step and a troubleshooting section built from the problems you hit. Publish it to Notion under {{parent-page}}.

## Works with

- github.com
- notion.so

## Variables

- {{product-or-repo}}: product or repo
- {{role}}: the role the guide is written for
- {{starting-url}}: starting URL
- {{parent-page}}: the Notion page to publish under
