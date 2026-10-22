"use client";

import { useState } from "react";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, type FaqItem } from "@/lib/seo/schema";

export function Faq({
  items,
  title,
  subtitle,
}: {
  items: FaqItem[];
  title: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="w-full">
      <JsonLd data={faqPageSchema(items)} />
      <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-10">
        <span className="inline-block rounded-full bg-brand-orchid/10 px-3.5 py-1 text-xs font-bold text-brand-orchid border border-brand-orchid/20">
          Frequently Asked Questions
        </span>
        <h2 id="faq-heading" className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-foreground/70">{subtitle}</p>
        )}
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {items.map((item, index) => {
          const open = openIndex === index;
          const contentId = `faq-content-${index}`;
          const triggerId = `faq-trigger-${index}`;

          return (
            <div
              key={item.question}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open
                  ? "border-brand-orchid/40 bg-surface shadow-md shadow-brand-orchid/5"
                  : "border-border/80 bg-surface hover:border-brand-orchid/30"
              }`}
            >
              <button
                id={triggerId}
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={contentId}
                className="flex w-full items-center justify-between gap-4 p-5 text-start transition-colors cursor-pointer"
              >
                <span className="text-base font-bold text-foreground">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted border border-border/80 text-foreground/60 transition-transform duration-200 ${
                    open ? "rotate-180 bg-brand-orchid text-white border-brand-orchid" : ""
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="px-5 pb-5 pt-1 text-sm leading-relaxed text-foreground/70 border-t border-border/40"
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

