import Link from "next/link";
import { Reveal } from "@/components/reveal";

/** Eyebrow + display heading + optional lede, revealed on scroll. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  onDark = false,
  align = "start",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  onDark?: boolean;
  align?: "start" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "text-center" : ""} ${className}`}>
      <p className={`eyebrow ${onDark ? "text-saffron-300" : "text-clay-600"}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display display-tight mt-4 text-4xl font-medium text-balance sm:text-5xl lg:text-[3.4rem] ${
          onDark ? "text-bone-50" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            onDark ? "text-bone-50/70" : "text-ink/70"
          } ${centered ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/** Primary/ghost call-to-action links. Text-only; no decorative glyphs. */
export function Cta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark" | "clay";
}) {
  const styles = {
    primary:
      "bg-saffron-400 text-olive-950 hover:bg-saffron-300 focus-visible:outline-saffron-300",
    clay: "bg-clay-500 text-bone-50 hover:bg-clay-400 focus-visible:outline-clay-400",
    ghost:
      "border border-ink/25 text-ink hover:border-ink/60 focus-visible:outline-ink",
    "ghost-dark":
      "border border-bone-50/30 text-bone-50 hover:border-bone-50/70 focus-visible:outline-bone-50",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles}`}
    >
      {children}
    </Link>
  );
}

/** Big editorial numeral. */
export function Stat({
  value,
  label,
  sub,
  onDark = true,
}: {
  value: string;
  label: string;
  sub?: string;
  onDark?: boolean;
}) {
  return (
    <div>
      <p
        className={`font-display display-tight tabular text-[2.6rem] font-medium sm:text-[3.2rem] ${
          onDark ? "text-bone-50" : "text-ink"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-2 text-sm leading-snug ${onDark ? "text-bone-50/65" : "text-ink/65"}`}
      >
        {label}
      </p>
      {sub && (
        <p className={`mt-1 text-xs ${onDark ? "text-bone-50/40" : "text-ink/45"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/** Subtle eight-point star band — restrained zellige-derived motif. */
export function ZelligeBand({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <svg width="100%" height="28" role="presentation">
        <defs>
          <pattern id="zellige" width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M14 3 L17 11 L25 14 L17 17 L14 25 L11 17 L3 14 L11 11 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="28" fill="url(#zellige)" />
      </svg>
    </div>
  );
}
