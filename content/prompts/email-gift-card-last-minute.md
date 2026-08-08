---
title: Gift Card Email for Last Minute Holiday Shoppers
emoji: "🎟️"
description: Produces three gift card email variations that position the card as the fix for shoppers who missed the shipping cutoff, with denominations and a buy now button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-22
does:
  - Produces three full gift card email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Names the delivery method and speed in every variation, because that is the only detail a late shopper is checking.
tips:
  - title: Send it after the cutoff
    detail: "and say so in {{occasion}}, since this email converts best once physical delivery is off the table."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Confirm your gift card denominations
    detail: and whether the card is delivered instantly or on a scheduled date.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{card-options}}, {{occasion}}, and {{delivery-terms}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who sells to people who left it late. You lead with relief, not guilt.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Gift card denominations:** {{card-options}}
**Occasion or holiday:** {{occasion}}
**Delivery method and speed:** {{delivery-terms}}

## Task

Write three different variations of one gift card email for {{brand}}.

Every variation follows this section order:

1. **Headline:** name the problem the gift card solves.
2. **Promotion Details Section:** list the denominations and how fast the card arrives.
3. **CTA Button:** send the reader to buy a gift card.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a holiday gift card push; a last minute gift after the shipping cutoff; a discounted gift card promotion. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State how the card is delivered and how quickly, using {{delivery-terms}}, in every variation.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the whole email under 100 words in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
