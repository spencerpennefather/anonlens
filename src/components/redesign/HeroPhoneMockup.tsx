"use client";

import { useEffect, useState } from "react";

export function HeroPhoneMockup() {
  const [activeViewer, setActiveViewer] = useState(0);

  const viewers = [
    { username: "sarah_travels", time: "12m", avatar: "bg-gradient-to-tr from-pink-500 to-amber-400" },
    { username: "mike_creative", time: "28m", avatar: "bg-gradient-to-tr from-violet-500 to-indigo-500" },
    { username: "elena.design", time: "44m", avatar: "bg-gradient-to-tr from-teal-400 to-blue-500" },
    { username: "alex_photos", time: "1h", avatar: "bg-gradient-to-tr from-amber-400 to-orange-500" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveViewer((prev) => (prev + 1) % viewers.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [viewers.length]);

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] select-none">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-brand-violet via-brand-orchid to-brand-ember opacity-25 blur-2xl -z-10 animate-pulse"
      />

      {/* Phone Shell */}
      <div className="relative rounded-[40px] border-[6px] border-surface bg-[#120819] p-3 shadow-2xl shadow-brand-orchid/20 ring-1 ring-border/50">
        {/* Dynamic Island / Notch */}
        <div className="absolute left-1/2 top-4 h-4 w-24 -translate-x-1/2 rounded-full bg-black/80 z-20" />

        {/* Screen Content */}
        <div className="relative aspect-[9/18.5] overflow-hidden rounded-[30px] bg-gradient-to-b from-[#241334] to-[#140a1d] text-white flex flex-col justify-between p-4">
          {/* Top Story Progress Bars */}
          <div className="space-y-3 pt-2">
            <div className="flex gap-1">
              <div className="h-1 flex-1 rounded-full bg-white/90 overflow-hidden">
                <div className="h-full bg-brand-orchid w-full animate-pulse" />
              </div>
              <div className="h-1 flex-1 rounded-full bg-white/30" />
              <div className="h-1 flex-1 rounded-full bg-white/30" />
            </div>

            {/* Story Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full p-[2px] bg-gradient-to-tr from-brand-amber via-brand-orchid to-brand-violet">
                  <div className="h-full w-full rounded-full bg-surface-muted flex items-center justify-center text-xs font-bold text-foreground">
                    IG
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold leading-none">creator_lifestyle</p>
                  <p className="text-[10px] text-white/60">2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="text-xs">•••</span>
                <span className="text-sm font-bold">✕</span>
              </div>
            </div>
          </div>

          {/* Story Visual Centerpiece */}
          <div className="my-auto text-center px-4 py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-violet via-brand-orchid to-brand-ember shadow-lg shadow-brand-orchid/40">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-sm font-bold tracking-tight">Sunset over Lisbon 🌅</p>
            <p className="mt-1 text-xs text-white/70">Tap to replay public story</p>
          </div>

          {/* "Seen by" Bottom Sheet */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-3.5 backdrop-blur-md">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white/90">
                <svg className="h-3.5 w-3.5 text-brand-orchid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Seen by 1,482</span>
              </div>
              <span className="text-[10px] text-brand-honey font-medium">Live viewers</span>
            </div>

            {/* Viewer list items */}
            <div className="mt-2.5 space-y-1.5">
              {viewers.slice(0, 3).map((v, idx) => (
                <div
                  key={v.username}
                  className={`flex items-center justify-between rounded-lg px-2 py-1 text-xs transition-colors ${
                    idx === activeViewer ? "bg-white/10" : "opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`h-5 w-5 rounded-full shrink-0 ${v.avatar}`} />
                    <span className="truncate text-[11px] font-medium">{v.username}</span>
                  </div>
                  <span className="text-[10px] text-white/50">{v.time}</span>
                </div>
              ))}
            </div>

            {/* AnonLens Stealth Protection Badge */}
            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-violet/40 to-brand-orchid/40 border border-brand-orchid/50 px-2.5 py-1.5 text-center">
              <svg className="h-3.5 w-3.5 text-brand-honey shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[11px] font-bold text-white tracking-wide">
                You: 100% Invisible • Not on list
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
