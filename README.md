# Memory

A mobile-first landing page for a personal second brain, built with Next.js, React, and TypeScript.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. To use port 3131, run `npm run dev -- --port 3131`.

The development server accepts local-network connections. On a phone connected to the same Wi-Fi, open `http://<your-Mac-local-IP>:3131/home`. Find the Mac's Wi-Fi IP with `ipconfig getifaddr en0`. Local interface addresses are allowed automatically for Next.js development assets and live reload.

```sh
npm run typecheck
npm run build
```

The build produces a static site in `out/`.

## Deploy to Vercel

Import `shakirdmr/friday` into Vercel as a new project:

- Production branch: `main`
- Framework preset: Next.js
- Root directory: `./`
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave the Next.js default
- Environment variables: none required

After deployment, `/` opens the landing page and `/home` opens the app preview directly. The preview has no backend; captured memories reset on refresh.

## First-pass scope

- Pure-white, compact landing page with original SVG artwork and raised buttons.
- Login/signup UI previews lead to `/home`; no account is created and email is never submitted.
- An immersive teal after-login home with generated room artwork, a matching Pip character, chapter energy, large memory cards, and illustrated mobile navigation. Desktop navigation remains in the sidebar.
- Memories, sample discoveries, and an illustrative persona. The example chapter starts with 10 sample energy; each daily prompt adds 10.
- Local-only capture, search, daily progress, and companion introduction interactions. Added memories stay in React state and reset on refresh.
- A centered mobile + button opens a dark quick-actions screen inspired by the supplied reference. Reflections and the capture shortcut open the local capture form; Goals returns to today's moments. Other categories show activity previews, with comforting-thought and kindness prompts linked to capture. The menu supports Escape, keyboard focus, and small-screen scrolling.
- Illustrative content is marked as sample data. There is no backend, real authentication, analytics, or connected AI.

Memory is a working name. Copy, colors, and the companion are an initial design direction.

## Reference screens

Open Memories → **Explore your world** for five connected screen previews: focus areas (`/focus`), activities (`/activities`), wardrobe (`/wardrobe`), the feature announcement (`/feature`), and micropet hatching (`/hatch`). The screens include return navigation to Memories. Activities include a working local timer and reflection form; the wardrobe supports filters, favorites, outfit and color changes. The announcement supports swiping, and the hatching moment can be replayed.

These screens use local state only. Audio, purchases, accounts, and long-term storage are not connected. Artwork sources and exact generation prompts are in [design/reference-screens.md](design/reference-screens.md).

## Artwork

The generated room and transparent Pip character are stored in `public/art/`. The app uses compact WebP encodings. Desktop selects a separate landscape room that extends sideways while preserving the original UI dimensions; mobile keeps the square artwork. Exact prompts and generation provenance are documented in [design/room-art.md](design/room-art.md) and [design/desktop-room-art.md](design/desktop-room-art.md).
