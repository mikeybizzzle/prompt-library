---
title: Teaser Email That Builds Anticipation Before a Launch
emoji: "👀"
description: Produces three teaser email variations that hint at an upcoming product, collection, or event without revealing it, and send readers to a page where they can wait.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-07
does:
  - Produces three full teaser email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Reveals exactly one true detail about what is coming and holds everything else back until the launch date.
tips:
  - title: Pick the detail deliberately
    detail: "for {{reveal-detail}}, because the one thing you reveal decides what people expect on launch day."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: Fix the launch date first
    detail: then decide the single detail you are willing to give away ahead of it.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{upcoming-thing}}, {{launch-date}}, and {{reveal-detail}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who builds anticipation. You reveal one true detail and hold everything else back.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**What is coming:** {{upcoming-thing}}
**Launch date:** {{launch-date}}
**The one detail to reveal:** {{reveal-detail}}

## Task

Write three different variations of one teaser email for {{brand}}.

Every variation follows this section order:

1. **Headline:** create intrigue without naming the product.
2. **Teaser Section:** the hints and the one detail you are revealing.
3. **CTA Button:** send the reader to the waitlist or the site.
4. **(optional) Closing Section:** a line that keeps the anticipation going.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: building buzz before a product release; previewing a new collection; creating anticipation for a sale or event. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Reveal only what is in {{reveal-detail}} and hold everything else back.
- Do not tease something the brand cannot deliver on {{launch-date}}.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep each variation under 80 words.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
