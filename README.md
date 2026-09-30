# Marrakech Top Agro Export — concept redesign

A speculative, unsolicited redesign of [top-agro.com](https://www.top-agro.com/) — the web presence
of **Marrakech Top Agro Export S.A.**, a Moroccan table-olive, apricot and caper exporter
(Sidi Ghanem, Marrakech, est. 1989). Built as a demonstration of what the company's digital
presence could be for international food buyers. **Not the official company website.**

## What's inside

- **Trilingual**: English `/en/`, French `/fr/`, Arabic `/ar/` (full RTL), with a language gate at `/`.
- **Pages**: Home · Company · Products (olives / apricots / capers & specialties) · Process & Quality · Export · Brands · Contact (RFQ workflow).
- **Real data**: every product table, spec sheet (pH, brine, heat treatment), container load and figure
  is transcribed from the company's own legacy site or third-party records — see `research/`.
  Legacy-published figures are always labelled as company-published; nothing is invented.
- **Authentic assets**: factory photographs, Kamil label art, can imagery and the hand-drawn access map
  come from the company's legacy site, presented as archive material. Atmospheric photography is
  licensed stock (credits in `research/image-credits.md`) and is never captioned as company facilities.
- Dotted world-map export visualization with animated trade routes (generated in `scripts/gen-map.mjs`).

## Run

Node ≥ 22.13 required.

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
```

## Research

- `research/legacy-site-inventory.md` — complete crawl of the 2000s frameset site (content, tables, assets).
- `research/public-web-findings.md` — independently verified registry, leadership, brand, certification
  and customs-record findings, with a safe-wording guide.
- `PROJECT_STATUS.md` — build log and fact rules.
