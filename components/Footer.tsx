const links = [
  { label: "الخصوصية", href: "#" },
  { label: "الشروط والأحكام", href: "#" },
  { label: "اتصل بنا", href: "#" },
  { label: "من نحن", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-stack-md mt-stack-lg">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="flex flex-col md:items-end gap-2">
          <div className="font-title-md text-title-md font-bold text-primary flex items-center gap-2">
            <img
              alt="Logo"
              className="h-6 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd8-SBKHxlL-9q54pJ7jtHZHQaSF-WR0gQk2b11JW3sfSiZCYbKYozXlWBr_FIwM28E-WJXmUM15z82x8F7E6TupgIQcUm2uX03_XKlluy5W9L8ig3Vh2YLYDuQ2qsKUh39Ayx-rcQXKnRExTTbHGOVoWmcUYEWJTv-cYa5tay-wyM9Vgetmgb10ioWOza4ZvDb4tCZ3_l8vh1uc-KbYMY_nU7bn102pWyfi-jFWyXVzVuwTv2lIL2Fode7ah_pbifIX4"
            />
            <span>دوس | Doos</span>
          </div>
          <p className="font-label-sm text-chrome-silver max-w-sm text-center md:text-right">
            نحن في دوس™ شغوفون بتحويل تجربة القيادة. يتيح لك تطبيقنا تخصيص صوت
            سيارتك، بينما يقدم فريقنا منتجات مبتكرة وعالية الجودة.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              className="font-label-sm text-on-tertiary-container hover:text-primary transition-colors hover:underline decoration-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">language</span>
          </a>
        </div>
        <p className="font-label-sm text-chrome-silver text-center md:text-right">
          © ٢٠٢٤ دوس. جميع الحقوق محفوظة. اختبر القوة القصوى.
        </p>
      </div>
    </footer>
  );
}
