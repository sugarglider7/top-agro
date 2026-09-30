import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";

export function Wordmark({
  locale,
  onDark = false,
}: {
  locale: Locale;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href(locale, "/")}
      className={`group inline-flex flex-col leading-none ${onDark ? "text-bone-50" : "text-ink"}`}
      aria-label="Marrakech Top Agro Export — home"
    >
      <span
        className={`eyebrow !text-[0.5rem] !tracking-[0.34em] ${onDark ? "text-saffron-300" : "text-clay-600"}`}
      >
        Marrakech
      </span>
      <span className="font-display display-tight mt-0.5 text-[1.35rem] font-semibold uppercase">
        Top&nbsp;Agro
      </span>
      <span
        className={`eyebrow !text-[0.5rem] !tracking-[0.34em] mt-0.5 ${onDark ? "text-bone-50/60" : "text-ink/50"}`}
      >
        Export&nbsp;S.A.
      </span>
    </Link>
  );
}
