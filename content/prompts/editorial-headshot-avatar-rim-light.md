---
title: Editorial Headshot Avatar With Rim Lighting
emoji: "🧑‍🎨"
description: Generates a tight editorial portrait for profile photos and speaker cards, with soft key light, a defined rim, and a muted background that keeps text legible.
category: art-and-design
subcategory: portrait-and-avatar
models: [flux, midjourney, nano-banana]
roles: [content-creators, freelancers, coaches]
type: image
featured: false
publishedAt: 2026-02-11
does:
  - "Produces a tight head and shoulders portrait shot at 85mm and f/2, with the eyes placed on the upper third line."
  - "Renders a soft key light, a two stop fill, and a cool rim tracing the jaw against a flat gradient wall."
  - "Keeps skin texture natural with visible pores and catchlights in both eyes, on a neutral editorial colour grade."
tips:
  - title: "Request 4:5 and 1:1 crops"
    detail: "in the same run, so one generation covers a LinkedIn header and a round profile avatar."
  - title: "Generate three expression variants"
    detail: "before choosing, since the micro expression carries more of the final image than the wardrobe does."
  - title: "Reuse the seed in Flux"
    detail: "when you change only {{wardrobe}}, so the face and the lighting stay identical between renders."
steps:
  - title: "Copy the prompt paragraph"
    detail: "into your image model, leaving the lens, lighting, and skin texture wording intact."
  - title: "Swap the four bracketed variables"
    detail: "with {{subject-description}}, {{background-tone}}, {{expression}}, and {{wardrobe}}."
  - title: "Generate it in Midjourney"
    detail: "at a 4:5 aspect ratio, then upscale the single frame you like for the profile photo."
---

## Prompt

An editorial portrait of {{subject-description}}, head and upper shoulders, framed slightly off centre with the eyes on the upper third line, shot on an 85mm lens at f/2 so the background falls into smooth unbroken blur. Soft key light from a large source high and camera right, a subtle fill returning about two stops below key, and a cool rim light tracing the jaw and shoulder to lift the subject off the background. Background is a flat {{background-tone}} wall with a gentle vertical gradient, no props, no clutter. Skin rendered with natural texture, visible pores, no smoothing or plastic sheen, catchlights present in both eyes. Expression is {{expression}}, relaxed shoulders, direct gaze into the lens. Wardrobe is {{wardrobe}} in muted tones that do not compete with the face. Colour grade is neutral with slightly lifted shadows, editorial magazine finish, high resolution.

## Variables

- {{subject-description}} — age range, hair, build, and any defining features
- {{background-tone}} — deep olive, warm grey, ink blue
- {{expression}} — calm and open, quietly amused, focused
- {{wardrobe}} — knit crewneck, open collar shirt, structured blazer

## Tips

- Ask for a 4:5 frame for LinkedIn and a square crop for avatars in the same run.
- Add "shot against a window with soft daylight" for a warmer, less studio feel.
- Increase the rim light description to "hard rim" when the background tone is dark.
- Generate three expression variants before choosing, since micro expression drives the whole image.
