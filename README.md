# Muhammad Nabil — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide · Geist

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm start
```

## Replace before publishing

- `src/data/site.ts` — email, CTA link (mailto or WhatsApp), GitHub, LinkedIn (all placeholders)
- `src/data/experience.ts` — periods, technologies, and what "35K+" actually measures (registered users vs. peak concurrent)
- `src/components/sections/About.tsx` — placeholder bio copy

## Notes

- Colour tokens live in `src/app/globals.css`. Lime (`--accent`) is used for fills only; text, links and focus rings use `--accent-text`, a darker variant in light mode, because lime on off-white is about 1.2:1 contrast.
- Theme: follows the system until the toggle is used, then persists in `localStorage`. An inline script sets it before first paint.
- CTA scroll animation runs at 1024px+ without reduced motion (about one extra screen of scroll). Everything else gets a static grid.
- Geist comes from the `geist` package, so there is no runtime Google Fonts request.
