import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import {
  SITE_NAME,
  SITE_LOCALE,
  SITE_URL,
  OG_IMAGE,
} from "@/lib/site";

const PAGE_TITLE = `سياسة الخصوصية | ${SITE_NAME}`;

const PAGE_DESCRIPTION =
  "سياسة الخصوصية لتطبيق دوس: نحن لا نجمع أو نخزّن أو نشارك أي بيانات شخصية للمستخدم.";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Without these the page would inherit the home page's og:title and og:url.
  openGraph: {
    type: "article",
    url: "/privacy",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/privacy#webpage`,
  url: `${SITE_URL}/privacy`,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: "ar",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const sections = [
  {
    title: "مقدمة",
    body: `نرحب بك في سياسة الخصوصية الخاصة بتطبيق ${SITE_NAME}. نحن نُدرك أهمية خصوصيتك، ولذلك تم تصميم التطبيق منذ البداية بحيث لا يقوم بجمع أي بيانات شخصية عنك على الإطلاق. توضح هذه الصفحة بالتفصيل كيفية عمل التطبيق فيما يخص بياناتك.`,
  },
  {
    title: "لا نقوم بجمع أي بيانات شخصية",
    body: "لا يطلب منك تطبيق دوس إنشاء حساب، ولا يقوم بجمع أو تخزين أو معالجة اسمك، أو بريدك الإلكتروني، أو رقم هاتفك، أو موقعك الجغرافي، أو أي معلومة أخرى تُعرّف بهويتك. يمكنك استخدام التطبيق بالكامل دون تسجيل أي بيانات.",
  },
  {
    title: "أذونات البلوتوث و OBDII",
    body: "يطلب التطبيق إذن البلوتوث لغرض واحد فقط: الاتصال بقطعة OBDII المتصلة بسيارتك لقراءة بيانات المحرك (مثل دورات المحرك RPM والسرعة) بشكل مباشر ومحلي على جهازك، بهدف توليد صوت المحرك في الوقت الفعلي. هذه البيانات تُعالج على جهازك فقط، ولا يتم إرسالها أو رفعها أو تخزينها على أي خادم خاص بنا أو بأي طرف ثالث.",
  },
  {
    title: "لا تحليلات ولا إعلانات ولا تتبع",
    body: "لا يستخدم تطبيق دوس أي أدوات تحليل سلوك المستخدمين (Analytics)، ولا أدوات إعلانية، ولا أي نوع من أدوات التتبع الرقمي التي قد تجمع بيانات عن استخدامك للتطبيق أو جهازك.",
  },
  {
    title: "مشاركة البيانات مع أطراف ثالثة",
    body: "بما أننا لا نجمع أي بيانات شخصية أو بيانات استخدام من الأساس، فإننا لا نشارك أو نبيع أو نؤجّر أي بيانات لأي طرف ثالث، ولا لأي شركة تسويق أو إعلانات.",
  },
  {
    title: "خصوصية الأطفال",
    body: "تطبيق دوس آمن للاستخدام من قبل جميع الفئات العمرية، فهو لا يجمع أي بيانات شخصية من أي مستخدم، بما في ذلك الأطفال.",
  },
  {
    title: "التغييرات على سياسة الخصوصية",
    body: "قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس أي تطوير في التطبيق. سيتم نشر أي تحديث على هذه الصفحة مع تاريخ آخر تعديل أدناه.",
  },
  {
    title: "تواصل معنا",
    body: "إذا كانت لديك أي أسئلة بخصوص سياسة الخصوصية هذه، يمكنك التواصل معنا عبر البريد الإلكتروني: support@doosapp.com",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <TopNavBar />
      <main>
        <section className="py-stack-lg">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop max-w-3xl">
            <div className="text-center mb-16">
              <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-4">
                سياسة الخصوصية
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                لا نجمع أي بيانات شخصية من مستخدمي تطبيق دوس
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 mb-8 flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary glow-blue">
                verified_user
              </span>
              <p className="font-body-md text-on-surface">
                خصوصيتك مضمونة بالكامل: تطبيق دوس لا يجمع، ولا يخزّن، ولا
                يشارك أي بيانات شخصية عن مستخدميه.
              </p>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="glass-panel rounded-2xl p-8"
                >
                  <h2 className="font-title-md text-title-md text-primary-container mb-3">
                    {section.title}
                  </h2>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center font-label-sm text-on-surface-variant mt-10">
              آخر تحديث: 22 يوليو 2026
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
