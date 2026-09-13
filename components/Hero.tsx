import DownloadAppLink from "./DownloadAppLink";
import HeroVideo from "./HeroVideo";
import SocialLinks from "./SocialLinks";
import { PRODUCT_URL } from "@/lib/site";

const stats = [
  { value: "1996+", label: "متوافق مع كل السيارات بعد" },
  { value: "iOS · Android", label: "تطبيق واحد للمنصتين" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 pb-14 md:pt-[88px] md:pb-[72px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-line-bright bg-panel text-accent text-[13px] font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            جهاز واحد · صوت + فحص
          </div>
          <h1 className="text-[clamp(34px,5vw,60px)] leading-[1.15] font-bold tracking-[-0.01em] text-pretty mb-5">
            حوّل صوت سيارتك إلى سيارة أسطورية
            <br />
            <span className="text-accent">وافحصها من نفس الجهاز</span>
          </h1>
          <p className="text-lg leading-[1.75] text-ink-muted max-w-[540px] text-pretty mb-9">
            قطعة دوس OBDII توصّل سيارتك بتطبيق دوس: هدير محركات رياضية عالمية
            من سماعات سيارتك، وفحص كامل للأعطال والحساسات في الوقت الفعلي.
          </p>

          <div className="flex gap-3 flex-wrap">
            <DownloadAppLink className="inline-flex items-center gap-2.5 px-6 py-[15px] rounded-xl bg-accent hover:bg-accent-bright text-on-accent font-bold text-base transition-colors">
              <span className="material-symbols-rounded text-[22px]" aria-hidden>
                download
              </span>
              حمّل التطبيق مجاناً
            </DownloadAppLink>
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-[15px] rounded-xl bg-panel-raised border border-line-bright hover:border-accent text-ink font-semibold text-base transition-colors"
            >
              <span className="material-symbols-rounded text-[22px]" aria-hidden>
                storefront
              </span>
              اشترِ جهاز دوس
            </a>
          </div>

          <SocialLinks className="mt-7" />

          <div className="flex gap-7 mt-8 flex-wrap">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-[26px] font-bold">{stat.value}</div>
                <div className="text-[13px] text-ink-dim">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
