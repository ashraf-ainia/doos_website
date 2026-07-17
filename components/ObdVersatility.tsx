const uses = [
  {
    icon: "build",
    title: "تشخيص الأعطال",
    description:
      "اقرأ رموز الأعطال (DTC) وامسحها بنفسك، واعرف سبب إضاءة لمبة فحص المحرك قبل زيارة الورشة.",
  },
  {
    icon: "monitoring",
    title: "بيانات حية من المحرك",
    description:
      "راقب حرارة المحرك، ضغط الهواء، جهد البطارية وغيرها من الحساسات في الوقت الفعلي.",
  },
  {
    icon: "local_gas_station",
    title: "استهلاك الوقود",
    description:
      "تابع معدل استهلاك الوقود وأسلوب قيادتك للحصول على أداء أفضل وتكلفة أقل.",
  },
];

const apps = ["Torque", "Car Scanner", "OBD Fusion", "DashCommand"];

export default function ObdVersatility() {
  return (
    <section className="py-24 relative overflow-hidden" id="obd-uses">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-4">
            قطعة واحدة.. استخدامات بلا حدود
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            قطعة OBDII ليست مخصصة لتطبيق دوس فقط، فهي تعمل بالمعيار العالمي
            الموحد لتشخيص السيارات، ويمكنك ربطها بأي تطبيق فحص وتشخيص آخر على
            جوالك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uses.map((use) => (
            <div
              key={use.title}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center hover:border-secondary-container/50 transition-all group"
            >
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-6 border border-outline-variant group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  {use.icon}
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-4">
                {use.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {use.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 glass-panel rounded-3xl p-6 md:p-10 border-l-4 border-l-secondary-container">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <h3 className="font-headline-lg text-headline-lg text-secondary-container mb-4">
                متوافقة مع تطبيقات التشخيص المشهورة
              </h3>
              <p className="font-body-lg text-on-surface-variant max-w-2xl">
                لأن القطعة تدعم بروتوكولات OBDII القياسية عبر البلوتوث، يمكنك
                استخدامها مع تطبيقات الفحص المعروفة دون أي إعدادات إضافية —
                اشتريتها مرة واحدة، واستفدت منها في كل شيء.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              {apps.map((app) => (
                <span
                  key={app}
                  className="bg-surface-container-high px-5 py-2.5 rounded-full border border-outline-variant text-on-surface font-bold text-sm"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
