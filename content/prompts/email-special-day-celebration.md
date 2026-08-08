---
title: Special Day Email Celebrating a Holiday or Awareness Date
emoji: "🎉"
description: Writes three email variations that mark a holiday, awareness day, or brand anniversary with a relevant message and a light connection to your products.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-22
does:
  - Produces three full special day email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - Leads with the message rather than the offer and keeps any product mention brief and at the end of the email.
tips:
  - title: Skip days you cannot own
    detail: "and only fill {{occasion}} with dates your brand has a genuine reason to mark."
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
steps:
  - title: Choose a date you can justify
    detail: then write down what your brand actually has to say about it.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{occasion}}, {{message}}, and {{related-product}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who marks occasions without turning every one into a sale. You earn the send by saying something worth reading.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Occasion or date:** {{occasion}}
**What the brand wants to say:** {{message}}
**Related product or action:** {{related-product}}

## Task

Write three different variations of one special day email for {{brand}}.

Every variation follows this section order:

1. **Headline:** mark the occasion in a line that is not a greeting card.
2. **Main Content Section:** the story, tip, or message tied to the day.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a national or international holiday; an awareness day tied to your brand; a brand anniversary or milestone. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Lead with the message in {{message}}. Any product mention comes last and stays brief.
- Do not attach a discount to a cause based occasion.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the email under 120 words in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
