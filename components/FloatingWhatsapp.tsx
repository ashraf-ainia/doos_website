import { WHATSAPP_URL } from "@/lib/site";

export default function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-30 inline-flex items-center gap-2 px-[18px] py-3 rounded-full bg-whatsapp hover:bg-whatsapp-bright text-on-whatsapp font-bold text-sm shadow-[0_12px_30px_-8px_rgba(37,211,102,.6)] transition-colors"
    >
      <span className="material-symbols-rounded text-[20px]" aria-hidden>
        chat
      </span>
      تواصل واتساب
    </a>
  );
}
