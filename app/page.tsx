import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ObdVersatility from "@/components/ObdVersatility";
import DownloadSection from "@/components/DownloadSection";
// import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo_header.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ar",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      operatingSystem: "iOS, Android",
      applicationCategory: "EntertainmentApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "SAR",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
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
        <Hero />
        <HowItWorks />
        <ObdVersatility />
        <DownloadSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
