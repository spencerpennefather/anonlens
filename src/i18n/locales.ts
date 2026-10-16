export interface LocaleMeta {
  code: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  /** ISO 3166-1 country code for the flag image shown in the language switcher — must stay a real country code (flagcdn.com lookup key), independent of what text label is displayed. */
  countryCode: string;
  /** Text shown next to the flag; falls back to countryCode when omitted. */
  displayCode?: string;
  /** BCP 47 language tag used for hreflang annotations and the HTML lang attribute. Falls back to `code` when omitted. Needed when the internal locale code (e.g. "ckb") differs from the standards-valid tag (e.g. "ku-Arab"). */
  hreflangCode?: string;
  flag: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr", countryCode: "US", displayCode: "EN", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr", countryCode: "ES", flag: "🇪🇸" },
  { code: "pt", name: "Portuguese", nativeName: "Português", dir: "ltr", countryCode: "PT", flag: "🇵🇹" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", countryCode: "SA", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", dir: "ltr", countryCode: "IN", flag: "🇮🇳" },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);

export function getLocaleMeta(code: string): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/**
 * Best-effort `og:locale` value (e.g. "fr_FR", "zh_TW") for a given locale
 * code, derived from `countryCode` — used so social crawlers see the
 * page's actual language instead of a hardcoded "en_US" on every page.
 * Codes that already carry a region subtag (e.g. "zh-TW") just swap the
 * hyphen for an underscore; everything else pairs the code with its flag
 * country. Not guaranteed to match Facebook's own closed locale list, but
 * still strictly more correct than a fixed "en_US" for non-English pages.
 */
export function getOgLocale(code: string): string {
  if (code.includes("-")) return code.replace(/-/g, "_");
  const meta = getLocaleMeta(code);
  return `${code}_${meta.countryCode}`;
}
