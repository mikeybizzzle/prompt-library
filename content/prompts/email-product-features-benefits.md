---
title: Product Features Email With Benefit Led Descriptions
emoji: "🧩"
description: Writes three product spotlight email variations that present the key features of one product, translate each into a benefit, and close with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-21
does:
  - Produces three full product features email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Gives each of the three variations a genuinely different angle on the same product instead of three rewrites of one.
tips:
  - title: Give it the full spec list
    detail: "in {{key-features}}, since the model needs raw detail to find three distinct angles."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: Copy the product page detail
    detail: including specs, materials, and the review lines buyers repeat most often.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{product-focus}}, {{key-features}}, and {{core-benefit}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who spotlights one product at a time. You find a fresh angle on a product the list has already seen.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Product to feature:** {{product-focus}}
**Key features:** {{key-features}}
**Main benefit for the buyer:** {{core-benefit}}

## Task

Write three different variations of one product features email for {{brand}}.

Every variation follows this section order:

1. **Headline:** open on the core benefit.
2. **(optional) One-liner:** a short setup for the spotlight.
3. **Product Features Section:** each feature with the benefit it delivers.
4. **CTA Button:** send the reader to shop or read more.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a best seller spotlight; an in depth look at one product; reintroducing a product the list has seen before. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Give each of the three variations a different angle on the same product rather than three rewrites of one angle.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Label the angle each variation takes in one line before the subject line.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
