---
title: Seamless Macro B-Roll Loop for a Product Reveal
emoji: "🎞️"
description: Generates a seamless looping macro clip of a product surface with slow orbital motion and raking light, built to sit under a voiceover or as a transition.
category: video
subcategory: b-roll-and-transitions
models: [runway, veo, kling, sora]
roles: [ecommerce-sellers, content-creators, marketers]
type: image
featured: false
publishedAt: 2025-11-08
does:
  - "Generates a six second macro clip with a ten degree orbit, a raking key light from frame right, and a soft opposite fill."
  - "Holds focus across the middle third, drifts dust motes through the beam, and travels a specular highlight over the surface."
  - "Returns identical first and last frames at ninety six frames per second playback so the clip loops without a visible cut."
tips:
  - title: "Keep the loop instruction verbatim"
    detail: "because dropping the identical first and last frame line is what makes the cut visible on replay."
  - title: "Reuse the seed across passes"
    detail: "so the three highlight travel directions stay on the same surface and colour instead of drifting."
  - title: "Render at 9:16 for stories"
    detail: "and 16:9 for the site, then crop the macro frame rather than regenerating it at a new ratio."
steps:
  - title: "Copy the prompt paragraph whole"
    detail: "into the generator, since the lighting and focus clauses only work as one continuous block."
  - title: "Swap in your three variables"
    detail: "for {{product-surface}}, {{material-texture}}, and {{palette}} before you generate anything."
  - title: "Generate three passes in Veo"
    detail: "then hand the editor the version whose highlight sweep matches the voiceover timing."
---

## Prompt

An extreme macro shot of {{product-surface}}, frame filled edge to edge with texture, the camera orbiting slowly around a fixed point at roughly ten degrees over the full clip so the motion is barely perceptible. A hard raking key light enters from frame right at a shallow angle, catching the {{material-texture}} and throwing long micro shadows across the surface, while a soft fill from the opposite side keeps the shadow side readable rather than black. Focus plane sits across the middle third with the near and far edges falling into a smooth blur. A slow specular highlight travels across the surface as the camera moves, resolving back to its starting position at the end. Colour palette is {{palette}} against a near black surround. Fine dust motes drift through the light beam. Shot at ninety six frames per second and played back slowed, so motion is fluid with no stutter. Six seconds, first and last frame identical for a seamless loop, no cuts, no camera shake.

## Variables

- {{product-surface}}: brushed metal watch case, knitted fabric weave, coffee beans, glass bottle shoulder
- {{material-texture}}: grain, weave, machining marks, condensation
- {{palette}}: two dominant colours plus the black surround

## Tips

- Ask explicitly for identical first and last frames or the loop will jump.
- Shorten to four seconds if the model drifts off the subject halfway through.
- Swap the orbit for "a slow push in of five percent" when the clip sits under a voiceover line.
- Raking light reveals texture. Frontal light flattens it. Never move the key to the lens axis here.
- Generate three passes with different highlight travel directions to give the editor options.
