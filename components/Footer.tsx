import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS, STORE_URL } from "@/lib/site";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

const siteLinks = [
  { label: "كيف يعمل", href: "/#how-it-works" },
  { label: "فحص السيارة", href: "/#diagnostics" },
  { label: "تحميل التطبيق", href: "/#download" },
];

const externalLinks = [
  { label: "المتجر الرسمي", href: STORE_URL },
  { label: "App Store", href: IOS_APP_URL },
  { label: "Google Play", href: ANDROID_APP_URL },
];

const YEAR = 2026;

const headingClassName = "font-bold mb-3.5 text-[15px]";
const linkClassName = "text-ink-muted hover:text-accent-bright transition-colors";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-deep">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img
            alt={SITE_NAME}
            className="h-8 w-auto block mb-4"
            src="/logo_header.png"
            width={720}
            height={307}
            loading="lazy"
            decoding="async"
          />
          <p className="text-ink-dim text-sm leading-[1.75] max-w-[320px]">
            نحن في دوس شغوفون بتحويل تجربة القيادة: صوت سيارة أسطورية وفحص كامل
            لسيارتك من قطعة واحدة وتطبيق واحد.
          </p>
        </div>

        <nav aria-label="روابط الموقع">
          <h2 className={headingClassName}>الموقع</h2>
          <div className="flex flex-col gap-2.5 text-sm">
            {siteLinks.map((link) => (
              <Link key={link.href} className={linkClassName} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="حمّل واشترِ">
          <h2 className={headingClassName}>حمّل واشترِ</h2>
          <div className="flex flex-col gap-2.5 text-sm">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                className={linkClassName}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav aria-label="تواصل معنا">
          <h2 className={headingClassName}>تواصل معنا</h2>
          <div className="flex flex-col gap-2.5 text-sm">
            {[...SOCIAL_LINKS].reverse().map((social) => (
              <a
                key={social.id}
                className={linkClassName}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label} <span dir="ltr">{social.handle}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-5 pb-8 border-t border-line flex justify-between gap-3 flex-wrap text-[13px] text-ink-faint">
        <span>© {YEAR} {SITE_NAME}. جميع الحقوق محفوظة.</span>
        <Link className="text-ink-dim hover:text-accent-bright transition-colors" href="/privacy">
          سياسة الخصوصية
        </Link>
      </div>
    </footer>
  );
}
