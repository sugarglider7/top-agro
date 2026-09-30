import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { company } from "@/content/company";
import { home } from "@/content/home";
import { legacy, photos } from "@/lib/images";
import { ArchiveImage, Pic } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { SectionHead, Stat, ZelligeBand } from "@/components/primitives";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: company[locale].metaTitle };
}

const GALLERY = [
  { img: legacy.sortingHall, key: "sortingHall" },
  { img: legacy.brineYard, key: "brineYard" },
  { img: legacy.gradingConveyor, key: "gradingConveyor" },
  { img: legacy.canningLine, key: "canningLine" },
  { img: legacy.autoclaves, key: "autoclaves" },
  { img: legacy.goldCans, key: "goldCans" },
] as const;

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = company[l];
  const stats = home[l].figures;

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lede={t.hero.lede}
        photo={photos.atlas}
      />

      {/* Story */}
      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <SectionHead eyebrow={t.story.eyebrow} title={t.story.title} />
            <Reveal delay={80}>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink/70">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="self-center">
            <ArchiveImage
              src={legacy.worldMap.src}
              width={legacy.worldMap.width}
              height={legacy.worldMap.height}
              alt="Kamil — export markets map, company archive"
              caption={l === "fr" ? "La carte des marchés Kamil — archives Top Agro" : l === "ar" ? "خريطة أسواق Kamil — أرشيف توب أغرو" : "The Kamil markets map — Top Agro company archive"}
              className="mx-auto max-w-md -rotate-1"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-ink/10 bg-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {t.timeline.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <div className="border-t-2 border-clay-500 pt-5">
                  <p className="font-display display-tight text-2xl font-semibold text-clay-600">
                    {item.period}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Leadership */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHead eyebrow={t.leadership.eyebrow} title={t.leadership.title} />
            <Reveal delay={100} className="self-center">
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {t.leadership.people.map((p) => (
                  <li key={p.name} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                    <span className="font-display text-xl font-semibold text-ink">
                      {p.name}
                    </span>
                    <span className="text-sm text-ink/60">{p.role}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink/45">{t.leadership.note}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Figures (dark) */}
      <section className="grain relative bg-olive-950 text-bone-50">
        <ZelligeBand className="text-bone-50/10" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <SectionHead
            eyebrow={t.facilities.eyebrow}
            title={t.facilities.title}
            lede={t.facilities.lede}
            onDark
          />
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {stats.stats.slice(0, 8).map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 70}>
                <Stat value={s.value} label={s.label} sub={s.sub} />
              </Reveal>
            ))}
          </dl>
          <p className="mt-8 max-w-xl text-xs text-bone-50/40">{stats.footnote}</p>

          {/* Archive gallery */}
          <Reveal className="mt-16">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {GALLERY.map(({ img, key }) => (
                <li key={key} className="photo-archive border border-bone-50/15 bg-bone-50/5 p-1.5">
                  <img
                    src={img.src}
                    alt={t.facilities.galleryCaption}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </li>
              ))}
            </ul>
            <p className="eyebrow !text-[0.6rem] !tracking-[0.16em] mt-4 text-bone-50/45">
              {t.facilities.galleryCaption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sector context */}
      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead eyebrow={t.sector.eyebrow} title={t.sector.title} />
            <Reveal delay={80}>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink/70">
                <p>{t.sector.p1}</p>
                <p>{t.sector.p2}</p>
              </div>
              <p className="mt-4 text-xs text-ink/45">{t.sector.source}</p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="mx-auto aspect-[4/3] max-w-lg overflow-hidden">
              <Pic
                photo={photos.groveSunlit}
                locale={l}
                sizes="(min-width:1024px) 45vw, 92vw"
                className="h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="border-t border-ink/10 bg-bone-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead eyebrow={t.location.eyebrow} title={t.location.title} />
            <Reveal delay={80}>
              <address className="mt-6 space-y-1 text-base leading-relaxed text-ink/75 not-italic">
                {t.location.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <ArchiveImage
              src={legacy.accessMap.src}
              width={legacy.accessMap.width}
              height={legacy.accessMap.height}
              alt={t.location.mapCaption}
              caption={t.location.mapCaption}
              className="mx-auto max-w-md rotate-1"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
