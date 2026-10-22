"use client";

export function BackToTopButton({ label = "Back to top" }: { label?: string }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 hover:text-brand-orchid transition-colors cursor-pointer"
      aria-label={label}
    >
      <span>{label}</span>
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
