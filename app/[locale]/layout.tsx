import type { Metadata } from "next";
import { Archivo, Fraunces, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { dir, isLocale, locales, type Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-sans",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = ui[locale];
  return {
    title: {
      default: `${t.companyName} — ${t.tagline}`,
      template: `%s — ${t.companyShort}`,
    },
    description:
      locale === "fr"
        ? "Olives de table, abricots et câpres du Maroc — transformés, conditionnés et exportés depuis Marrakech depuis 1989."
        : locale === "ar"
          ? "زيتون المائدة والمشمش والقبار من المغرب — يُصنَّع ويُعبَّأ ويُصدَّر من مراكش منذ 1989."
          : "Moroccan table olives, apricots and capers — processed, packed and exported from Marrakech since 1989.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  return (
    <html
      lang={l}
      dir={dir(l)}
      className={`${fraunces.variable} ${archivo.variable} ${arabicSans.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-olive-950 focus:px-4 focus:py-2 focus:text-bone-50"
        >
          {l === "fr" ? "Aller au contenu" : l === "ar" ? "تخطّ إلى المحتوى" : "Skip to content"}
        </a>
        <SiteHeader locale={l} />
        <main id="main">{children}</main>
        <SiteFooter locale={l} />
      </body>
    </html>
  );
}
