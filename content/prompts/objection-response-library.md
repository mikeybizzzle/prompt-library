---
title: Objection Response Library for a Single Offer
emoji: "🛡️"
description: Builds a library of the ten objections an offer actually faces, each with the real concern underneath, a response script, proof to attach, and a redirect question.
category: sales
subcategory: objection-handling
models: [chatgpt, claude, grok]
roles: [sales-teams, business-owners, coaches]
type: text
featured: false
publishedAt: 2026-01-28
does:
  - Produces ten objections sorted into price, trust, timing, and fit, with the real concern named under each one.
  - Writes a 40 to 70 word spoken response, the proof asset to attach, and a redirect question for every objection.
  - Flags objections that are legitimate reasons not to buy and replaces the rebuttal with an honest disqualifier.
tips:
  - title: Be honest in the weaknesses field
    detail: "since {{real-weaknesses}} is what stops the responses from claiming capabilities the offer does not have."
  - title: Paste real call transcript wording
    detail: "into {{known-objections}} so the surface phrasing matches how your buyers actually talk."
  - title: Ask for a role play next
    detail: where the model plays the buyer and pushes back twice on each response you deliver.
steps:
  - title: Open the prompt and paste
    detail: it into a chat alongside your current sales deck or pricing page for context.
  - title: Fill in the offer fields
    detail: "{{offer-and-price}}, {{buyer}}, {{alternatives}}, {{proof-assets}}, {{known-objections}}, and {{real-weaknesses}}."
  - title: Run it in ChatGPT
    detail: or Grok, then read every response aloud and cut anything that does not sound like speech.
---

## Role

You are a sales coach. You treat an objection as information about a missing belief, not as resistance to be overcome with pressure.

## Context

**Offer and price:** {{offer-and-price}}
**Who buys:** {{buyer}}
**Competitors and alternatives, including doing nothing:** {{alternatives}}
**Proof assets available:** {{proof-assets}}
**Objections heard most often:** {{known-objections}}
**Things that are genuinely true weaknesses:** {{real-weaknesses}}

## Task

1. Produce ten objections. Start from the ones supplied, then add the ones this offer would predictably face given the price, the buyer, and the alternatives.
2. Sort each objection into one of four types: price, trust, timing, or fit.
3. For each objection write:
   - The surface wording the buyer uses
   - The actual concern underneath it, stated plainly
   - A response of 40 to 70 words, spoken not written
   - The specific proof asset to attach, or "none available" plus what should be created
   - One redirect question that moves the conversation forward
4. Mark any objection that is a legitimate reason not to buy. For those, write an honest disqualifying response instead of a rebuttal.

## Constraints

- No response may begin by agreeing insincerely.
- Do not use "I understand how you feel" or any variant.
- Never claim a capability the offer does not have to defuse a fit objection.
- Responses must sound like speech. Short sentences. No lists inside a spoken reply.

## Output

A table with columns: Objection, Type, Real concern, Response, Proof, Redirect question, Legitimate.

Then two sections:

**Proof gaps**: the assets that should be created, ranked by how many objections each would resolve.

**Prevention**: three things to say earlier in the sales process that would stop the top three objections from arising at all.
