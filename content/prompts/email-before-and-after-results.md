---
title: Before and After Email With Results and Photo Sections
emoji: "🪞"
description: Builds three before and after email variations that present your photos with short descriptions, highlight the key results they show, and close with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-08
does:
  - Produces three variations with a results driven headline, an optional one liner, and a before and after photos section with brief descriptions.
  - Adds a results section that highlights the key results or benefits shown in the photos.
  - Writes a call to action button plus a subject line and pre-header pair per variation, each capped at 40 characters.
tips:
  - title: Lead with visual evidence
    detail: because the template works by showing the transformative effect rather than describing it.
  - title: Pair the photos with a testimonial
    detail: which the source lists as a use case for added impact.
  - title: Use it to prove efficacy
    detail: when a claim about your product needs tangible proof rather than another adjective.
steps:
  - title: Gather the photo pairs
    detail: and note what changed in each one so the descriptions stay accurate.
  - title: Fill in the variables
    detail: "Set {{tone}} before you run the prompt."
  - title: Run it and choose a variation
    detail: then match each photo pair to the description the model wrote for it.
---

## Prompt

Write an engaging 'Before & After' email based on the following structure. The email should present compelling before and after photos to demonstrate the effectiveness of our product, include a call-to-action button, and maintain an {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a results-driven headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Before & After Photos Section:** Present before and after photos with brief descriptions.
4. **Results Section:** Highlight the key results or benefits shown in the photos.
5. **CTA Button:** Prompt immediate action to shop or learn more.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Transformation Stories:** Showcase customer transformations using before and after photos.
- **Product Efficacy:** Demonstrate the effectiveness of a product with clear visual results.
- **Customer Testimonials:** Combine before and after photos with customer testimonials for added impact.

## Variables

- {{tone}}: choose your tone, for example: informative or encouraging
