---
title: Trending Products Email Explaining Why Each Is Popular
emoji: "📈"
description: Builds three trending email variations that feature currently popular products, describe their key benefits and why they are trending, and drive readers to shop.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2026-02-15
does:
  - Produces three variations with a headline introducing the trending theme.
  - Adds a trending section describing the products or styles with images and key benefits, plus why they are trending.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Send it every month or two
    detail: which is the cadence the source recommends for this format.
  - title: Say what is driving the trend
    detail: because the prompt asks for the reason, not just the product list.
  - title: Try a social media trend
    detail: which the source lists alongside customer favourites and seasonal styles.
steps:
  - title: Pull what is actually selling
    detail: or what is genuinely trending online right now.
  - title: Fill in the variables
    detail: "Set {{products-url}} and {{tone}} before you run the prompt."
  - title: Run it and check the stock
    detail: so the trending items are still buyable when the email lands.
---

## Prompt

Write an engaging 'Trending' email based on the following structure. The email should highlight popular or trending products {{products-url}}, describe their key benefits and why they’re trendng include a call-to-action button. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the trending theme with a catchy headline.
2. **Trending Section:** Describe the trending products or styles with images and key benefits.
3. **CTA Button:** Prompt immediate action to explore or shop the trending items.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Trending Products:** Highlight products that are currently popular among customers.
- **Seasonal Trends:** Showcase seasonal styles and must-have items.
- **Social Media Trends:** Feature products or styles trending on social media.

## Variables

- {{products-url}}: include url here
- {{tone}}: choose your tone, for example: trendy and enthusiastic
