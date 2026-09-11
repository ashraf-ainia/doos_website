import Link from "next/link";
import { PRODUCT_URL, SITE_NAME } from "@/lib/site";

const navLinks = [
  { label: "كيف يعمل", href: "/#how-it-works" },
  { label: "فحص السيارة", href: "/#diagnostics" },
  { label: "تحميل التطبيق", href: "/#download" },
];

export default function TopNavBar() {
  return (
    <nav className="sticky top-0 z-20 bg-canvas/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <img
            alt={SITE_NAME}
            className="h-9 w-auto block"
            src="/logo_header.png"
            width={720}
            height={307}
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[15px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-[#c4cdd6] hover:text-accent-bright transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          className="inline-flex items-center gap-2 px-3 sm:px-[18px] py-2.5 rounded-[10px] bg-accent hover:bg-accent-bright text-on-accent font-bold text-sm transition-colors"
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-rounded text-[20px]" aria-hidden>
            shopping_cart
          </span>
          <span className="hidden sm:inline">اشترِ الجهاز</span>
          <span className="sr-only sm:hidden">اشترِ الجهاز</span>
        </a>
      </div>
    </nav>
  );
}
