---
title: FAQ Email With Clear Answers to Common Questions
emoji: "❓"
description: Writes three FAQ email variations that list common questions about your products, give clear and concise answers, and close with a button to explore the FAQ further.
category: marketing
subcategory: email-campaigns
models: [chatgpt, claude, gemini]
roles: [ecommerce-sellers, marketers, copywriters]
type: text
featured: false
publishedAt: 2025-10-06
does:
  - Produces three variations with a clear headline introducing the FAQ and a section listing the common questions.
  - Writes a short, clear answer under each question, drawn from the FAQ page you supply.
  - Ends each variation with a call to action button and a subject line and pre-header pair capped at 40 characters.
tips:
  - title: Answer what actually gets asked
    detail: since the template exists to reduce customer uncertainty, not to fill space.
  - title: Keep the answers concise
    detail: which is what the prompt asks for, with the full detail left on the FAQ page.
  - title: Use it to build confidence
    detail: because the format is aimed at improving understanding of the product before purchase.
steps:
  - title: Pull the top questions
    detail: from your support inbox or your existing FAQ page.
  - title: Fill in the variables
    detail: "Set {{faq-url}} and {{tone}} before you run the prompt."
  - title: Run it and check the answers
    detail: against your live policy so the email never contradicts the help page.
---

## Prompt

Write an informative 'FAQ' email based on the following structure. The email should address common questions about your products, provide clear and concise answers from this url {{faq-url}}, and include a call-to-action button to explore the FAQ further. Use a {{tone}} tone. Here's the structure to follow, make sure to create 3 different variations:

1. **Headline:** Introduce the FAQ with a clear headline.
2. **FAQ Section:** List common questions and provide clear answers.
3. **CTA Button:** Prompt immediate action to explore products or learn more FAQ.

Create subject line & pre-header pairs for each of the variations, make sure to differ them and not go beyond 40 characters (40 for subject and 40 for pre-header). Each subject line and pre-header variation have to be very different - one short, another longer, and a third out of the box.

## Use cases

- **Highlighting FAQ:** Provide information from the FAQ section

## Variables

- {{faq-url}}: include a url to your faq
- {{tone}}: choose your tone, for example: friendly and helpful
