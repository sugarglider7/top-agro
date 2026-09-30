import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { products } from "@/content/products";
import {
  BULK_OLIVES,
  CANNED_OLIVES,
  OLIVE_SPECS,
  PREPARED_RECIPES,
} from "@/lib/product-data";
import { legacy, photos } from "@/lib/images";
import { ArchiveImage, Pic } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { Pager } from "@/components/pager";
import { Cta, SectionHead } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/products/olives", { title: products[locale].olives.metaTitle });
}

export default async function OlivesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = products[l];
  const o = t.olives;
  const h = t.headers;
  const treatmentName = (kind: "pasteurisation" | "sterilisation") =>
    l === "fr"
      ? kind === "pasteurisation"
        ? "Pasteurisation"
        : "Stérilisation"
      : l === "ar"
        ? kind === "pasteurisation"
          ? "بسترة"
          : "تعقيم"
        : kind === "pasteurisation"
          ? "Pasteurisation"
          : "Sterilisation";
  const min = l === "fr" ? "min" : l === "ar" ? "دقيقة" : "min";

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={o.hero.eyebrow}
        title={o.hero.title}
        lede={o.hero.lede}
        photo={photos.darkOlives}
      />

      {/* Intro */}
      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <p className="font-display display-tight text-2xl leading-snug font-medium text-balance text-ink sm:text-3xl">
              {o.intro}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto aspect-[3/4] max-w-xs overflow-hidden lg:max-w-sm">
              <Pic
                photo={photos.harvestHands}
                locale={l}
                sizes="(min-width:1024px) 26vw, 60vw"
                className="h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bulk */}
      <section id="bulk" className="border-y border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="01" title={o.bulk.title} lede={o.bulk.lede} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <Reveal className="table-scroll">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>{h.article}</th>
                    <th>{h.format}</th>
                    <th>{h.drained}</th>
                    <th>{h.drumsPerContainer}</th>
                  </tr>
                </thead>
                <tbody>
                  {BULK_OLIVES.map((row) => (
                    <tr key={row.id}>
                      <td className="font-medium">{t.oliveNames[row.id]}</td>
                      <td>{h.drum}</td>
                      <td dir="ltr">{row.drainedKg} kg</td>
                      <td>{row.drumsPerFcl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={120} className="self-center">
              <ArchiveImage
                src={legacy.drumYard.src}
                width={legacy.drumYard.width}
                height={legacy.drumYard.height}
                alt={o.bulk.archiveCaption}
                caption={o.bulk.archiveCaption}
                className="mx-auto max-w-sm rotate-1"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Canned */}
      <section id="canned" className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="02" title={o.canned.title} lede={o.canned.lede} />
          <Reveal className="table-scroll mt-12">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>{h.format}</th>
                  <th>{h.drained}</th>
                  <th>{h.perCarton}</th>
                  <th>{h.perContainer}</th>
                </tr>
              </thead>
              <tbody>
                {CANNED_OLIVES.map((row) => (
                  <FragmentRows
                    key={row.id}
                    name={t.oliveNames[row.id]}
                    row={row}
                  />
                ))}
              </tbody>
            </table>
          </Reveal>

          {/* Spec sheets */}
          <div className="mt-20">
            <SectionHead
              eyebrow="02·1"
              title={o.canned.specsTitle}
              lede={o.canned.specsLede}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OLIVE_SPECS.map((spec, i) => (
                <Reveal key={spec.id} delay={(i % 3) * 80}>
                  <div className="flex h-full gap-5 border border-ink/15 bg-bone-100/60 p-5">
                    <div className="photo-archive w-16 shrink-0 self-start border border-ink/10 bg-bone-50 p-1">
                      <img
                        src={`/images/legacy/cans/${spec.can}.jpg`}
                        alt={`${t.oliveNames[spec.id]} — ${o.canned.archiveNote}`}
                        width={190}
                        height={168}
                        loading="lazy"
                        decoding="async"
                        className="w-full"
                      />
                    </div>
                    <dl className="min-w-0 flex-1 text-xs leading-relaxed">
                      <p className="font-display mb-2 text-base leading-snug font-semibold text-olive-800">
                        {t.oliveNames[spec.id]}
                      </p>
                      {spec.acidity && (
                        <div className="flex justify-between gap-3 border-t border-ink/10 py-1.5">
                          <dt className="text-ink/50">{h.acidity}</dt>
                          <dd dir="ltr" className="tabular">{spec.acidity}</dd>
                        </div>
                      )}
                      <div className="flex justify-between gap-3 border-t border-ink/10 py-1.5">
                        <dt className="text-ink/50">{h.ph}</dt>
                        <dd dir="ltr" className="tabular">{spec.ph}</dd>
                      </div>
                      <div className="flex justify-between gap-3 border-t border-ink/10 py-1.5">
                        <dt className="text-ink/50">{h.salt}</dt>
                        <dd dir="ltr" className="tabular">{spec.salt}</dd>
                      </div>
                      <div className="flex justify-between gap-3 border-t border-ink/10 py-1.5">
                        <dt className="text-ink/50">{h.treatment}</dt>
                        <dd className="text-end">
                          {treatmentName(spec.treatment.kind)}{" "}
                          <span dir="ltr" className="tabular">
                            {spec.treatment.temp} · {spec.treatment.minutes} {min}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prepared */}
      <section id="prepared" className="border-t border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow="03" title={o.prepared.title} lede={o.prepared.lede} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PREPARED_RECIPES.map((r, i) => (
              <Reveal as="li" key={r.id} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col border border-ink/15 bg-bone-50 p-5">
                  <div className="photo-archive mx-auto w-28 border border-ink/10 bg-bone-100 p-1">
                    <img
                      src={`/images/legacy/labels/${r.label}.jpg`}
                      alt={`Kamil — ${t.recipeNames[r.id]}`}
                      width={147}
                      height={151}
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                    />
                  </div>
                  <h3 className="font-display mt-4 text-lg leading-snug font-semibold text-ink">
                    {t.recipeNames[r.id]}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-ink/60">
                    {t.recipeIngredients[r.id]}
                  </p>
                  <p className="tabular mt-4 border-t border-ink/10 pt-3 text-xs text-ink/70">
                    <span dir="ltr">
                      {r.drainedKg} kg / {r.netKg} kg
                    </span>{" "}
                    <span className="text-ink/45">({o.prepared.weightsNote})</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 flex flex-wrap items-center gap-6">
            <Cta href={href(l, "/contact")}>{t.capers.cta}</Cta>
            <p className="max-w-md text-xs text-ink/50">{t.provenance}</p>
          </Reveal>
        </div>
      </section>

      <Pager
        locale={l}
        prevLabel={t.pager.prev}
        nextLabel={t.pager.next}
        prev={{ path: "/products", title: t.hub.metaTitle }}
        next={{ path: "/products/apricots", title: t.apricots.metaTitle }}
      />
    </>
  );
}

function FragmentRows({
  name,
  row,
}: {
  name: string;
  row: (typeof CANNED_OLIVES)[number];
}) {
  return (
    <>
      <tr className="article-row">
        <td colSpan={4}>{name}</td>
      </tr>
      {row.formats.map((f) => (
        <tr key={f.format}>
          <td dir="ltr">{f.format}</td>
          <td dir="ltr">
            {f.drainedG.toLocaleString("en-US").replace(",", "\u00A0")} g
            {f.drainedOz ? ` · ${f.drainedOz}` : ""}
          </td>
          <td>{f.perCarton}</td>
          <td>{f.cartonsPerFcl.toLocaleString("en-US").replace(",", "\u00A0")}</td>
        </tr>
      ))}
    </>
  );
}
