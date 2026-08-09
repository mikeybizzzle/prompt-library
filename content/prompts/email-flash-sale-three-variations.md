---
title: Flash Sale Email With Three Subject Line Variants
emoji: "⚡"
description: Produces three flash sale email variations with a headline, a sale details section, and a shop button, plus subject line and pre-header pairs capped at 40 characters.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-10-14
does:
  - Produces three variations with an urgent headline and a sale details section describing the offer.
  - Adds a call to action button to shop the sale and an optional persuasive closing section.
  - Writes a subject line and pre-header pair per variation, capped at 40 characters each and deliberately different.
tips:
  - title: Keep the window genuinely short
    detail: because the template drives quick sales by emphasising that the offer is temporary.
  - title: Try a 24 hour version
    detail: which the source lists first among its use cases.
  - title: Run one monthly
    detail: since the source suggests peak periods, special promotions, or simply a monthly cadence.
steps:
  - title: Set the offer and the end time
    detail: before writing, since urgency copy needs a real deadline behind it.
  - title: Fill in the variables
    detail: "Set {{key-offer}} and {{tone}} before you run the prompt."
  - title: Run it and schedule the send
    detail: so the email lands with enough of the sale window left to act on.
---

## Prompt

Write a 'Flash Sale' email based on the following structure. The email should highlight a special flash sale event, {{key-offer}}, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Create urgency with a catchy headline.
2. **Sale Details Section:** Describe the sale offer.
3. **CTA Button:** Prompt immediate action to shop the sale.
4. **(optional) Closing Section:** Close the campaign with a persuasive ending to encourage quick action.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **24-Hour Flash Sales:** Promote limited-time offers that last for 24 hours.
- **Seasonal Flash Sales:** Highlight temporary discounts during seasonal events.
- **Surprise Flash Sales:** Drive engagement with unexpected sales events.

## Variables

- {{key-offer}}: describe the key offer
- {{tone}}: choose your tone, for example: urgent and exciting
