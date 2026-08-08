---
title: Sale Email With Offer Terms and Three Angle Variants
emoji: "🏷️"
description: Produces three sale email variations that present a discount event, state the terms and end date clearly, and drive readers to shop before the offer closes.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-02
does:
  - Produces three full sale email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Carries the discount, the covered products, and the end date through all three variations without stacking urgency phrases.
tips:
  - title: Write the exclusions down first
    detail: "in {{offer-terms}}, because the exclusions are what generate replies after the send."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Finalise the discount and terms
    detail: including which collections are excluded and the exact hour the sale ends.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{sale-event}}, {{offer-terms}}, and {{end-date}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes discount campaigns that still respect the brand. You state the offer once, clearly, and repeat it only where it helps.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Sale or discount event:** {{sale-event}}
**Discount and terms:** {{offer-terms}}
**Sale end date:** {{end-date}}

## Task

Write three different variations of one sale email for {{brand}}.

Every variation follows this section order:

1. **Headline:** create urgency around the offer.
2. **Sale Details Section:** the offer, what it covers, and the products worth grabbing.
3. **CTA Button:** send the reader to shop the sale.
4. **(optional) Closing Section:** a persuasive line tied to the end date.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a holiday sale; a limited time discount event; an anniversary or clearance sale. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the discount, the covered products, and the end date from {{offer-terms}} and {{end-date}} in every variation.
- Do not stack urgency phrases. One clear deadline beats three.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the body under 130 words in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
