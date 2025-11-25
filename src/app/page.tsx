import HeaderNavigation from "@/components/sections/header-navigation";
import HeroBanner from "@/components/sections/hero-banner";
import QuoteFormSidebar from "@/components/sections/quote-form-sidebar";
import FeaturesGrid from "@/components/sections/features-grid";
import AboutPromise from "@/components/sections/about-promise";
import TrustedServiceVideo from "@/components/sections/trusted-service-video";
import PremiumServices from "@/components/sections/premium-services";
import ClientRelationships from "@/components/sections/client-relationships";
import ResidentialCleaningDetail from "@/components/sections/residential-cleaning-detail";
import RestaurantCleaningCallout from "@/components/sections/restaurant-cleaning-callout";
import CommercialCleaningDetail from "@/components/sections/commercial-cleaning-detail";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import BeforeAfterGallery from "@/components/sections/before-after-gallery";
import OrganizationServices from "@/components/sections/organization-services";
import OfficeOrganizationImages from "@/components/sections/office-organization-images";
import EmployeeApplicationCta from "@/components/sections/employee-application-cta";
import FaqAccordion from "@/components/sections/faq-accordion";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <HeaderNavigation />
      
      <main>
        <section className="relative">
          <HeroBanner />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30">
            <div className="flex justify-end">
              <div className="w-full max-w-md">
                <QuoteFormSidebar />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <FeaturesGrid />
        </div>

        <AboutPromise />

        <TrustedServiceVideo />

        <PremiumServices />

        <ClientRelationships />

        <ResidentialCleaningDetail />

        <RestaurantCleaningCallout />

        <CommercialCleaningDetail />

        <TestimonialsCarousel />

        <BeforeAfterGallery />

        <OrganizationServices />

        <OfficeOrganizationImages />

        <EmployeeApplicationCta />

        <FaqAccordion />
      </main>

      <Footer />
    </div>
  );
}