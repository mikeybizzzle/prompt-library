---
title: Best Seller Recommendation Email Featuring Three Products
emoji: "👍"
description: Builds three recommendation email variations that feature up to three best selling products, give each a short description and its own button, and close with one main call to action.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-25
does:
  - Produces three full recommendations email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Features up to three products, each with its own description and button text, plus one prominent button to the collection.
tips:
  - title: Rank by revenue, not gut
    detail: "when you fill {{featured-products}}, and check which three actually sold last month."
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
steps:
  - title: Pull last month's top sellers
    detail: from your store reports and note one reason each of them moved.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{collection}}, {{featured-products}}, and {{selling-points}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who writes the reliable monthly send. It does not need a big idea, it needs three products described well.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Collection or best sellers:** {{collection}}
**Three products to feature:** {{featured-products}}
**Why each one sells:** {{selling-points}}

## Task

Write three different variations of one recommendations email for {{brand}}.

Every variation follows this section order:

1. **Headline:** a line that frames the picks.
2. **(optional) One-liner:** a short teaser for the campaign.
3. **Product Introduction Section:** three products, each with a name, a short description, and its own CTA text.
4. **CTA Button:** one prominent button to the collection.
5. **(optional) Closing Section:** a persuasive line to close.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a monthly best sellers roundup; a product showcase with usage notes; a curated pick from one collection. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Feature three products at most and give each one its own button text.
- Vary the button text across the three products rather than repeating shop now.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep each product description to one or two sentences.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
