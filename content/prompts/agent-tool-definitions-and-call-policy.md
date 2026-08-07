---
title: Tool Definitions and Call Policy for an Agent
emoji: "🧰"
description: Designs an agent tool set with JSON schemas, descriptions written for the model, argument validation, error contracts, and rules for when each tool may be called.
category: ai-agents
subcategory: tool-use
models: [claude, chatgpt, claude-code, gemini]
roles: [ai-engineers, developers]
type: text
featured: false
publishedAt: 2025-12-07
does:
  - "Returns a tool inventory table of tool, purpose, read or write, approval required, and cost, with overlaps resolved."
  - "Writes the model facing description and full JSON schema for each tool, including enums and a per parameter example."
  - "Defines an error contract, a call policy covering parallelism and approval, and three test cases per tool."
tips:
  - title: "Name the destructive actions explicitly"
    detail: "so they land in the approval required column instead of staying callable in a single unattended turn."
  - title: "List the failure modes you have seen"
    detail: "in {{observed-failures}}, since the error contract is built from the ways your calls already break."
  - title: "Ask for the schemas as one file"
    detail: "in the exact tool format your SDK expects, so you can paste them straight into the agent definition."
steps:
  - title: "Copy the prompt into a chat"
    detail: "alongside the API docs for every system the agent will need to touch."
  - title: "Replace the six placeholders"
    detail: "including {{agent-purpose}}, {{required-actions}}, {{available-apis}}, and {{observed-failures}}."
  - title: "Open it in Claude Code"
    detail: "so it can read your existing handlers and match parameter names to what the code already uses."
---

## Role

You are an agent engineer. You know most tool calling failures come from vague tool descriptions and overlapping tool responsibilities, not from the model.

## Context

**What the agent does:** {{agent-purpose}}
**Actions it needs to take:** {{required-actions}}
**Systems and APIs available:** {{available-apis}}
**Actions requiring human approval:** {{approval-required}}
**Rate limits and cost per call:** {{limits-and-costs}}
**Failure modes seen so far:** {{observed-failures}}

## Task

1. Define the tool set. One tool per distinct capability. Merge tools that would always be called together and split tools that do two unrelated things. State the reason for every merge and split.
2. Check for overlap. If two tools could plausibly satisfy the same request, either merge them or write the disambiguating sentence that goes in both descriptions.
3. For each tool write the description the model sees. It must state what the tool does, when to use it, when not to use it, and what it returns. Write it for a reader who cannot see the implementation.
4. Write the JSON schema for each tool: parameter names, types, whether required, enums for closed sets, and a description per parameter with an example value.
5. Define the error contract. For each failure mode, the error shape returned and the instruction on what the agent should do next: retry, try a different tool, ask the user, or stop.
6. Write the call policy: maximum calls per turn, which tools may be called in parallel, which require approval before execution, and what the agent does while waiting for approval.
7. Define read and write separation. Write tools must be idempotent or must carry an idempotency key. State which.
8. Write three test cases per tool: a correct call, a call with a missing required parameter, and an ambiguous request that could route to the wrong tool.

## Constraints

- No parameter named data, input, or options.
- Every enum must list its full set of values.
- No tool may have more than six parameters. Split it if it does.
- Destructive actions always require approval, regardless of cost.

## Output

**Tool inventory**: a table of Tool, Purpose, Read or write, Approval required, Cost.

**Overlap resolution**: merges, splits, and disambiguating sentences.

**Definitions**: for each tool: the model facing description and the JSON schema.

**Error contract**: a table of Failure, Error shape, Agent instruction.

**Call policy**: limits, parallelism, approval flow.

**Test cases**: three per tool with the expected behaviour.
