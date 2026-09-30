import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { processContent } from "@/content/process";
import { legacy, photos } from "@/lib/images";
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
  return pageMeta(locale, "/process", { title: processContent[locale].metaTitle });
}

const STEP_ARCHIVES = [
  legacy.sortingPan,
  legacy.brineYard,
  legacy.handSorting,
  legacy.gradingConveyor,
  legacy.canningLine,
  legacy.lab,
  legacy.drumYard,
] as const;

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = processContent[l];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lede={t.hero.lede}
        photo={photos.bottlingLine}
      />

      {/* Steps */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <SectionHead
            eyebrow={t.steps.eyebrow}
            title={t.steps.title}
            lede={t.steps.lede}
          />
          <ol className="mt-16 space-y-0">
            {t.steps.items.map((step, i) => {
              const img = STEP_ARCHIVES[i];
              return (
                <Reveal as="li" key={step.title}>
                  <div className="grid items-center gap-8 border-t border-ink/10 py-10 md:grid-cols-[4rem_1fr_16rem] md:gap-12">
                    <span className="font-display tabular display-tight text-4xl font-medium text-clay-500/80 md:text-5xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
                        {step.text}
                      </p>
                    </div>
                    <figure className="max-w-60 justify-self-start md:justify-self-end">
                      <div className="photo-archive border border-ink/15 bg-bone-100 p-1.5">
                        <img
                          src={img.src}
                          alt={step.archive}
                          width={img.width}
                          height={img.height}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[3/2] w-full object-cover"
                        />
                      </div>
                      <figcaption className="eyebrow !text-[0.55rem] !tracking-[0.14em] mt-2 text-ink/45">
                        {step.archive}
                      </figcaption>
                    </figure>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* HACCP quote */}
      <section className="grain relative bg-olive-950 text-bone-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <p className="eyebrow text-saffron-300">{t.haccp.eyebrow}</p>
            <h2 className="font-display display-tight mt-4 text-3xl font-medium sm:text-4xl">
              {t.haccp.title}
            </h2>
            <blockquote className="font-display mt-10 text-2xl leading-snug text-balance text-bone-50/90 sm:text-3xl">
              “{t.haccp.quote}”
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-bone-50/65">
              {t.haccp.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead
            eyebrow={t.standards.eyebrow}
            title={t.standards.title}
            lede={t.standards.lede}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.standards.items.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="flex h-full flex-col border border-ink/15 bg-bone-100/60 p-6">
                  <p className="font-display display-tight text-2xl font-semibold text-olive-800">
                    {s.name}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
                    {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink/50">
            {t.standards.smallPrint}
          </p>
        </div>
      </section>

      {/* Band */}
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
