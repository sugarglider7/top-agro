"use client";

import { useState } from "react";
import worldMap from "@/lib/world-map.json";
import { marketNames, regionNames, type Region } from "@/content/markets";
import type { Locale } from "@/lib/i18n";

interface Pin {
  id: string;
  name: string;
  x: number;
  y: number;
  origin?: boolean;
}

const { viewBox, dotsPath, pins } = worldMap as {
  viewBox: string;
  dotsPath: string;
  pins: Pin[];
};

const origin = pins.find((p) => p.origin)!;
const marketPins = pins.filter((p) => !p.origin);

function arcPath(pin: Pin): string {
  const dx = pin.x - origin.x;
  const dy = pin.y - origin.y;
  const dist = Math.hypot(dx, dy);
  const mx = (origin.x + pin.x) / 2;
  const my = Math.min(origin.y, pin.y) - dist * 0.22 - 1.5;
  return `M${origin.x},${origin.y} Q${mx},${my} ${pin.x},${pin.y}`;
}

const REGION_ORDER: Region[] = ["europe", "americas", "mena", "africa", "oceania"];

/**
 * Dotted-halftone world map with animated trade routes out of Marrakech.
 * `interactive` adds a region-grouped legend; hover/focus highlights a route.
 */
export function WorldMap({
  locale,
  interactive = false,
  originLabel,
  className = "",
}: {
  locale: Locale;
  interactive?: boolean;
  originLabel: string;
  className?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  // Headroom above the projection so route arcs are not clipped.
  const [vx, vy, vw, vh] = viewBox.split(" ").map(Number);
  const PAD = 13;
  const box = `${vx} ${vy - PAD} ${vw} ${vh + PAD}`;

  return (
    <div className={className}>
      <div dir="ltr" className="relative">
        <svg
          viewBox={box}
          role="img"
          aria-label={
            locale === "fr"
              ? "Carte du monde des marchés d'exportation depuis Marrakech"
              : locale === "ar"
                ? "خريطة أسواق التصدير انطلاقاً من مراكش"
                : "World map of export markets served from Marrakech"
          }
          className="block w-full"
        >
          {/* landmass halftone */}
          <path
            d={dotsPath}
            fill="none"
            stroke="currentColor"
            strokeWidth={0.42}
            strokeLinecap="round"
            className="text-bone-50/25"
          />

          {/* trade routes */}
          {marketPins.map((pin, i) => {
            const dim = active !== null && active !== pin.id;
            return (
              <g key={pin.id} className="transition-opacity duration-300" opacity={dim ? 0.18 : 1}>
                <path
                  d={arcPath(pin)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.14}
                  className={active === pin.id ? "text-saffron-300" : "text-saffron-300/35"}
                />
                <path
                  d={arcPath(pin)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={0.28}
                  strokeLinecap="round"
                  pathLength={1}
                  className="map-flow text-saffron-300"
                  style={{ animationDelay: `${(i * 0.7) % 6}s` }}
                />
                <circle
                  cx={pin.x}
                  cy={pin.y}
                  r={0.55}
                  className={active === pin.id ? "fill-saffron-300" : "fill-bone-50/80"}
                />
              </g>
            );
          })}

          {/* origin: Marrakech */}
          <circle cx={origin.x} cy={origin.y} r={0.9} className="fill-saffron-400" />
          <circle
            cx={origin.x}
            cy={origin.y}
            r={0.9}
            className="map-pulse fill-none stroke-saffron-400"
            strokeWidth={0.2}
          />
        </svg>

        {/* origin label overlays SVG bottom-left of Morocco */}
        <p
          className="eyebrow !text-[0.55rem] sm:!text-[0.65rem] pointer-events-none absolute text-saffron-300"
          style={{
            left: `${((origin.x + 1.6) / vw) * 100}%`,
            top: `${((origin.y - vy + PAD + 0.5) / (vh + PAD)) * 100}%`,
          }}
        >
          {originLabel}
        </p>
      </div>

      {interactive && (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_ORDER.map((region) => {
            const members = marketPins.filter(
              (p) => marketNames[p.id]?.region === region,
            );
            if (members.length === 0) return null;
            return (
              <div key={region}>
                <h3 className="eyebrow text-saffron-300/80">
                  {regionNames[region][locale]}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {members.map((pin) => (
                    <li key={pin.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(pin.id)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(pin.id)}
                        onBlur={() => setActive(null)}
                        className={`text-sm transition-colors ${
                          active === pin.id
                            ? "text-saffron-300"
                            : "text-bone-50/75 hover:text-bone-50"
                        }`}
                      >
                        {marketNames[pin.id]?.name[locale] ?? pin.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
