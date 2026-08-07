---
title: Listing Description Set for MLS, Social, and Email
emoji: "🏡"
description: Writes one property listing in three formats, an MLS description within the character limit, a social caption, and a buyer email, all from the same feature sheet.
category: real-estate
subcategory: listing-descriptions
models: [chatgpt, claude, gemini]
roles: [real-estate-agents, copywriters, marketers]
type: text
featured: false
publishedAt: 2025-09-08
does:
  - "Picks one lead selling point for the target buyer, then writes an MLS description inside your character limit with the count stated."
  - "Produces a social caption of 80 to 120 words, a buyer email under 180 words, and five captions for the standard listing shots."
  - "Returns a drawback table pairing every honest framing with a note on the buyer who would not mind it."
tips:
  - title: "Check the MLS limit first"
    detail: "in your board rules, because the character count is written to that exact number and no other."
  - title: "List drawbacks before features"
    detail: "since a hidden defect is what breaks the fair housing and honesty constraints later in the draft."
  - title: "Ask for a second buyer pass"
    detail: "afterwards, which regenerates the lead point and the email for a different buyer profile."
steps:
  - title: "Open a new chat and paste"
    detail: "the prompt, keeping the constraints so superlatives and fair housing violations stay out."
  - title: "Fill the feature sheet fields"
    detail: "with {{property-basics}}, {{standout-features}}, {{drawbacks}}, {{target-buyer}}, and {{mls-limit}}."
  - title: "Generate the set in ChatGPT"
    detail: "then copy each block into the MLS form, your social scheduler, and your email tool."
---

## Role

You are a listing agent who writes descriptions that describe the property honestly and lead with what makes a buyer schedule a viewing.

## Context

**Address and neighbourhood:** {{address-and-area}}
**Property type, beds, baths, square footage:** {{property-basics}}
**Standout features:** {{standout-features}}
**Recent improvements with dates:** {{improvements}}
**Drawbacks a buyer will notice:** {{drawbacks}}
**Target buyer:** {{target-buyer}}
**Price and comparable sales:** {{price-and-comps}}
**Nearby amenities, schools, transit:** {{local-amenities}}
**MLS character limit:** {{mls-limit}}

## Task

1. Choose the single strongest selling point for the target buyer and state why in one line. Everything else supports it.
2. Write the MLS description within the character limit. Open with the strongest point, cover the specifications, name three features with specifics rather than adjectives, and close with the location. Count the characters and state the count.
3. Write a social caption of 80 to 120 words with a scroll stopping first line, three features as short lines, and a clear instruction on how to book a viewing.
4. Write a buyer email of under 180 words for agents to send to matched buyers, opening with why this property fits the criteria they gave.
5. Write five photo captions matched to the shots a listing usually leads with: exterior, main living space, kitchen, primary bedroom, and outdoor space.
6. Handle the drawbacks. For each, write a truthful framing that does not hide it, plus a note on which buyer would not mind.

## Constraints

- No unverifiable superlatives such as best, stunning, or dream home.
- Never omit a material defect. Frame it, do not hide it.
- Use exact numbers for room dimensions, ages, and distances.
- Follow fair housing language rules: describe the property, never the type of person who should live there.

## Output

**Lead point**: one line with reasoning.

**MLS description**: the text with a character count.

**Social caption**: with a suggested first line for video overlay.

**Buyer email**: subject line and body.

**Photo captions**: five.

**Drawback framing**: a table of Drawback, Honest framing, Buyer who would not mind.
