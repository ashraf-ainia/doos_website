/**
 * Absolute origin used for canonicals, og:image, sitemap and JSON-LD. It must
 * match the host the site is actually served from — social crawlers fetch
 * og:image from here, and a wrong origin means no share preview at all.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is the canonical one.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's production domain, which
 *      automatically becomes the custom domain when one is attached.
 *   3. The current production deployment.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  return "https://doos-sigma.vercel.app";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "دوس | Doos";

export const SITE_TITLE = "دوس | Doos - حول سيارتك إلى سيارة أسطورية";

export const SITE_DESCRIPTION =
  "اختبر القوة القصوى مع تطبيق دوس. استمتع بهدير المحركات الرياضية العالمية مباشرة من نظام صوت سيارتك عبر تقنية OBDII الذكية. متوافق مع iOS وأندرويد.";

export const SITE_LOCALE = "ar_SA";

/** Brand colors used for the browser chrome and the PWA manifest. */
export const THEME_COLOR = "#0d1218";

/** Official storefront for the Doos OBDII hardware. */
export const STORE_URL = "https://salla.sa/d0o0s";

/**
 * JPEG rather than PNG: it is a quarter of the weight (44KB vs 187KB) and is
 * the format every scraper — WhatsApp included — handles without surprises.
 */
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: SITE_TITLE,
} as const;

/** Direct product page for the Doos OBDII device on Salla. */
export const PRODUCT_URL = "https://salla.sa/d0o0s/جهاز-دوس/p1463557956";

export const WHATSAPP_NUMBER_DISPLAY = "0552137098";
export const WHATSAPP_URL = "https://wa.me/966552137098";

export const SOCIAL_LINKS = [
  {
    id: "tiktok",
    name: "TikTok",
    label: "تيك توك",
    handle: "@doos_device",
    href: "https://www.tiktok.com/@doos_device",
    icon: "/icons/tiktok.svg",
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "انستقرام",
    handle: "@D0ooo0s",
    href: "https://www.instagram.com/D0ooo0s",
    icon: "/icons/instagram.svg",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    label: "واتساب",
    handle: WHATSAPP_NUMBER_DISPLAY,
    href: WHATSAPP_URL,
    icon: "/icons/whatsapp.svg",
  },
] as const;
/**
 * Google Analytics 4 measurement ID. Loaded through `@next/third-parties`,
 * which injects gtag.js after hydration so it never blocks first paint.
 */
export const GA_MEASUREMENT_ID = "G-G4LCC5850W";
