"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function FinalCta() {
  const t = useTranslations("HomePage");

  function handleScrollToSearch() {
    const input = document.getElementById("hero-search-input") as HTMLInputElement | null;
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.focus();
      }, 450);
    } else {
      const section = document.getElementById("search");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="cta" className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-1/2 h-[220px] w-[440px] -translate-x-1/2 rounded-full opacity-15 blur-3xl brand-gradient -z-10 sm:-top-12 sm:h-[300px] sm:w-[620px]"
      />

      <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-surface p-6 sm:p-10 shadow-xl shadow-brand-orchid/5 flex flex-col sm:flex-row items-center gap-8">
        <div className="shrink-0 relative">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-violet to-brand-orchid opacity-20 blur-xl" />
          <Image
            src="/mascot-pointing.png"
            alt="AnonLens Mascot"
            width={1156}
            height={1367}
            className="relative w-32 sm:w-44 md:w-52 h-auto drop-shadow-md"
            sizes="(min-width: 640px) 208px, 128px"
          />
        </div>

        <div className="text-center sm:text-start flex-1">
          <span className="inline-block rounded-full bg-brand-orchid/10 px-3 py-1 text-xs font-bold text-brand-orchid border border-brand-orchid/20">
            Instant Anonymity
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t("finalCtaTitle")}
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/70">
            {t("finalCtaText1")} {t("finalCtaText2")}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleScrollToSearch}
              className="relative overflow-hidden group brand-gradient inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-orchid/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-orchid/45 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              {/* Shimmer light sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative z-10">{t("finalCtaButton")}</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            <span className="text-xs text-foreground/50">
              {t("finalCtaSupportingText")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
