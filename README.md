# prism

A single-page, interactive **design-system & theming showcase** — a living style guide where a complete design system reacts in real time. Flip the theme and every token, component, and color smoothly transitions at once.

## Highlights

- **Live theming engine** — light, dark, and accent themes driven entirely by CSS variables, so a single toggle re-tokenizes the whole page with a smooth transition rather than a hard repaint.
- **Animated palette generator** — generate and preview cohesive color palettes on the fly, with every swatch feeding back into the live design tokens.
- **Typographic scale** — a full type ramp rendered from the system's tokens, showing hierarchy, weight, and rhythm at a glance.
- **Interactive component gallery** — buttons, cards, inputs, and badges that all respond instantly to the active theme, demonstrating the system end to end rather than as static specimens.
- **Single-page, scroll-to-section** navigation with an active-link scroll spy, magnetic interactions, and full responsive breakpoints.
- **Accessibility first** — honors `prefers-reduced-motion` and ships semantic, keyboard-navigable controls.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · CSS custom properties

## Project structure

| Path | Purpose |
| --- | --- |
| `web/app/` | App Router entry — layout, single-page composition, global styles |
| `web/components/sections/` | The scroll-to-section content blocks |
| `web/components/system/` | Palette generator, type scale, and component gallery |
| `web/lib/` | Theme, scroll spy, and reduced-motion hooks |

## Local development

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | TypeScript, no emit |

## Deployment

Deployed on **Vercel** with the project **Root Directory set to `web`**. No environment variables required — prism is a fully client-rendered, pure-frontend experience.

## License

MIT — see [LICENSE](./LICENSE).
