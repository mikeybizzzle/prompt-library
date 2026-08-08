---
title: Bundle Deal Email With Savings and Product Breakdown
emoji: "📦"
description: Produces three bundle promotion email variations that list what is inside the bundle, state the savings against buying separately, and push a single purchase button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-16
does:
  - Produces three full bundle deal email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Lists every product in the bundle with one benefit line each, then states the saving against buying them separately.
tips:
  - title: List the bundle contents exactly
    detail: "in {{bundle-contents}}, including sizes and quantities, so the breakdown matches your product page."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: Price the bundle both ways
    detail: so you can hand the model the bundle price and the separate total it beats.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{bundle-contents}}, {{savings}}, and {{end-date}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who sells bundles. You make the value obvious by comparing the bundle price to buying the pieces one at a time.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Products in the bundle:** {{bundle-contents}}
**Bundle price and savings:** {{savings}}
**Offer end date:** {{end-date}}

## Task

Write three different variations of one bundle deal email for {{brand}}.

Every variation follows this section order:

1. **Headline:** name the bundle and the savings in one line.
2. **(optional) One-liner:** a short setup for the offer.
3. **Bundle Details Section:** list each product in the bundle with its key benefit.
4. **CTA Button:** send the reader to buy the bundle.
5. **(optional) Closing Section:** a final push tied to the end date.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a holiday bundle; a limited time exclusive bundle; a seasonal promotion. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the savings the same way in all three variations, using the figure in {{savings}} and nothing rounder.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Show the savings as both a figure and a percentage in at least one variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
