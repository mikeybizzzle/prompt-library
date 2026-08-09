---
title: Spend and Save Email With Tiered Discount Thresholds
emoji: "💰"
description: Produces three spend and save email variations that describe the offer and its key benefits, highlight products worth adding to the basket, and drive the sale.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-26
does:
  - Produces three variations with a headline built for excitement and an offer details section describing the spend and save deal.
  - Adds a product highlights section covering specific products customers might want to buy.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Use tiered discounts
    detail: since the format works by rewarding customers for spending more.
  - title: Send it during a promotion
    detail: or a seasonal event, both of which the source recommends.
  - title: Try it for inventory clearance
    detail: which the source lists as a way to move older stock.
steps:
  - title: Set the spend thresholds
    detail: and the reward at each one.
  - title: Fill in the variables
    detail: "Set {{offer}} and {{tone}} before you run the prompt."
  - title: Run it and pick products
    detail: that get an average basket over the next threshold.
---

## Prompt

Write an engaging 'Spend & Save' email based on the following structure. The email should highlight the offer {{offer}}, describe the key benefits of such offer, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create excitement with a catchy headline.
2. **Offer Details Section:** Describe the spend and save offer.
3. **Product Highlights Section:** Highlight specific products that customers might want to buy.
4. **CTA Button:** Prompt immediate action to shop the sale.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Seasonal Promotions:** Offer tiered discounts during holiday seasons or special events.
- **Inventory Clearance:** Encourage larger purchases to help clear out older stock.
- **Customer Appreciation:** Reward loyal customers with spend-based discounts.

## Variables

- {{offer}}: describe the offer
- {{tone}}: choose your tone, for example: enthusiastic and persuasive
