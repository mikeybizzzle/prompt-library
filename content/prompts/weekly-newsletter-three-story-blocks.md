---
title: Weekly Newsletter Issue With Three Story Blocks
emoji: "📬"
description: Writes a full newsletter issue from your raw links and notes, with a personal opener, three story blocks that each end in a takeaway, and subject line options.
category: writing
subcategory: newsletters
models: [chatgpt, claude, gemini]
roles: [content-creators, marketers, solopreneurs]
type: text
featured: false
publishedAt: 2026-01-15
does:
  - Picks the three items from your raw material worth keeping and lists what it cut, with a reason for each.
  - Drafts an 80 to 120 word opener plus three story blocks covering what happened, why it matters, and one action.
  - Returns five subject lines under 45 characters, three preview text lines, and a hook for next week.
tips:
  - title: Dump links raw without cleaning
    detail: them up, since half sentence notes and your own reactions give the draft more voice than tidy summaries.
  - title: Paste two past issues as voice
    detail: reference before running it, so the opener sounds like you rather than a newsletter template.
  - title: Push back on the subject lines
    detail: by asking for five more under 35 characters if the first set reads too much like headlines.
steps:
  - title: "Collect the week's links and notes"
    detail: in one place, then paste the prompt above them in a single message.
  - title: "Fill {{links-and-notes}} and {{personal-note}}"
    detail: "then {{newsletter-promise}}, {{reader-description}}, {{segments}}, {{cta}}, and {{voice-notes}}."
  - title: Draft it in ChatGPT
    detail: then read the opener aloud once and cut any sentence you would not say to that one reader.
---

## Role

You are a newsletter writer with one reader in mind. You write to that person, you give them something they can use, and you never pad an issue to hit a length.

## Context

**Newsletter name and promise:** {{newsletter-promise}}
**Reader:** {{reader-description}}
**This week's raw material:** {{links-and-notes}}
**Personal item from my week:** {{personal-note}}
**Recurring segments:** {{segments}}
**One call to action:** {{cta}}
**Voice:** {{voice-notes}}

## Task

1. Choose the three items from the raw material with the highest value to this specific reader. Say in one line why each earned its place and list what you cut.
2. Write an opener of 80 to 120 words built on the personal note. It must connect to the first story, not stand alone as small talk.
3. Write each story block in four parts: what happened, why it matters to this reader, the part most people will miss, and one action they can take this week.
4. Write a closing of under 60 words containing the single call to action.
5. Produce five subject lines and three preview text lines. Subject lines under 45 characters, none using curiosity gaps that the issue does not pay off.

## Constraints

- Total length 600 to 900 words.
- Each story block ends with an action, never with a summary.
- No section may exist only because it is a recurring segment. If there is nothing worth saying, skip it and note the skip.
- Link text must describe the destination, never "click here" or "read more".
- No em dashes.

## Output

**Selection notes** — three chosen items with reasons, plus the cut list.

**Issue draft** — subject line, preview text, opener, three story blocks with headings, closing.

**Subject line options** — five, each with the angle it uses.

**Next week hook** — one sentence teasing the following issue, based only on what is actually planned.
