---
title: Three Shot Sequence Prompt for a Product Story
emoji: "🎥"
description: Generates a three shot sequence, wide establishing, medium action, and close detail, with matched lighting and grade so the clips cut together cleanly.
category: video
subcategory: shot-lists
models: [sora, veo, runway, kling]
roles: [content-creators, marketers, agencies]
type: image
featured: false
publishedAt: 2026-01-03
does:
  - "Produces three five second clips: a locked off wide, a handheld medium push in, and a macro detail shot."
  - "Locks one lighting setup across all three shots: key at forty five degrees camera left with soft fill opposite."
  - Specifies a warm neutral grade with lifted blacks and twenty four frames per second so the clips cut together.
tips:
  - title: Copy the lighting sentence verbatim
    detail: into every generation, since paraphrasing it is what makes the grade drift between clips.
  - title: Keep each clip under six seconds
    detail: because Sora and Veo both start inventing new detail past that point in a single generation.
  - title: Reuse the seed on regenerations
    detail: "when only one shot breaks continuity, and vary just the {{detail-object}} line."
steps:
  - title: Generate the three shots separately
    detail: rather than asking for one clip, so each gets a full generation budget at the same aspect ratio.
  - title: "Fill {{location}} and {{subject}} first"
    detail: "then set {{time-of-day}}, {{action}}, and {{detail-object}} before you generate anything."
  - title: Run each shot through Runway
    detail: or Kling, holding the same aspect ratio and duration across all three generations.
---

## Prompt

Generate three separate clips of five seconds each, sharing one lighting setup and one colour grade so they cut together. Shot one, wide establishing: {{location}} in {{time-of-day}} light, camera locked off on a tripod at eye height, {{subject}} entering frame from the left and settling into the right third, deep focus holding both subject and background. Shot two, medium: same location and light, camera at chest height, a slow handheld push in on {{subject}} performing {{action}}, hands entering frame from below, focus racking from the object to the face as the movement completes. Shot three, close detail: macro on {{detail-object}}, shallow depth of field, the same key light direction raking across the surface, a small movement completing within the frame. Across all three, key light comes from camera left at forty five degrees with soft fill opposite, colour grade is warm neutral with lifted blacks and slightly desaturated greens, shot at twenty four frames per second with natural motion blur. No camera shake beyond the intentional handheld in shot two, no cuts within a clip, no text or graphics.

## Variables

- {{location}}: a workshop, a kitchen counter, a city rooftop
- {{time-of-day}}: early morning, late afternoon, overcast midday
- {{subject}}: the person or object carrying the story
- {{action}}: the single physical movement in shot two
- {{detail-object}}: the close up subject in shot three

## Tips

- Generate each shot separately with the shared lighting sentence copied verbatim into all three.
- Keep every clip under six seconds. Longer generations drift in appearance and grade.
- Order the shots wide, medium, close so an editor has a working sequence without extra coverage.
- Add "screen direction left to right" to every shot so the cuts do not reverse the geography.
- If continuity breaks between clips, regenerate the odd one out rather than all three.
