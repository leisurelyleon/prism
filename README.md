# prism

An interactive **design-system showcase** — a single-page living style guide with
a real-time theme engine, an animated color-palette generator, a typography
scale, and a live component gallery. Every color and component on the page is
driven by one set of CSS-custom-property design tokens; switch the theme and the
whole system transitions at once.

## Highlights

- **Real-time theming.** Light / dark / system + a custom accent, applied by
  flipping one attribute on `<html>` so every token cascades instantly. (ADR 0001)
- **Owned theme logic.** No theme library — the apply/persist/no-flash logic is
  written directly, demonstrating token architecture. (ADR 0002)
- **Single-page, scroll-to-section nav** with an IntersectionObserver-driven
  active indicator. (ADR 0003)
- **Palette generator** that produces harmonious tonal ramps from a hue, and can
  recolor the entire page live.

## Develop

Prerequisites: Node 20+. (A `.devcontainer` ships it.)

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

## Deploy

Static frontend on Vercel — Root Directory = `web`. No backend, no env vars.

## Stack

React + TypeScript + Tailwind + Next.js. Deployed on Vercel.
