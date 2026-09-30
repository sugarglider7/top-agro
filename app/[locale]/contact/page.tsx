import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { contactContent } from "@/content/contact";
import { contact } from "@/content/ui";
import { legacy } from "@/lib/images";
import { ArchiveImage } from "@/components/photo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { RfqForm } from "@/components/rfq-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: contactContent[locale].metaTitle };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = contactContent[l];

  return (
    <>
      <PageHero
        locale={l}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display display-tight text-3xl font-medium text-ink">
              {t.form.title}
            </h2>
            <div className="mt-8">
              <RfqForm locale={l} t={t.form} />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="space-y-10 border-ink/10 lg:border-s lg:ps-10">
              <div>
                <h2 className="eyebrow text-clay-600">{t.details.officeTitle}</h2>
                <p className="font-display mt-3 text-xl font-semibold text-ink">
                  {t.details.exportDesk}
                </p>
                <p className="mt-1 text-sm text-ink/60">{t.details.hoursNote}</p>
              </div>

              <div>
                <h3 className="eyebrow text-clay-600">{t.details.addressTitle}</h3>
                <address className="mt-3 space-y-1 text-sm leading-relaxed text-ink/75 not-italic">
                  {t.details.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
              </div>

              <div>
                <h3 className="eyebrow text-clay-600">
                  {t.details.phoneTitle} · {t.details.faxTitle}
                </h3>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed">
                  {contact.phones.map((p) => (
                    <li key={p}>
                      <a href={`tel:${p.replace(/\s/g, "")}`} dir="ltr" className="text-ink/80 hover:text-clay-600">
                        {p}
                      </a>
                    </li>
                  ))}
                  <li className="text-ink/50">
                    {t.details.faxTitle}: <span dir="ltr">{contact.fax}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="eyebrow text-clay-600">{t.details.emailTitle}</h3>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed">
                  {contact.emails.map((e) => (
                    <li key={e}>
                      <a href={`mailto:${e}`} className="break-all text-ink/80 hover:text-clay-600">
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <ArchiveImage
                src={legacy.accessMap.src}
                width={legacy.accessMap.width}
                height={legacy.accessMap.height}
                alt={t.details.mapCaption}
                caption={t.details.mapCaption}
                className="max-w-sm"
              />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
