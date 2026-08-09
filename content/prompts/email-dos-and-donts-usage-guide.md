---
title: Dos and Donts Email With Product Usage Guidelines
emoji: "✅"
description: Builds three dos and donts email variations that show the correct and incorrect ways to use a product, highlight the products that help, and close with a button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-09-28
does:
  - Produces three variations with a headline, an optional one liner, and a dos and donts section covering correct and incorrect product use.
  - Adds a relevant product section highlighting the products that help readers follow the guidelines.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Promote the product indirectly
    detail: "which is the point of the format: guidance first, product second."
  - title: Build it around common mistakes
    detail: since highlighting frequent errors and their fixes is one of the listed use cases.
  - title: Use it to lift satisfaction
    detail: because the template exists to teach proper usage rather than to run a promotion.
steps:
  - title: Pick the topic and the mistakes
    detail: your support inbox sees most often on that topic.
  - title: Fill in the variables
    detail: "Set {{topic}}, {{product-url}}, and {{tone}} before you run the prompt."
  - title: Run it and sanity check the donts
    detail: so nothing in the list contradicts your own product instructions.
---

## Prompt

Write an engaging 'Do's & Don'ts' email based on the following structure. The email should provide helpful guidelines related to {{topic}}, indirectly promoting {{product-url}} and have a clear call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Grab attention with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Do's & Don'ts Section:** Highlight the correct and incorrect ways to use the product.
4. **Relevant Product Section:** Highlight relevant products that can help follow the guidelines.
5. **CTA Button:** Prompt immediate action to shop or learn more.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Usage Guidelines:** Offer clear instructions on how to use your products effectively.
- **Common Mistakes to Avoid:** Highlight common errors and provide solutions.
- **Best Practices:** Share expert tips and best practices for getting the most out of your products.

## Variables

- {{topic}}: a specific topic
- {{product-url}}: insert product url
- {{tone}}: choose your tone, for example: informative and friendly
