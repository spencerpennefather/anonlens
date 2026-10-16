import { BRAND } from "@/lib/brand";

export const SITE_NAME = BRAND.name;
export const SITE_TAGLINE = BRAND.tagline;
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const SITE_URL = (
  rawSiteUrl && !rawSiteUrl.includes("vercel.app") && !rawSiteUrl.includes("netlify.app") && !rawSiteUrl.includes("localhost")
    ? rawSiteUrl
    : `https://${BRAND.domain}`
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "View publicly available Instagram Stories anonymously. Enter a public Instagram username: no login, no password, no account required.";

export const SITE_SHORT_DESCRIPTION =
  "Anonymous Instagram Story viewer. No login required.";

export const TWITTER_HANDLE = BRAND.twitterHandle;

export const CONTACT_EMAIL = BRAND.email;

export const NAV_LINKS = [
  { href: "/#how-it-works", key: "howItWorks" },
  { href: "/#about", key: "about" },
  { href: "/#faq", key: "faq" },
  { href: "/#contact", key: "contact" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { href: "/about-us/", key: "linkAbout" },
  { href: "/contact-us/", key: "linkContact" },
  { href: "/privacy-policy/", key: "linkPrivacy" },
  { href: "/terms-and-conditions/", key: "linkTerms" },
  { href: "/disclaimer/", key: "linkDisclaimer" },
] as const;

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: BRAND.social.linkedin },
  { name: "Facebook", href: BRAND.social.facebook },
  { name: "Instagram", href: BRAND.social.instagram },
  { name: "Pinterest", href: BRAND.social.pinterest },
  { name: "X", href: BRAND.social.x },
  { name: "YouTube", href: BRAND.social.youtube },
] as const;
