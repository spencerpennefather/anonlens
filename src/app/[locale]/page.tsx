import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { StoryTool } from "@/components/story-tool/StoryTool";
import { FeaturedCarousel } from "@/components/story-tool/FeaturedCarousel";
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
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

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
                {t("sub1")}
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

        {/* Trending Profiles Marquee */}
        <div className="mt-12 sm:mt-16 border-t border-border/60 pt-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-3">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-foreground/45">
              {t("trendingCaption")}
            </p>
          </div>
          <FeaturedCarousel />
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

      {/* ── 9. Contact ── */}
      <section id="contact" className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="inline-block rounded-full bg-brand-violet/10 px-3.5 py-1 text-xs font-bold text-brand-violet border border-brand-violet/20">
            Get In Touch
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t("contactTitle")}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto">
            {t("contactText")}
          </p>

          <div className="mt-8 relative overflow-hidden rounded-3xl border border-border/80 bg-surface p-6 sm:p-10 shadow-sm flex flex-col items-center">
            <div className="relative mb-6 sm:hidden w-full max-w-xs">
              <Image
                src="/contact-mobile.png"
                alt="Contact Mascot"
                width={1024}
                height={1536}
                className="w-full h-auto drop-shadow-sm rounded-2xl"
                sizes="100vw"
              />
            </div>
            <div className="relative mb-6 hidden sm:block max-w-lg">
              <Image
                src="/contact.png"
                alt="Contact Mascot"
                width={1944}
                height={809}
                className="w-full h-auto drop-shadow-sm rounded-2xl"
                sizes="(min-width: 640px) 512px, 100vw"
              />
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="relative overflow-hidden group brand-gradient inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-orchid/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-orchid/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer"
            >
              {/* Shimmer sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 relative z-10">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              <span className="relative z-10">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
