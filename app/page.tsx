import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ObdVersatility from "@/components/ObdVersatility";
import DownloadSection from "@/components/DownloadSection";
// import Footer from "@/components/Footer";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  STORE_URL,
  OG_IMAGE,
} from "@/lib/site";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appLinks";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo_header.png`,
        width: 720,
        height: 307,
      },
      image: { "@id": `${SITE_URL}/#logo` },
      sameAs: [STORE_URL, IOS_APP_URL, ANDROID_APP_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "ar",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "ar",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#logo` },
      about: { "@id": `${SITE_URL}/#app` },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      operatingSystem: "iOS, Android",
      applicationCategory: "EntertainmentApplication",
      inLanguage: "ar",
      image: `${SITE_URL}${OG_IMAGE.url}`,
      downloadUrl: [IOS_APP_URL, ANDROID_APP_URL],
      installUrl: [IOS_APP_URL, ANDROID_APP_URL],
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
