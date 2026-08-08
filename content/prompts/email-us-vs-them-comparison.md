---
title: Us Versus Them Email With a Side by Side Comparison
emoji: "⚖️"
description: Produces three comparison email variations that put your product against the typical alternative, list the differences that matter, and close with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-18
does:
  - Produces three full us versus them email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Builds a criterion by criterion comparison against the category rather than a named competitor, with every row verifiable.
tips:
  - title: Choose the criteria carefully
    detail: "in {{criteria}}, since a comparison built on criteria buyers ignore convinces nobody."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: List the criteria buyers weigh
    detail: when choosing between you and the alternative, then note where you genuinely win.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{advantages}}, {{alternative}}, and {{criteria}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes comparisons that hold up. You compare on the criteria a buyer actually weighs, and you do not misrepresent the alternative.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Your advantages:** {{advantages}}
**What you are compared against:** {{alternative}}
**Comparison criteria:** {{criteria}}

## Task

Write three different variations of one us versus them email for {{brand}}.

Every variation follows this section order:

1. **Headline:** frame the comparison in one line.
2. **Comparison Section:** a table or list of the differences, criterion by criterion.
3. **CTA Button:** send the reader to shop or read more.
4. **(optional) Closing Section:** a persuasive close or extra context.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a comparison against a known competitor; an ingredient or feature focused comparison; a values and practices comparison. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Compare against the category described in {{alternative}} rather than naming a competitor.
- Every row has to be verifiable from {{advantages}}. Do not overstate the gap.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the comparison to five criteria at most.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
