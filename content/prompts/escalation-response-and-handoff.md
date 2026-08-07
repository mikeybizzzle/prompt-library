---
title: Escalation Response and Internal Handoff Summary
emoji: "🚨"
description: Produces a customer facing escalation reply plus an internal handoff brief with the timeline, impact, what was already tried, and the decision the owner must make.
category: customer-service
subcategory: escalation-handling
models: [claude, chatgpt, gemini]
roles: [business-owners, consultants, product-managers]
type: text
featured: false
publishedAt: 2026-02-06
does:
  - "Builds a dated timeline of customer experience and our action, marking the exact point the case turned into an escalation."
  - "Drafts a customer reply under 200 words plus the exact wording to use where the demand exceeds your approval authority."
  - "Delivers a six section handoff brief, five risk ratings, and a resolution recommendation with its cost and a fallback."
tips:
  - title: "Paste the whole thread verbatim"
    detail: "with timestamps, because the escalation trigger is usually a response gap rather than the original fault."
  - title: "State your approval limits precisely"
    detail: "in currency and in policy terms, or the reply will offer a remedy you cannot actually authorise."
  - title: "Ask for a second reply version"
    detail: "written for a customer who has already threatened to post about the incident publicly."
steps:
  - title: "Paste the prompt and the thread"
    detail: "into a fresh chat, keeping the customer messages and your team replies in date order."
  - title: "Fill the key context fields"
    detail: "with {{thread-history}}, {{incident-facts}}, {{authority-limits}}, {{customer-demand}}, and {{next-owner}}."
  - title: "Drop it into Gemini"
    detail: "then send the customer reply first and forward the handoff brief to the named next owner."
---

## Role

You are handling an escalated case. You stabilise the customer relationship and you hand the case to the next owner without losing a detail.

## Context

**Full thread history:** {{thread-history}}
**Customer value and tenure:** {{customer-value}}
**What went wrong:** {{incident-facts}}
**Impact on the customer's business:** {{customer-impact}}
**What has already been tried:** {{attempted-remedies}}
**What the customer is asking for:** {{customer-demand}}
**What we can approve without sign off:** {{authority-limits}}
**Who owns this next:** {{next-owner}}

## Task

1. Build the timeline: every event with a date, what the customer experienced, and what we did. Mark the point where the case became an escalation and what caused it. Often the trigger is a missed response, not the original fault.
2. Assess the real risk: churn, public complaint, refund exposure, contractual breach, or reputational spread. Rate each as high, medium, or low with the reason.
3. Write the customer reply. It must acknowledge the specific failure without hedging, state what we know and what we do not yet know, give a named owner and a next contact time, and offer only what is within the authority limits.
4. Where the customer's demand exceeds our authority, write the exact wording that neither promises nor refuses, and note what approval is needed and from whom.
5. Write the internal handoff brief for the next owner: situation in three sentences, timeline, what has been tried and the result, the customer's actual priority as opposed to their stated demand, the decision needed, and the deadline.
6. Recommend the resolution and the cost of it, with the alternative if it is declined.
7. Note the process failure that let this escalate, separate from the original fault.

## Constraints

- Never blame a named individual in the customer reply.
- Do not commit to a timeline that depends on an approval not yet given.
- No template language. Every sentence must reference this specific case.
- The customer reply must be under 200 words.

## Output

**Timeline**: a table of Date, Customer experience, Our action, Escalation trigger marked.

**Risk assessment**: five risk types with ratings and reasons.

**Customer reply**: under 200 words, ready to send.

**Authority gap language**: the exact wording plus the approval needed.

**Internal handoff brief**: the six sections named above.

**Recommendation**: resolution, cost, and the fallback.

**Process failure**: one paragraph and the fix.
