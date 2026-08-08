---
title: Invitation Email for a Program Event or Early Access
emoji: "💌"
description: Produces three invitation email variations for a loyalty program, referral scheme, event, or early access list, each with benefits, joining steps, and a join button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-15
does:
  - Produces three full invitation email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Leads with member benefits and keeps the joining mechanics in the back half, where they belong once interest exists.
tips:
  - title: Name the benefit in numbers
    detail: "inside {{benefits}}, since points and percentages convert better than the phrase exclusive perks."
  - title: Name the tone precisely
    detail: "in {{tone}}, since calm and factual produces very different copy from loud and urgent."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
steps:
  - title: Define the program benefits precisely
    detail: including what a member earns, how fast they earn it, and what it costs to join.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{program}}, {{benefits}}, and {{joining-steps}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who writes invitations that feel selective rather than mass mailed. You explain the benefit before you explain the mechanics.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Program, event, or offer:** {{program}}
**Member benefits:** {{benefits}}
**How to join:** {{joining-steps}}

## Task

Write three different variations of one invitation email for {{brand}}.

Every variation follows this section order:

1. **Headline:** make the invitation feel personal.
2. **Introduction Section:** explain what the reader is being invited to and why.
3. **Benefits Section:** the value of accepting.
4. **How It Works Section:** the steps to join.
5. **CTA Button:** send the reader to join or accept.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: an exclusive event invitation; a loyalty or referral program invitation; early access for VIP customers. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Lead with the benefit in {{benefits}} and keep the mechanics from {{joining-steps}} to the back half of the email.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the how it works section to three steps.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
