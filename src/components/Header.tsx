import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SITE_NAME, MAIN_SITE_URL } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { StoryProgressBar } from "@/components/StoryProgressBar";

export async function Header() {
  const t = await getTranslations("Header");

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={500}
            height={250}
            priority
            className="logo-light h-10 w-auto sm:h-12"
          />
          <Image
            src="/logo-dark.png"
            alt={SITE_NAME}
            width={500}
            height={250}
            priority
            className="logo-dark h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={MAIN_SITE_URL}
            className="brand-gradient hidden shrink-0 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md md:inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>{t("viewStories")}</span>
            <svg
              className="h-4 w-4 rtl:rotate-180"
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

