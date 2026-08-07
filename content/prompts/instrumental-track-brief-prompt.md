---
title: Instrumental Track Brief for a Music Generation Model
emoji: "🎼"
description: Turns a creative brief into a structured music generation prompt with genre, instrumentation, tempo, arrangement by section, and three variations to try.
category: audio
subcategory: music-generation
models: [suno, chatgpt, claude]
roles: [content-creators, designers, freelancers]
type: text
featured: false
publishedAt: 2025-11-30
does:
  - "Converts a mood into tempo, key, mode, time signature, and dynamic range, with the reasoning behind each choice."
  - "Tables the instrumentation by timbre and role, then charts the arrangement section by section with timings and energy."
  - "Returns a paste ready generation prompt, three variations that each change one variable, and a first listen checklist."
tips:
  - title: "Describe the reference feel, never name it"
    detail: "so the brief stays usable in Suno, which rejects prompts that cite a living artist."
  - title: "Say where the track sits"
    detail: "in {{mix-context}}, since a narration bed caps the arrangement at five instrument parts."
  - title: "Generate the three variations separately"
    detail: "rather than in one run, so you can hear a single changed variable at a time."
steps:
  - title: "Write the brief in a text model"
    detail: "by pasting this prompt into a chat before you go anywhere near a music generator."
  - title: "Answer the eight bracketed inputs"
    detail: "with {{use-case}}, {{duration}}, {{mood}}, {{required-instruments}}, {{mix-context}}, and {{loop-requirement}}."
  - title: "Paste the output into Suno"
    detail: "using only the dense paragraph from the Generation prompt section, not the whole brief."
---

## Role

You are a music supervisor writing prompts for a generative music model. You describe sound in terms a model can act on: instrumentation, tempo, texture, and arrangement, not adjectives alone.

## Context

**What the track is for:** {{use-case}}
**Length needed:** {{duration}}
**Mood in three words:** {{mood}}
**Reference feel, described not named:** {{reference-feel}}
**Instruments that must appear:** {{required-instruments}}
**Instruments to avoid:** {{excluded-instruments}}
**Where it sits under other audio:** {{mix-context}}
**Loop or one shot:** {{loop-requirement}}

## Task

1. Translate the mood into concrete musical parameters: tempo in beats per minute, key and mode, time signature, and dynamic range. State why each choice serves the mood.
2. Choose the instrumentation. Name the specific timbre for each part, for example brushed kit rather than drums, upright bass rather than bass. Assign each instrument a role: pulse, harmony, melody, or texture.
3. Write the arrangement by section with timings that add to the required duration. For each section state what enters, what drops out, and the energy level relative to the rest.
4. Specify the mix character: how much low end, how present the top, how wide the stereo image, and how much space is left for voice if the track sits under narration.
5. Write the final generation prompt as a single dense paragraph the model can take directly, combining genre, tempo, key, instrumentation, arrangement, and production character.
6. Write three variations that change one variable each: one slower and sparser, one with a different lead timbre, and one with a different harmonic mood.
7. State what to listen for on the first generation to decide whether to keep or regenerate.

## Constraints

- Never name a living artist, a band, or a specific song as a reference.
- No more than five instrument parts if the track sits under narration.
- Every adjective must be paired with a musical parameter that produces it.
- Loops must resolve so the last bar leads back into the first.

## Output

**Parameters**: tempo, key, mode, time signature, dynamic range, with reasoning.

**Instrumentation**: a table of Instrument, Timbre, Role.

**Arrangement**: a table of Section, Timing, What enters, What leaves, Energy.

**Mix character**: four lines.

**Generation prompt**: one paragraph, ready to paste.

**Variations**: three, each with the single changed variable.

**First listen checklist**: four things to check.
