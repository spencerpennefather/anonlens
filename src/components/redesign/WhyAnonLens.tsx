"use client";

import { useTranslations } from "next-intl";

export function WhyAnonLens() {
  const t = useTranslations("HomePage");

  const reasons = [
    {
      num: "01",
      title: t("whyItem1Title"),
      desc: t("whyItem1Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
        </svg>
      ),
    },
    {
      num: "02",
      title: t("whyItem2Title"),
      desc: t("whyItem2Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: t("whyItem3Title"),
      desc: t("whyItem3Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "04",
      title: t("whyItem4Title"),
      desc: t("whyItem4Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-honey" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: "05",
      title: t("whyItem5Title"),
      desc: t("whyItem5Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "06",
      title: t("whyItem6Title"),
      desc: t("whyItem6Text"),
      icon: (
        <svg className="h-5 w-5 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const comparisonRows = [
    {
      feature: "100% Anonymous (No 'Seen' list)",
      anonlens: true,
      official: false,
      others: "partial",
    },
    {
      feature: "No Instagram Account Required",
      anonlens: true,
      official: false,
      others: "partial",
    },
    {
      feature: "Direct One-Click HD Downloads",
      anonlens: true,
      official: false,
      others: false,
    },
    {
      feature: "Zero Passwords or Credentials",
      anonlens: true,
      official: false,
      others: false,
    },
    {
      feature: "No Account Suspension Risk",
      anonlens: true,
      official: false,
      others: false,
    },
    {
      feature: "Fast Cloud Proxy Architecture",
      anonlens: true,
      official: false,
      others: false,
    },
  ];

  return (
    <section id="why-anonlens" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orchid/10 px-3.5 py-1 text-xs font-bold text-brand-orchid border border-brand-orchid/20">
            Why Choose AnonLens
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {t("whyTitle")}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            {t("whyText")}
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.num}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orchid/40 hover:shadow-xl hover:shadow-brand-orchid/5 text-start"
            >
              {/* Top accent hairline */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orchid/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted border border-border/80 shadow-xs">
                    {item.icon}
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground/40">
                    {item.num}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground transition-colors group-hover:text-brand-orchid">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/65">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-14 sm:mt-16">
          <div className="mx-auto max-w-xl text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              How AnonLens Compares
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-foreground/65">
              Clear breakdown of anonymity, security, and download capabilities
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/80 bg-surface shadow-sm">
            <table className="w-full text-start border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-border bg-surface-muted/60 text-xs sm:text-sm font-bold">
                  <th className="py-4 px-6 text-foreground text-start">Feature</th>
                  <th className="py-4 px-6 text-brand-orchid font-extrabold bg-brand-orchid/5 border-x border-brand-orchid/20 text-center">
                    AnonLens
                  </th>
                  <th className="py-4 px-6 text-foreground/70 text-center">Official IG App</th>
                  <th className="py-4 px-6 text-foreground/70 text-center">Other Viewers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs sm:text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-surface-muted/30 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-6 text-center bg-brand-orchid/5 border-x border-brand-orchid/20">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        ✓
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500 font-bold text-sm">
                        ✕
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-center">
                      {row.others === "partial" ? (
                        <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                          Partial
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500 font-bold text-sm">
                          ✕
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
