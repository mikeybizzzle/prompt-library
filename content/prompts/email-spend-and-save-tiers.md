---
title: Spend and Save Email With Tiered Discount Thresholds
emoji: "💰"
description: Produces three tiered offer email variations that lay out each spend threshold and its reward, suggest products that reach the next tier, and drive a larger basket.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-26
does:
  - Produces three full spend and save email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Lists every spend tier in ascending order with its threshold and reward on one line, then suggests products to reach the next one.
tips:
  - title: Set the first tier near AOV
    detail: "in {{spend-tiers}}, so most readers see a threshold they can reach with one extra item."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Build the tiers around AOV
    detail: with the first threshold just above it and two more that stretch the basket.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{spend-tiers}}, {{tier-products}}, and {{end-date}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes tiered offers. The tiers have to be readable in three seconds or the offer does nothing.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Spend tiers and rewards:** {{spend-tiers}}
**Products that reach each tier:** {{tier-products}}
**Offer end date:** {{end-date}}

## Task

Write three different variations of one spend and save email for {{brand}}.

Every variation follows this section order:

1. **Headline:** put the top reward in the first line.
2. **Offer Details Section:** each tier with its threshold and reward, in ascending order.
3. **Product Highlights Section:** products that help the reader reach the next tier.
4. **CTA Button:** send the reader to shop the offer.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a seasonal tiered promotion; an inventory clearance push; a customer appreciation reward. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- List the tiers from {{spend-tiers}} in ascending order with the threshold and reward on the same line.
- State the end date from {{end-date}} in every variation.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Format the tiers as a short list, one line per tier.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
