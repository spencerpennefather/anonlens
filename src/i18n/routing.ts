import { defineRouting } from "next-intl/routing";
import { LOCALE_CODES } from "./locales";

export const routing = defineRouting({
  locales: LOCALE_CODES,
  defaultLocale: "en",
  // The static GitHub Pages export has no proxy to rewrite unprefixed URLs
  // to the default locale, so every URL carries its locale there.
  localePrefix: process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ? "always" : "as-needed",
});
