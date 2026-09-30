"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { ContactContent } from "@/content/contact";
import { contact } from "@/content/ui";

interface Fields {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
}

const EMPTY: Fields = { name: "", company: "", email: "", country: "", message: "" };

/**
 * Structured export enquiry. Fully client-side: validates, then prepares a
 * mailto draft + copyable summary for the export office. Nothing is sent
 * without the user's own mail client.
 */
export function RfqForm({ locale, t }: { locale: Locale; t: ContactContent["form"] }) {
  const [interests, setInterests] = useState<string[]>([]);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  function toggle(id: string) {
    setInterests((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );
  }

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (interests.length === 0) next.interests = t.pickInterest;
    if (!fields.name.trim()) next.name = t.required;
    if (!fields.company.trim()) next.company = t.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      next.email = t.invalidEmail;
    if (!fields.country.trim()) next.country = t.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const interestLabels = t.interests
    .filter((i) => interests.includes(i.id))
    .map((i) => i.label)
    .join(", ");

  const summary = [
    `${t.interestLegend}: ${interestLabels}`,
    `${t.name}: ${fields.name}`,
    `${t.company}: ${fields.company}`,
    `${t.email}: ${fields.email}`,
    `${t.country}: ${fields.country}`,
    fields.message.trim() ? `${t.message}: ${fields.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(
    `${t.title} — ${fields.company} (${fields.country})`,
  )}&body=${encodeURIComponent(summary)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${contact.emails[0]}\n\n${summary}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: selection fallback not needed for demo */
    }
  }

  const inputCls = (key: string) =>
    `w-full border bg-bone-50 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-2 focus:outline-offset-1 focus:outline-olive-700 ${
      errors[key] ? "border-clay-600" : "border-ink/25"
    }`;

  if (ready) {
    return (
      <div aria-live="polite" className="border border-olive-700/30 bg-olive-100/40 p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-olive-800">
          {t.readyTitle}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">
          {t.readyBody}
        </p>
        <pre dir="auto" className="mt-6 border border-ink/15 bg-bone-50 p-4 text-xs leading-relaxed whitespace-pre-wrap text-ink/80">
          {summary}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={mailto}
            className="inline-flex min-h-11 items-center bg-saffron-400 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-olive-950 uppercase transition-colors hover:bg-saffron-300"
          >
            {t.openEmail}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 items-center border border-ink/25 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-ink/60"
          >
            {copied ? t.copied : t.copy}
          </button>
          <button
            type="button"
            onClick={() => setReady(false)}
            className="inline-flex min-h-11 items-center px-3 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-ink/60 uppercase underline-offset-4 hover:underline"
          >
            {t.edit}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) setReady(true);
      }}
    >
      <fieldset>
        <legend className="eyebrow text-clay-600">{t.interestLegend}</legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {t.interests.map((item) => {
            const on = interests.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(item.id)}
                className={`min-h-11 border px-4 py-2 text-sm transition-colors ${
                  on
                    ? "border-olive-800 bg-olive-800 text-bone-50"
                    : "border-ink/25 bg-bone-50 text-ink/75 hover:border-ink/60"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        {errors.interests && (
          <p className="mt-2 text-xs text-clay-600">{errors.interests}</p>
        )}
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink/60">{t.name}</span>
          <input type="text" name="name" autoComplete="name" value={fields.name} onChange={set("name")} className={inputCls("name")} />
          {errors.name && <span className="mt-1 block text-xs text-clay-600">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink/60">{t.company}</span>
          <input type="text" name="organization" autoComplete="organization" value={fields.company} onChange={set("company")} className={inputCls("company")} />
          {errors.company && <span className="mt-1 block text-xs text-clay-600">{errors.company}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink/60">{t.email}</span>
          <input type="email" name="email" autoComplete="email" dir="ltr" value={fields.email} onChange={set("email")} className={inputCls("email")} />
          {errors.email && <span className="mt-1 block text-xs text-clay-600">{errors.email}</span>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-ink/60">{t.country}</span>
          <input type="text" name="country" autoComplete="country-name" value={fields.country} onChange={set("country")} className={inputCls("country")} />
          {errors.country && <span className="mt-1 block text-xs text-clay-600">{errors.country}</span>}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-xs font-medium text-ink/60">{t.message}</span>
        <textarea
          name="message"
          rows={4}
          value={fields.message}
          onChange={set("message")}
          placeholder={t.messagePlaceholder}
          className={inputCls("message")}
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center bg-olive-800 px-7 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-bone-50 uppercase transition-colors hover:bg-olive-700"
        >
          {t.submit}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-ink/45">{t.note}</p>
      </div>
    </form>
  );
}
