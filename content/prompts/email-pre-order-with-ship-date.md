---
title: Pre Order Email With Ship Date and Early Buyer Perks
emoji: "📆"
description: Builds three pre order email variations that describe the upcoming product, list the advantages of ordering early, state the approximate ship date, and drive reservations.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-13
does:
  - Produces three variations with a headline and a product details section covering the key features and benefits of the upcoming product.
  - Adds a pre order benefits section covering advantages such as securing the item in advance and exclusive access.
  - Ends each variation with a pre order button, an optional closing confirming the shipment date, and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it ahead of the launch
    detail: which is when the source says the format drives sales before the product is out.
  - title: Mention any early pricing
    detail: since securing the item at a cheaper price is part of what the template is built on.
  - title: Use it for limited editions
    detail: which the source lists alongside launches and high demand items.
steps:
  - title: Confirm the shipment date
    detail: with your supplier, because the email is going to promise it.
  - title: Fill in the variables
    detail: "Set {{pre-order-url}}, {{shipment-date}}, and {{tone}} before you run the prompt."
  - title: Run it and check the date
    detail: appears in every variation before you schedule the send.
---

## Prompt

Write an engaging 'Pre-Order' email based on the following structure. The email should generate excitement for an upcoming product {{pre-order-url}} , describe its key features, and include a call-to-action button to pre-order. It should also state an approximate shipment date {{shipment-date}}. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create excitement with a catchy headline.
2. **Product Details Section:** Describe the upcoming product with key features and benefits.
3. **Pre-Order Benefits:** Highlight the advantages of pre-ordering (e.g., securing the item in advance, exclusive access).
4. **CTA Button:** Prompt immediate action to pre-order the product.
5. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action or confirming the shipment date.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **New Product Launches:** Promote upcoming products available for pre-order.
- **Limited-Edition Releases:** Highlight exclusive items that customers can secure in advance.
- **Back-in-Stock Notifications:** Inform customers about popular items available for pre-order before they return to stock.

## Variables

- {{pre-order-url}}: paste the product pre-order URL
- {{shipment-date}}: insert shipment date
- {{tone}}: choose your tone, for example: enthusiastic and persuasive
