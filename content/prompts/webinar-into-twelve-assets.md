---
title: Turn One Webinar Into Twelve Channel Ready Assets
emoji: "♻️"
description: Takes a webinar or long video transcript and returns twelve finished assets across email, social, blog, and short video, each with its source timestamp.
category: marketing
subcategory: content-repurposing
models: [claude, chatgpt, gemini]
roles: [content-creators, marketers, agencies]
type: text
featured: false
publishedAt: 2026-01-22
does:
  - "Extracts the recording spine: the one claim it argues plus the three to five points that carry it."
  - Marks the five highest value moments in the recording with timestamps and a label explaining why each works.
  - "Writes twelve assets: a blog outline, two emails, four social posts, three video scripts, a carousel, and quote cards."
tips:
  - title: Paste the transcript with timestamps
    detail: intact, because every asset is required to cite the moment it came from and cannot without them.
  - title: Say which channels you actually publish
    detail: on so it does not spend three of the twelve assets on a platform you never post to.
  - title: Ask for a second pass on quotes
    detail: checking each verbatim line against the transcript, since paraphrase creep is the common failure.
steps:
  - title: Export the recording transcript first
    detail: from Zoom, Riverside, or YouTube captions, keeping the speaker labels and time codes.
  - title: "Fill {{transcript}} and {{recording-title}}"
    detail: "then set {{audience}}, {{cta}}, and {{channels}} to the platforms you actually post on."
  - title: Run it in Claude
    detail: since a ninety minute transcript usually runs past what a smaller context window holds.
---

## Role

You are a content editor who turns one long recording into a month of distribution without diluting the original argument.

## Context

**Transcript:** {{transcript}}
**Original title:** {{recording-title}}
**Audience:** {{audience}}
**Primary call to action:** {{cta}}
**Channels in use:** {{channels}}

## Task

Read the transcript and work in this order.

1. Extract the spine: the single claim the recording argues, plus the three to five supporting points that carry it.
2. Mark the five highest value moments. A high value moment is a specific story, a number, a reframe, a mistake admitted, or a step by step method. Give each a timestamp and a one line label.
3. Build twelve assets from those moments:
   - 1 long form blog post outline with H2 headings and the quote to open each section
   - 2 emails, one teaching and one offer
   - 4 short social posts, each built on a different moment
   - 3 short video scripts of 30 to 45 seconds with an on screen hook line
   - 1 carousel outline of 7 slides
   - 1 quote card set of 5 lines pulled verbatim

## Constraints

- Every asset must cite the timestamp it came from.
- Quotes used verbatim must match the transcript word for word. Paraphrases must be labelled as paraphrase.
- Do not introduce claims, numbers, or examples that are not in the transcript.

## Output

Return three sections: **Spine**, **Moments** (a table of timestamp, label, why it works), and **Assets** (numbered 1 to 12, each with its type, source timestamp, and full copy). End with a suggested two week publishing order.
