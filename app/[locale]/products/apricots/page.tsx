import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { products } from "@/content/products";
import {
  APRICOT_BRIX,
  APRICOT_CALIBRES_PASTRY,
  APRICOT_CATERING,
  APRICOT_PASTRY,
} from "@/lib/product-data";
import { photos } from "@/lib/images";
import { Pic } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { Pager } from "@/components/pager";
import { SectionHead } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/products/apricots", { title: products[locale].apricots.metaTitle });
}

export default async function ApricotsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = products[l];
  const a = t.apricots;
  const h = t.headers;

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        lede={a.hero.lede}
        photo={photos.driedApricots}
      />

      {/* Intro + hand-cut feature */}
      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-display display-tight text-2xl leading-snug font-medium text-balance text-ink sm:text-3xl">
              {a.intro}
            </p>
            <div className="mt-10 border-s-2 border-clay-500 ps-6">
              <h2 className="font-display text-xl font-semibold text-clay-600">
                {a.handCut.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
                {a.handCut.text}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden lg:max-w-sm">
              <Pic
                photo={photos.apricots}
                locale={l}
                sizes="(min-width:1024px) 26vw, 60vw"
                className="h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pastry formats */}
      <section className="border-y border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="01" title={a.pastry.title} lede={a.pastry.lede} />
          <Reveal className="table-scroll mt-12">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>{h.format}</th>
                  <th>{h.drained}</th>
                  <th>{h.perCarton}</th>
                  <th>{h.perContainer}</th>
                  <th>{h.brix}</th>
                </tr>
              </thead>
              <tbody>
                {APRICOT_PASTRY.map((row) => (
                  <tr key={row.format}>
                    <td dir="ltr" className="font-medium">{row.format}</td>
                    <td dir="ltr">{row.drainedG.toLocaleString("en-US").replace(",", "\u00A0")} g</td>
                    <td>{row.perCarton}</td>
                    <td>{row.cartonsPerFcl}</td>
                    <td dir="ltr">{APRICOT_BRIX}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Calibres */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="02" title={a.calibres.title} lede={a.calibres.lede} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {APRICOT_CALIBRES_PASTRY.map((block, i) => (
              <Reveal key={block.format} delay={i * 80}>
                <div className="h-full border border-ink/15 bg-bone-100/60 p-6">
                  <p className="font-display display-tight text-3xl font-semibold text-olive-800">
                    <span dir="ltr">{block.format}</span>
                  </p>
                  <table className="spec-table mt-4">
                    <thead>
                      <tr>
                        <th>{h.calibre}</th>
                        <th>{h.fruitWeight}</th>
                        <th>{h.fruitsPerTin}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {block.calibres.map((c) => (
                        <tr key={c.calibre}>
                          <td dir="ltr" className="font-medium">{c.calibre}</td>
                          <td dir="ltr">{c.weight}</td>
                          <td dir="ltr">{c.fruits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catering calibres */}
      <section className="border-t border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="03" title={a.catering.title} lede={a.catering.lede} />
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal className="table-scroll">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>{h.calibre}</th>
                    <th>{h.fruitWeight}</th>
                    <th>{h.brix}</th>
                  </tr>
                </thead>
                <tbody>
                  {APRICOT_CATERING.map((row) => (
                    <tr key={row.calibre}>
                      <td dir="ltr" className="font-medium">{row.calibre}</td>
                      <td dir="ltr">{row.weight}</td>
                      <td dir="ltr">{APRICOT_BRIX}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 max-w-md text-xs text-ink/50">{t.provenance}</p>
            </Reveal>
            <Reveal delay={120}>
              <figure>
                <div className="photo-archive flex items-end justify-center gap-6 border border-ink/15 bg-bone-50 p-6">
                  <img
                    src="/images/legacy/cans/007.jpg"
                    alt={a.archiveCaption}
                    width={190}
                    height={168}
                    loading="lazy"
                    decoding="async"
                    className="w-28"
                  />
                  <img
                    src="/images/legacy/cans/008.jpg"
                    alt=""
                    width={190}
                    height={168}
                    loading="lazy"
                    decoding="async"
                    className="w-28"
                  />
                </div>
                <figcaption className="eyebrow !text-[0.6rem] !tracking-[0.16em] mt-3 text-ink/50">
                  {a.archiveCaption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Pager
        locale={l}
        prevLabel={t.pager.prev}
        nextLabel={t.pager.next}
        prev={{ path: "/products/olives", title: t.olives.metaTitle }}
        next={{ path: "/products/capers", title: t.capers.metaTitle }}
      />
    </>
  );
}
