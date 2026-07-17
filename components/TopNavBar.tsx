export default function TopNavBar() {
  return (
    <nav className="bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 shadow-md top-0 sticky z-50">
      <div className="flex flex-row-reverse justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <img
            alt="دوس | Doos Logo"
            className="h-12 w-auto"
            src="/logo_header.png"
          />
          <span className="font-display-lg text-headline-lg font-black tracking-tighter text-primary dark:text-primary-container hidden sm:block"></span>
        </div>
        <div className="hidden md:flex flex-row-reverse gap-8 items-center">
          <a
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#how-it-works"
          >
            كيف يعمل
          </a>
          <a
            className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface transition-colors"
            href="#download"
          >
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-95 active:scale-90 duration-200 transition-all shadow-[0_0_15px_rgba(0,153,255,0.4)]">
              تحميل التطبيق
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
