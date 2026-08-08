---
title: How To Email With Practical Steps and Product Picks
emoji: "🧭"
description: Produces three how to email variations that walk readers through a short practical method, highlight the products used at each step, and end with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-03
does:
  - Produces three full how to email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Breaks the method into five steps or fewer, each written as an instruction the reader can follow the same day.
tips:
  - title: Describe the outcome you want
    detail: "in {{topic}}, because the steps only sequence well when the end state is defined first."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: Write the method out roughly
    detail: in whatever order it comes to you, then let the prompt tighten and sequence it.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{topic}}, {{method-steps}}, and {{related-product}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who teaches a method in a few steps. The product shows up because it is used in the method, not because the email needs a plug.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Topic or outcome:** {{topic}}
**Steps or method:** {{method-steps}}
**Products used:** {{related-product}}

## Task

Write three different variations of one how to email for {{brand}}.

Every variation follows this section order:

1. **Headline:** promise the outcome, not the tutorial.
2. **(optional) One-liner:** a short setup for the guide.
3. **Tips Section:** the practical steps in order.
4. **(optional) Relevant Product Highlight:** the products used in the steps.
5. **CTA Button:** send the reader to shop or read the full guide.
6. **(optional) Closing Section:** a persuasive line to close.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: expert best practices; a step by step product guide; tips that help readers get more from what they own. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Keep the method to five steps or fewer and write each step as an instruction, not a description.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Number the steps and keep each one under 30 words.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
