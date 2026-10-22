"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      // localStorage may be disabled or in private browsing
    }
    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    queueMicrotask(() => {
      setTheme(initial);
    });
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage error
    }
  }


  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("switchToLight") : t("switchToDark")}
      className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-surface shadow-xs text-foreground/75 transition-all hover:border-brand-orchid/50 hover:text-brand-orchid hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orchid/30 active:scale-95 cursor-pointer"
    >
      <div className="relative flex h-[18px] w-[18px] items-center justify-center transition-transform duration-300 group-hover:rotate-12">
        {theme === "dark" ? (
          <svg
            className="h-[18px] w-[18px] text-brand-honey transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        ) : theme === "light" ? (
          <svg
            className="h-[18px] w-[18px] text-brand-violet transition-colors"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fill="currentColor" fillOpacity="0.15" />
          </svg>
        ) : (
          <span className="h-[18px] w-[18px]" aria-hidden />
        )}
      </div>
    </button>
  );
}
