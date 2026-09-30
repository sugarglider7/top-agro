import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { exportContent } from "@/content/export";
import { photos } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { Cta, SectionHead, ZelligeBand } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { WorldMap } from "@/components/world-map";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/export", { title: exportContent[locale].metaTitle });
}

export default async function ExportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = exportContent[l];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lede={t.hero.lede}
        photo={photos.containerPort}
      />

      {/* Sixty-second brief */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <SectionHead
            eyebrow={t.brief.eyebrow}
            title={t.brief.title}
            lede={t.brief.lede}
          />
          <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {t.brief.items.map((item, i) => (
              <Reveal as="li" key={item.q} delay={(i % 2) * 90}>
                <div className="flex gap-6">
                  <span className="font-display tabular display-tight shrink-0 text-4xl font-medium text-clay-500/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
                      {item.q}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Interactive map */}
      <section className="grain relative bg-olive-950 text-bone-50">
        <ZelligeBand className="text-bone-50/10" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <SectionHead
            eyebrow={t.map.eyebrow}
            title={t.map.title}
            lede={t.map.lede}
            onDark
          />
          <Reveal className="mt-12">
            <WorldMap locale={l} interactive originLabel={t.map.origin} />
          </Reveal>
          <p className="mt-10 max-w-xl text-xs text-bone-50/40">{t.map.note}</p>
        </div>
      </section>

      {/* Documented shipment */}
      <section className="border-b border-ink/10 bg-bone-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHead
            eyebrow={t.shipment.eyebrow}
            title={t.shipment.title}
            lede={t.shipment.lede}
          />
          <Reveal delay={120} className="self-center">
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {t.shipment.facts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[8rem_1fr] gap-4 py-4 sm:grid-cols-[10rem_1fr]"
                >
                  <dt className="eyebrow !text-[0.6rem] self-center text-ink/45">
                    {f.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink/85">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-ink/45">{t.shipment.source}</p>
          </Reveal>
        </div>
      </section>

      {/* Buyer profiles */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow={t.buyers.eyebrow} title={t.buyers.title} />
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.buyers.items.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="bg-bone-50">
                <div className="flex h-full flex-col gap-3 p-6">
                  <h3 className="font-display text-xl font-semibold text-olive-800">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="grain relative bg-clay-600 text-bone-50">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="font-display display-tight text-4xl font-medium sm:text-5xl">
              {t.band.title}
            </h2>
            <p className="mt-4 max-w-lg text-base text-bone-50/80">{t.band.lede}</p>
          </Reveal>
          <Reveal delay={120}>
            <Cta href={href(l, "/contact")}>{t.band.cta}</Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
