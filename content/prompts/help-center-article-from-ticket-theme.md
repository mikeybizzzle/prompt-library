---
title: Help Center Article From a Recurring Ticket Theme
emoji: "📖"
description: Turns a cluster of repeat tickets into a help article with a task focused title, numbered steps, screenshots marked, troubleshooting branches, and related links.
category: customer-service
subcategory: help-center-articles
models: [claude, chatgpt, gemini]
roles: [virtual-assistants, content-creators, product-managers]
type: text
featured: false
publishedAt: 2025-12-14
does:
  - "Drafts a task shaped title with two alternates and an opening under 40 words that states the plan or permission needed."
  - "Writes one action per numbered step, naming the exact interface element and marking what each screenshot should show."
  - "Adds three troubleshooting branches in customer wording, a limitations list, related links with reasons, and search terms."
tips:
  - title: "Paste tickets in customer wording"
    detail: "unedited, so the title and the search terms use the phrases people actually type."
  - title: "Include the exact button labels"
    detail: "in {{ui-elements}}, or the steps will describe your interface in vague generic terms."
  - title: "Ask for a screenshot shot list"
    detail: "as a separate checklist you can hand to whoever captures the images for the article."
steps:
  - title: "Gather three to five tickets"
    detail: "from the same recurring theme and paste the prompt above them in a new chat."
  - title: "Fill in the seven context fields"
    detail: "starting with {{ticket-examples}}, {{product-behaviour}}, {{common-mistakes}}, and {{ui-elements}}."
  - title: "Draft it in ChatGPT"
    detail: "then paste the result into your help centre editor and capture the marked screenshots."
---

## Role

You are a support content writer. You write for someone who is stuck right now and will not read past the first screen unless it helps.

## Context

**Ticket examples in this cluster:** {{ticket-examples}}
**How the product actually works here:** {{product-behaviour}}
**Where users go wrong:** {{common-mistakes}}
**Interface elements involved:** {{ui-elements}}
**Plan or permission requirements:** {{access-requirements}}
**Existing related articles:** {{related-articles}}
**Search terms users type:** {{search-terms}}

## Task

1. Write the title as the task the user is trying to complete, using the words from the ticket examples rather than internal terminology.
2. Write the opening in under 40 words: what this article helps you do and who it applies to. State the plan or permission requirement here, not further down.
3. Write the steps. One action per numbered step, naming the exact interface element. Mark where a screenshot is needed and describe what it should show.
4. Add a result confirmation: what the user sees when it worked.
5. Write troubleshooting as branches. Take the three most common failure points from the tickets and, for each, describe the symptom exactly as a user would describe it, then the fix.
6. Add a short section on what this feature cannot do, taken from the mistaken expectations in the tickets.
7. List the related articles with a one line reason to click each.
8. List the search terms this article should rank for internally, taken from the customer wording.

## Constraints

- No paragraph longer than three sentences.
- Never use "simply", "just", or "easily".
- Do not explain why the product works this way unless it prevents a mistake.
- If a step differs by platform or plan, split it rather than nesting conditions inside a sentence.

## Output

**Title** — plus two alternates.

**Opening** — under 40 words with requirements.

**Steps** — numbered with screenshot markers and descriptions.

**Result confirmation** — one or two lines.

**Troubleshooting** — three branches with symptom and fix.

**Limitations** — bulleted.

**Related articles** — with reasons.

**Search terms** — the customer phrasings this should match.
