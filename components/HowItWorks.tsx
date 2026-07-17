const steps = [
  {
    icon: "settings_input_component",
    title: "صل قطعة OBDII",
    description:
      "قم بتوصيل قطعة OBDII بمنفذ سيارتك المخصص. متوافقة مع جميع السيارات المصنعة بعد عام 1996.",
    cardClassName: "hover:border-primary-container/50 transition-all",
    iconWrapperClassName:
      "bg-surface-container-high border border-outline-variant",
    iconClassName: "text-primary",
  },
  {
    icon: "bluetooth",
    title: "اربط بالتطبيق",
    description:
      "افتح تطبيق دوس وسيقوم بالاتصال تلقائياً عبر البلوتوث لقراءة بيانات المحرك والسرعة في الوقت الفعلي.",
    cardClassName: "border-primary-container/30 relative overflow-hidden",
    iconWrapperClassName:
      "bg-primary-container shadow-[0_0_20px_rgba(0,153,255,0.4)]",
    iconClassName: "text-on-primary-container",
  },
  {
    icon: "volume_up",
    title: "دوس وانطلق!",
    description:
      "اختر صوت المحرك المفضل لديك. سيتحول نظام صوت سيارتك إلى زئير محرك V8 أو توربو خارق مع كل دوسة بنزين.",
    cardClassName: "hover:border-secondary-container/50 transition-all",
    iconWrapperClassName:
      "bg-surface-container-high border border-outline-variant",
    iconClassName: "text-secondary",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-stack-lg bg-surface-container-lowest"
      id="how-it-works"
    >
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface mb-4">
            كيف يعمل دوس؟
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            ثلاث خطوات تفصلك عن تجربة قيادة أسطورية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`glass-panel p-8 rounded-2xl flex flex-col items-center text-center group ${step.cardClassName}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${step.iconWrapperClassName}`}
              >
                <span
                  className={`material-symbols-outlined text-4xl ${step.iconClassName}`}
                >
                  {step.icon}
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-4">
                {step.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        {/* Technical Visual */}
        <div className="mt-20 glass-panel rounded-3xl overflow-hidden p-6 md:p-12 relative border-l-4 border-l-primary-container">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="order-2 md:order-1">
              <h3 className="font-headline-lg text-headline-lg text-primary-container mb-6">
                تطبيق ذكي يحلل كل حركة
              </h3>
              <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
                يعتمد نظامنا على بروتوكول OBDII المتطور لنقل المعلومات بدقة
                متناهية وبدون أي تأخير. هذا يسمح للتطبيق بمعرفة دورات المحرك
                (RPM) وسرعة السيارة بدقة وتوليد الصوت المناسب للحظة تماماً كما
                في سيارات السباق.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>نقل بيانات في الوقت الحقيقي (Real-time)</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span>تخصيص كامل لنغمات المحرك</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  className="w-full h-auto rounded-2xl glow-blue"
                  alt="رسم توضيحي للأنظمة الإلكترونية الداخلية للسيارة"
                  src="/unnamed.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
