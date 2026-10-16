/**
 * Single source of truth for this site's brand identity.
 * Colours live in src/app/globals.css (:root tokens) and public/ holds the logo,
 * favicon and mascot art. See README "Branding configuration".
 */
export const BRAND = {
  name: "AnonLens",
  slug: "anonlens",
  domain: "anonlens.com",
  tagline: "Simple, Fast and Free Instagram Story Viewer",
  email: "info@anonlens.com",
  twitterHandle: "@anonlens",
  colors: { primary: "#d92876", secondary: "#d33026", accent: "#76f916", link: "#ed3a8d" },
  social: {
    linkedin: "https://www.linkedin.com/company/anonlens/",
    facebook: "https://www.facebook.com/anonlens/",
    instagram: "https://www.instagram.com/anonlens/",
    pinterest: "https://www.pinterest.com/anonlens/",
    x: "https://x.com/anonlens",
    youtube: "https://youtube.com/@anonlens",
  },
} as const;
