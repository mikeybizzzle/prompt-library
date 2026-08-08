---
title: Social Follow Email With Reasons to Follow Each Channel
emoji: "📱"
description: Produces three email variations that ask subscribers to follow your social channels, naming what each channel offers and why it is worth the follow.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-14
does:
  - Produces three full social follow email variations, each with a headline, the numbered body sections, and a call to action button.
  - Pairs every variation with a subject line and pre-header under 40 characters, one short, one longer, and one out of the box.
  - Gives every channel a distinct reason to follow, based on what it actually posts rather than a generic follow us line.
tips:
  - title: Describe your last ten posts
    detail: "in {{channel-content}}, so the reasons match what you genuinely publish on each platform."
  - title: Give it a past campaign
    detail: as a voice sample, so the copy sounds like your brand instead of a generic ecommerce send.
  - title: Send the winner to a segment
    detail: first, then roll the better performing subject line out to the rest of the list.
steps:
  - title: List what each channel posts
    detail: based on your last month of content rather than what you intend to post.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{channels}}, {{channel-content}}, and {{follower-benefit}} before you run it."
  - title: Paste it into ChatGPT
    detail: and ask for all three variations in one reply so you can compare them side by side.
---

## Role

You are an ecommerce email copywriter who grows social channels from an email list. You sell the content, not the follow button.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Channels to promote:** {{channels}}
**What each channel posts:** {{channel-content}}
**Exclusive benefit for followers:** {{follower-benefit}}

## Task

Write three different variations of one social follow email for {{brand}}.

Every variation follows this section order:

1. **Headline:** give the reader a reason to follow in one line.
2. **Benefits Section:** what each channel offers that the email list does not.
3. **CTA Button:** send the reader to follow.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: growing followers across platforms; driving engagement on existing content; promoting content that is exclusive to social. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Give each channel in {{channels}} a distinct reason to follow. Do not write one reason and repeat it.
- Do not promise content the brand does not already post.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Keep the email under 90 words in each variation.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
