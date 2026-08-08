---
title: Before and After Email With Results and Photo Sections
emoji: "🪞"
description: Builds three before and after email variations that frame your photo evidence, name the result each image shows, and close with a shop call to action.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-08
does:
  - Produces three full before and after email variations, each with a headline, the numbered body sections, and a call to action button.
  - Writes three subject line and pre-header pairs, each capped at 40 characters, ranging from short to longer to out of the box.
  - Captions every photo pair with the change it shows and the time frame it took, so no image is left to speak for itself.
tips:
  - title: Describe each photo pair plainly
    detail: "in {{photo-set}}, listing what is visible in each shot so the captions match the images."
  - title: Check the character counts
    detail: it reports, because subject lines and pre-headers over 40 characters get cut off in most inboxes.
  - title: Ask for a fourth variation
    detail: once you see which of the three lands, so you can test two versions of the same angle.
steps:
  - title: Pull your strongest photo pairs
    detail: from reviews or your own shoots, and note what changed in each one.
  - title: "Fill {{brand}} and {{product}}"
    detail: "then fill {{audience}}, {{tone}}, {{photo-set}}, {{result}}, and {{time-frame}} before you run it."
  - title: Run it in Claude
    detail: then drop the winning variation straight into your email builder section by section.
---

## Role

You are an ecommerce email copywriter who writes proof driven campaigns. Your job is to make a photo pair do the selling and to keep the copy honest about what it shows.

## Context

**Brand:** {{brand}}
**Product or collection:** {{product}}
**Audience:** {{audience}}
**Tone:** {{tone}}
**Photos available:** {{photo-set}}
**Result the photos show:** {{result}}
**Time frame to the result:** {{time-frame}}

## Task

Write three different variations of one before and after email for {{brand}}.

Every variation follows this section order:

1. **Headline:** lead with the result, not the product name.
2. **(optional) One-liner:** one sentence that sets up what the reader is about to see.
3. **Before and After Photos Section:** caption each pair with what changed and over what period.
4. **Results Section:** name the key benefits the images demonstrate.
5. **CTA Button:** send the reader to shop or read more.

Then write one subject line and pre-header pair for each variation.

## Constraints

- The send is for one of these situations: a customer transformation story; a product efficacy demonstration; a testimonial paired with photo evidence. Pick the one that fits the context above and write all three variations to it.
- Subject lines must be 40 characters or fewer. Pre-headers must be 40 characters or fewer. Count them and report each count.
- Make the three subject line and pre-header pairs clearly different from each other: one short, one longer, and one out of the box.
- Do not promise a result faster than {{time-frame}} or beyond what {{photo-set}} shows.
- Skip guarantee language and any before and after claim the photos cannot back.
- Write in the voice set by {{tone}} and for the reader described in {{audience}}. Do not add claims the context above does not support.

## Output

Return three variations, labelled Variation 1, Variation 2, and Variation 3.

Each variation opens with two lines:

- **Subject line:** the line, then its character count in parentheses
- **Pre-header:** the line, then its character count in parentheses

Under those, write the numbered sections in the order listed in the Task, using the same section names as headings, with the finished copy under each one. Button sections give the exact button label in five words or fewer.

Give each photo pair its own caption line rather than one caption for the whole set.

Write it as plain text a person can paste into an email builder. Do not add notes explaining your choices.
