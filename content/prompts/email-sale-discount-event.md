---
title: Sale Email With Offer Terms and Three Angle Variants
emoji: "🏷️"
description: Produces three sale email variations that present the discount event, describe the offer and its terms, and drive readers to shop before the offer closes.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-02
does:
  - Produces three variations with an urgent headline and a sale details section describing the offers with images and key benefits.
  - Adds a call to action button to shop the sale and an optional persuasive closing.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Send it around a sales event
    detail: which the source lists as holidays, anniversaries, or simply once a month.
  - title: State the terms in the email
    detail: since describing the offer and its terms is part of what the prompt asks for.
  - title: Try an exclusive deal
    detail: because limited time offers are what the format is built to create urgency around.
steps:
  - title: Fix the discount and the terms
    detail: including what is excluded, before you write the copy.
  - title: Fill in the variables
    detail: "Set {{sale-event}}, {{offer-and-terms}}, and {{tone}} before you run the prompt."
  - title: Run it and check the terms
    detail: in the email match the ones configured in your store.
---

## Prompt

Write a 'Sale' email based on the following structure. The email should highlight a {{sale-event}}, describe {{offer-and-terms}}, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create urgency with a catchy headline.
2. **Sale Details Section:** Describe the sale offers with images and key benefits.
3. **CTA Button:** Prompt immediate action to shop the sale.
4. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Holiday Sales:** Promote special discounts and offers during holiday seasons.
- **Special Sales:** Create urgency with limited-time offers and discounts.

## Variables

- {{sale-event}}: special sale or discount event
- {{offer-and-terms}}: the offer and terms
- {{tone}}: choose your tone, for example: urgent and persuasive
