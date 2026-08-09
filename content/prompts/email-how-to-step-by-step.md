---
title: How To Email With Practical Steps and Product Picks
emoji: "🧭"
description: Produces three how to email variations that offer practical tips or steps on a topic, highlight the relevant products used along the way, and close with a button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-11-03
does:
  - Produces three variations with a headline, an optional one liner, and a tips section offering practical tips or steps.
  - Adds an optional product highlight section covering the products used to deliver those tips.
  - Ends each variation with a call to action button, an optional closing, and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it about once a month
    detail: which is the cadence the source recommends for offering value to subscribers.
  - title: Promote the product subtly
    detail: because the template educates first and sells second.
  - title: Reach for a step by step guide
    detail: when the goal is a specific outcome rather than a loose set of tips.
steps:
  - title: Write the steps out yourself
    detail: so the model has a real method to work from rather than inventing one.
  - title: Fill in the variables
    detail: "Set {{product-or-collection-url}} and {{tone}} before you run the prompt."
  - title: Run it and test the instructions
    detail: by following them once before the email goes out.
---

## Prompt

Write an engaging 'How-To?' email based on the following structure. The email should provide practical tips related to a specific topic, highlight relevant products from this collection {{product-or-collection-url}}, and include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Set the stage with a catchy headline.
2. **(optional) One-liner:** Provide an introduction or summary for the campaign.
3. **Tips Section:** Offer practical tips or steps for specific products/product.
4. **(optional) Relevant Product Highlight:** Highlight relevant product/products that are being used to suggest tips.
5. **CTA Button:** Prompt immediate action.
6. **(optional) Closing Section:** Close the campaign with a persuasive ending.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Best Practices:** Share expert advice and best practices related to your products or industry.
- **Step-by-Step Guides:** Offer detailed instructions on how to use a product or achieve a specific outcome.
- **Tips and Tricks:** Provide useful tips and tricks that can help your audience make the most out of your products or services.

## Variables

- {{product-or-collection-url}}: include a URL of a product or collection you want to focus on
- {{tone}}: choose your tone, for example: informative and friendly
