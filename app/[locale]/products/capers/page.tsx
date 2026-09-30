import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLocale, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { products } from "@/content/products";
import { photos, type Photo } from "@/lib/images";
import { Pic } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { Pager } from "@/components/pager";
import { Cta } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/products/capers", { title: products[locale].capers.metaTitle });
}

const ITEM_PHOTOS: Record<string, Photo> = {
  capers: photos.capers,
  variants: photos.olivesBrine,
  lemons: photos.spiceMarket,
  peppers: photos.oliveJar,
};
export default async function CapersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = products[l];
  const c = t.capers;

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lede={c.hero.lede}
        photo={photos.capers}
      />

      <section className="bg-bone-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="font-display display-tight max-w-3xl text-2xl leading-snug font-medium text-balance text-ink sm:text-3xl">
              {c.intro}
            </p>
            <p className="eyebrow mt-8 inline-block border border-clay-500/40 bg-clay-500/10 px-4 py-2 !text-[0.65rem] text-clay-600">
              {c.tonnage}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.items.map((item, i) => (
              <Reveal key={item.key} delay={(i % 4) * 80}>
                <div className="aspect-[3/4] overflow-hidden">
                  <Pic
                    photo={ITEM_PHOTOS[item.key]}
                    locale={l}
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 92vw"
                    className="h-full"
                  />
                </div>
                <h2 className="font-display mt-5 text-2xl font-medium text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-col items-start gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-relaxed text-ink/50">{c.note}</p>
            <Cta href={href(l, "/contact")}>{c.cta}</Cta>
          </Reveal>
        </div>
      </section>

      <Pager
        locale={l}
        prevLabel={t.pager.prev}
        nextLabel={t.pager.next}
        prev={{ path: "/products/apricots", title: t.apricots.metaTitle }}
        next={{ path: "/export", title: l === "fr" ? "Export" : l === "ar" ? "التصدير" : "Export" }}
      />
    </>
  );
}
