---
title: Data Cleaning Plan for a Messy CSV Export
emoji: "🧹"
description: Profiles a messy export column by column, lists every quality issue with its row count, and returns an ordered cleaning plan with the rules and checks for each step.
category: data-analysis
subcategory: data-cleaning
models: [claude, chatgpt, gemini]
roles: [analysts, virtual-assistants, developers]
type: text
featured: false
publishedAt: 2026-02-19
does:
  - "Profiles every column with inferred type, fill rate, distinct count, top values, and a flag where the type conflicts."
  - "Logs each quality issue by category with the rows affected, the chosen treatment, and the justification for any exclusion."
  - "Returns an ordered cleaning sequence, a raw to clean row reconciliation, and three spot checks to run afterwards."
tips:
  - title: "Paste real rows, not invented ones"
    detail: "so the profile reflects the actual encoding artefacts and date formats sitting in your export."
  - title: "Name the tool you will use"
    detail: "in {{tool}}, since the transformation rules get written as Excel formulas, SQL, or pandas accordingly."
  - title: "Ask for the code afterwards"
    detail: "by following up with a request to turn the cleaning sequence into a runnable script."
steps:
  - title: "Copy the prompt into a chat"
    detail: "along with a header row and roughly twenty representative rows exported from the file."
  - title: "Fill the context block"
    detail: "with {{data-sample}}, {{row-count}}, {{intended-analysis}}, {{known-issues}}, {{protected-fields}}, and {{tool}}."
  - title: "Run it in Claude"
    detail: "which handles the long paste and returns the profile, issue log, and sequence without truncating."
---

## Role

You are a data analyst preparing a file for analysis. You never silently drop rows and you record every transformation so a result can be traced back to the raw file.

## Context

**Sample of the file, including headers and 20 rows:** {{data-sample}}
**Total row count:** {{row-count}}
**What this data is used for:** {{intended-analysis}}
**Known upstream problems:** {{known-issues}}
**Fields that must not be altered:** {{protected-fields}}
**Tool being used:** {{tool}}

## Task

1. Profile every column: inferred type, fill rate, distinct count, and the three most frequent values. Flag columns where the inferred type conflicts with the values present.
2. Identify quality issues by category, with an estimated row count for each: missing values, duplicates, inconsistent formatting, mixed units or currencies, out of range values, invalid categories, encoding artefacts, whitespace and casing inconsistency, dates in more than one format, and numbers stored as text.
3. For each issue decide the treatment: fix with a rule, flag and keep, or exclude. Justify exclusion in every case and state how many rows it removes.
4. Define the deduplication key explicitly and state what a duplicate means for this data. Note whether duplicates should be merged rather than deleted.
5. Order the cleaning steps so no step undoes an earlier one. Type coercion before range checks. Trimming before deduplication. State the reason for the order.
6. For each step write the transformation rule in language precise enough to implement, and the validation check that proves it worked.
7. Specify the final validation: row count reconciliation from raw to clean, the columns that must have full fill after cleaning, and three spot checks on known values.

## Constraints

- Never impute a value without recording that it was imputed in a separate column.
- Do not modify protected fields.
- Every row removed must be counted and the reason recorded.
- Preserve the raw file unchanged. All output goes to a new file.

## Output

**Column profile** — a table of Column, Inferred type, Fill rate, Distinct, Top values, Type conflict.

**Issue log** — a table of Issue, Category, Rows affected, Treatment, Justification.

**Cleaning sequence** — numbered steps with the rule and the validation check for each.

**Reconciliation plan** — raw count, expected removals, expected clean count.

**Spot checks** — three specific values to verify after cleaning.
