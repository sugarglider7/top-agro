import type { Locale } from "@/lib/i18n";
import type { Photo } from "@/lib/images";
import { Pic } from "@/components/photo";

/** Interior page opener: dark olive band, optional photo, editorial title. */
export function PageHero({
  locale,
  eyebrow,
  title,
  lede,
  photo,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede?: string;
  photo?: Photo;
}) {
  return (
    <section className="relative flex min-h-[62svh] flex-col justify-end overflow-hidden bg-olive-950 pt-28">
      {photo && (
        <>
          <Pic photo={photo} locale={locale} priority fill imgClassName="opacity-70" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-950/45 to-olive-950/30"
          />
        </>
      )}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 sm:pb-20">
        <p className="eyebrow text-saffron-300">{eyebrow}</p>
        <h1 className="font-display display-tight mt-4 max-w-3xl text-4xl font-medium text-balance text-bone-50 sm:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone-50/75 sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
