---
title: Giveaway Email With Prize Details and Entry Steps
emoji: "🏆"
description: Writes three giveaway email variations that describe the prize, state its value, spell out how to enter, and close with an entry button and the key terms.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-30
does:
  - Produces three full giveaway email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Numbers the entry steps in order and carries the closing date and eligibility limits into every variation.
tips:
  - title: Write the entry steps first
    detail: "in {{entry-steps}}, because a giveaway with a confusing entry flow gets opens and no entries."
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
steps:
  - title: Settle the prize and rules
    detail: including who can enter, when it closes, and how the winner gets contacted.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{prize}}, {{entry-steps}}, and {{giveaway-terms}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who runs promotions cleanly. You make entering feel easy and make the terms impossible to misread.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Prize and its value:** {{prize}}
**How to enter:** {{entry-steps}}
**Closing date and terms:** {{giveaway-terms}}

## Task

Write three different variations of one giveaway email for {{brand}}.

Every variation follows this section order:

1. **Headline:** lead with the prize.
2. **Introduction Section:** explain the giveaway in two lines.
3. **Prize Details Section:** describe the prize and its value.
4. **Participation Instructions Section:** list the entry steps in order.
5. **CTA Button:** send the reader to enter.
6. **(optional) Closing Section:** a thank you and the closing date.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a product giveaway; a seasonal or holiday giveaway; a giveaway run to grow a social following. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the closing date and any eligibility limits from {{giveaway-terms}} in every variation.
- Number the entry steps so there is no ambiguity about the order.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Put the closing date in at least one subject line.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
