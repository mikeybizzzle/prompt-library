---
title: Zodiac Email Matching Products to Each Sign
emoji: "♌"
description: Produces three zodiac email variations that match products to specific zodiac traits, describe each pairing, and close with a clear call to action button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-20
does:
  - Produces three variations with a headline, an optional one liner, and a zodiac sign section describing products tailored to specific signs.
  - Adds a call to action button to shop or learn more, plus an optional fun or persuasive closing.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Run it monthly
    detail: featuring products that align with the current zodiac sign, which is the use case the source lists.
  - title: Keep it light
    detail: because the format is about adding a fun, personalised touch rather than making a serious claim.
  - title: Match traits to products
    detail: since the personalisation only works if each pairing has a reason behind it.
steps:
  - title: Pick the sign of the month
    detail: and the products you can justify pairing with it.
  - title: Fill in the variables
    detail: "Set {{product-urls}} and {{tone}} before you run the prompt."
  - title: Run it and check each pairing
    detail: so the trait and the product actually connect.
---

## Prompt

Write an engaging 'Zodiac' email based on the following structure. The email should highlight products that align with specific zodiac traits {{product-urls}} and have a clear call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Grab attention with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Zodiac Sign Section:** Describe products tailored to specific zodiac signs.
4. **CTA Button:** Prompt immediate action to shop or learn more.
5. **(optional) Closing Section:** Close the campaign with a fun or persuasive ending.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Monthly Zodiac Campaign:** Feature products each month that align with the current zodiac sign.

## Variables

- {{product-urls}}: add products URL’s and connect each one with zodiac sign
- {{tone}}: choose your tone, for example: fun and personalized
