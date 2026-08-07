export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://doosapp.com";

export const SITE_NAME = "دوس | Doos";

export const SITE_TITLE = "دوس | Doos - حول سيارتك إلى سيارة خارقة";

export const SITE_DESCRIPTION =
  "اختبر القوة القصوى مع تطبيق دوس. استمتع بهدير المحركات الرياضية العالمية مباشرة من نظام صوت سيارتك عبر تقنية OBDII الذكية. متوافق مع iOS وأندرويد.";

export const SITE_LOCALE = "ar_SA";

/** Brand colors used for the browser chrome and the PWA manifest. */
export const THEME_COLOR = "#0f141a";

/** Official storefront for the Doos OBDII hardware. */
export const STORE_URL = "https://salla.sa/d0o0s";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: SITE_TITLE,
} as const;
