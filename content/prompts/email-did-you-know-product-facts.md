---
title: Did You Know Email With Product Facts and Tips
emoji: "💭"
description: Turns an interesting fact or tip about your products or industry into three email variations, each presenting the fact and then highlighting the products it relates to.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-24
does:
  - Produces three variations with a curious headline, an optional one liner, and a Did you know section carrying the facts or tips.
  - Adds a relevant product section that highlights the products connected to those facts or tips.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Send it on a regular rhythm
    detail: because the template is meant to educate and connect with the audience over time, not to sell hard.
  - title: Pick a little known product fact
    detail: which the source names as the first use case, ahead of usage tips and industry insights.
  - title: Keep the fact genuinely interesting
    detail: since curiosity is the only thing carrying the reader into the product section.
steps:
  - title: Choose the fact or tip
    detail: and check it holds up before you build an email on top of it.
  - title: Fill in the variables
    detail: "Set {{interesting-info}} and {{tone}} before you run the prompt."
  - title: Run it and match the products
    detail: so the items in the product section really do relate to the fact you led with.
---

## Prompt

Write an engaging 'Did You Know?' email based on the following structure. The email should share interesting facts or tips related to our products or industry {{interesting-info}}. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a curious headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **“Did you know?” Section:** Present interesting facts or tips related to your products or industry.
4. **Relevant Product Section:** Highlight relevant products that relate to the facts or tips

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Facts:** Share little-known facts about your products.
- **Usage Tips:** Provide tips on how to use your products effectively.
- **Industry Insights:** Offer interesting insights or trends in your industry.

## Variables

- {{interesting-info}}: insert the interesting info
- {{tone}}: choose your tone, for example: informative or engaging
