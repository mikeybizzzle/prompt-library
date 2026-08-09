---
title: Gift Guide Email With Curated Picks by Occasion
emoji: "🎁"
description: Builds three gift guide email variations that showcase a curated selection of products, highlight the unique feature of each one, and close with a call to action button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-26
does:
  - Produces three variations with a headline, an optional one liner, and a gift guide section highlighting each product with a description and image.
  - Adds an optional persuasive closing section and a call to action button.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Send it in a gifting season
    detail: since the template is built for key gifting seasons and holidays.
  - title: Curate for one occasion
    detail: because the format works by matching a selection to a specific occasion rather than the whole catalogue.
  - title: Try a general recommendations version
    detail: which the source lists for versatile products suitable for any recipient.
steps:
  - title: Curate the collection first
    detail: and give the page a URL the email can point at.
  - title: Fill in the variables
    detail: "Set {{collection-url}} and {{tone}} before you run the prompt."
  - title: Run it and trim the list
    detail: so each pick still gets its own unique feature called out.
---

## Prompt

Write an engaging 'Gift Guide' email based on the following structure. The email should showcase a curated selection of products that make perfect gifts from this collection {{collection-url}}, shortly highlight the unique feature of each product, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Set the stage with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Gift Guide Section:** Highlight each product with descriptions and images.
4. **(optional) Closing Section:** Close the campaign with a persuasive ending.
5. **CTA Button:** Prompt immediate action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Holiday Gift Guides:** Highlight products that make great gifts for specific holidays.
- **Special Occasion Gift Guides:** Provide gift ideas for birthdays, anniversaries, or other special occasions.
- **General Gift Recommendations:** Offer a selection of versatile products suitable for any recipient or occasion.

## Variables

- {{collection-url}}: include url here
- {{tone}}: choose your tone, for example: warm and inviting
