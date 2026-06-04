# 1. Theme with CSS custom properties

- Status: Accepted

## Context

A design-system showcase needs to retheme the entire page instantly. Options:
per-component theme props, a CSS-in-JS theme provider, or CSS custom properties.

## Decision

Use CSS custom properties (variables) as the token layer. Tokens are defined per
theme in `globals.css`; Tailwind's config maps utilities (`bg-bg`, `text-accent`)
onto those variables. The active theme is a `data-theme` attribute on `<html>`.

## Consequences

- (+) Retheming is one attribute change — no React re-render storm, no prop drilling.
- (+) Matches how Material and Fluent do design tokens; familiar to reviewers.
- (+) Custom accent is a single `setProperty` call at runtime.
- (-) Tailwind opacity modifiers can't be applied to a `var()` color directly
  (handled with dedicated rgba tokens where needed).
