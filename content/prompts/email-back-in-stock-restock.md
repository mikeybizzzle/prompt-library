---
title: Back in Stock Email With Urgency and Restock Proof
emoji: "🔄"
description: Writes three restock email variations announcing that sold out products are available again, describing their key features and benefits, and driving the purchase.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-12-29
does:
  - Produces three variations with a headline, an optional short intro, and a product details section describing the restocked items with images and key benefits.
  - Adds a call to action button to shop the restocked items and an optional persuasive closing.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Send it the moment stock lands
    detail: which the source says is what makes the campaign work.
  - title: Use it for best sellers first
    detail: since announcing the return of best selling items is the primary listed use.
  - title: Keep the urgency honest
    detail: because the format leans on the risk that the item sells out again.
steps:
  - title: Confirm the stock is live
    detail: on the product page before you write anything.
  - title: Fill in the variables
    detail: "Set {{product-url}} and {{tone}} before you run the prompt."
  - title: Run it and send immediately
    detail: so the email reaches waiting customers while the stock is still there.
---

## Prompt

Write an engaging 'Restock' email based on the following structure. The email should announce the availability of restocked products {{product-url}}, describe their key features and benefits, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create excitement with a catchy headline.
2. **(optional) One-liner:** Provide a brief intro to the email.
3. **Product Details Section:** Describe the restocked products with images and key benefits.
4. **CTA Button:** Prompt immediate action to shop the restocked items.
5. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Popular Product Restock:** Announce the return of best-selling items.
- **Seasonal Restock:** Highlight the availability of seasonal favorites.
- **Limited Edition Restock:** Inform customers about the restocking of limited edition or exclusive products.

## Variables

- {{product-url}}: add URL of product
- {{tone}}: choose your tone, for example: urgent and enthusiastic
