---
title: Best Seller Recommendation Email Featuring Three Products
emoji: "👍"
description: Builds three recommendation email variations featuring up to three best selling products, each with a short description and its own call to action, plus a main button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-25
does:
  - Produces three variations with a headline, an optional one liner teaser, and a product introduction section covering up to three products.
  - Gives each product a name, a short enticing description, and its own call to action text.
  - Ends each variation with a prominent button, an optional persuasive closing, and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it every month or two
    detail: which is the cadence the source recommends for this campaign.
  - title: Treat it as a filler send
    detail: because the source is clear that it is low effort and will not necessarily drive a lot of revenue.
  - title: Use it to feature a collection
    detail: or to showcase how to use the products step by step, both listed uses.
steps:
  - title: Pull your current top sellers
    detail: and cut the list down to three.
  - title: Fill in the variables
    detail: "Set {{collection-url}} and {{tone}} before you run the prompt."
  - title: Run it and fill the product slots
    detail: with the real names, descriptions, and button text for each item.
---

## Prompt

Write an engaging email based on the following structure. The email should highlight our best-selling products from {{collection-url}}, introduce the products (up to 3) individually, write a short sentence about each product, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

- **Headline:** Set the stage with a catchy headline that grabs attention.
- **(optional) One-liner:** Provide a brief teaser or summary for the campaign to engage readers.
- **Product Introduction Section:**
    - **Product 1: [Insert Product Name]**
        - **Description:** [Write a brief, enticing description of the product]
        - **CTA:** [Insert call-to-action text, e.g., “SHOP NOW”]
    - **Product 2: [Insert Product Name]**
        - **Description:** [Write a brief, enticing description of the product]
        - **CTA:** [Insert call-to-action text, e.g., “BUY NOW”]
    - **Product 3: [Insert Product Name]**
        - **Description:** [Write a brief, enticing description of the product]
        - **CTA:** [Insert call-to-action text, e.g., “LEARN MORE”]
- **CTA Button:** Include a prominent button with action-oriented text to encourage clicks.
- **(optional) Closing Section:** Conclude with a persuasive ending to reinforce the message and prompt further action.

Create a subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, other longer, third out of the box.

## Use cases

- **Monthly Best-sellers:** Feature products that are trending or were trending recently.
- **Product Showcase:** Feature a products and showcase how to use them step by step.
- **Recommendations:** Feature a certain collection and highlight products

## Variables

- {{collection-url}}: insert collection URL
- {{tone}}: choose your tone, for example: conversational and enthusiastic
