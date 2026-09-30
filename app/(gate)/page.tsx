"use client";

import { useEffect } from "react";

/**
 * Language gate at "/": redirects to the visitor's preferred locale.
 * Static-export friendly (client redirect) with visible fallback links.
 */
export default function LanguageGate() {
  useEffect(() => {
    const preferred = navigator.languages?.[0]?.toLowerCase() ?? "en";
    const locale = preferred.startsWith("fr")
      ? "fr"
      : preferred.startsWith("ar")
        ? "ar"
        : "en";
    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-olive-950 px-6 text-bone-50">
      <p className="eyebrow text-saffron-300">Marrakech Top Agro Export</p>
      <nav aria-label="Choose language" className="flex gap-8">
        <a href="/en/" className="font-display link-line text-2xl">
          English
        </a>
        <a href="/fr/" className="font-display link-line text-2xl">
          Français
        </a>
        <a href="/ar/" lang="ar" dir="rtl" className="font-display link-line text-2xl">
          العربية
        </a>
      </nav>
    </main>
  );
}
