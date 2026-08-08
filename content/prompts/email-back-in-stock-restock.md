---
title: Back in Stock Email With Urgency and Restock Proof
emoji: "🔄"
description: Writes three restock email variations announcing that a sold out product has returned, describing what makes it sell out, and driving readers to buy before it goes again.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-12-29
does:
  - Produces three full restock email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Uses how fast the product sold out last time as the proof of demand, rather than generic scarcity language.
tips:
  - title: Send it the same day
    detail: "stock lands, and put the real waitlist size in {{sellout-history}} if you have one."
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
steps:
  - title: Check the restock quantity
    detail: and find out how quickly the previous batch sold through last time.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{restocked-products}}, {{sellout-history}}, and {{stock-detail}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who writes restock news. The product already proved demand, so the email only has to deliver the news and the urgency.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Restocked products:** {{restocked-products}}
**How long it was sold out:** {{sellout-history}}
**Stock available now:** {{stock-detail}}

## Task

Write three different variations of one restock email for {{brand}}.

Every variation follows this section order:

1. **Headline:** deliver the news in the first line.
2. **(optional) One-liner:** a short intro to the restock.
3. **Product Details Section:** the restocked products with their key benefits.
4. **CTA Button:** send the reader to shop the restock.
5. **(optional) Closing Section:** a persuasive line about how fast it went last time.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a best seller returning to stock; a seasonal favourite coming back; a limited edition restock. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Use the sellout history in {{sellout-history}} as the proof of demand rather than generic scarcity language.
- Do not overstate the stock position beyond what {{stock-detail}} says.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Lead every subject line with the fact that the item is back.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
