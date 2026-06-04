# 2. Own the theme logic instead of a library

- Status: Accepted

## Context

Libraries like `next-themes` handle theme switching. But this is a design-system
project — the theme mechanism is part of what's being demonstrated.

## Decision

Implement the ~30 lines of theme apply/persist/system-detection logic directly
(`lib/theme.ts` + the no-flash bootstrap script), rather than importing a library.

## Consequences

- (+) Demonstrates real understanding of token architecture and the SSR flash problem.
- (+) Zero extra dependency; full control over behavior.
- (-) We own the edge cases (system-preference listener, no-flash script) ourselves.
