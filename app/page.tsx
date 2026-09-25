import { BenefitsSection } from "@/components/BenefitsSection";
import { CalloutSection } from "@/components/CalloutSection";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { PricingSection } from "@/components/PricingSection";
import { QuickContact } from "@/components/QuickContact";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { COMPANY, SERVICES } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const businessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: COMPANY.name,
      description:
        "Tư vấn thành lập doanh nghiệp, dịch vụ thuế, kế toán và nhân sự tại Đà Nẵng.",
      telephone: COMPANY.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address,
        addressLocality: COMPANY.city,
        addressCountry: "VN",
      },
      areaServed: COMPANY.city,
      ...(siteUrl ? { url: siteUrl.toString() } : {}),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dịch vụ Ngọc Hoàng",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.items.join("; "),
          },
        })),
      },
    },
  ],
})
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e")
  .replace(/&/g, "\\u0026")
  .replace(/\u2028/g, "\\u2028")
  .replace(/\u2029/g, "\\u2029");

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: businessJsonLd }} />
      <Header />
      <main id="main">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <CalloutSection />
        <BenefitsSection />
        <PricingSection />
        <WorkflowSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <QuickContact />
      <ConsultationModal />
    </>
  );
}
