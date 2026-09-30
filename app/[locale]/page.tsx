import { isLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ui } from "@/content/ui";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = ui[locale as Locale];

  return (
    <section className="flex min-h-screen items-center justify-center bg-olive-950 text-bone-50">
      <div className="text-center">
        <p className="eyebrow text-saffron-300">{t.companyName}</p>
        <h1 className="font-display display-tight mt-4 text-6xl">{t.tagline}</h1>
      </div>
    </section>
  );
}
