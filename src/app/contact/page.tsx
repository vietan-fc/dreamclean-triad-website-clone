import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import ContactInfoSection from "@/components/sections/contact-info-section";
import QuoteFormSidebar from "@/components/sections/quote-form-sidebar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <HeaderNavigation />
      
      <main>
        <div className="bg-primary py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reach Out to Us</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Connect with Dream & Clean for all your home and business cleaning requirements.
            </p>
          </div>
        </div>

        <ContactInfoSection />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-semibold text-primary text-center mb-8">
                Drop Us a Note
              </h2>
              <QuoteFormSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
