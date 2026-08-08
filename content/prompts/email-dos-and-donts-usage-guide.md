---
title: Dos and Donts Email With Product Usage Guidelines
emoji: "✅"
description: Builds three dos and donts email variations that pair correct and incorrect product usage, explain the reason behind each rule, and point to the products that help.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-28
does:
  - Produces three full dos and donts email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Pairs three dos with three matching donts, each carrying a one line reason the reader can act on immediately.
tips:
  - title: Feed it real support tickets
    detail: "in {{common-mistakes}}, since the donts only bite when they name errors customers actually make."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Ask support what breaks most
    detail: and write down the three mistakes they explain over and over each week.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{topic}}, {{common-mistakes}}, and {{related-product}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes usage guidance. You make the rules specific enough to be useful and short enough to read on a phone.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Topic or usage area:** {{topic}}
**Common mistakes customers make:** {{common-mistakes}}
**Product that helps:** {{related-product}}

## Task

Write three different variations of one dos and donts email for {{brand}}.

Every variation follows this section order:

1. **Headline:** a line that promises the reader will stop doing something wrong.
2. **(optional) One-liner:** a short setup for the guidance.
3. **Dos and Donts Section:** three dos and three donts, each with a one line reason.
4. **Relevant Product Section:** the product that makes the dos easier.
5. **CTA Button:** send the reader to shop or read more.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: product usage guidelines; common mistakes to avoid; expert best practices. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Pair every do with a matching dont so the list reads as three contrasts, not six unrelated rules.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Format the dos and donts as two short lists rather than a paragraph.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
