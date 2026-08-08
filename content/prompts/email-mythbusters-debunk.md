---
title: Mythbusters Email That Debunks Four Common Claims
emoji: "🧨"
description: Writes three mythbusting email variations that state a common myth, correct it with a fact, and connect the correction to the products that prove the point.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-01
does:
  - Produces three full mythbusters email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - States each myth in customer language before correcting it, so the reader recognises the belief being taken apart.
tips:
  - title: Use the customer's own wording
    detail: "for each entry in {{myths}}, since a myth phrased in industry language does not feel familiar."
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
steps:
  - title: Write down four real objections
    detail: you hear from buyers, then note the fact that answers each one.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{topic}}, {{myths}}, and {{related-product}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who corrects misconceptions without condescending. You state the myth fairly before you take it apart.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Topic or category:** {{topic}}
**Myths to debunk:** {{myths}}
**Product that proves the point:** {{related-product}}

## Task

Write three different variations of one mythbusters email for {{brand}}.

Every variation follows this section order:

1. **Headline:** promise a correction in one line.
2. **(optional) One-liner:** a short setup for the campaign.
3. **Mythbusters Section:** each myth stated plainly, then the fact that corrects it.
4. **Relevant Product Section:** the products tied to the corrected facts.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: debunking myths about your products; correcting a widespread industry misconception; educating readers with factual content. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State each myth in the language a customer would use, then correct it in one sentence.
- Only use corrections supported by {{myths}}. Do not invent evidence.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Cover three or four myths in each variation, no more.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
