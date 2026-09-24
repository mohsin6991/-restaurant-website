# عجينة عجيبة · Ajeena Ajeeba — Website

Bilingual (Arabic-first, RTL) website for Ajeena Ajeeba, the Saudi baked-fatayer brand — **تعجب الأكيلة**.
Built on the same stack as the reference project in the repo root: Next.js 15 (App Router), React 19, Tailwind CSS 3, TypeScript.

## Pages
| Route | Content |
|---|---|
| `/` | Hero, key facts, favourite pies, boxes teaser |
| `/menu` | Breakfast, premium and dessert fatayer, sharing boxes and drinks, with price, calories and protein (`/boxes` redirects to `/menu#boxes`) |
| `/branches` | Branch list (empty until real data is added) + delivery apps |

## Run
```bash
cd ajeena-ajeeba
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live
- `src/data/menu.ts` — official menu, prices (SR, delivery-app channel) and nutrition. Edit prices here only.
- `tailwind.config.ts` — brand palette: Orange `#ED9C35`, Cream `#FFE9C9`, Brick `#CA472E`, Green `#447356`, Peach `#F2CFB4`, Brown `#301D10`.
- `src/components/` — header, footer, logo, pie card, pie illustration.

## To do before launch
- **Logo:** `Logo.tsx` is a typographic stand-in. Add the official logo files to `public/` and swap them in (never recolor or stretch).
- **Font:** brand font is Rabar_021. The site uses Baloo Bhaijaan 2 (Google Fonts) as a substitute — add the licensed Rabar_021 files via `next/font/local`.
- **Photography:** pie illustrations are SVG placeholders; replace with real cut-pie cross-section photos.
- **Branches:** fill the `branches` array in `src/app/branches/page.tsx` with confirmed locations and hours.
- **Favicon:** add the circle-avatar logo as `src/app/icon.png`.
