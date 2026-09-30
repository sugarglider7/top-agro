import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const PATHS = [
  "",
  "/company",
  "/products",
  "/products/olives",
  "/products/apricots",
  "/products/capers",
  "/process",
  "/export",
  "/brands",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}/`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/export" || path === "/products" ? 0.9 : 0.7,
    })),
  );
}
