import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE_NAME, MAIN_SITE_URL, NAV_LINKS } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { StoryProgressBar } from "@/components/StoryProgressBar";

export async function Header() {
  const t = await getTranslations("Header");
  const tNav = await getTranslations("Nav");

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-border/70 shadow-xs shadow-black/[0.02] transition-colors">
      {/* Hairline subtle gradient highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-orchid/30 to-transparent"
      />

      <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={500}
            height={250}
            priority
            className="logo-light h-9 w-auto sm:h-11"
          />
          <Image
            src="/logo-dark.png"
            alt={SITE_NAME}
            width={500}
            height={250}
            priority
            className="logo-dark h-9 w-auto sm:h-11"
          />
        </Link>

        {/* Center Floating Pill Navigation (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-surface-muted/50 p-1 backdrop-blur-sm"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/75 transition-all hover:bg-surface hover:text-brand-orchid hover:shadow-xs active:scale-95"
            >
              {tNav(link.key)}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={MAIN_SITE_URL}
            className="relative overflow-hidden group brand-gradient hidden shrink-0 rounded-full px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_2px_12px_rgba(217,60,147,0.3)] transition-all duration-300 hover:shadow-[0_4px_22px_rgba(217,60,147,0.48)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 md:inline-flex items-center gap-2 cursor-pointer"
          >
            {/* Shimmer sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative z-10">{t("viewStories")}</span>
            <svg
              className="relative z-10 h-4 w-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <StoryProgressBar />
    </header>
  );
}

