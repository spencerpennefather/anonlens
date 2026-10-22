/**
 * Single source of truth for this site's brand identity.
 * Colours live in src/app/globals.css (:root tokens) and public/ holds the logo,
 * favicon and mascot art. See README "Branding configuration".
 */
export const MAIN_SITE_URL = "/#search";

export const BRAND = {
  name: "AnonLens",
  slug: "anonlens",
  domain: "anonlens.com",
  tagline: "Simple, Fast and Free Instagram Story Viewer",
  email: "info@anonlens.com",
  twitterHandle: "@anonlens",
  colors: {
    violet: "#7A4DF0",
    orchid: "#D93C93",
    ember: "#FF6A3D",
    honey: "#FFC04D",
    darkNeutral: "#170B1F",
    lightBackground: "#FBF5F8",
    primary: "#7A4DF0",
    secondary: "#D93C93",
    accent: "#FF6A3D",
    link: "#D93C93",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/anonlens/",
    facebook: "https://www.facebook.com/anonlens/",
    instagram: "https://www.instagram.com/anonlens/",
    pinterest: "https://www.pinterest.com/anonlens/",
    x: "https://x.com/anonlens",
    youtube: "https://youtube.com/@anonlens",
  },
} as const;

