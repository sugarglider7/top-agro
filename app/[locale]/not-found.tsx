import Link from "next/link";

/** Locale-scoped 404. Trilingual by design: shown for any unmatched URL. */
export default function NotFound() {
  return (
    <section className="grain relative flex min-h-svh flex-col items-center justify-center bg-olive-950 px-6 text-center text-bone-50">
      <p className="eyebrow text-saffron-300">404</p>
      <h1 className="font-display display-tight mt-4 text-4xl font-medium sm:text-5xl">
        Page not found · Page introuvable · الصفحة غير موجودة
      </h1>
      <nav aria-label="Home links" className="mt-10 flex flex-wrap justify-center gap-6">
        <Link href="/en/" className="link-line font-display text-xl">
          English home
        </Link>
        <Link href="/fr/" className="link-line font-display text-xl">
          Accueil français
        </Link>
        <Link href="/ar/" lang="ar" dir="rtl" className="link-line font-display text-xl">
          الصفحة الرئيسية
        </Link>
      </nav>
    </section>
  );
}
