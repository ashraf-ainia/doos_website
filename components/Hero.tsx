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
            <a
              className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-3"
              href="#download"
            >
              <span>حمل التطبيق مجاناً</span>
              <span className="material-symbols-outlined">download</span>
            </a>
            <a
              className="border border-outline px-10 py-4 rounded-xl font-bold text-center hover:bg-surface-variant/30 transition-all"
              href="#how-it-works"
            >
              كيف يعمل؟
            </a>
          </div>
        </div>
        <Reveal className="relative">
          <img
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,153,255,0.2)] transform md:scale-110"
            alt="سيارة رياضية عالية الأداء تمثل قوة وسرعة تطبيق دوس"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0me5-VqBsiB3MEudQCH2BMUSjnpTlu2M7Gxxy17hQ8NRhfi7XnYcAMeomXYAcbQ1imppRAyALgqxsihyP9ntG4riU5dZAKUpwKWI8SaJtldUOSkgBwXGAEErMiYr1laNHmbk_eTQHJWP_LfRygsLxAi2_uygBeEBiIP6qEiM5X5u41cOXOV9QOXeKiQmMRMgCwPHXS3m8EUynAqCkVYx3Vf_1wtc9Wh7sSGkyzG2RzcUIEzoH0DxjNkdYdEcWy0ITVQZVA8utDFUJfqk"
          />
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
        </Reveal>
      </div>
    </section>
  );
}
