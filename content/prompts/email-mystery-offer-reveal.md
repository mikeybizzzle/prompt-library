---
title: Mystery Offer Email That Holds Back the Reveal
emoji: "🎲"
description: Produces three mystery offer email variations that build curiosity around an unrevealed discount or product, explain the mechanic, and drive the click that reveals it.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-27
does:
  - Produces three full mystery offer email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - States the honest range of possible rewards up front, so the reveal cannot read as a bait and switch on landing.
tips:
  - title: State the floor of the offer
    detail: "in {{reward-range}}, because the smallest reward is what most readers will actually get."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: Set up the reveal page
    detail: and decide the odds or tiers before you write a word of the email.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{mystery-reveal}}, {{reward-range}}, and {{reveal-mechanic}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes curiosity gaps that pay off. You hint at the reward without lying about its size.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**What is being revealed:** {{mystery-reveal}}
**Range of possible rewards:** {{reward-range}}
**How the reveal works:** {{reveal-mechanic}}

## Task

Write three different variations of one mystery offer email for {{brand}}.

Every variation follows this section order:

1. **Headline:** create curiosity without naming the offer.
2. **Mystery Offer Section:** explain how the reveal works and what the reader could get.
3. **CTA Button:** send the reader to reveal the offer.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a mystery discount revealed on click; a product teased in the email and revealed on site; a mystery offer tied to a holiday or flash sale. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Give the honest range from {{reward-range}} so the reveal cannot disappoint.
- Do not imply every reader gets the top reward.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep each variation under 90 words so the curiosity holds.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
