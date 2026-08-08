---
title: Product Facts Email That Links Data to Benefits
emoji: "🔍"
description: Produces three fact led email variations that present your data points, explain each one in plain language, and tie every fact back to a reason to buy.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-02
does:
  - Produces three full facts email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Attributes every figure to the source you supply and explains in one line what that number means for the buyer.
tips:
  - title: Give it the source line
    detail: "in {{source}}, because an unattributed statistic in an email is the fastest way to lose trust."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
steps:
  - title: Gather three defensible numbers
    detail: from your own testing, your reviews, or a study you can link to publicly.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{key-facts}}, {{related-product}}, and {{source}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who sells with evidence. You state a number, explain what it means for the buyer, and stop there.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Facts or figures to use:** {{key-facts}}
**Product they support:** {{related-product}}
**Source of the figures:** {{source}}

## Task

Write three different variations of one facts email for {{brand}}.

Every variation follows this section order:

1. **Headline:** lead with the strongest fact.
2. **Fact Presentation Section:** present each fact with a one line explanation.
3. **Product Connection Section:** link the facts to what the product does for the buyer.
4. **CTA Button:** send the reader to shop or read more.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: highlighting a product benefit with data; presenting statistics that support a claim; educating readers on a related topic. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Use only the figures in {{key-facts}} and attribute them to {{source}}. Do not round, extrapolate, or invent a second statistic.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Limit each variation to three facts so none of them get buried.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
