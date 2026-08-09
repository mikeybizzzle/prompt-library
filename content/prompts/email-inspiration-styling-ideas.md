---
title: Inspiration Email With Curated Looks and Styling Tips
emoji: "✨"
description: Builds three inspiration email variations that present curated products with lifestyle images and usage tips, describe the key benefits, and drive readers to shop.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-11
does:
  - Produces three variations with a headline introducing the inspiration theme and an optional one liner.
  - Adds an inspiration section describing the curated products or tips with images and key benefits.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it regularly
    detail: which is what the source suggests for keeping an audience inspired and engaged.
  - title: Show products in real settings
    detail: because helping customers visualise the product in use is the point of the format.
  - title: Try a seasonal angle
    detail: since seasonal themes and must have items are one of the listed use cases.
steps:
  - title: Gather the lifestyle images
    detail: and note the styling tip each one demonstrates.
  - title: Fill in the variables
    detail: "Set {{collection-url}} and {{tone}} before you run the prompt."
  - title: Run it and pair image to copy
    detail: so each tip sits next to the image that shows it.
---

## Prompt

Write an engaging 'Inspo' email based on the following structure. The email should inspire customers with curated products from the collection {{collection-url}}, lifestyle images, and tips to using the products, describe key products and their benefits, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the inspiration theme with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Inspiration Section:** Describe the curated products or tips with images and key benefits.
4. **CTA Button:** Prompt immediate action to explore or shop the inspired items.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Recommendations:** Inspire customers with curated product recommendations based on their preferences.
- **Seasonal Inspirations:** Showcase seasonal themes and must-have items for the current season.
- **Styling Tips:** Provide styling tips and ideas to help customers use and style your products.

## Variables

- {{collection-url}}: include url here
- {{tone}}: choose your tone, for example: inspirational and friendly
