---
title: New Product Launch Email With Features and Benefits
emoji: "🚀"
description: Produces three launch email variations that introduce a new product or collection, describe its key features and benefits, and drive readers to shop the release.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-12-05
does:
  - Produces three variations with a headline built for excitement and a product details section describing the new product.
  - Adds a call to action button to explore or shop the new item and an optional persuasive closing.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Use it for real releases
    detail: which the source defines as new collections, product releases, or major product line updates.
  - title: Lead on the unique features
    detail: because creating demand for a new item is what this template is designed to do.
  - title: Send it as a feature highlight
    detail: when the product is known but its differences are not.
steps:
  - title: Write down the features and benefits
    detail: so the model describes the product rather than guessing at it.
  - title: Fill in the variables
    detail: "Set {{product-url}} and {{tone}} before you run the prompt."
  - title: Run it and check the claims
    detail: against the product page before the launch goes out.
---

## Prompt

Write an engaging 'New Launch' email based on the following structure. The email should introduce a new product or collection {{product-url}}, describe its key features and benefits, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create excitement with a catchy headline.
2. **Product Details Section:** Describe the new product.
3. **CTA Button:** Prompt immediate action to explore or shop the new item.
4. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Launch:** Announce the release of a new product or collection.
- **Feature Highlight:** Showcase unique features and benefits of the new product.

## Variables

- {{product-url}}: paste a url of product
- {{tone}}: choose your tone, for example: exciting and persuasive
