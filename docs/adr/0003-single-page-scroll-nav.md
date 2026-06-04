# 3. Single-page, scroll-to-section navigation

- Status: Accepted

## Context

The brief calls for a single-page experience: nav links scroll to sections rather
than routing to separate pages.

## Decision

One page composes all sections, each with an `id`. Nav links are anchor links to
those ids with CSS `scroll-behavior: smooth`. An IntersectionObserver hook
(`useActiveSection`) highlights the nav item for the section currently in view.

## Consequences

- (+) Smooth single-page UX with an accurate active-section indicator.
- (+) No routing complexity; fully static.
- (-) The observer's rootMargin needs tuning so the active item matches intuition.
