import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { brands } from "@/content/brands";
import { kamilCans, kamilLabels } from "@/lib/images";
import { PageHero } from "@/components/page-hero";
import { Cta, SectionHead } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/brands", { title: brands[locale].metaTitle });
}

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = brands[l];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      {/* Kamil */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <SectionHead eyebrow={t.kamil.eyebrow} title={t.kamil.title} />
              <Reveal delay={80}>
                <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink/70">
                  <p>{t.kamil.p1}</p>
                  <p>{t.kamil.p2}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <figure>
                <ul className="grid grid-cols-4 gap-3">
                  {kamilLabels.map((label) => (
                    <li
                      key={label}
                      className="photo-archive border border-ink/15 bg-bone-100 p-1.5"
                    >
                      <img
                        src={`/images/legacy/labels/${label}.jpg`}
                        alt={`Kamil label — ${label}`}
                        width={147}
                        height={151}
                        loading="lazy"
                        decoding="async"
                        className="w-full"
                      />
                    </li>
                  ))}
                </ul>
                <figcaption className="eyebrow !text-[0.6rem] !tracking-[0.16em] mt-3 text-ink/50">
                  {t.kamil.labelsCaption}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Can lineup */}
          <Reveal className="mt-16">
            <figure>
              <ul className="flex flex-wrap items-end justify-center gap-4 border-y border-ink/10 bg-bone-100/50 px-4 py-8">
                {kamilCans.map((can) => (
                  <li key={can} className="photo-archive w-20 sm:w-24">
                    <img
                      src={`/images/legacy/cans/${can}.jpg`}
                      alt={`Kamil can ${can}`}
                      width={190}
                      height={168}
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                    />
                  </li>
                ))}
              </ul>
              <figcaption className="eyebrow !text-[0.6rem] !tracking-[0.16em] mt-3 text-ink/50">
                {t.kamil.cansCaption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Other marks */}
      <section className="border-t border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow={t.others.eyebrow} title={t.others.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {t.others.marks.map((mark, i) => (
              <Reveal key={mark.name} delay={i * 90}>
                <div className="grain relative flex h-full min-h-52 flex-col justify-between overflow-hidden bg-olive-950 p-8 text-bone-50">
                  <p className="font-display display-tight text-4xl font-semibold text-saffron-300 sm:text-5xl">
                    {mark.name}
                  </p>
                  <p className="mt-8 max-w-sm text-sm leading-relaxed text-bone-50/65">
                    {mark.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink/50">{t.others.footnote}</p>

          <Reveal className="mt-14 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-10">
            <h2 className="font-display display-tight me-auto text-2xl font-medium text-ink sm:text-3xl">
              {t.band.title}
            </h2>
            <Cta href={href(l, "/contact")}>{t.band.cta}</Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
