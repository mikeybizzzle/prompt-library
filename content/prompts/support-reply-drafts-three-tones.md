---
title: Support Reply Drafts in Three Tones for One Ticket
emoji: "💬"
description: Drafts three versions of a support reply at different levels of formality, each resolving the actual issue, plus an internal note and the follow up to schedule.
category: customer-service
subcategory: support-replies
models: [chatgpt, claude, gemini]
roles: [virtual-assistants, business-owners, agencies]
type: text
featured: false
publishedAt: 2025-10-11
does:
  - Separates the stated request from the underlying need, then fixes the decision on what you will and will not do.
  - Drafts warm, neutral, and formal replies under 150 words each, all carrying the same resolution and timing.
  - Adds an internal note under 60 words on cause and recurrence, plus the follow up to schedule or why none is needed.
tips:
  - title: Paste the ticket verbatim
    detail: so the acknowledgement uses the wording the customer chose rather than your paraphrase.
  - title: Spell out what you cannot offer
    detail: so no draft promises a timeline your remedies and constraints will not actually support.
  - title: Ask for a fourth draft
    detail: written for a customer who has already escalated once, if the thread is heading there.
steps:
  - title: Open a chat and paste the prompt
    detail: alongside the ticket text and the internal facts about what happened on your side.
  - title: Fill the seven context slots
    detail: "led by {{ticket-text}}, {{internal-facts}}, {{available-remedies}}, {{constraints}}, and {{sla}}."
  - title: Run it in ChatGPT or Claude
    detail: then send the tone that fits the customer, keeping the internal note out of the reply.
---

## Role

You are a support lead. You answer the question that was asked, you say what happens next, and you never make the customer ask twice.

## Context

**Customer message:** {{ticket-text}}
**Customer history and plan:** {{customer-context}}
**What actually happened on our side:** {{internal-facts}}
**What we can offer:** {{available-remedies}}
**What we cannot do:** {{constraints}}
**Brand voice:** {{voice-notes}}
**Response time commitment:** {{sla}}

## Task

1. Identify what the customer is actually asking for. Separate the stated request from the underlying need. Note if these differ.
2. Determine the answer: what we will do, what we will not do, and by when. Decide this before writing any version.
3. Write three drafts of the reply:
   - **Warm** — friendly, first person, suitable for a customer who is frustrated but reasonable
   - **Neutral** — efficient and factual, suitable for a customer who wants the answer and nothing else
   - **Formal** — precise and documented, suitable when the exchange may be escalated or reviewed
4. Every version must contain: acknowledgement of the specific issue in the customer's own terms, what happened and why if we know, the resolution and its timing, and what the customer needs to do if anything.
5. Write the internal note: what caused this, whether it will recur, and which team should know.
6. State the follow up: whether one is needed, when, and what it should confirm.

## Constraints

- Never apologise for how the customer feels. Apologise for what happened, or do not apologise.
- No jargon and no internal system names the customer has never seen.
- Do not promise a timeline the constraints do not support.
- Each version under 150 words.
- If we made a mistake, say so plainly in the first two sentences.

## Output

**Issue read** — stated request, underlying need, and whether they differ.

**Decision** — what we will do, will not do, and by when.

**Three drafts** — warm, neutral, formal, each labelled and ready to send.

**Internal note** — under 60 words.

**Follow up** — timing and what to confirm, or "none needed" with the reason.
