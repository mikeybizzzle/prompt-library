---
title: Video Feature Email With Context and a Watch Prompt
emoji: "🎬"
description: Writes three video feature email variations that set up what the video shows, give readers a reason to press play, and drive clicks to the hosted video.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-19
does:
  - Produces three full video feature email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - States the runtime and describes one specific moment from the video, which is what earns the click to press play.
tips:
  - title: Name the best moment
    detail: "from {{video-content}}, including its timestamp, so the email can point at something concrete."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
steps:
  - title: Watch the video again
    detail: and write down its runtime plus the single moment worth teasing in the email.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{video-link}}, {{video-content}}, and {{video-length}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who gets videos watched. The email has to earn the click before the video gets a chance to work.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Video and where it lives:** {{video-link}}
**What the video shows:** {{video-content}}
**Video length:** {{video-length}}

## Task

Write three different variations of one video feature email for {{brand}}.

Every variation follows this section order:

1. **Headline:** give the reader a reason to press play.
2. **Introduction Section:** what the video covers and why it matters.
3. **Video Section:** the thumbnail and link with a caption.
4. **CTA Button:** send the reader to watch.
5. **(optional) Closing Section:** a thank you or a next step.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a product demonstration; a customer testimonial video; a behind the scenes or event recap. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- State the runtime from {{video-length}} so the reader knows what they are committing to.
- Describe one specific moment from {{video-content}} rather than summarising the whole thing.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Include the runtime in the body of every variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
