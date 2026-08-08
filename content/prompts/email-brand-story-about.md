---
title: Brand Story Email With Mission and Team Sections
emoji: "📖"
description: Turns your brand history, mission, and team into three About email variations, each with a headline, a story section, a call to action, and a closing note.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-03
does:
  - Produces three full brand story email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Threads one milestone or team detail through all three variations so the story lands on something concrete.
tips:
  - title: Write the story in fragments
    detail: if you have to, since the model shapes rough founder notes better than it invents a history.
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Collect the founding details
    detail: you are willing to publish, including dates, names, and the reason the brand started.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{brand-story}}, {{mission}}, and {{proof-point}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who turns founder history into copy that makes a subscriber trust the brand. You write about people and decisions, not adjectives.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Brand story so far:** {{brand-story}}
**Mission or values:** {{mission}}
**Milestone or team detail:** {{proof-point}}

## Task

Write three different variations of one brand story email for {{brand}}.

Every variation follows this section order:

1. **Headline:** open with a line that makes the reader want the story.
2. **Story Section:** cover the brand history, the mission, and the values behind it.
3. **CTA Button:** send the reader to learn more or explore the site.
4. **(optional) Closing Section:** end with a warm line that invites a reply or a first order.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: introducing new subscribers to the brand; sharing a company milestone; showing the people and process behind the products. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Every claim about the brand has to trace back to {{brand-story}} or {{proof-point}}. Do not fill gaps with invented history.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the story section between 90 and 150 words in every variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
