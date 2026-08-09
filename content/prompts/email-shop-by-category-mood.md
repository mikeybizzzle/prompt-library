---
title: Shop By Category Email With Three Curated Entry Points
emoji: "🗂️"
description: Builds three shop by email variations that present categories, moods, or styles with descriptions, highlight the key products in each, and drive readers to shop.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-01-10
does:
  - Produces three variations with a headline introducing the theme and a short one liner intro.
  - Adds a shop by section presenting the different categories, moods, or styles with descriptions and key products.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it periodically
    detail: which is what the source suggests for helping customers discover new products.
  - title: Pick one sorting logic
    detail: category, mood, or style, since mixing all three undoes the simplification the format is for.
  - title: Use it to ease decisions
    detail: because the template exists to simplify shopping with curated selections.
steps:
  - title: Decide the routes in
    detail: and get a live collection URL for each one.
  - title: Fill in the variables
    detail: "Set {{category-urls}} and {{tone}} before you run the prompt."
  - title: Run it and check each link
    detail: so every category in the email lands on the right collection page.
---

## Prompt

Write an engaging 'Shop by' email based on the following structure. The email should guide customers in exploring products based on specific categories, moods, or styles from this collection: {{category-urls}}, highlight key products in each section, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the theme of the email with a catchy headline.
2. **One liner:** Short intro to the email.
3. **Shop by Section:** Present different categories, moods, or styles with descriptions and key products.
4. **CTA Button:** Prompt immediate action to start shopping.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Shop by Category:** Highlight different product categories for easy navigation.
- **Shop by Mood:** Suggest products based on the customer's current mood or needs.
- **Shop by Style:** Offer curated selections based on specific styles or trends.

## Variables

- {{category-urls}}: paste a url of each category
- {{tone}}: choose your tone, for example: friendly and helpful
