# Add a prompt

A prompt is one markdown file in `content/prompts/`. The filename is the URL slug, so `content/prompts/cold-email-sequence-builder.md` becomes `/p/cold-email-sequence-builder`.

## 1. Copy the template

```md
---
title: Cold Email Sequence Builder for B2B Outreach
emoji: "📧"
description: Builds a five-email cold outreach sequence with subject lines, personalization hooks, and follow-up cadence, tuned to one ICP and one offer.
category: sales
subcategory: cold-outreach
models: [chatgpt, claude, gemini]
roles: [sales-teams, founders]
type: text
featured: false
publishedAt: 2026-01-14
does:
  - Produces five emails with subject lines, body copy, and a send-day cadence.
  - Returns three personalization hooks per email, keyed to the ICP you supply.
  - Defines reply-rate and meeting-booked targets so you can judge the sequence.
tips:
  - title: Name one specific ICP
    detail: rather than a segment, because generic input produces generic hooks.
  - title: Paste a past winning email
    detail: under the offer so the model can match your voice instead of inventing one.
  - title: Follow up by asking it
    detail: to rewrite email three for a prospect who opened but never replied.
steps:
  - title: Open the prompt and paste
    detail: it into a new chat.
  - title: "Fill in {{offer}} and {{icp}}"
    detail: with your product and the exact person you sell to.
  - title: Paste into ChatGPT or Claude
    detail: and run it.
---

## Role

You are a B2B outbound strategist...
```

## 2. Fill in the frontmatter

| Field | Required | Rules |
| --- | --- | --- |
| `title` | yes | 40 to 70 characters. Name the output, not the topic. No hype words. |
| `emoji` | yes | One emoji, in quotes. |
| `description` | yes | 110 to 220 characters. State what the prompt produces. |
| `category` | yes | A top-level slug from `src/data/taxonomy.ts`. |
| `subcategory` | yes | A child slug of that category. |
| `models` | yes | 2 to 4 model slugs. The first one becomes the colored chip on the card. |
| `roles` | yes | 1 to 3 role slugs. |
| `type` | yes | `text`, `image`, or `code`. |
| `featured` | yes | `true` puts the prompt in the "Start here" row. Keep this list short. |
| `publishedAt` | yes | `YYYY-MM-DD`. Shown as the updated date. |
| `does` | no | Three sentences describing what the output contains. |
| `tips` | no | Three `title` and `detail` pairs. `detail` continues the `title` sentence. |
| `steps` | no | Three `title` and `detail` pairs describing the workflow. |

The three optional fields render the Prompt Guide below the workbench. Add all three or none.

YAML detail: quote any value that contains `: `, starts with `{`, or contains `#`. A `detail` that mentions `{{a-placeholder}}` must be quoted.

## 3. Write the body

Text and code prompts use these headings:

```md
## Role
## Context
## Task
## Constraints   (optional)
## Output
```

Image and video prompts use these:

```md
## Prompt
## Variables
## Tips
```

Rules:

1. Write 200 to 600 words for text and code prompts, 120 to 300 for image prompts.
2. Mark every user input as `{{kebab-case-placeholder}}`. The site turns each one into an editable field.
3. State the exact output shape: sections, counts, and field names.
4. Use plain English. No filler, no emoji in the body, no meta-commentary about the prompt.

The test: someone pastes the prompt into Claude, fills the placeholders, and keeps the first result.

## 4. Check it

```bash
npm run build
```

The build fails if the category or subcategory does not exist, or if a required field is missing. Then open the prompt page and read it.

## 5. Open a pull request

One prompt per pull request keeps review simple. Say which model you tested it on.

## Adding a category, model, or role

Edit `src/data/taxonomy.ts`. Categories need a `slug`, `name`, a lucide `icon` name that is also registered in `src/components/library/icon.tsx`, and their `children`. Models need a `color`, and a matching `.model-chip-<slug>` rule in `src/app/globals.css`.
