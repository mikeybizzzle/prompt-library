---
title: Cinematic Night Street Scene With Anamorphic Flare
emoji: "🎬"
description: Generates a moody night exterior clip with a slow dolly move, wet asphalt reflections, practical neon sources, and anamorphic flare for a film look.
category: video
subcategory: cinematic-scenes
models: [veo, sora, kling, runway]
roles: [content-creators, designers, freelancers]
type: image
featured: true
publishedAt: 2025-09-21
does:
  - "Generates an eight second night exterior with a slow dolly forward, wet asphalt reflections, and no cuts."
  - "Renders anamorphic glass traits: oval bokeh, a horizontal blue flare on passing headlights, and shallow focus."
  - "Applies a teal shadow and warm amber highlight grade with crushed blacks, film grain, and natural motion blur."
tips:
  - title: "Set the aspect ratio wide"
    detail: "at 2.39 to 1, since the oval bokeh and horizontal flare only read properly on a scope frame."
  - title: "Reuse the seed across variants"
    detail: "when you change only {{neon-colour}}, so the street and lighting stay consistent between takes."
  - title: "Drop the rain for a closer take"
    detail: "because haze and falling water eat the detail the model would otherwise spend on the subject."
steps:
  - title: "Paste the prompt as one block"
    detail: "without breaking it into sentences, since the shot description reads as a single continuous instruction."
  - title: "Swap in your subject and wardrobe"
    detail: "by replacing {{subject}}, {{wardrobe}}, and {{neon-colour}} with the specifics of your shot."
  - title: "Generate it in Veo"
    detail: "or Runway, keeping the eight second duration so the model does not invent a cut partway through."
---

## Prompt

A slow dolly forward along a rain slick city street at night, camera at chest height, moving at walking pace toward {{subject}} standing mid frame in a {{wardrobe}}, shoulders squared to the lens, breath faintly visible in the cold air. Wet asphalt mirrors the neon signage above in long vertical smears of {{neon-colour}} and deep cyan. Practical light sources only: shop windows, a flickering sign, headlights passing left to right behind the subject and briefly raking the scene. Shot on anamorphic glass at a wide aperture, shallow depth of field, oval bokeh from distant streetlights, a horizontal blue flare crossing frame when a car passes. Fine atmospheric haze, light rain falling through the beams. Colour grade is teal shadows and warm amber highlights with crushed blacks and gentle film grain. Twenty four frames per second, natural motion blur, no camera shake. Background extras move in soft blur, unfocused, anonymous. Mood is calm, patient, and slightly lonely. Duration eight seconds, no cuts.

## Variables

- {{subject}}: who or what is in frame
- {{wardrobe}}: dark overcoat, hooded jacket, tailored suit
- {{neon-colour}}: magenta, sodium orange, electric green

## Tips

- Keep the move to one direction. Combined dolly and pan tends to warp faces at the edges.
- Add "static locked off tripod shot" for a version you can cut against the moving take.
- Specify the duration and "no cuts" or the model may invent an edit.
- Rain and haze cost detail. Reduce both if the subject's face matters more than the mood.
- Generate a second pass with the flare removed so you can grade the two together.
