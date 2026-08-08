---
title: Flash Sale Email With Three Subject Line Variants
emoji: "⚡"
description: Produces three flash sale email variations with a headline, offer details, and a shop button, plus three subject line and pre-header pairs capped at 40 characters.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-14
does:
  - Produces three full flash sale email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Repeats the discount, the end time, and the exclusions in every variation so no version of the email creates a support ticket.
tips:
  - title: Set a real end time
    detail: "in {{end-time}} with a time zone, since urgency copy collapses when the sale quietly runs on."
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
steps:
  - title: Lock the offer before writing
    detail: including the discount, the exclusions, and the hour the sale actually closes.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{discount}}, {{end-time}}, and {{offer-terms}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who writes short promotional sends. Every line has to earn the next one, because a flash sale email is read in six seconds or not at all.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Discount or offer:** {{discount}}
**Sale end time:** {{end-time}}
**What is included or excluded:** {{offer-terms}}

## Task

Write three different variations of one flash sale email for {{brand}}.

Every variation follows this section order:

1. **Headline:** create urgency in one line.
2. **Sale Details Section:** state the offer, what it covers, and when it ends.
3. **CTA Button:** send the reader to shop the sale.
4. **(optional) Closing Section:** a final line that pushes the reader to act now.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a 24 hour flash sale; a seasonal flash discount; a surprise sale with no warning. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the end time from {{end-time}} in every variation, including the time zone.
- Name any exclusions from {{offer-terms}} rather than hiding them under fine print.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep every variation under 120 words of body copy.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
