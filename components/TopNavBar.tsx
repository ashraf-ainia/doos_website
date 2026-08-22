import DownloadAppLink from "./DownloadAppLink";

export default function TopNavBar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 shadow-md top-0 sticky z-50">
      <div className="flex flex-row-reverse justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <img
            alt="دوس | Doos"
            className="h-12 w-auto"
            src="/logo_header.png"
            width={720}
            height={307}
            fetchPriority="high"
            decoding="async"
          />
          <span className="font-display-lg text-headline-lg font-black tracking-tighter text-primary dark:text-primary-container hidden sm:block"></span>
        </div>
        <div className="flex flex-row-reverse items-center gap-2 md:gap-8">
          <a
            className="relative flex items-center justify-center w-10 h-10 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 transition-colors"
            href="https://salla.sa/d0o0s/جهاز-دوس/p1463557956"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تسوق الآن من متجرنا على سلة"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
          <div className="hidden md:flex flex-row-reverse gap-8 items-center">
            <a
              className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
              href="#how-it-works"
            >
              كيف يعمل
            </a>
            <DownloadAppLink className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-95 active:scale-90 duration-200 transition-all shadow-[0_0_15px_rgba(0,153,255,0.4)]">
                تحميل التطبيق
              </span>
            </DownloadAppLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
