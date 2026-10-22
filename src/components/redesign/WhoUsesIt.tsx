export function WhoUsesIt() {


  const personas = [
    {
      role: "Marketers & Competitor Analysts",
      desc: "Benchmark competitor product launches, stories, and influencer promotions discreetly without alerting their social marketing teams.",
      icon: (
        <svg className="h-6 w-6 text-brand-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Market Research",
    },
    {
      role: "Journalists & Content Researchers",
      desc: "Gather breaking news, statements, and visual verification from public accounts without tipping off subjects or leaving footprint trails.",
      icon: (
        <svg className="h-6 w-6 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      badge: "News & Investigation",
    },
    {
      role: "Discreet Everyday Browsers",
      desc: "Watch stories of friends, public figures, or favorite creators casually without logging into Instagram or triggering 'Seen' notifications.",
      icon: (
        <svg className="h-6 w-6 text-brand-ember" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      badge: "Private Browsing",
    },
  ];

  return (
    <section id="who-uses-it" className="py-12 sm:py-16 bg-surface-muted/40 border-y border-border/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-violet/10 px-3.5 py-1 text-xs font-bold text-brand-violet border border-brand-violet/20">
            Trusted By Millions
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Who Uses AnonLens?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/70">
            Designed for anyone who values digital privacy, discretion, and effortless access to public Instagram content.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {personas.map((p) => (
            <div
              key={p.role}
              className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orchid/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-muted border border-border/80">
                    {p.icon}
                  </div>
                  <span className="rounded-full bg-brand-orchid/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-orchid">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-orchid">
                  {p.role}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/65">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
