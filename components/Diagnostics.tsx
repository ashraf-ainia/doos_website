import DiagnosticsPhone from "./DiagnosticsPhone";

const features = [
  {
    icon: "build",
    title: "تشخيص الأعطال",
    description:
      "اقرأ رموز الأعطال (DTC) وامسحها بنفسك، واعرف سبب لمبة فحص المحرك قبل الورشة.",
  },
  {
    icon: "monitoring",
    title: "بيانات حية من المحرك",
    description:
      "حرارة المحرك، جهد البطارية، ضغط الهواء وغيرها من الحساسات في الوقت الفعلي.",
  },
  {
    icon: "local_gas_station",
    title: "استهلاك الوقود",
    description: "تابع معدل الاستهلاك وأسلوب قيادتك لأداء أفضل وتكلفة أقل.",
  },
];

export default function Diagnostics() {
  return (
    <section
      id="diagnostics"
      className="border-t border-line bg-canvas-deep relative overflow-hidden"
    >
      <div className="absolute inset-0 diagnostics-glow" aria-hidden />
      <div className="relative max-w-[1200px] mx-auto px-6 py-16 md:py-[88px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">
        <div>
          <div className="text-accent font-semibold text-sm mb-3">فحص السيارة</div>
          <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.25] font-bold text-pretty mb-4">
            دوس هو جهاز فحص سيارتك
          </h2>
          <p className="text-ink-muted leading-[1.8] text-base text-pretty mb-8">
            ما تحتاج تطبيقات فحص خارجية. تطبيق دوس نفسه يقرأ أعطال سيارتك،
            يراقب الحساسات لحظياً، ويتابع استهلاك الوقود — كل شيء من نفس القطعة
            ونفس التطبيق.
          </p>
          <div className="grid gap-3.5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-[18px] rounded-[14px] bg-panel border border-line-soft"
              >
                <span
                  className="material-symbols-rounded text-[26px] text-accent shrink-0"
                  aria-hidden
                >
                  {feature.icon}
                </span>
                <div>
                  <div className="font-bold text-[17px] mb-1">{feature.title}</div>
                  <div className="text-ink-muted text-sm leading-[1.65]">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <DiagnosticsPhone />
        </div>
      </div>
    </section>
  );
}
