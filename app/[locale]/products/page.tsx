import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { products } from "@/content/products";
import { photos } from "@/lib/images";
import { Pic } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { Cta, SectionHead, ZelligeBand } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: products[locale].hub.metaTitle };
}

const LINE_PHOTOS = {
  olives: photos.greenOlives,
  apricots: photos.apricots,
  capers: photos.capers,
} as const;

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = products[l];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hub.hero.eyebrow}
        title={t.hub.hero.title}
        lede={t.hub.hero.lede}
        photo={photos.oliveBranch}
      />

      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:space-y-28 sm:py-28">
          {t.hub.lines.map((line, i) => (
            <Reveal key={line.key}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={href(l, `/products/${line.key}`)}
                  className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay-600"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Pic
                      photo={LINE_PHOTOS[line.key]}
                      locale={l}
                      sizes="(min-width:1024px) 45vw, 92vw"
                      className="h-full"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>
                <div>
                  <p className="font-display tabular text-sm text-clay-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display display-tight mt-3 text-4xl font-medium text-ink sm:text-5xl">
                    {line.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
                    {line.lede}
                  </p>
                  <ul className="mt-6 max-w-lg divide-y divide-ink/10 border-y border-ink/10">
                    {line.points.map((p) => (
                      <li key={p} className="py-3 text-sm text-ink/75">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Cta href={href(l, `/products/${line.key}`)} variant="ghost">
                      {line.cta}
                    </Cta>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Export formats band */}
      <section className="grain relative bg-olive-950 text-bone-50">
        <ZelligeBand className="text-bone-50/10" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead
            eyebrow={t.hub.formats.eyebrow}
            title={t.hub.formats.title}
            lede={t.hub.formats.lede}
            onDark
          />
          <ul className="mt-12 grid grid-cols-2 gap-px bg-bone-50/15 sm:grid-cols-3 lg:grid-cols-6">
            {t.hub.formats.items.map((f, i) => (
              <Reveal as="li" key={f.name} delay={i * 60} className="bg-olive-950">
                <div className="flex h-full flex-col gap-3 p-6">
                  <span className="font-display display-tight text-2xl font-semibold text-saffron-300">
                    {f.name}
                  </span>
                  <span className="text-xs leading-relaxed text-bone-50/60">
                    {f.note}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-xs text-bone-50/40">{t.provenance}</p>
        </div>
      </section>
    </>
  );
}
