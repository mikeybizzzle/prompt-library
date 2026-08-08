---
title: Low Stock Alert Email With Urgency and Product Detail
emoji: "📉"
description: Writes three low stock email variations that name the products running out, say what buyers miss if they wait, and drive an immediate purchase decision.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-19
does:
  - Produces three full low stock alert email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Names the products, the stock position, and whether a restock is coming, so the urgency holds up after the send.
tips:
  - title: Check stock before sending
    detail: "and put the real number in {{stock-detail}}, because a sold out link is worse than no email."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
steps:
  - title: Pull your live inventory counts
    detail: and pick the two or three products genuinely close to selling out.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{low-stock-products}}, {{stock-detail}}, and {{demand-reason}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who writes scarcity honestly. You say what is running low and let the fact do the work.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Products running low:** {{low-stock-products}}
**Units left or restock date:** {{stock-detail}}
**Why the product sells out:** {{demand-reason}}

## Task

Write three different variations of one low stock alert email for {{brand}}.

Every variation follows this section order:

1. **Headline:** state the scarcity in one line.
2. **Product Section:** the low stock products and what the reader misses by waiting.
3. **CTA Button:** send the reader to shop the low stock items.
4. **(optional) Closing Section:** a final push to act now.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a genuine low stock notification; a best seller running down before a restock; a final call on a discontinued line. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Use only the stock figures in {{stock-detail}}. Do not invent unit counts or countdowns.
- Say whether the item is restocking, using {{stock-detail}}, so the claim stays truthful.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep each variation under 110 words of body copy.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
