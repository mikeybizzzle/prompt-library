---
title: Shipping Promotion Email With Terms and Cutoff Detail
emoji: "🚚"
description: Writes three shipping promotion email variations that introduce the offer, describe its terms and conditions, and drive readers to take advantage of the deal.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-06
does:
  - Produces three variations with a headline introducing the shipping promotion and a promotion details section covering the offer and any terms and conditions.
  - Adds a call to action button and an optional persuasive closing to encourage quick action.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Send it in a peak period
    detail: which is when the source says a shipping deal drives the most conversions.
  - title: Try a free shipping threshold
    detail: one of the three uses listed, alongside expedited options and discounted rates.
  - title: Spell out the conditions
    detail: because the added value only lands if the reader knows what qualifies.
steps:
  - title: Set the offer and its conditions
    detail: including the minimum spend and the regions covered.
  - title: Fill in the variables
    detail: "Set {{tone}} before you run the prompt."
  - title: Run it and check the small print
    detail: so the terms in the email match the ones at checkout.
---

## Prompt

Write an engaging 'Shipping' email based on the following structure. The email should highlight a special shipping promotion, describe the terms of the offer, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the shipping promotion with a catchy headline.
2. **Promotion Details Section:** Describe the shipping offer, including any terms and conditions.
3. **CTA Button:** Prompt immediate action to take advantage of the shipping deal.
4. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Free Shipping Offers:** Promote free shipping on orders over a certain amount.
- **Expedited Shipping:** Highlight fast shipping options for last-minute shoppers.
- **Shipping Discounts:** Offer discounted shipping rates during special promotions.

## Variables

- {{tone}}: choose your tone, for example: clear and enticing
