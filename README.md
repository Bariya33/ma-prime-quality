# MA Prime Quality | Editors

A cinematic, single-page website for MA Prime Quality, a professional video editing and post-production studio. The site opens with a full-screen logo reveal, transitions into an immersive "editing room" hero, and moves through a filterable cinematic portfolio, services, process timeline, brand story and contact sections — all built around a black + metallic gold visual identity.

## Key technologies

- **React 18** + **Vite** for the app shell and dev tooling
- **GSAP** (with `ScrollTrigger`) for the intro sequence, scroll-triggered reveals, parallax and the process timeline animation
- Plain modern CSS (custom properties, `clip-path`, grid) — no CSS framework
- A custom cursor, fullscreen menu overlay and cinematic project viewer, all built as plain React components

## Project structure

- `src/data/content.js` — single source of truth for site copy, navigation links, services, process steps, principles, and the **portfolio data configuration** (title, category, thumbnail, video, description per project)
- `src/utils/placeholder.js` — generates the gradient placeholder used for any portfolio item that doesn't yet have a real `thumbnail`/`video`
- `src/components/` — one component + co-located CSS file per section (`Hero`, `SelectedWork`, `Services`, `Process`, `BehindTheEdit`, `WhyPrimeQuality`, `Social`, `FinalCTA`, `Footer`, plus `Intro`, `Navbar`, `CustomCursor`, `PortfolioItem`, `ProjectViewer`)
- `public/media/` — static media, including the real MA Prime Quality logo (`logo.jpeg`)

## Replacing placeholder content

The portfolio currently ships with placeholder gradient thumbnails (no stock photography) because no real project media was available at build time. To swap in real media:

1. Add image/video files under `public/media/<category>/...`
2. In `src/data/content.js`, set the matching project's `thumbnail` and/or `video` field to that path
3. That's it — the grid, hover-preview, filters and cinematic viewer all pick up real media automatically

Brand contact details (Instagram, WhatsApp, email) live in the `SITE` object at the top of `src/data/content.js`.

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static production build in `dist/`, which is what Netlify deploys.
