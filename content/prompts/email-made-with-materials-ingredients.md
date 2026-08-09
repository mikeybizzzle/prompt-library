---
title: Made With Email Detailing Materials and Ingredients
emoji: "🧵"
description: Turns your materials or ingredients into three email variations that detail what goes into the product, link each one to a benefit, and close with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-23
does:
  - Produces three variations with a headline, an optional one liner, and a section detailing the materials or ingredients used.
  - Adds a product connection section linking those materials or ingredients to the benefits of the product.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Use it to build transparency
    detail: which is the stated purpose, alongside educating the audience about the product.
  - title: Emphasise quality and craftsmanship
    detail: since that is what the source says this campaign is for.
  - title: Try an ingredient breakdown
    detail: when the benefit is chemical rather than material, as the source suggests.
steps:
  - title: Write out the materials list
    detail: with what each one contributes to the finished product.
  - title: Fill in the variables
    detail: "Set {{materials-or-ingredients}}, {{product-url}}, and {{tone}} before you run the prompt."
  - title: Run it and fact check
    detail: every material claim against your supplier documentation.
---

## Prompt

Write an engaging 'Made With' email based on the following structure. The email should highlight {{materials-or-ingredients}} used in your {{product-url}} and have a clear call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a compelling headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Material/Ingredient Highlight Section:** Detail the materials or ingredients used in the products.
4. **Product Connection Section:** Link the materials or ingredients to the benefits of the product.
5. **CTA Button:** Prompt immediate action to shop or learn more.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Material Highlight:** Showcase the unique materials used in your products.
- **Ingredient Breakdown:** Explain the beneficial ingredients in your products.

## Variables

- {{materials-or-ingredients}}: the unique materials or ingredients
- {{product-url}}: insert product url
- {{tone}}: choose your tone, for example: informative and transparent
