import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export const SITE_URL = "https://www.top-agro.com";

/**
 * Canonical + hreflang alternates for a locale-parallel route.
 * `path` is locale-less ("/products/olives" or "/").
 */
export function pageMeta(
  locale: Locale,
  path: string,
  meta: { title?: string; description?: string } = {},
): Metadata {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${SITE_URL}/${l}${clean}/`]),
  );
  return {
    ...(meta.title ? { title: meta.title } : {}),
    ...(meta.description ? { description: meta.description } : {}),
    alternates: {
      canonical: `${SITE_URL}/${locale}${clean}/`,
      languages: { ...languages, "x-default": `${SITE_URL}/en${clean}/` },
    },
  };
}
