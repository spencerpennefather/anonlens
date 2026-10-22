"use client";

import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("HomePage");

  const steps = [
    {
      step: 1,
      title: t("step1Title"),
      desc: t("step1Text"),
      icon: (
        <svg className="h-6 w-6 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      tip: "Public profiles only",
    },
    {
      step: 2,
      title: t("step2Title"),
      desc: t("step2Text"),
      icon: (
        <svg className="h-6 w-6 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tip: "Zero footprint proxy",
    },
    {
      step: 3,
      title: t("step3Title"),
      desc: t("step3Text"),
      icon: (
        <svg className="h-6 w-6 text-brand-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      tip: "HD photos & videos",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 bg-surface-muted/50 border-y border-border/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-violet/10 px-3.5 py-1 text-xs font-bold text-brand-violet border border-brand-violet/20">
            Simple 3-Step Process
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {t("howItWorksTitle")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            {t("howItWorksIntro")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orchid/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-muted border border-border/80 text-foreground transition-transform group-hover:scale-105">
                    {item.icon}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-brand-violet to-brand-orchid text-xs font-black text-white shadow-sm">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-orchid">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-foreground/65">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-foreground/50">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orchid" />
                <span>{item.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
