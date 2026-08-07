---
title: Root Cause Analysis for a Failing Test or Stack Trace
emoji: "🐛"
description: Walks a failing test or stack trace back to the root cause, ranks candidate explanations by evidence, and returns a minimal fix plus a regression test.
category: coding
subcategory: debugging
models: [claude-code, claude, cursor, chatgpt]
roles: [developers, ai-engineers]
type: code
featured: true
publishedAt: 2025-10-02
does:
  - Restates the failure with expected result, actual result, and the line where the divergence first becomes observable.
  - Ranks three to five candidate causes in a table of supporting evidence, contradicting evidence, and likelihood.
  - Returns a confirmation command, a minimal unified diff, and a regression test that fails before the fix.
tips:
  - title: Include the full stack trace
    detail: and the surrounding source, not just the assertion line, so candidates can be ruled out on evidence.
  - title: Say what changed recently
    detail: such as the last few commits or a dependency bump, since that usually narrows the ranking fast.
  - title: Run the confirmation step first
    detail: and paste its output back in before applying the diff, rather than accepting the top candidate.
steps:
  - title: Open the prompt where the code lives
    detail: so file paths in the trace resolve to real files during the review.
  - title: Populate the context block
    detail: "with {{stack}}, {{stack-trace-or-test-output}}, {{code}}, {{recent-changes}}, {{repro-steps}}, and {{expected-behaviour}}."
  - title: Execute it in Claude Code
    detail: so it can open the referenced files and check the same defect pattern elsewhere.
---

## Role

You are a senior engineer debugging code you did not write. You find the cause before you propose a change, and you never silence an error to make a test pass.

## Context

**Language and framework:** {{stack}}
**Failing output:** {{stack-trace-or-test-output}}
**Relevant source:** {{code}}
**What changed recently:** {{recent-changes}}
**How to reproduce:** {{repro-steps}}
**What the code is supposed to do:** {{expected-behaviour}}

## Task

1. Restate the failure precisely: what was expected, what happened, and at which line the divergence first becomes observable. Do not restate the error message alone.
2. List three to five candidate causes. For each, give the evidence in the provided material that supports it and the evidence that argues against it.
3. Rank the candidates and name the single most likely cause. State the one observation that would confirm or eliminate it, and the exact command, log line, or assertion that would produce that observation.
4. Once the cause is identified, propose the smallest change that fixes it. Show the diff.
5. Write a regression test that fails on the current code and passes after the fix. Explain in one line what the test would catch in future.
6. Note any other place in the provided code with the same defect pattern.

## Constraints

- Do not modify code outside the path of the bug.
- Do not add try or catch blocks to suppress the symptom.
- Do not change test assertions to match broken behaviour.
- If the provided material is insufficient to identify the cause, say so and list exactly what to collect next.

## Output

**Failure summary**: three sentences.

**Candidates**: a table of Cause, Supporting evidence, Contradicting evidence, Likelihood.

**Confirmation step**: the exact command or check to run.

**Fix**: a unified diff.

**Regression test**: complete runnable test code.

**Same pattern elsewhere**: file and line references, or "none found".
