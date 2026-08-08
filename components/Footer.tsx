import Link from "next/link";
import { SITE_NAME, STORE_URL } from "@/lib/site";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

const siteLinks = [
  { label: "كيف يعمل", href: "/#how-it-works" },
  { label: "استخدامات OBDII", href: "/#obd-uses" },
  { label: "تحميل التطبيق", href: "/#download" },
];

const externalLinks = [
  { label: "المتجر الرسمي", href: STORE_URL },
  { label: "App Store", href: IOS_APP_URL },
  { label: "Google Play", href: ANDROID_APP_URL },
];

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-stack-lg mt-stack-lg">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row-reverse justify-between gap-10 md:gap-8">
          <div className="flex flex-col items-center md:items-end gap-3 max-w-sm mx-auto md:mx-0">
            <img
              alt={SITE_NAME}
              className="h-10 w-auto"
              src="/logo_header.png"
              width={720}
              height={307}
              loading="lazy"
              decoding="async"
            />
            <p className="font-label-sm text-chrome-silver text-center md:text-right leading-relaxed">
              نحن في دوس شغوفون بتحويل تجربة القيادة. يتيح لك تطبيقنا تخصيص صوت
              سيارتك، بينما يقدم فريقنا منتجات مبتكرة وعالية الجودة.
            </p>
          </div>

          <nav
            aria-label="روابط الموقع"
            className="flex flex-col sm:flex-row-reverse gap-8 sm:gap-16 text-center md:text-right"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                الموقع
              </h2>
              {siteLinks.map((link) => (
                <Link
                  key={link.label}
                  className="font-body-md text-on-surface hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                حمّل واشترِ
              </h2>
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  className="font-body-md text-on-surface hover:text-primary transition-colors"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="border-t border-outline-variant/20 mt-stack-md pt-stack-md flex flex-col sm:flex-row-reverse justify-between items-center gap-3">
          <p className="font-label-sm text-chrome-silver text-center">
            © {YEAR} {SITE_NAME}. جميع الحقوق محفوظة.
          </p>
          <Link
            className="font-label-sm text-chrome-silver hover:text-primary transition-colors"
            href="/privacy"
          >
            سياسة الخصوصية
          </Link>
        </div>
      </div>
    </footer>
  );
}
