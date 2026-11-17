# Co-Creative Healing — frontend prototype

Frontend-only interactive site prototype for **Stephanie Shrum**, a bodyworker and
healing facilitator in Upper Ojai, California.

Built with React 19, TypeScript, Vite, and React Router. There is no backend:
forms, newsletter signups, booking requests, the FAQ accordion, and the mobile
navigation all work with client-side state and show confirmation states.

## Run

```bash
bun install
bun run dev
```

```bash
bun run build     # type-check + production build
bun run lint      # oxlint
bun run preview   # preview the production build
```

The app uses `BrowserRouter`, so static hosting needs a single-page-app fallback
that serves `index.html` for unknown paths (Netlify `_redirects`, Vercel
rewrites, or an equivalent server rule). Vite's dev and preview servers handle
this automatically.

## Routes

| Route         | Page                            |
| ------------- | ------------------------------- |
| `/`           | Home                            |
| `/sessions`   | Sessions                        |
| `/transitions`| Home & Life Transitions         |
| `/collective` | Ojai Hundred Healer Collective  |
| `/mentorship` | Mentorship                      |
| `/about`      | About                           |
| `/contact`    | Contact / Request a Session     |
| `*`           | Not found                       |

## Brand system

- **Palette:** Cream `#F7F2EA`, Sage `#8FA176`, Terracotta `#A35F45`, Earth Ink
  `#4A3F36`, Honey Wood `#D9B77E`, Jute `#C9AE85`, Misty Sea `#A9BCC4` (thin
  accents only), Soft Brass `#B8954A`.
- **Type:** Brygada 1918 for headings and italic taglines; Jost for body copy,
  labels, and buttons.
- **Mark:** the four-leaf clover logo (`public/logo.png`, supplied asset),
  rendered through `CloverMark` in `src/components/Brand.tsx` and reused for the
  favicon, header, footer, and watermarks.
- **Photography:** licensed Pexels images live in `public/images/` and are mapped
  through the `Photo` component and the `photos` object in `src/data/site.ts`.
  Alt text and captions describe the actual scene, never claiming the people
  pictured are Stephanie or her clients. Replace them with Stephanie's own
  photography when it is ready.

## Privacy guardrails

- No street address, map embed, or identifying exterior photo.
- The approved line is used site-wide: *"Upper Ojai, California. Exact location
  shared once your session is confirmed."*
- Location details are only discussed after a booking is confirmed.

## Content notes

Items marked **Confirm** in `docs/BRAND.md` and `docs/STRUCTURE.md` remain open:
California licensing wording, cancellation terms, phone number and booking
platform, collective cohort details, the training-resume PDF, and testimonial
permission. Photography is explicitly labeled as illustrative until Stephanie's
own images are available.

## Structure

```
src/
  App.tsx                  routes, page metadata, overlay state
  components/
    Brand.tsx              clover mark, Photo component, headings
    Chrome.tsx             header, footer, newsletter, modal, closing band
    Forms.tsx              request, interest, application forms
    OverlayContext.ts      shared CTA actions
    PageHero.tsx           page-specific hero variants
  data/site.ts             nav, photos, FAQs, videos, privacy copy
  pages/                   one file per route
  index.css                design system and responsive layout
```
