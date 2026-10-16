import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    // Next.js 15 changed this default from "inline" to "attachment", which
    // breaks in-page <img> rendering for optimized images in some browsers.
    contentDispositionType: "inline",
  },
  async redirects() {
    return [
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
      { source: "/:locale/terms", destination: "/:locale/terms-and-conditions", permanent: true },
      { source: "/terms-condition", destination: "/terms-and-conditions", permanent: true },
      { source: "/:locale/terms-condition", destination: "/:locale/terms-and-conditions", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/:locale/about", destination: "/:locale/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/:locale/contact", destination: "/:locale/contact-us", permanent: true },
      // Locales that were removed after launch: send their old URLs to the
      // unprefixed English page instead of 404ing.
      { source: "/:removed(af|ak|am|as|az|be|bg|bm|bn|bo|bs|ca|co|cs|cy|da|de|ee|el|et|eu|fa|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|ha|he|hr|ht|hu|hy|id|ig|is|it|ja|jv|ka|kk|km|kn|ko|ku|ky|lb|lg|ln|lo|lt|lv|mg|mi|mk|ml|mn|mr|ms|mt|my|ne|nl|no|nr|ny|om|or|pa|pl|ps|qu|rn|ro|ru|rw|sd|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tn|to|tr|ts|ug|uk|ur|uz|ve|vi|wo|xh|yi|yo|zh-TW|zh|zu)/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
