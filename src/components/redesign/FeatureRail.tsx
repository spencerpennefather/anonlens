"use client";

import { useTranslations } from "next-intl";

export function IconStoryViewer({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="url(#feat-grad-1)" strokeWidth="3" strokeDasharray="6 3" />
      <path d="M24 16C16 16 10 24 10 24C10 24 16 32 24 32C32 32 38 24 38 24C38 24 32 16 24 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="4" fill="url(#feat-grad-1)" />
      <path d="M12 36L36 12" stroke="#FF6A3D" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="feat-grad-1" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A4DF0" />
          <stop offset="0.5" stopColor="#D93C93" />
          <stop offset="1" stopColor="#FF6A3D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconDownloader({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 16V28M24 28L19 23M24 28L29 23" stroke="url(#feat-grad-2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 33H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="16" r="2" fill="#FFC04D" />
      <defs>
        <linearGradient id="feat-grad-2" x1="19" y1="16" x2="29" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D93C93" />
          <stop offset="1" stopColor="#FF6A3D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconProfileInspector({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 34C10 28.477 14.477 24 20 24C25.523 24 30 28.477 30 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="30" r="6" stroke="url(#feat-grad-3)" strokeWidth="3" />
      <path d="M36.5 34.5L41 39" stroke="url(#feat-grad-3)" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="feat-grad-3" x1="26" y1="24" x2="41" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A4DF0" />
          <stop offset="1" stopColor="#D93C93" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconHighlights({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="url(#feat-grad-4)" strokeWidth="3" />
      <polygon points="24 14 26.8 20.6 34 21.2 28.5 25.8 30.2 32.8 24 29 17.8 32.8 19.5 25.8 14 21.2 21.2 20.6 24 14" fill="url(#feat-grad-4)" />
      <defs>
        <linearGradient id="feat-grad-4" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D93C93" />
          <stop offset="0.5" stopColor="#FF6A3D" />
          <stop offset="1" stopColor="#FFC04D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconReelsPlayer({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="8" width="28" height="32" rx="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 16L38 16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <polygon points="21 22 30 28 21 34" fill="url(#feat-grad-5)" />
      <defs>
        <linearGradient id="feat-grad-5" x1="21" y1="22" x2="30" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A4DF0" />
          <stop offset="1" stopColor="#FF6A3D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconZeroRegistration({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="20" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 20V14C18 10.686 20.686 8 24 8C27.314 8 30 10.686 30 14V16" stroke="url(#feat-grad-6)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="29" r="2.5" fill="currentColor" />
      <path d="M24 31.5V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="feat-grad-6" x1="18" y1="8" x2="30" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A4DF0" />
          <stop offset="0.5" stopColor="#D93C93" />
          <stop offset="1" stopColor="#FFC04D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FeatureRail() {
  const t = useTranslations("HomePage");

  const features = [
    {
      id: "anonymous-viewer",
      tag: "100% Anonymous",
      title: t("featureCard1Title"),
      desc: t("featureCard1Text"),
      icon: <IconStoryViewer className="h-10 w-10 text-brand-orchid" />,
      accentColor: "from-brand-violet to-brand-orchid",
    },
    {
      id: "media-downloader",
      tag: "Original HD",
      title: t("featureCard5Title"),
      desc: t("featureCard5Text"),
      icon: <IconDownloader className="h-10 w-10 text-brand-ember" />,
      accentColor: "from-brand-orchid to-brand-ember",
    },
    {
      id: "profile-inspector",
      tag: "Profile Zoom",
      title: t("featureCard2Title"),
      desc: t("featureCard2Text"),
      icon: <IconProfileInspector className="h-10 w-10 text-brand-violet" />,
      accentColor: "from-brand-violet to-brand-honey",
    },
    {
      id: "highlights-archive",
      tag: "Story Archive",
      title: t("featureCard4Title"),
      desc: t("featureCard4Text"),
      icon: <IconHighlights className="h-10 w-10 text-brand-honey" />,
      accentColor: "from-brand-orchid to-brand-honey",
    },
    {
      id: "reels-browser",
      tag: "Video & Reels",
      title: t("featureCard6Title"),
      desc: t("featureCard6Text"),
      icon: <IconReelsPlayer className="h-10 w-10 text-brand-ember" />,
      accentColor: "from-brand-ember to-brand-violet",
    },
    {
      id: "no-login-needed",
      tag: "Zero Accounts",
      title: t("featureCard3Title"),
      desc: t("featureCard3Text"),
      icon: <IconZeroRegistration className="h-10 w-10 text-brand-orchid" />,
      accentColor: "from-brand-violet to-brand-ember",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-orchid">
              Story Frame Highlights
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              {t("featuresTitle")}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-foreground/70 max-w-2xl">
              {t("featuresIntro")}
            </p>
          </div>
          <p className="text-xs font-semibold text-foreground/50 shrink-0 hidden sm:block">
            Swipe or scroll horizontally →
          </p>
        </div>

        {/* Horizontal Story Rail */}
        <div className="no-scrollbar mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 pt-2 sm:-mx-6 sm:px-6 scroll-smooth snap-x snap-mandatory">
          {features.map((item, idx) => (
            <div
              key={item.id}
              className="snap-start group relative flex h-[340px] w-[260px] sm:w-[280px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orchid/50 hover:shadow-xl hover:shadow-brand-orchid/10"
            >
              {/* Story progress top line */}
              <div className="flex gap-1 mb-2">
                <div className="h-1 flex-1 rounded-full bg-border/60 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.accentColor}`} />
                </div>
              </div>

              {/* Story card badge & icon */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-surface-muted px-3 py-1 text-[11px] font-bold text-foreground/70 border border-border/60">
                    {item.tag}
                  </span>
                  <span className="text-xs font-extrabold text-foreground/40 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-muted border border-border/60 p-2.5 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-brand-orchid">
                  {item.title}
                </h3>
              </div>

              {/* Story description */}
              <div className="pt-2">
                <p className="text-xs leading-relaxed text-foreground/65">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-brand-orchid">
                  <span>Explore tool</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
