---
title: Zodiac Email Matching Products to Each Sign
emoji: "♌"
description: Produces three zodiac email variations that pair products with the traits of a sign or the sign of the month, giving each match a reason and a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-20
does:
  - Produces three full zodiac email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Pairs each sign with a product and states the trait behind the match, so no pairing reads as random.
tips:
  - title: Match on one trait only
    detail: "from {{sign-traits}}, because a product tied to three traits at once stops feeling personal."
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
steps:
  - title: Pick the sign of the month
    detail: and choose products whose character genuinely maps to one of its traits.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{zodiac-signs}}, {{featured-products}}, and {{sign-traits}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who writes light personalised campaigns. The match between trait and product has to be specific enough to feel deliberate.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Sign or signs to feature:** {{zodiac-signs}}
**Products to match:** {{featured-products}}
**Traits to draw on:** {{sign-traits}}

## Task

Write three different variations of one zodiac email for {{brand}}.

Every variation follows this section order:

1. **Headline:** open on the sign or the month.
2. **(optional) One-liner:** a short setup for the campaign.
3. **Zodiac Sign Section:** each sign with its trait and the matched product.
4. **CTA Button:** send the reader to shop or read more.
5. **(optional) Closing Section:** a fun or persuasive close.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a monthly campaign for the current sign; a full set of matches across all twelve signs; a seasonal personality led gift angle. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Give a reason for every match using {{sign-traits}}. A pairing without a reason reads as random.
- Keep the tone light and skip anything that reads as a prediction about the reader's life.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Cover one sign in depth or up to four signs briefly.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
