import DottedMap from "dotted-map";
import { writeFileSync } from "node:fs";

const map = new DottedMap({ height: 52, grid: "diagonal" });

const markets = [
  { id: "ma", name: "Morocco", lat: 31.63, lng: -8.0, origin: true },
  { id: "ca", name: "Canada", lat: 45.42, lng: -75.7 },
  { id: "us", name: "United States", lat: 40.71, lng: -74.0 },
  { id: "br", name: "Brazil", lat: -23.55, lng: -46.63 },
  { id: "gb", name: "United Kingdom", lat: 51.51, lng: -0.13 },
  { id: "fr", name: "France", lat: 48.86, lng: 2.35 },
  { id: "be", name: "Belgium", lat: 50.85, lng: 4.35 },
  { id: "nl", name: "Netherlands", lat: 52.37, lng: 4.9 },
  { id: "de", name: "Germany", lat: 52.52, lng: 13.4 },
  { id: "dk", name: "Denmark", lat: 55.68, lng: 12.57 },
  { id: "fi", name: "Finland", lat: 60.17, lng: 24.94 },
  { id: "ch", name: "Switzerland", lat: 46.95, lng: 7.45 },
  { id: "it", name: "Italy", lat: 41.9, lng: 12.5 },
  { id: "es", name: "Spain", lat: 40.42, lng: -3.7 },
  { id: "lb", name: "Lebanon", lat: 33.89, lng: 35.5 },
  { id: "il", name: "Israel", lat: 32.08, lng: 34.78 },
  { id: "sa", name: "Saudi Arabia", lat: 24.71, lng: 46.68 },
  { id: "za", name: "South Africa", lat: -33.92, lng: 18.42 },
  { id: "au", name: "Australia", lat: -33.87, lng: 151.21 },
];

const pins = markets.map((m) => {
  const { x, y } = map.getPin({ lat: m.lat, lng: m.lng });
  return { ...m, x: +x.toFixed(2), y: +y.toFixed(2) };
});

// Dots encoded as zero-length segments; render with stroke-linecap="round"
// and stroke-width ≈ dot diameter for a halftone look at minimal bytes.
const dotsPath = map
  .getPoints()
  .map(({ x, y }) => `M${+x.toFixed(1)} ${+y.toFixed(1)}h.01`)
  .join("");
const svg = map.getSVG({ radius: 0.24, color: "#000", shape: "circle" });
const viewBox = svg.match(/viewBox="([^"]+)"/)[1];

writeFileSync(
  new URL("../lib/world-map.json", import.meta.url),
  JSON.stringify({ viewBox, dotsPath, pins }, null, 1),
);
console.log("dots path length:", dotsPath.length, "viewBox:", viewBox);
