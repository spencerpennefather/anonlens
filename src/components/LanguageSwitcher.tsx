"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, getPathname } from "@/i18n/navigation";
import { LOCALES, getLocaleMeta } from "@/i18n/locales";
import { setLocaleCookie } from "@/lib/switch-locale";
import { FlagIcon } from "@/components/FlagIcon";

/** Desktop-only trigger + popover; mobile gets the language list inline in MobileNav instead. */
export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();

    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = getLocaleMeta(locale);
  const q = query.trim().toLowerCase();
  const filteredLocales = q
    ? LOCALES.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.nativeName.toLowerCase().includes(q) ||
          l.code.toLowerCase().includes(q),
      )
    : LOCALES;

  return (
    <div ref={rootRef} className="relative flex shrink-0 items-center">
      <button
        type="button"
        onClick={() => {
          setQuery("");
          setOpen((v) => !v);
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-border/80 bg-surface px-3.5 text-xs font-bold text-foreground shadow-xs outline-none transition-all hover:border-brand-orchid/50 hover:shadow-sm focus:ring-2 focus:ring-brand-orchid/30 cursor-pointer"
      >
        <FlagIcon countryCode={current.countryCode} className="h-3.5 w-5 rounded-xs object-cover" />
        <span className="tracking-wide">{current.displayCode ?? current.countryCode}</span>
      </button>

      {open && (
        <div className="absolute end-0 top-full z-50 mt-2.5 w-64 overflow-hidden rounded-2xl border border-border/80 bg-surface p-2 shadow-2xl shadow-black/10">
          <div className="p-1 mb-1">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search")}
              aria-label={t("search")}
              className="w-full rounded-xl bg-surface-muted px-3.5 py-2 text-xs sm:text-sm text-foreground outline-none placeholder:text-foreground/40 transition focus:ring-2 focus:ring-brand-orchid/30"
            />
          </div>
          <ul role="listbox" aria-label={t("label")} className="max-h-72 overflow-y-auto space-y-1 p-0.5">
            {filteredLocales.length === 0 ? (
              <li className="px-3.5 py-2 text-xs text-foreground/50">{t("noResults")}</li>
            ) : (
              filteredLocales.map((l) => {
                const active = l.code === locale;
                return (
                  <li key={l.code} role="none">
                    <a
                      href={getPathname({ href: pathname, locale: l.code })}
                      role="option"
                      aria-selected={active}
                      onClick={() => setLocaleCookie(l.code)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-all ${
                        active
                          ? "bg-gradient-to-r from-[#d82b6b] via-[#ea580c] to-[#65a30d] text-white shadow-sm"
                          : "text-foreground/90 hover:bg-surface-muted"
                      }`}
                    >
                      <FlagIcon countryCode={l.countryCode} className="h-4 w-5 shrink-0 rounded-xs object-cover" />
                      <span className={`truncate ${active ? "font-bold text-white" : "font-medium text-foreground"}`}>
                        {l.nativeName}
                      </span>
                      <span
                        className={`ms-auto shrink-0 text-xs font-semibold ${
                          active ? "text-lime-200/95" : "text-foreground/40"
                        }`}
                      >
                        {l.displayCode ?? l.countryCode}
                      </span>
                    </a>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
