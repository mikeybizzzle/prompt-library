---
title: Social Proof Email Built From Reviews and Customer Photos
emoji: "⭐"
description: Turns reviews, testimonials, and user generated content into three email variations that show the ratings and comments, feature customer photos, and drive the click.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: true
publishedAt: 2026-01-18
does:
  - Produces three variations with a catchy headline and a reviews or testimonials section showing customer ratings and comments.
  - Adds a user generated content section highlighting customer photos or videos.
  - Ends each variation with a call to action button to explore products or read more reviews, plus a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Aim it at hesitant buyers
    detail: which is who the source says social proof is meant to convert.
  - title: Include the ratings
    detail: because the prompt asks for reviews with both ratings and comments.
  - title: Celebrate a milestone
    detail: which the source lists as a use case, such as passing a review or sales count.
steps:
  - title: Collect the reviews and photos
    detail: you have permission to use.
  - title: Fill in the variables
    detail: "Set {{reviews-url}} and {{tone}} before you run the prompt."
  - title: Run it and restore the exact quotes
    detail: so nothing in the finished email is a paraphrase of a real customer.
---

## Prompt

Write an engaging 'Social Proof' email based on the following structure. The email should feature reviews, testimonials, or user-generated content to build trust and encourage purchases {{reviews-url}}. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Capture attention with a catchy headline.
2. **Reviews/Testimonials Section:** Showcase customer reviews or testimonials with ratings and comments.
3. **User-Generated Content Section:** Highlight any user-generated content, such as photos or videos.
4. **CTA Button:** Prompt immediate action to explore products or read more reviews.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Product Reviews:** Showcase reviews and ratings from satisfied customers.
- **Testimonials:** Share detailed testimonials or stories from happy customers.
- **User-Generated Content:** Highlight content created by users, such as photos or videos of them using your product.
- **Milestones:** Celebrate milestones like a certain number of reviews or sales.

## Variables

- {{reviews-url}}: insert a url with reviews or product
- {{tone}}: choose your tone, for example: friendly and trustworthy
