---
title: Trending Products Email Explaining Why Each Is Popular
emoji: "📈"
description: Builds three trending email variations that feature currently popular products, explain what is driving the demand for each, and drive readers into the collection.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-15
does:
  - Produces three full trending email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Gives a specific reason each product is moving rather than leaving the word trending to do all the work.
tips:
  - title: Back the trend with data
    detail: "in {{trend-reason}}, whether that is sales growth, restock speed, or a video that took off."
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
steps:
  - title: Compare this month to last
    detail: in your sales reports and pick the products with real week over week growth.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{featured-products}}, {{trend-reason}}, and {{collection}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who writes about momentum. Saying something is trending means nothing unless you say why it is.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Trending products:** {{featured-products}}
**Why each is trending:** {{trend-reason}}
**Collection page:** {{collection}}

## Task

Write three different variations of one trending email for {{brand}}.

Every variation follows this section order:

1. **Headline:** introduce the trend in one line.
2. **Trending Section:** each product with its key benefit and why it is moving.
3. **CTA Button:** send the reader to explore or shop the trending items.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: products popular with your customers right now; seasonal styles and must have items; products trending on social media. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Give a specific reason for every product using {{trend-reason}}. Never leave trending as the only justification.
- Do not claim a product is trending if {{trend-reason}} does not support it.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Feature four products at most in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
