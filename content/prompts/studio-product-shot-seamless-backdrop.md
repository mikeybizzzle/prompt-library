---
title: Studio Product Shot on a Seamless Sweep Backdrop
emoji: "📸"
description: Generates a clean commercial product photograph with controlled softbox lighting, a seamless backdrop, and shallow depth of field for catalogue or ad use.
category: art-and-design
subcategory: product-photography
models: [flux, midjourney, nano-banana, ideogram]
roles: [ecommerce-sellers, photographers, designers]
type: image
featured: true
publishedAt: 2025-09-24
does:
  - Renders a square studio product shot on a seamless paper sweep at 100mm and f/4, subject filling sixty percent of frame.
  - Specifies a softbox key at forty five degrees, a white bounce card fill, and a strip light raking the right edge.
  - Holds a short contact shadow, clean specular roll off, and a limited palette with neutral greys everywhere else.
tips:
  - title: Set the aspect ratio per channel
    detail: "using 4:5 for paid social and 1:1 for marketplace listings instead of the square default."
  - title: Reuse the seed across a product line
    detail: so every shot in the set keeps the same lighting character and backdrop tone.
  - title: Generate the product without labels
    detail: whenever text renders as gibberish, then composite the real label back in afterwards.
steps:
  - title: Copy the prompt paragraph
    detail: into an image model, keeping the lighting sentence intact so the setup stays repeatable.
  - title: Describe the four variables
    detail: "{{product}}, {{backdrop-colour}}, {{material-finish}}, and {{palette}} before generating."
  - title: Run it in Flux or Midjourney
    detail: and append the aspect ratio flag for whichever channel the image is going to.
---

## Prompt

A commercial studio product photograph of {{product}} centred on a seamless {{backdrop-colour}} paper sweep, shot on a 100mm macro lens at f/4, camera at product height, subject filling roughly sixty percent of a square frame. Key light from a large softbox at forty five degrees camera left, a white bounce card filling the shadow side, and a narrow strip light raking the right edge to separate the product from the background. Soft gradient falloff behind the subject, no visible horizon line, a short contact shadow directly beneath the object grounding it to the surface. Surface finish reads as {{material-finish}} with a clean specular roll off and no blown highlights. Colour palette limited to {{palette}} with neutral greys elsewhere. Crisp micro detail on edges, labels, and seams, dust free, fingerprint free. Mood is calm, premium, and unfussy. Rendered as a high resolution catalogue image with natural colour and no post processing effects.

## Variables

- {{product}} — the object, described with shape and size
- {{backdrop-colour}} — for example warm bone, cool slate, soft sand
- {{material-finish}} — matte ceramic, brushed aluminium, coated glass
- {{palette}} — two or three colours to hold the frame together

## Tips

- Swap the strip light for a bare reflector to get harder, more editorial edges.
- Add "shot from a low three quarter angle" for taller products that need presence.
- Request a 4:5 crop for paid social and 1:1 for marketplace listings.
- If labels render as gibberish, generate the shot blank and composite the label later.
- Repeat the same lighting sentence across a product line so the set stays consistent.
