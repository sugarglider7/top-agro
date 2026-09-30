import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { contact, ui } from "@/content/ui";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const nav = [
    { label: t.nav.company, path: "/company" },
    { label: t.nav.products, path: "/products" },
    { label: t.nav.process, path: "/process" },
    { label: t.nav.export, path: "/export" },
    { label: t.nav.brands, path: "/brands" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="relative bg-olive-950 text-bone-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
          <div>
            <Wordmark locale={locale} onDark />
            <p className="font-display mt-6 max-w-xs text-xl text-bone-50/85">
              {t.tagline}
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-saffron-300">{t.footer.addressTitle}</h2>
            <address className="mt-4 text-sm leading-7 text-bone-50/75 not-italic">
              {t.footer.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h2 className="eyebrow text-saffron-300">
              {t.footer.phoneTitle} · {t.footer.emailTitle}
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm leading-6 text-bone-50/75">
              {contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} dir="ltr" className="hover:text-bone-50">
                    {p}
                  </a>
                </li>
              ))}
              <li className="pt-1 text-bone-50/50">
                {t.footer.faxTitle}: <span dir="ltr">{contact.fax}</span>
              </li>
              {contact.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="break-all hover:text-bone-50">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-saffron-300">{t.footer.navTitle}</h2>
            <ul className="mt-4 space-y-1.5 text-sm leading-6">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={href(locale, item.path)}
                    className="text-bone-50/75 hover:text-bone-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rule-light mt-14 border-t pt-6 text-xs leading-6 text-bone-50/45">
          <p>{t.footer.legalNote}</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Marrakech Top Agro Export S.A. —{" "}
            {t.footer.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
