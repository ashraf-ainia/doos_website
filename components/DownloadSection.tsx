import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

const stores = [
  { name: "App Store", tagline: "Download on the", url: IOS_APP_URL, icon: "ios" },
  { name: "Google Play", tagline: "Get it on", url: ANDROID_APP_URL, icon: "play_arrow" },
];

export default function DownloadSection() {
  return (
    <section id="download" className="border-t border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-[88px] text-center">
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold mb-3">
          حمّل التطبيق الآن
        </h2>
        <p className="text-ink-muted text-base mb-9">
          تطبيق واحد للصوت والفحص، متوفر على iOS وأندرويد
        </p>
        <div className="flex justify-center gap-3.5 flex-wrap">
          {stores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              aria-label={`${store.tagline} ${store.name}`}
              className="inline-flex items-center gap-3 px-[22px] py-3 rounded-xl bg-ink hover:bg-white text-canvas min-w-[190px] transition-colors"
            >
              <span className="material-symbols-rounded text-[28px]" aria-hidden>
                {store.icon}
              </span>
              <span className="text-left leading-[1.15]">
                <span className="block text-[11px] font-medium">{store.tagline}</span>
                <span className="block text-lg font-bold">{store.name}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
