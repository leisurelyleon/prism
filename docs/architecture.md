# Architecture

`prism` is a single-page, interactive design-system showcase. Every color,
type ramp, and component on the page is driven by one set of design tokens
expressed as CSS custom properties. Switching the theme swaps those token
values, and the whole system transitions at once.

## How theming works

The source of truth is a set of CSS custom properties defined in `globals.css`,
once for the light theme (`:root`) and once for dark (`[data-theme="dark"]`).
Components never hardcode colors — they read tokens (`var(--color-accent)`, etc.)
via Tailwind's theme extension. Changing the active theme is a single attribute
flip on `<html>`, which cascades new token values everywhere instantly.

## No-flash bootstrap

A tiny inline script in `layout.tsx` runs before React hydrates, reads the saved
theme + accent from localStorage, and sets `data-theme` immediately — so the page
never flashes the wrong theme on load.

## Layout

| Path                       | Role                                            |
|----------------------------|-------------------------------------------------|
| `app/globals.css`          | The design tokens (the single source of truth)  |
| `lib/theme.ts`             | Apply/persist theme + accent logic              |
| `lib/palette.ts`           | Color math for the palette generator            |
| `lib/useActiveSection.ts`  | IntersectionObserver hook for active-nav        |
| `components/Nav.tsx`        | Sticky scroll-to-section nav + active indicator |
| `components/ThemeToggle.tsx`| Light / dark / system switcher                 |
| `components/sections/*`     | The page sections (hero, palette, type, etc.)  |
| `components/ui/*`           | The showcased themeable primitives             |

## No backend

Everything runs client-side; the deploy is a static Next.js frontend on Vercel.
