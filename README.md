# Notes Coffee Roasters — website

Marketing site for Notes Coffee Roasters (coffee roastery, coffee house and matcha space, Mashtan, Bahrain). Next.js (App Router) + TypeScript, fully static.

## Develop

```bash
npm install
npm run dev
```

Checks: `npm run lint`, `npm run typecheck`, `npm run build`.

## Editing content

| What | Where |
| --- | --- |
| Menu items & prices (in fils: `1300` = 1.300 BD) | `src/data/menu.ts` |
| Phone, hours, Instagram, maps link | `src/data/business.ts` |
| Photos (paths, alt text) | `src/data/photos.ts`, files in `public/images/` |
| Navigation | `src/data/navigation.ts` |
| Design tokens (colours, type, spacing) | top of `src/app/globals.css` |

Set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, sitemap and Open Graph tags point at it.

## Open items before production

- **Opening hours** — Instagram bio reads "4:00pm-12pm"; the site shows 4:00 pm – 12:00 midnight. Days of the week are not stated. Confirm.
- **Address** — only "Mashtan" and a Google Maps share link are published. Confirm street address / building before adding it.
- **Photography** — all images are cropped from an Instagram screenshot (~242px source). Replace with original files at the same paths.
- **Logo** — the badge is extracted from the Instagram avatar (~144px). Supply a vector (SVG) logo.
- **Prices** — taken from the printed menu supplied; verify before launch.
