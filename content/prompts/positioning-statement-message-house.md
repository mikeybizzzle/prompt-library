---
title: Positioning Statement and Message House for a Brand
emoji: "🏛️"
description: Produces a positioning statement, three message pillars with proof under each, and the words to use and avoid, so every channel says the same thing.
category: strategy
subcategory: positioning-and-messaging
models: [claude, chatgpt, gemini]
roles: [founders, marketers, consultants]
type: text
featured: false
publishedAt: 2025-11-02
does:
  - Names the competitive alternative, maps each unique capability to the value it creates, and picks a market category.
  - Writes a falsifiable positioning statement under 60 words plus elevator versions at 10, 25, and 50 words.
  - Builds a message house of one roof line, three pillars, supporting messages, and a proof point under each pillar.
tips:
  - title: Include doing nothing as an alternative
    detail: "in {{alternatives}}, because inertia is usually the competitor the messaging actually has to beat."
  - title: Separate capabilities from outcomes
    detail: "when filling {{unique-capabilities}}, listing what the product does and letting the prompt derive the value."
  - title: Ask it to rewrite the homepage
    detail: hero next, using only the roof line and the first pillar, to see whether the positioning holds.
steps:
  - title: Open the prompt and paste
    detail: it into a chat, with your current website copy pasted underneath for comparison.
  - title: Fill in the brand fields
    detail: "{{company-and-product}}, {{best-customers}}, {{alternatives}}, {{unique-capabilities}}, and {{proof-points}}."
  - title: Run it in Claude
    detail: or ChatGPT, then check which pillars came back marked unsupported before you use them.
---

## Role

You are a positioning strategist. You define a category and a competitive alternative before you write a single line of messaging.

## Context

**Company and product:** {{company-and-product}}
**Best fit customers today:** {{best-customers}}
**What they used before us:** {{alternatives}}
**Capabilities only we have:** {{unique-capabilities}}
**Proof points:** {{proof-points}}
**Market category we could claim:** {{category-options}}
**Words leadership insists on:** {{mandated-language}}

## Task

1. Name the competitive alternative honestly, including doing nothing and building it internally.
2. From the unique capabilities, derive the value the customer receives. Capability is what it does. Value is what changes for them. Keep them separate.
3. Choose the market category. State what customers already understand when they hear it and what expectation it sets.
4. Write the positioning statement in one paragraph of under 60 words. It must be falsifiable: a competitor should not be able to claim the same sentence.
5. Build a message house: one roof line, three pillars, and under each pillar two supporting messages and at least one proof point.
6. Write a language list: ten words and phrases to use, ten to avoid, and the reason for each ban.
7. Write the elevator version at three lengths: 10 words, 25 words, and 50 words.

## Constraints

- No pillar may exist without a proof point. If proof is missing, mark the pillar as unsupported and say what evidence would establish it.
- Do not use "leading", "innovative", "solution", "empower", or "platform" unless the category genuinely requires the word.
- Mandated language must appear, but you may note where it weakens the message.

## Output

**Competitive alternative**: one paragraph.

**Capability to value map**: a two column table.

**Category choice**: the category and what it implies.

**Positioning statement**: one paragraph.

**Message house**: roof line, three pillars, supporting messages, proof points, all as a nested list.

**Language list**: use and avoid, with reasons.

**Elevator versions**: three lengths.
