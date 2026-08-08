---
title: New Product Launch Email With Features and Benefits
emoji: "🚀"
description: Produces three launch email variations that introduce a new product or collection, describe its features as benefits, and drive readers to shop the release.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-12-05
does:
  - Produces three full new launch email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Converts every listed feature into a stated benefit, so no specification appears in the email without a reason attached.
tips:
  - title: Name the buyer explicitly
    detail: "in {{recipient}}, because launch copy written for everyone reads as copy written for nobody."
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
steps:
  - title: Write the feature list first
    detail: from the product page, including materials, sizes, and anything genuinely new.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{new-product}}, {{key-features}}, and {{recipient}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who launches products. You lead with the reason it exists, then the features that deliver it.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**New product or collection:** {{new-product}}
**Key features:** {{key-features}}
**Who it is for:** {{recipient}}

## Task

Write three different variations of one new launch email for {{brand}}.

Every variation follows this section order:

1. **Headline:** create excitement in one line.
2. **Product Details Section:** the product, its key features, and the benefit of each.
3. **CTA Button:** send the reader to shop or explore the release.
4. **(optional) Closing Section:** a persuasive line to close.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a new product release; a new collection launch; a major update to an existing line. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Translate every feature in {{key-features}} into a benefit. Never list a feature on its own.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Cap the feature list at four items per variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
