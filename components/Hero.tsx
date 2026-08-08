import DownloadAppLink from "./DownloadAppLink";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div className="text-right">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
            حول صوت سيارتك إلى{" "}
            <span className="text-primary-container glow-blue">
              سيارة خارقة
            </span>{" "}
            في ثوانٍ!
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl">
            اختبر القوة القصوى مع تطبيق دوس. استمتع بهدير المحركات الرياضية
            العالمية مباشرة من نظام صوت سيارتك عبر تقنية OBDII الذكية.
          </p>
          <div className="flex flex-col sm:flex-row-reverse gap-4">
            <DownloadAppLink className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <span>حمل التطبيق مجاناً</span>
              <span className="material-symbols-outlined">download</span>
            </DownloadAppLink>
            <a
              className="border border-outline px-10 py-4 rounded-xl font-bold text-center hover:bg-surface-variant/30 transition-all flex items-center justify-center gap-3"
              href="https://salla.sa/d0o0s/%D8%AC%D9%87%D8%A7%D8%B2-%D8%AF%D9%88%D9%88%D9%88%D8%B3/p1860491450"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">
                storefront
              </span>
              <span className="font-body-md text-on-surface">
                اشترِ جهاز Doos الآن من{" "}
                <span className="font-bold text-secondary">متجرنا الرسمي</span>
              </span>
            </a>
          </div>
        </div>
        <Reveal className="relative">
          <img
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,153,255,0.2)] transform md:scale-110"
            alt="سيارة رياضية عالية الأداء تمثل قوة وسرعة تطبيق دوس"
            src="/hero-car.png"
            width={512}
            height={343}
            fetchPriority="high"
            decoding="async"
          />
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
        </Reveal>
      </div>
    </section>
  );
}
