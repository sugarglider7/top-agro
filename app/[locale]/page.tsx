import { notFound } from "next/navigation";
import Link from "next/link";
import { href, isLocale, locales, type Locale } from "@/lib/i18n";
import { home } from "@/content/home";
import { marketNames } from "@/content/markets";
import { legacy, photos } from "@/lib/images";
import { ArchiveImage, Pic } from "@/components/photo";
import { Cta, SectionHead, Stat, ZelligeBand } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { WorldMap } from "@/components/world-map";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const CHAIN_PHOTOS = [
  photos.atlas,
  photos.harvestHands,
  photos.olivesBrine,
  null, // quality control → authentic archive photo
  photos.bottlingLine,
  photos.containerPort,
] as const;

const PRODUCT_PHOTOS = {
  olives: photos.greenOlives,
  apricots: photos.apricots,
  capers: photos.capers,
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = home[l];
  const markets = Object.values(marketNames).map((m) => m.name[l]);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-olive-950">
        <Pic photo={photos.heroGrove} locale={l} priority fill />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-950/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-olive-950/80 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 sm:pb-32">
          <p className="eyebrow reveal is-visible text-saffron-300">{t.hero.eyebrow}</p>
          <h1 className="font-display display-tight mt-5 max-w-4xl text-[13.5vw] font-medium text-bone-50 sm:text-7xl lg:text-[5.6rem]">
            {t.hero.title[0]}
            <br />
            <span className="text-saffron-300">{t.hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-50/80 sm:text-lg">
            {t.hero.lede}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Cta href={href(l, "/products")}>{homeCta(l, "explore")}</Cta>
            <Cta href={href(l, "/contact")} variant="ghost-dark">
              {homeCta(l, "enquiry")}
            </Cta>
          </div>
        </div>

        {/* market marquee */}
        <div className="relative border-t border-bone-50/15 bg-olive-950/70 py-3 backdrop-blur-sm">
          <p className="sr-only">
            {t.hero.marqueeLabel}: {markets.join(", ")}
          </p>
          <div aria-hidden dir="ltr" className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center">
              {[0, 1].map((copy) => (
                <span key={copy} className="flex shrink-0 items-center">
                  {markets.map((m) => (
                    <span
                      key={`${copy}-${m}`}
                      className="eyebrow !text-[0.62rem] flex items-center whitespace-nowrap text-bone-50/55"
                    >
                      <span className="px-5">{m}</span>
                      <svg
                        aria-hidden
                        width="5"
                        height="5"
                        viewBox="0 0 6 6"
                        className="shrink-0 fill-saffron-400/70"
                      >
                        <path d="M3 0 6 3 3 6 0 3Z" />
                      </svg>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MANIFESTO ---------- */}
      <section className="relative bg-bone-50">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-clay-600">{t.manifesto.eyebrow}</p>
            <p className="font-display display-tight mt-6 text-[1.7rem] leading-[1.15] font-medium text-balance text-ink sm:text-4xl">
              {t.manifesto.big}
            </p>
            <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-ink/70">
              <p>{t.manifesto.body1}</p>
              <p>{t.manifesto.body2}</p>
            </div>
            <div className="mt-8">
              <Cta href={href(l, "/company")} variant="ghost">
                {t.manifesto.link}
              </Cta>
            </div>
          </Reveal>
          <Reveal delay={120} className="self-center">
            <ArchiveImage
              src={legacy.factoryAerial.src}
              width={legacy.factoryAerial.width}
              height={legacy.factoryAerial.height}
              alt={t.manifesto.archiveCaption}
              caption={t.manifesto.archiveCaption}
              className="mx-auto max-w-md -rotate-1"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- CHAIN ---------- */}
      <section className="border-y border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <SectionHead
            eyebrow={t.chain.eyebrow}
            title={t.chain.title}
            lede={t.chain.lede}
          />
          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.chain.steps.map((step, i) => {
              const photo = CHAIN_PHOTOS[i];
              return (
                <Reveal as="li" key={step.title} delay={(i % 3) * 90}>
                  <div className="aspect-[4/3] overflow-hidden">
                    {photo ? (
                      <Pic
                        photo={photo}
                        locale={l}
                        sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
                        className="h-full"
                      />
                    ) : (
                      <div className="photo-archive flex h-full items-center justify-center bg-olive-100/60 p-6">
                        <img
                          src={legacy.lab.src}
                          alt={t.quality.archiveCaption}
                          width={legacy.lab.width}
                          height={legacy.lab.height}
                          loading="lazy"
                          decoding="async"
                          className="max-h-full border border-ink/15"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="font-display tabular text-sm text-clay-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {step.text}
                  </p>
                </Reveal>
              );
            })}
          </ol>
          <Reveal className="mt-14">
            <Cta href={href(l, "/process")} variant="ghost">
              {t.chain.cta}
            </Cta>
          </Reveal>
        </div>
      </section>

      {/* ---------- PRODUCTS ---------- */}
      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <SectionHead
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            lede={t.products.lede}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {t.products.items.map((item, i) => (
              <Reveal key={item.key} delay={i * 100}>
                <Link
                  href={href(l, `/products/${item.key}`)}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-600"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <Pic
                      photo={PRODUCT_PHOTOS[item.key]}
                      locale={l}
                      sizes="(min-width:768px) 30vw, 92vw"
                      className="h-full"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow !text-[0.6rem] mt-6 text-clay-600">
                    {item.range}
                  </p>
                  <h3 className="font-display link-line mt-2 inline-block text-3xl font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {item.text}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FIGURES + MAP (dark super-section) ---------- */}
      <section className="grain relative overflow-hidden bg-olive-950 text-bone-50">
        <ZelligeBand className="text-bone-50/10" />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <SectionHead
            eyebrow={t.figures.eyebrow}
            title={t.figures.title}
            onDark
          />
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {t.figures.stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 80}>
                <Stat value={s.value} label={s.label} sub={s.sub} />
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-10">
            <p className="max-w-xl text-xs leading-relaxed text-bone-50/40">
              {t.figures.footnote}
            </p>
          </Reveal>

          <div className="rule-light mt-20 border-t pt-20">
            <SectionHead
              eyebrow={t.map.eyebrow}
              title={t.map.title}
              lede={t.map.lede}
              onDark
            />
            <Reveal className="mt-12">
              <WorldMap locale={l} originLabel={t.map.origin} />
            </Reveal>
            <Reveal className="mt-10">
              <Cta href={href(l, "/export")}>{t.map.cta}</Cta>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- QUALITY ---------- */}
      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHead eyebrow={t.quality.eyebrow} title={t.quality.title} />
            <Reveal delay={80}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
                {t.quality.body}
              </p>
              <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                {t.quality.standards.map((s) => (
                  <li key={s.name} className="flex items-baseline gap-6 py-4">
                    <span className="font-display w-28 shrink-0 text-lg font-semibold text-olive-700">
                      {s.name}
                    </span>
                    <span className="text-sm text-ink/65">{s.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink/45">{t.quality.smallPrint}</p>
              <div className="mt-8">
                <Cta href={href(l, "/process")} variant="ghost">
                  {t.quality.cta}
                </Cta>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="self-center">
            <ArchiveImage
              src={legacy.lab.src}
              width={legacy.lab.width}
              height={legacy.lab.height}
              alt={t.quality.archiveCaption}
              caption={t.quality.archiveCaption}
              className="mx-auto max-w-md rotate-1"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- BRANDS ---------- */}
      <section className="border-t border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <SectionHead
            eyebrow={t.brands.eyebrow}
            title={t.brands.title}
            lede={t.brands.lede}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {t.brands.marks.map((mark, i) => (
              <Reveal key={mark.name} delay={i * 90}>
                <div className="flex h-full flex-col justify-between border border-ink/15 bg-bone-50 p-8">
                  <p className="font-display display-tight text-3xl font-semibold text-olive-800">
                    {mark.name}
                  </p>
                  <p className="mt-6 text-xs leading-relaxed text-ink/55">
                    {mark.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Cta href={href(l, "/brands")} variant="ghost">
              {t.brands.cta}
            </Cta>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
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

function homeCta(l: Locale, key: "explore" | "enquiry"): string {
  const map = {
    explore: { en: "Explore our products", fr: "Découvrir nos produits", ar: "اكتشف منتجاتنا" },
    enquiry: { en: "Export enquiry", fr: "Demande export", ar: "طلب تصدير" },
  } as const;
  return map[key][l];
}
