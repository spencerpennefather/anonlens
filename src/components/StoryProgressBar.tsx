"use client";

import { useEffect, useState } from "react";

export interface StorySection {
  id: string;
  label: string;
}

const DEFAULT_SECTIONS: StorySection[] = [
  { id: "search", label: "Story Viewer" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "why-anonlens", label: "Why AnonLens" },
  { id: "who-uses-it", label: "Who Uses It" },
  { id: "privacy", label: "Privacy & Safety" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Get Started" },
  { id: "contact", label: "Contact" },
];

export function StoryProgressBar({
  sections = DEFAULT_SECTIONS,
}: {
  sections?: StorySection[];
}) {
  const [progresses, setProgresses] = useState<number[]>(() =>
    sections.map((_, i) => (i === 0 ? 100 : 0))
  );

  useEffect(() => {
    let ticking = false;

    function updateProgress() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const newProgresses = sections.map((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return 0;

        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const height = el.offsetHeight || 400;
        const bottom = top + height;

        // If bottom of page reached, fill all
        if (scrollY + windowHeight >= documentHeight - 20) {
          return 100;
        }

        // Section is above current viewport top
        if (scrollY >= bottom - 100) {
          return 100;
        }

        // Section is below current viewport bottom
        if (scrollY + 120 < top) {
          return 0;
        }

        // In section
        const progress = Math.min(
          100,
          Math.max(0, ((scrollY + 120 - top) / height) * 100)
        );
        return progress;
      });

      setProgresses(newProgresses);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Story Progress Navigation"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-1.5"
    >
      <div className="story-bar-container" role="tablist">
        {sections.map((sec, i) => {
          const prog = progresses[i] ?? 0;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              className="story-bar-segment group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orchid"
              aria-label={`Jump to ${sec.label}`}
              title={sec.label}
            >
              <span
                className="story-bar-fill"
                style={{ width: `${prog}%` }}
                aria-hidden="true"
              />
              {/* Premium hover preview tooltip */}
              <div className="pointer-events-none absolute -bottom-7 start-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-150 z-50 scale-95 group-hover:scale-100">
                <div className="rounded-md bg-surface px-2 py-0.5 text-[10px] font-bold text-foreground shadow-lg border border-border/80 whitespace-nowrap">
                  {sec.label}
                </div>
              </div>
              <span className="sr-only">
                {sec.label}: {Math.round(prog)}% viewed
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
