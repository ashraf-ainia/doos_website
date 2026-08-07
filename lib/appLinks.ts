export const IOS_APP_ID = "6793287649";

export const IOS_APP_URL =
  "https://apps.apple.com/sa/app/%D8%AF%D9%88%D9%88%D9%88%D8%B3/id6793287649";

export const ANDROID_APP_ID = "com.vercel.doos";

export const ANDROID_APP_URL = `https://play.google.com/store/apps/details?id=${ANDROID_APP_ID}`;

export type MobilePlatform = "ios" | "android" | "other";

/**
 * Detects the store to send a phone/tablet user to. Returns "other" for
 * desktop, where we keep the in-page scroll to the QR section instead.
 */
export function detectMobilePlatform(): MobilePlatform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent;

  // iPadOS 13+ reports a desktop Safari UA, so fall back to touch support.
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";

  if (/Android/i.test(ua)) return "android";

  return "other";
}

export function storeUrlFor(platform: MobilePlatform): string | null {
  if (platform === "ios") return IOS_APP_URL;
  if (platform === "android") return ANDROID_APP_URL;
  return null;
}
