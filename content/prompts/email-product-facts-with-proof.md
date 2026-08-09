---
title: Product Facts Email That Links Data to Benefits
emoji: "🔍"
description: Produces three fact led email variations that present key facts or statistics with short explanations, link them to the product benefits, and close with a shop button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-02
does:
  - Produces three variations with a fact based headline and a fact presentation section carrying the key facts or statistics with brief explanations.
  - Adds a product connection section that links each fact back to the benefits of the product.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Use facts you can stand behind
    detail: since the template is built to establish trust and authority, which a shaky number undoes.
  - title: Bring statistics or data
    detail: which the source lists as a use case for supporting product claims.
  - title: Point it at unique selling points
    detail: because the format is designed to reinforce what makes the product effective.
steps:
  - title: Collect the facts and their sources
    detail: so every number in the email can be traced back if a customer asks.
  - title: Fill in the variables
    detail: "Set {{compelling-facts}}, {{product-url}}, and {{tone}} before you run the prompt."
  - title: Run it and verify each figure
    detail: against your source before the email leaves the building.
---

## Prompt

Write an engaging 'Facts' email based on the following structure. The email should present {{compelling-facts}} about your product {{product-url}} or a related topic, include a call-to-action button, and maintain an {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a fact-based headline.
2. **Fact Presentation Section:** Present key facts or statistics with brief explanations.
3. **Product Connection Section:** Link the facts to the benefits of the product.
4. **CTA Button:** Prompt immediate action to shop or learn more.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Benefits:** Highlight specific benefits of a product using factual information.
- **Statistics and Data:** Present relevant statistics or data to support product claims.
- **Educational Content:** Provide informative content about a related topic.

## Variables

- {{compelling-facts}}: insert compelling facts
- {{product-url}}: paste a URL of product
- {{tone}}: choose your tone, for example: informative or trustworthy
