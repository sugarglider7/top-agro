"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, localeNames, locales, type Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { Wordmark } from "@/components/wordmark";

const NAV: { key: keyof (typeof ui)["en"]["nav"]; path: string }[] = [
  { key: "company", path: "/company" },
  { key: "products", path: "/products" },
  { key: "process", path: "/process" },
  { key: "export", path: "/export" },
  { key: "brands", path: "/brands" },
  { key: "contact", path: "/contact" },
];

function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {locales.map((l) => {
        const target =
          pathname.replace(/^\/(en|fr|ar)(?=\/|$)/, `/${l}`) || `/${l}/`;
        return (
          <a
            key={l}
            href={target}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            className={`eyebrow !tracking-[0.14em] transition-opacity ${
              l === locale
                ? "opacity-100 underline underline-offset-4"
                : "opacity-55 hover:opacity-100"
            }`}
          >
            {localeNames[l]}
          </a>
        );
      })}
    </div>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div
        className={`hidden items-center justify-between border-b border-bone-50/10 bg-olive-950 px-6 text-bone-50 transition-all duration-500 lg:flex ${
          scrolled ? "h-0 overflow-hidden border-none opacity-0" : "h-9"
        }`}
      >
        <p className="eyebrow !text-[0.6rem] text-bone-50/70">
          {t.header.location} · {t.header.since}
        </p>
        <LanguageSwitcher locale={locale} className="text-bone-50" />
      </div>

      {/* Main bar */}
      <div
        className={`flex items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "h-16 bg-bone-50/90 shadow-[0_1px_0_rgba(28,26,18,0.08)] backdrop-blur-md"
            : "h-20 bg-transparent"
        }`}
      >
        <Wordmark locale={locale} />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV.map((item) => {
            const target = href(locale, item.path);
            const active = pathname.startsWith(target.replace(/\/$/, ""));
            return (
              <Link
                key={item.key}
                href={target}
                className={`link-line text-[0.8rem] font-medium tracking-wide ${
                  active ? "text-clay-600" : "text-ink/80 hover:text-ink"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
          <Link
            href={href(locale, "/contact")}
            className="bg-olive-800 px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.12em] text-bone-50 uppercase transition-colors hover:bg-olive-700"
          >
            {t.cta.exportEnquiry}
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 items-center gap-2.5 px-2 lg:hidden"
        >
          <span className="eyebrow !text-[0.65rem]">{t.header.menu}</span>
          <span aria-hidden className="flex flex-col gap-[5px]">
            <span className="block h-px w-6 bg-ink" />
            <span className="block h-px w-6 bg-ink" />
          </span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-olive-950 text-bone-50 transition-[opacity,visibility] duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4 sm:px-6">
          <Wordmark locale={locale} onDark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-11 items-center gap-2.5 px-2"
          >
            <span className="eyebrow !text-[0.65rem]">{t.header.close}</span>
            <span aria-hidden className="relative block h-4 w-6">
              <span className="absolute top-1/2 left-0 block h-px w-6 rotate-45 bg-bone-50" />
              <span className="absolute top-1/2 left-0 block h-px w-6 -rotate-45 bg-bone-50" />
            </span>
          </button>
        </div>

        <nav
          aria-label="Primary mobile"
          className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.key}
              href={href(locale, item.path)}
              style={{ transitionDelay: open ? `${90 + i * 55}ms` : "0ms" }}
              className={`font-display border-b border-bone-50/10 py-3.5 text-[1.7rem] font-medium transition-[opacity,transform] duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-10">
          <LanguageSwitcher locale={locale} />
          <p className="eyebrow !text-[0.6rem] mt-6 text-bone-50/50">
            {t.header.location} · {t.header.since}
          </p>
        </div>
      </div>
    </header>
  );
}
