---
title: Bundle Deal Email With Savings and Product Breakdown
emoji: "📦"
description: Produces three bundle email variations that describe the products included, highlight the savings against buying separately, and push a single purchase button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-16
does:
  - Produces three variations with a headline introducing the bundle, an optional one liner, and a bundle details section listing the products included.
  - Covers the images and key benefits of each product in the bundle, then a call to action button to purchase it.
  - Closes with an optional persuasive section and a subject line and pre-header pair per variation, capped at 40 characters each.
tips:
  - title: Send it during a promotional window
    detail: since the template is built for promotional periods, holidays, and special events.
  - title: Make the savings the hook
    detail: because the value of buying the products together is what drives the bundle sale.
  - title: Try a limited time framing
    detail: which the source lists as a use case alongside holiday and seasonal bundles.
steps:
  - title: List what is in the bundle
    detail: and work out the saving against buying each item on its own.
  - title: Fill in the variables
    detail: "Set {{bundle-url}} and {{tone}} before you run the prompt."
  - title: Run it and pick a variation
    detail: then check the product list in the email matches what the bundle page actually ships.
---

## Prompt

Write an engaging 'Bundle Deals' email based on the following structure. The email should highlight a special bundle offer {{bundle-url}} , describe the products included in the bundle , emphasize the savings, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the bundle deal with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Bundle Details Section:** Describe the bundle and list the products included, with images and key benefits.
4. **CTA Button:** Prompt immediate action to purchase the bundle.
5. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Holiday Bundles:** Highlight special bundles created for specific holidays.
- **Limited-Time Offers:** Promote exclusive bundles available for a limited time.
- **Seasonal Promotions:** Offer bundles that align with seasonal themes or needs.

## Variables

- {{bundle-url}}: paste a url of a bundle
- {{tone}}: choose your tone, for example: enthusiastic and persuasive
