---
title: Gift Guide Email With Curated Picks by Occasion
emoji: "🎁"
description: Builds three gift guide email variations that present a curated set of products, give each pick a reason it makes a good gift, and drive to the collection page.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-26
does:
  - Produces three full gift guide email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Gives every pick its own reason for being a good gift, with no two products sharing the same justification.
tips:
  - title: Pick products at different prices
    detail: "for {{gift-picks}}, so the guide serves both the careful shopper and the generous one."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
steps:
  - title: Choose four to six products
    detail: that span your price range, then note who each one suits as a gift.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{gift-picks}}, {{occasion}}, and {{recipient}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who curates. You give each pick a reason someone would gift it, not a spec sheet.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Products in the guide:** {{gift-picks}}
**Occasion:** {{occasion}}
**Who the gift is for:** {{recipient}}

## Task

Write three different variations of one gift guide email for {{brand}}.

Every variation follows this section order:

1. **Headline:** frame the guide around the occasion and the recipient.
2. **(optional) One-liner:** a short setup for the guide.
3. **Gift Guide Section:** each pick with a one line reason it works as a gift.
4. **(optional) Closing Section:** a persuasive line to close.
5. **CTA Button:** send the reader to the collection.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a holiday gift guide; a guide for birthdays or anniversaries; a general guide for any recipient. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Every pick needs a different reason. Do not repeat the phrase perfect for across the list.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Cap the guide at six picks in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
