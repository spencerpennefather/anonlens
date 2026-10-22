import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { StoryTool } from "@/components/story-tool/StoryTool";
import { HeroPhoneMockup } from "@/components/redesign/HeroPhoneMockup";
import { FeatureRail } from "@/components/redesign/FeatureRail";
import { HowItWorks } from "@/components/redesign/HowItWorks";
import { WhyAnonLens } from "@/components/redesign/WhyAnonLens";
import { WhoUsesIt } from "@/components/redesign/WhoUsesIt";
import { PrivacySection } from "@/components/redesign/PrivacySection";
import { FinalCta } from "@/components/redesign/FinalCta";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import {
  webPageSchema,
  webApplicationSchema,
  howToSchema,
  faqPageSchema,
} from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPathname } from "@/i18n/navigation";
import { buildLanguageAlternates } from "@/i18n/alternates";
import { getOgLocale } from "@/i18n/locales";
import { SITE_NAME } from "@/lib/site";

type Props = PageProps<"/[locale]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return buildMetadata({
    title: t("metaTitle", { siteName: SITE_NAME }),
    description: t("metaDescription"),
    path: "/",
    localizedPath: getPathname({ href: "/", locale }),
    languageAlternates: buildLanguageAlternates("/"),
    ogLocale: getOgLocale(locale),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  const homeFaqs = Array.from({ length: 12 }, (_, i) => i + 1).map((n) => ({
    question: t(`faq${n}Q` as "faq1Q"),
    answer: t(`faq${n}A` as "faq1A"),
  }));

  const howToSteps = [
    {
      name: t("step1Title"),
      text: t("step1Text"),
    },
    {
      name: t("step2Title"),
      text: t("step2Text"),
    },
    {
      name: t("step3Title"),
      text: t("step3Text"),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: `${SITE_NAME}: Instagram Story Viewer`,
            description: t("metaDescription"),
            path: `/${locale}/`,
          }),
          webApplicationSchema(),
          howToSchema(howToSteps),
          faqPageSchema(homeFaqs),
        ]}
      />

      {/* ── 1. Hero (H1, Search form, Phone illustration with 'Seen by' list) ── */}
      <section id="search" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
        {/* Ambient background glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[340px] w-[640px] -translate-x-1/2 rounded-full opacity-20 blur-3xl brand-gradient -z-10 sm:-top-36 sm:h-[480px] sm:w-[920px]"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Left Column: Heading, Badges, Search Form */}
            <div className="w-full text-center lg:text-start flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-border/80 px-3.5 py-1 text-xs font-semibold text-brand-orchid shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-brand-orchid animate-ping" />
                <span>{t("heroEyebrow")}</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {t("h1")}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-foreground/75 max-w-xl mx-auto lg:ms-0 lg:me-auto">
                {t.rich("sub1", {
                  link: (chunks) => (
                    <a
                      href="http://instaviewstories.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-orchid hover:underline underline-offset-4 transition-colors"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>

              {/* Feature Badges */}
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/75">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t("badgeFree")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/75">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t("badgeNoRegistration")}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/75">
                  <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-orchid">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  100% Invisible
                </span>
              </div>

              {/* Main Search Input & CTA Form */}
              <div className="mt-8 max-w-xl mx-auto lg:ms-0 lg:me-auto">
                <StoryTool />
              </div>
            </div>

            {/* Right Column: Phone Mockup with 'Seen by' List */}
            <div className="w-full lg:w-auto shrink-0 flex justify-center">
              <HeroPhoneMockup />
            </div>
          </div>
        </div>

      </section>

      {/* ── 2. Features as a horizontal rail of six story-frames ── */}
      <FeatureRail />

      {/* ── 3. How it works (3 steps) ── */}
      <HowItWorks />

      {/* ── 4. Why AnonLens (6 reasons + comparison table) ── */}
      <WhyAnonLens />

      {/* ── 5. Who uses it ── */}
      <WhoUsesIt />

      {/* ── 6. Privacy & Safety ── */}
      <PrivacySection />

      {/* ── 7. FAQ (accordion) ── */}
      <section id="faq" className="py-12 sm:py-16 bg-surface-muted/30 border-y border-border/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Faq items={homeFaqs} title={t("faqTitle")} subtitle={t("faqIntro")} />
        </div>
      </section>

      {/* ── 8. Final CTA (scrolls up to search and focuses input) ── */}
      <FinalCta />
    </>
  );
}
