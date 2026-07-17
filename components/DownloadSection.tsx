const stores = [
  {
    name: "App Store",
    tagline: "Download on the",
    qrAlt: "App Store QR",
    qrSrc: "/qr.png",
    glowClassName: "group-hover:shadow-[0_0_40px_rgba(0,153,255,0.3)]",
  },
  {
    name: "Google Play",
    tagline: "Get it on",
    qrAlt: "Google Play QR",
    qrSrc: "/qr.png",
    glowClassName: "group-hover:shadow-[0_0_40px_rgba(255,127,28,0.3)]",
  },
];

export default function DownloadSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="download">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.1),transparent_70%)]"></div>
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-12">
          حمل التطبيق الآن
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {stores.map((store) => (
            <div
              key={store.name}
              className="glass-panel p-10 rounded-[2.5rem] flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-300 group"
            >
              <div
                className={`bg-white p-4 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all ${store.glowClassName}`}
              >
                <img
                  alt={store.qrAlt}
                  className="w-48 h-48"
                  src={store.qrSrc}
                />
              </div>
              <div className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl w-full h-16 justify-center">
                <div className="text-right">
                  <p className="text-[10px] leading-none uppercase">
                    {store.tagline}
                  </p>
                  <p className="text-xl font-bold leading-none">{store.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <div className="bg-surface-container-high/50 backdrop-blur px-8 py-4 rounded-full border border-outline-variant inline-flex items-center gap-4">
            <span className="flex -space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary/30 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-xs">
                  person
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-secondary/30 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-xs">
                  person
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-tertiary/30 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-xs">
                  person
                </span>
              </div>
            </span>
            <p className="font-label-sm text-on-surface">
              انضم لأكثر من{" "}
              <span className="text-primary font-bold">100,000</span> مستخدم حول
              العالم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
