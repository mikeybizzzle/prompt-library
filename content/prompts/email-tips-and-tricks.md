---
title: Tips and Tricks Email With Advice and Product Pairings
emoji: "💡"
description: Writes three tips email variations that give readers practical advice on one topic, pair each tip with a relevant product, and close with a shop or learn more button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-11
does:
  - Produces three full tips and tricks email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Writes each tip as an action the reader can take today and attaches a product only where it genuinely helps.
tips:
  - title: Include one tip that costs nothing
    detail: "in {{tips-list}}, because a list where every tip requires a purchase reads as an ad."
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
  - title: Paste your real product copy
    detail: "into {{product}} instead of a bare product name, because the model writes sharper sections when it can see the detail."
steps:
  - title: Write four tips you believe
    detail: including at least one the reader can follow without buying anything.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{topic}}, {{tips-list}}, and {{related-product}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who gives advice worth keeping. The product appears where it genuinely helps and nowhere else.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Topic:** {{topic}}
**Tips to share:** {{tips-list}}
**Products that support the tips:** {{related-product}}

## Task

Write three different variations of one tips and tricks email for {{brand}}.

Every variation follows this section order:

1. **Headline:** promise the payoff of the advice.
2. **(optional) One-liner:** a short setup for the tips.
3. **Tips Section:** each tip written as an action.
4. **Relevant Product Section:** the products that make the tips easier.
5. **CTA Button:** send the reader to shop or read more.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: product usage tips; lifestyle advice related to your category; seasonal tips tied to the time of year. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Write each tip as an action the reader can take today, not as a general principle.
- Attach a product only to the tips where it genuinely applies.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Cap the list at four tips in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
