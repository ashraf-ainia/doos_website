const highlights = [
  "نقل بيانات في الوقت الحقيقي (Real-time)",
  "تخصيص كامل لنغمات المحرك",
  "فحص وتشخيص من داخل التطبيق نفسه",
];

export default function SmartApp() {
  return (
    <section className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-[88px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[clamp(26px,3vw,36px)] leading-[1.3] font-bold mb-4">
            تطبيق ذكي يحلّل كل حركة
          </h2>
          <p className="text-ink-muted leading-[1.8] text-base text-pretty mb-6">
            يعتمد دوس على بروتوكول OBDII لنقل بيانات المحرك بدقة وبدون تأخير،
            فيعرف RPM وسرعة السيارة لحظياً ويولّد الصوت المناسب تماماً كما في
            سيارات السباق.
          </p>
          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-ink-soft text-[15px]"
              >
                <span
                  className="material-symbols-rounded text-[22px] text-accent"
                  aria-hidden
                >
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[20px] overflow-hidden border border-line-strong aspect-[4/3]">
          <img
            className="w-full h-full object-cover block"
            alt="الأنظمة الإلكترونية الداخلية للسيارة"
            src="/unnamed.jpg"
            width={1264}
            height={848}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
