import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";

/**
 * Previous/next navigation between product pages.
 * SVG chevrons (auto-mirrored in RTL via logical order), generous touch targets.
 */
export function Pager({
  locale,
  prevLabel,
  nextLabel,
  prev,
  next,
}: {
  locale: Locale;
  prevLabel: string;
  nextLabel: string;
  prev?: { path: string; title: string };
  next?: { path: string; title: string };
}) {
  const chevron = (flip: boolean) => (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 16 16"
      className={`shrink-0 ${flip ? "rtl:-scale-x-100" : "-scale-x-100 rtl:scale-x-100"}`}
    >
      <path
        d="M5.5 2 11.5 8 5.5 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <nav
      aria-label={`${prevLabel} / ${nextLabel}`}
      className="border-t border-ink/10 bg-bone-100"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6">
        {prev ? (
          <Link
            href={href(locale, prev.path)}
            className="group flex min-h-24 items-center gap-4 py-6 pe-4"
          >
            {chevron(false)}
            <span>
              <span className="eyebrow !text-[0.6rem] block text-ink/45">
                {prevLabel}
              </span>
              <span className="font-display mt-1 block text-lg leading-snug text-ink group-hover:text-clay-600">
                {prev.title}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={href(locale, next.path)}
            className="group flex min-h-24 items-center justify-end gap-4 py-6 ps-4 text-end"
          >
            <span>
              <span className="eyebrow !text-[0.6rem] block text-ink/45">
                {nextLabel}
              </span>
              <span className="font-display mt-1 block text-lg leading-snug text-ink group-hover:text-clay-600">
                {next.title}
              </span>
            </span>
            {chevron(true)}
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
