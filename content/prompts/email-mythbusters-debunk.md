---
title: Mythbusters Email That Debunks Four Common Claims
emoji: "🧨"
description: Writes three mythbusting email variations that state common myths on a topic, correct them with factual information, and highlight the products that relate.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-12-01
does:
  - Produces three variations with a headline, an optional one liner, and a mythbusters section pairing each myth with the facts that debunk it.
  - Adds a relevant product section highlighting the products connected to the debunked myths.
  - Ends each variation with a clear call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Run it periodically
    detail: which is what the source suggests for addressing and correcting misunderstandings.
  - title: Pick myths about your own products
    detail: the first listed use, before reaching for wider industry myths.
  - title: Use it to build trust
    detail: since the format educates the audience while showing what makes the product different.
steps:
  - title: Collect the myths you hear most
    detail: from reviews, support tickets, or sales calls.
  - title: Fill in the variables
    detail: "Set {{topic}} and {{tone}} before you run the prompt."
  - title: Run it and check each correction
    detail: so the facts you publish hold up to a sceptical reader.
---

## Prompt

Write an engaging 'Mythbusters' email based on the following structure. The email should debunk common myths related to a specific topic {{topic}} and have a clear call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Grab attention with a catchy headline.
2. **(optional) One-liner:** Provide a brief introduction or summary for the campaign.
3. **Mythbusters Section:** Highlight common myths and provide factual information to debunk them.
4. **Relevant Product Section:** Highlight relevant products that relate to the debunked myths.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Misconceptions:** Address and debunk myths related to your products.
- **Industry Myths:** Clear up common misconceptions within your industry.
- **Educational Content:** Provide factual information to educate your audience.

## Variables

- {{topic}}: explain the topic
- {{tone}}: choose your tone, for example: informative and engaging
