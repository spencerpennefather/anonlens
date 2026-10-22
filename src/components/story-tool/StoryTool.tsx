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

  return (
    <div className="w-full">
      <form
        action={MAIN_SITE_URL}
        method="GET"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row relative"
        aria-label={t("searchAriaLabel")}
      >
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 text-foreground/40">
            <span className="font-semibold text-base">@</span>
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
            className="w-full rounded-2xl border border-border bg-surface ps-10 pe-5 py-4 text-base text-foreground shadow-sm outline-none ring-brand-orchid/30 transition focus:border-brand-orchid focus:ring-4"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="brand-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-md shadow-brand-orchid/20 transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-80 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>{t("viewStories")}</span>
            </>
          ) : (
            <>
              <span>{t("viewStories")}</span>
              <svg
                className="h-4 w-4 rtl:rotate-180"
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

      {status === "loading" && redirectUsername && (
        <div
          role="status"
          aria-live="polite"
          className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-orchid/40 bg-surface p-4 text-foreground shadow-sm"
        >
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand-orchid border-t-transparent shrink-0" />
          <span className="text-sm font-semibold text-foreground">
            Opening @{redirectUsername} on instaviewstories.com...
          </span>
        </div>
      )}

      {formError && (
        <p role="alert" className="mt-2 text-sm font-medium text-red-600 dark:text-red-400">
          {formError}
        </p>
      )}

      <p className="mt-3 text-xs text-foreground/50">{t("disclaimer")}</p>
    </div>
  );
}
