# AGENTS.md

## What this is

A static, client-rendered marketing/portfolio site (React + Vite, no server framework) for MA Prime Quality Editors. There is no backend, database, or API — it's a single page (`index.html` → `src/main.jsx` → `src/App.jsx`) composed of stacked full-width `<section>` components.

## Architecture

- `App.jsx` holds one piece of state (`entered`) that toggles between the full-screen `Intro` sequence and the main site (`Navbar` + section stack + `Footer`). Body scroll is locked until the visitor clicks "Enter Experience".
- Every visual section is its own component in `src/components/`, each with a co-located `.css` file imported directly in the component (no global stylesheet per section — only `src/styles/index.css` holds shared tokens/utilities like `.container`, `.gold-line`, `.eyebrow`, cursor/grain/vignette overlays).
- All editable copy and data lives in `src/data/content.js` (`SITE`, `NAV_LINKS`, `CATEGORIES`, `PROJECTS`, `SERVICES`, `PROCESS_STEPS`, `PRINCIPLES`). Treat this file as the CMS — do not hardcode copy inside components.
- `src/utils/placeholder.js` provides deterministic gradient placeholders per portfolio category, used whenever a `PROJECTS` entry has `thumbnail: null` / `video: null`. This keeps the portfolio grid fully functional without any stock imagery.

## Conventions

- Class names follow a light BEM-ish pattern: `.block__element--modifier` (e.g. `.portfolio-item__frame`, `.services__item--active`).
- Interactive elements that should trigger the custom cursor's contextual label carry `data-cursor="VIEW"` / `"OPEN"` / `"WATCH"` / `"EXPLORE"` / etc. `CustomCursor.jsx` reads this attribute on hover via `closest('[data-cursor]')`.
- Animation timing/easing is centralized as CSS custom properties (`--ease-cinematic`, `--ease-soft`) and reused in both CSS transitions and GSAP `ease` strings — keep new motion consistent with these rather than introducing bouncy/elastic eases (the brief explicitly calls for slow, controlled, "expensive" motion).
- GSAP work is scoped with `gsap.context()` inside `useEffect` and reverted on cleanup to avoid leaking `ScrollTrigger` instances on re-render.
- The custom cursor and most parallax/mouse-follow effects are gated behind `matchMedia('(hover: none)')` / `(pointer: coarse)` checks, since the brief requires a distinct (not just shrunk) mobile experience with native `cursor: auto`.

## Non-obvious decisions

- **No stock media**: the initial build shipped with only the real MA Prime Quality logo available (`public/media/logo.jpeg`). Portfolio thumbnails/videos are intentionally `null` and rendered as CSS gradients rather than placeholder stock photography, per explicit instruction to never fabricate or use stock media. See the README for how to wire in real files.
- **Video preview behavior**: `PortfolioItem.jsx` only mounts a `<video>` when `project.video` is set, uses `preload="none"`, and only plays on hover (desktop) — one active preview at a time is enforced by `SelectedWork.jsx` holding a single `activePreviewId` in state rather than each item managing its own play state independently.
- **Filtering** is pure client-side `Array.filter` over the `PROJECTS` array — no routing/query params involved, so it never triggers a page reload.
- Smooth scrolling relies on native `scroll-behavior: smooth` plus GSAP `ScrollTrigger` for reveal choreography, rather than a third-party smooth-scroll library, to keep the dependency surface minimal.
