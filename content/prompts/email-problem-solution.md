---
title: Problem and Solution Email That Names the Pain First
emoji: "🔧"
description: Produces three email variations that identify the problems your audience faces, present your products as the solutions, and close with a shop or learn more button.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2025-12-17
does:
  - Produces three variations with a problem solving headline and a section that clearly identifies the problems your audience faces.
  - Adds a solution presentation section positioning your products as the answer to those problems.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Start from a real complaint
    detail: because the format only works when the problem is one your audience recognises.
  - title: Use it to educate
    detail: which the source names as the reason to run this campaign, alongside engagement.
  - title: Show the practical benefit
    detail: since demonstrating how the product solves the issue is what moves the reader to buy.
steps:
  - title: Write down the problems
    detail: in the words your customers actually use.
  - title: Fill in the variables
    detail: "Set {{audience-problems}}, {{product-urls}}, and {{tone}} before you run the prompt."
  - title: Run it and check the fit
    detail: so each product genuinely solves the problem it is paired with.
---

## Prompt

Write an engaging 'Problem-Solution' email based on the following structure. The email should identify {{audience-problems}} and present your {{product-urls}} as effective solutions. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a problem-solving headline.
2. **Problem Identification Section:** Clearly identify the common problems your audience faces.
3. **Solution Presentation Section:** Present your products as the solutions to these problems.
4. **CTA Button:** Prompt immediate action to shop or learn more.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Common Issues:** Address widespread issues your customers face and present your products as solutions.
- **Product Benefits:** Highlight the specific benefits of your products in solving particular problems.
- **Customer Education:** Educate your audience on how to effectively use your products to overcome challenges.

## Variables

- {{audience-problems}}: common problems with your audience
- {{product-urls}}: product urls
- {{tone}}: choose your tone, for example: informative and empathetic
