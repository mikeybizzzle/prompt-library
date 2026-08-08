---
title: Customer Survey Email With Incentive and Entry Steps
emoji: "📝"
description: Builds three survey invitation email variations that explain why the feedback matters, state how long it takes, name the incentive, and drive completed responses.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-03
does:
  - Produces three full survey email variations, each with a headline, the numbered body sections, and a call to action button.
  - "Caps each subject line and pre-header at 40 characters and keeps the three pairs distinct: short, longer, and out of the box."
  - States the honest time cost and what will change because of the feedback, which is what moves completion rates.
tips:
  - title: Keep the survey genuinely short
    detail: "and put the true figure in {{time-cost}}, since an understated estimate kills completion rates."
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
steps:
  - title: Build the survey first
    detail: then time yourself completing it so the estimate in the email is real.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{survey-topic}}, {{time-cost}}, {{incentive}}, and {{survey-link}} before you run it."
  - title: Run it and pick one
    detail: variation, then ask for two more subject lines in that style before you schedule the send.
---

## Role

You are an ecommerce email copywriter who gets surveys completed. You state the time cost honestly and make the reason for asking specific.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Survey topic:** {{survey-topic}}
**Time it takes:** {{time-cost}}
**Incentive offered:** {{incentive}}
**Survey link:** {{survey-link}}

## Task

Write three different variations of one survey email for {{brand}}.

Every variation follows this section order:

1. **Headline:** ask for the favour in one line.
2. **Introduction Section:** why the feedback matters and what you will do with it.
3. **Survey Invitation Section:** how to take part and how long it takes.
4. **Incentive Section:** what the reader gets for completing it.
5. **CTA Button:** send the reader to the survey.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: post purchase feedback; a customer satisfaction survey; product development research. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the honest time cost from {{time-cost}} in every variation.
- Say what will change as a result of the feedback rather than thanking the reader in advance.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the email under 110 words in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
