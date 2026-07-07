# FRAME — Scroll-Reactive Landing Page

A cinematic, scroll-driven landing page for the fictional t-shirt brand **FRAME**.
The whole page reads off a single window-level scroll progress: a fixed background
stage crossfades between four color-graded "looks" (Studio → Heat → Bone → Midnight),
a sticky lookbook pans sideways as you scroll, and foreground sections re-theme
their text in sync with the active look.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first config in `src/index.css`)
- `motion/react` (Framer Motion v12) for all scroll-linked animation
- `lucide-react` icons

## Where to edit

- `src/scenes.ts` — look imagery, tints, scroll ranges (single source of truth)
- `src/index.css` — brand color, fonts, `.liquid-glass` + shiny-text utilities
- Each component in `src/components/` keeps its copy/prices/media in constants
  at the top of the file, ready to swap for real assets.

## Develop

```sh
npm install
npm run dev
```

`npm run build` type-checks and produces `dist/`; pushes to the configured
branches deploy to GitHub Pages via `.github/workflows`.
