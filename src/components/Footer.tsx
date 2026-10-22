import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  SITE_NAME,
  FOOTER_COMPANY_LINKS,
  FOOTER_TOOL_LINKS,
  FOOTER_LEGAL_LINKS,
  SOCIAL_LINKS,
} from "@/lib/site";
import { LOCALES } from "@/i18n/locales";
import { BackToTopButton } from "@/components/BackToTopButton";
import { FlagIcon } from "@/components/FlagIcon";

const SOCIAL_ICONS: Record<(typeof SOCIAL_LINKS)[number]["name"], ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 448 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 320 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 448 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  Pinterest: (
    <svg viewBox="0 0 384 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 1.8 35.4 9.3 50.7-13.2 57-40.2 141.9-40.2 200.7 0 18.3 2.7 36.3 4.5 54.6 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 512 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 576 512" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232 337.6V178.4L361 258l-129 79.6z" />
    </svg>
  ),
};

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="mt-16 sm:mt-24 border-t border-border bg-surface-muted/60 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-10">
          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={500}
                height={250}
                className="logo-light h-10 w-auto"
              />
              <Image
                src="/logo-dark.png"
                alt={SITE_NAME}
                width={500}
                height={250}
                className="logo-dark h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-foreground/70">
              {t("tagline")}
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-surface border border-border/80 text-foreground/60 transition-colors hover:bg-brand-orchid/10 hover:text-brand-orchid"
                  >
                    {SOCIAL_ICONS[social.name]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t("headingTools")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {FOOTER_TOOL_LINKS.map((tool) => (
                <li key={tool.key}>
                  <Link
                    href={tool.href}
                    className="text-foreground/70 transition-colors hover:text-brand-orchid"
                  >
                    {t(tool.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t("headingCompany")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 transition-colors hover:text-brand-orchid"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t("headingLegal")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {FOOTER_LEGAL_LINKS.map((legal) => (
                <li key={legal.href}>
                  <Link
                    href={legal.href}
                    className="text-foreground/70 transition-colors hover:text-brand-orchid"
                  >
                    {t(legal.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Language */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t("headingLanguages")}
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {LOCALES.map((loc) => (
                <li key={loc.code}>
                  <Link
                    href="/"
                    locale={loc.code}
                    className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-brand-orchid"
                  >
                    <FlagIcon countryCode={loc.countryCode} className="h-3 w-4 shrink-0 rounded-xs object-cover" />
                    <span>{loc.nativeName}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Highlighted Disclaimer Banner */}
        <div className="mt-12 rounded-2xl border border-brand-orchid/30 bg-surface p-5 text-start shadow-sm">
          <div className="flex items-start gap-3.5">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-orchid"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0112 2.964zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <div className="space-y-1 text-xs leading-relaxed text-foreground/75">
              <p className="font-semibold text-foreground">
                {t("disclaimer1", { siteName: SITE_NAME })}
              </p>
              <p>
                {t("disclaimer2", { siteName: SITE_NAME })}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-foreground/60">
          <p>
            {t("copyright", { year: new Date().getFullYear(), siteName: SITE_NAME })}
          </p>
          <BackToTopButton label={t("backToTop")} />
        </div>
      </div>
    </footer>
  );
}
