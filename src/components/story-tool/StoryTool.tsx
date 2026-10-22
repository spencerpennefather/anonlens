"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { validateUsername } from "@/lib/story/validation";
import { MAIN_SITE_URL } from "@/lib/brand";

/** Dispatched by anything outside this component (e.g. the featured-accounts carousel or CTA) that wants to trigger a search. */
export const SEARCH_USERNAME_EVENT = "iv:search-username";

export function StoryTool() {
  const t = useTranslations("StoryTool");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [redirectUsername, setRedirectUsername] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e?: FormEvent) {
    if (e) e.preventDefault();
    const raw = input.trim();
    if (!raw) {
      setFormError(t("validationFallback"));
      inputRef.current?.focus();
      return;
    }

    let cleanUser = raw.replace(/^@/, "");
    const urlMatch = cleanUser.match(/(?:instagram\.com\/|instagr\.am\/)([a-zA-Z0-9._]+)/i);
    if (urlMatch) {
      cleanUser = urlMatch[1];
    }

    const { valid, normalized } = validateUsername(cleanUser);
    if (!valid && !cleanUser.match(/^[a-zA-Z0-9._]{1,30}$/)) {
      setFormError(t("validationFallback"));
      inputRef.current?.focus();
      return;
    }

    const finalUsername = normalized || cleanUser;
    setFormError(null);
    setStatus("loading");
    setRedirectUsername(finalUsername);

    setTimeout(() => {
      window.location.assign(MAIN_SITE_URL);
    }, 450);
  }

  useEffect(() => {
    function onExternalSearch(e: Event) {
      const username = (e as CustomEvent<string>).detail;
      if (typeof username !== "string") return;
      const clean = username.trim().replace(/^@/, "");
      setInput(clean);
      setRedirectUsername(clean);
      setStatus("loading");
      setTimeout(() => {
        window.location.assign(MAIN_SITE_URL);
      }, 450);
    }
    window.addEventListener(SEARCH_USERNAME_EVENT, onExternalSearch);
    return () => window.removeEventListener(SEARCH_USERNAME_EVENT, onExternalSearch);
  }, []);

  const popularExamples = ["cristiano", "leomessi", "selenagomez", "kyliejenner"];

  function handleQuickSelect(username: string) {
    setInput(username);
    setFormError(null);
    setRedirectUsername(username);
    setStatus("loading");
    setTimeout(() => {
      window.location.assign(MAIN_SITE_URL);
    }, 450);
  }

  return (
    <div className="w-full">
      {/* Outer Glow Card Container */}
      <div className="relative rounded-3xl p-1.5 sm:p-2 bg-gradient-to-r from-brand-violet/30 via-brand-orchid/30 to-brand-ember/30 shadow-xl shadow-brand-orchid/10 transition-all focus-within:shadow-2xl focus-within:shadow-brand-orchid/20">
        <form
          action={MAIN_SITE_URL}
          method="GET"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 sm:flex-row relative rounded-2xl bg-surface p-1.5"
          aria-label={t("searchAriaLabel")}
        >
          <div className="relative flex-1 flex items-center">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-foreground/45">
              <span className="font-bold text-lg text-brand-orchid">@</span>
            </div>
            <input
              ref={inputRef}
              id="hero-search-input"
              type="text"
              inputMode="text"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (formError) setFormError(null);
              }}
              placeholder={t("inputPlaceholder")}
              aria-label={t("inputAriaLabel")}
              className="w-full rounded-xl bg-transparent ps-10 pe-10 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-foreground outline-none placeholder:text-foreground/45"
            />
            {input && (
              <button
                type="button"
                onClick={() => {
                  setInput("");
                  inputRef.current?.focus();
                }}
                aria-label="Clear input"
                className="absolute inset-y-0 end-0 flex items-center pe-3 text-foreground/40 hover:text-foreground cursor-pointer"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-muted text-xs font-bold">
                  ✕
                </span>
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="relative overflow-hidden group brand-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-md shadow-brand-orchid/25 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orchid/40 hover:opacity-95 active:scale-[0.98] disabled:opacity-85 cursor-pointer"
          >
            {/* Shimmer sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />

            {status === "loading" ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span className="relative z-10">{t("viewStories")}</span>
              </>
            ) : (
              <>
                <span className="relative z-10">{t("viewStories")}</span>
                <svg
                  className="relative z-10 h-4 w-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Popular Try Quick Chips */}
      <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs">
        <span className="text-foreground/50 font-medium">Try:</span>
        {popularExamples.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => handleQuickSelect(name)}
            className="rounded-full bg-surface border border-border/80 px-2.5 py-0.5 text-[11px] font-semibold text-foreground/70 transition-all hover:border-brand-orchid/40 hover:bg-brand-orchid/5 hover:text-brand-orchid active:scale-95 cursor-pointer shadow-2xs"
          >
            @{name}
          </button>
        ))}
      </div>

      {status === "loading" && redirectUsername && (
        <div
          role="status"
          aria-live="polite"
          className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-orchid/40 bg-surface p-4 text-foreground shadow-md animate-pulse"
        >
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand-orchid border-t-transparent shrink-0" />
          <span className="text-sm font-semibold text-foreground">
            Opening @{redirectUsername} on instaviewstories.com...
          </span>
        </div>
      )}

      {formError && (
        <div role="alert" className="mt-2.5 flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/30 px-3.5 py-2 text-xs font-semibold text-red-600 dark:text-red-400">
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 8v4m0 4h.01" />
          </svg>
          <span>{formError}</span>
        </div>
      )}

      <p className="mt-2.5 text-xs text-foreground/50 text-center lg:text-start">{t("disclaimer")}</p>
    </div>
  );
}
