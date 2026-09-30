# PROJECT STATUS — Marrakech Top Agro Export redesign

Speculative redesign of https://www.top-agro.com/ for sugarglider7/top-agro.
Stack: Next 16 (app router, static export `out/`), Tailwind 4, TypeScript. Node ≥22 required
(use `export PATH="$HOME/.nvm/versions/node/v24.18.1/bin:$PATH"`). Dev: `npx next dev --port 4321`.

## Research (DONE — see research/)
- `research/legacy-site-inventory.md` — complete legacy crawl: all copy (FR+EN), 6 product
  tables, 6 olive spec sheets, apricot calibres, contact data, 18 export markets, asset catalog.
- `research/public-web-findings.md` — third-party verification: registry identity (SA, 10M MAD
  capital, RC 5709, ICE), leadership (Ahmed Bennis president, Kamil Bennis GM/export), brands
  (Kamil/Ouchka/Bab Essalam), certifications directory-listed (ISO 22000, HACCP, Kosher, FDA
  registration — NEVER "FDA approved"), OMPIC turnover ~103.6M MAD, verified 2014 US shipment,
  IOC Morocco sector stats, safe-wording guide (§5 — FOLLOW IT).
- `research/legacy-assets/` — 172 authentic images (low-res). Curated copies → `public/images/legacy/`.
- `research/image-credits.md` — stock photo credits (agent ImageCurator; check exists).

## Fact rules (hard constraints)
- Headline figures (13M$ turnover, 250 staff, 99.2% export, 12,000t olives, 3,000t apricots,
  300t capers, $11M invest, 40,000/20,000 m²) = legacy company-published → always framed as
  "company-published figures", never dated 2026.
- Founding: sources split 1988/1989 → "since 1989" (Kerix ×2) used with Est. framing; avoid hard dates elsewhere.
- 18 export markets = legacy-published list; label as company-published.
- Capers/variantes/citron confit/piment: categories advertised on legacy menus + Fuseau confirms capers; no SKUs → present as range, invent NO specs.
- Stock photos are atmospheric only; never captioned as Top Agro facilities. Legacy photos = "archive" treatment.
- Spec-sheet fixes: olive 004 sterilization = 121.1°C/28min (FR page, EN was wrong); garlic olives = 10kg drained / 17kg net (legacy page had swapped).

## Architecture
Locales: /en /fr /ar (RTL) via app/[locale]/, route group (gate) at / for language redirect.
Pages: home, /company, /products (+/products/olives, /apricots, /capers), /process (process+quality+certs), /export, /brands, /contact (RFQ).
Key components: site-header (mobile overlay menu), site-footer, world-map (dotted halftone SVG + animated routes from lib/world-map.json, gen via scripts/gen-map.mjs), reveal (scroll), wordmark.
Design system in app/globals.css: olive/bone/clay/saffron palette, Fraunces display + Archivo + IBM Plex Sans Arabic, grain/photo-warm/photo-archive treatments, map-flow animations.

## Progress
- [x] Scaffold, git, GitHub repo sugarglider7/top-agro, first push
- [x] Research complete (legacy crawl + public web + this fact sheet)
- [x] i18n frame, header/footer, language gate, world-map component
- [ ] Stock imagery (agent ImageCurator running → public/images/stock/)
- [ ] Homepage
- [ ] Products hub + 3 detail pages
- [ ] Company, Process & Quality, Export, Brands, Contact/RFQ
- [ ] FR/EN copy final; AR translation pass
- [ ] Mobile + desktop QA, perf/console/SEO pass, final push

## Known issues / decisions
- lib/images.ts is the single registry for stock photos — update paths there after ImageCurator lands.
- next/font/google needs network at build.
- dotted-map + proj4 installed --no-save (only needed to regen lib/world-map.json).
