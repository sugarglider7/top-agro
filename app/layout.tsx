import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marrakech Top Agro Export",
  description:
    "Moroccan table olives, apricots and capers — processed, packed and exported from Marrakech since 1989.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
