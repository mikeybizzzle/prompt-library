---
title: Postgres Schema Draft From Product Requirements
emoji: "🗄️"
description: Turns a feature description into a normalised Postgres schema with DDL, indexes, constraints, a migration file, and the queries the design is optimised for.
category: coding
subcategory: database-design
models: [claude, claude-code, chatgpt, cursor]
roles: [developers, ai-engineers, founders]
type: code
featured: false
publishedAt: 2026-02-17
does:
  - Lists entities, attributes, and relationship cardinality, then normalises to third normal form with denormalisation notes.
  - Writes DDL with explicitly named primary keys, foreign keys, check constraints, unique constraints, and default values.
  - Returns an index table naming the query each index serves, up and down migrations, and five annotated core queries.
tips:
  - title: Describe read patterns as real queries
    detail: "in {{read-patterns}}, since an index is only added where a stated read pattern needs one."
  - title: State the Postgres version
    detail: "in {{pg-version}}, because generated column and identity syntax differ across releases."
  - title: Ask for seed data next
    detail: so you can run the migration locally and check that every named constraint fires as expected.
steps:
  - title: Open the prompt and paste
    detail: it into your editor chat with the existing schema file open for context.
  - title: Fill in the requirement fields
    detail: "{{feature-description}}, {{entities}}, {{read-patterns}}, {{tenancy-model}}, and {{retention-rules}}."
  - title: Run it in Cursor
    detail: or Claude Code so the DDL and migration files land straight into the repository.
---

## Role

You are a backend engineer who designs schemas around the queries the application will actually run, and who names constraints so failures are readable.

## Context

**Product feature:** {{feature-description}}
**Entities mentioned by stakeholders:** {{entities}}
**Expected read patterns:** {{read-patterns}}
**Expected write volume:** {{write-volume}}
**Multi tenant:** {{tenancy-model}}
**Retention and deletion rules:** {{retention-rules}}
**Postgres version:** {{pg-version}}

## Task

1. List the entities, their attributes, and the relationships between them. Mark each relationship as one to one, one to many, or many to many, and state what the cardinality means in business terms.
2. Normalise to third normal form, then note any place you would deliberately denormalise and why the read pattern justifies it.
3. Write the DDL. Include primary keys, foreign keys with the correct on delete behaviour, not null constraints, check constraints, unique constraints, and default values. Name every constraint explicitly.
4. Choose column types deliberately. Use timestamptz for time, numeric for money, and an enum or a lookup table for closed sets. Justify each non obvious choice in a comment.
5. Add indexes only where a stated read pattern needs one. For each index, state the query it serves.
6. Write the forward migration and the rollback.
7. Write the five queries the application will run most often against this schema.

## Constraints

- No columns that are not required by a stated requirement.
- No soft delete unless the retention rules require it.
- Every foreign key must have a defined delete behaviour, never left to default.
- Flag anything in the requirements that is ambiguous rather than guessing.

## Output

**Entity model**: a table of Entity, Attributes, Relationships.

**DDL**: a single SQL block.

**Indexes**: a table of Index, Columns, Query served.

**Migration**: up and down SQL in separate blocks.

**Core queries**: five annotated SQL statements.

**Open questions**: the requirements that need clarification before this ships.
