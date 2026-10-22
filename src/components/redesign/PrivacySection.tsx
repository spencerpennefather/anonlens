"use client";

import { SITE_NAME } from "@/lib/site";

export function PrivacySection() {
  const safetyCards = [
    {
      title: "Public Content Only",
      desc: "AnonLens strictly operates within the boundaries of public data. We do not and cannot access private profiles, direct messages, or non-public content.",
      icon: (
        <svg className="h-5 w-5 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "No Credentials or Passwords",
      desc: "We will NEVER ask for your Instagram password, phone number, or login credentials. Your personal accounts remain 100% disconnected and secure.",
      icon: (
        <svg className="h-5 w-5 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Zero Personal Logging",
      desc: "AnonLens does not track user identities, build behavioral advertising profiles, or archive your browsing sessions. You view clean, and leave clean.",
      icon: (
        <svg className="h-5 w-5 text-brand-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="privacy" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orchid/10 px-3.5 py-1 text-xs font-bold text-brand-orchid border border-brand-orchid/20">
            Privacy & Trust Architecture
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            How AnonLens Protects Your Anonymity
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            We built AnonLens with privacy-by-design principles from day one.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {safetyCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-brand-orchid/40 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-muted border border-border/80">
                {card.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/65">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Clear Disclaimer Banner */}
        <div className="mt-10 rounded-2xl border border-brand-orchid/30 bg-gradient-to-r from-brand-violet/5 via-brand-orchid/5 to-brand-ember/5 p-5 text-center text-xs leading-relaxed text-foreground/75">
          <p className="font-semibold text-foreground">
            Independent Third-Party Service Disclaimer
          </p>
          <p className="mt-1 text-foreground/65">
            {SITE_NAME} is an independent platform and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their subsidiaries. All Instagram logos, names, and trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}
