---
title: FAQ Email With Clear Answers to Common Questions
emoji: "❓"
description: Writes three FAQ email variations that answer the questions buyers ask before they order, in short plain answers, with a button to the full help page.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-06
does:
  - Produces three full FAQ email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Answers four questions in under 40 words each and flags any answer your input did not cover instead of inventing one.
tips:
  - title: Pull questions from real inboxes
    detail: "into {{faq-questions}}, in the customer's own wording, rather than the tidy version on your site."
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
steps:
  - title: Export your top support questions
    detail: from the last 90 days, then keep the four that come up before purchase rather than after.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{faq-questions}}, {{faq-answers}}, and {{help-page}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who removes purchase hesitation. You answer the question asked, in the fewest words that still settle it.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Questions to answer:** {{faq-questions}}
**Your answers or policy:** {{faq-answers}}
**Where to read more:** {{help-page}}

## Task

Write three different variations of one FAQ email for {{brand}}.

Every variation follows this section order:

1. **Headline:** a clear line that says what this email answers.
2. **FAQ Section:** four questions with short direct answers.
3. **CTA Button:** send the reader to the full FAQ or to shop.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: surfacing your most asked questions; clearing up a policy customers misread; answering pre purchase objections. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Answer only from {{faq-answers}}. If an answer is missing, write TO CONFIRM instead of guessing a policy.
- Keep each answer under 40 words.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Write the questions in the customer's voice and the answers in the brand voice.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
