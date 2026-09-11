import { SOCIAL_LINKS } from "@/lib/site";

/** Row of square icon buttons linking to the Doos social accounts. */
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      <span className="text-[13px] text-ink-dim">تابعنا وتواصل معنا</span>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`${social.name} ${social.handle}`}
          aria-label={`${social.label} ${social.handle}`}
          className={`w-12 h-12 rounded-xl bg-panel-raised border border-line-bright inline-flex items-center justify-center transition-colors ${
            social.id === "whatsapp"
              ? "hover:border-whatsapp"
              : "hover:border-accent"
          }`}
        >
          <img
            src={social.icon}
            alt=""
            width={22}
            height={22}
            className="w-[22px] h-[22px] block"
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </div>
  );
}
