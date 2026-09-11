const steps = [
  {
    icon: "settings_input_component",
    title: "وصّل قطعة دوس",
    description:
      "ركّب القطعة في منفذ OBDII تحت الطبلون. متوافقة مع جميع السيارات المصنعة بعد 1996.",
  },
  {
    icon: "bluetooth",
    title: "اربط بالتطبيق",
    description:
      "افتح تطبيق دوس ويتصل تلقائياً عبر البلوتوث ليقرأ دورات المحرك والسرعة وبيانات الحساسات لحظياً.",
  },
  {
    icon: "volume_up",
    title: "دوس وانطلق!",
    description:
      "اختر صوت المحرك المفضل. يتحوّل نظام صوت سيارتك إلى زئير V8 أو توربو خارق مع كل دوسة بنزين.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line bg-canvas-deep">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-[88px]">
        <div className="max-w-[620px] mb-12">
          <div className="text-accent font-semibold text-sm mb-3">
            كيف يعمل دوس؟
          </div>
          <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.25] font-bold">
            ثلاث خطوات تفصلك عن تجربة قيادة أسطورية
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-7 rounded-2xl bg-panel border border-line-soft"
            >
              <div className="flex items-center justify-between mb-[22px]">
                <span
                  className="material-symbols-rounded text-[30px] text-accent"
                  aria-hidden
                >
                  {step.icon}
                </span>
                <span className="text-[13px] text-ink-faint font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2.5">{step.title}</h3>
              <p className="text-ink-muted leading-[1.7] text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
