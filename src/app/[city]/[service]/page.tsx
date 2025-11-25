import { notFound } from "next/navigation";
import HeaderNavigation from "@/components/sections/header-navigation";
import Footer from "@/components/sections/footer";
import QuoteFormSidebar from "@/components/sections/quote-form-sidebar";
import { services, locations } from "@/lib/navigation-data";

// Generate static params for all city/service combinations
export async function generateStaticParams() {
  const params = [];
  
  for (const location of locations) {
    for (const service of services) {
      params.push({
        city: location.slug,
        service: service.href.slice(1), // Remove leading slash
      });
    }
  }
  
  return params;
}

// Service content mapping
const serviceContent: Record<string, {
  title: string;
  description: string;
  features: string[];
  image: string;
}> = {
  "cleaning-service": {
    title: "Expert Cleaning Solutions",
    description: "Our thorough cleaning solution delivers complete cleaning for your property. We utilize environmentally safe products and commercial-quality tools to guarantee outstanding outcomes on every occasion.",
    features: [
      "Intensive cleaning of every surface",
      "Environmentally safe cleaning solutions",
      "Commercial-quality tools",
      "Adaptable scheduling choices",
      "Complete satisfaction promise"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239147-1920w.jpeg"
  },
  "residential-cleaning-service": {
    title: "Home Cleaning Solutions",
    description: "Turn your residence into an immaculate haven with our outstanding home cleaning solutions. Our seasoned crew makes certain every area of your home shines.",
    features: [
      "Tailored cleaning programs",
      "Intensive kitchen and bathroom care",
      "Surface cleaning and floor suction",
      "Floor maintenance and shining",
      "Reliable and vetted personnel"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-2988860-1200w-10.jpeg"
  },
  "commercial-cleaning-service": {
    title: "Business Cleaning Solutions",
    description: "Maintain your company's professional appearance with our extensive business cleaning solutions. We accommodate your timetable to reduce interference with your activities.",
    features: [
      "Workplace and office area cleaning",
      "Bathroom disinfection",
      "Surface care",
      "Glass cleaning",
      "Evening service options available"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Commercial_Cleaning-1920w-13.jpg"
  },
  "deep-cleaning": {
    title: "Intensive Cleaning Solutions",
    description: "Our intensive cleaning solution extends beyond standard cleaning to address accumulated debris and stains. Ideal for seasonal cleaning, moving preparations, or special events.",
    features: [
      "Comprehensive cleaning of every space",
      "Thorough equipment maintenance",
      "Molding and edge cleaning",
      "Storage and compartment cleaning",
      "Cleaning around and beneath furniture"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-728471-1920w-9.jpeg"
  },
  "home-organizing": {
    title: "Residence Organization Solutions",
    description: "Establish a tidy, efficient environment with our expert residence organization solutions. We assist you in optimizing your area and preserving organization over time.",
    features: [
      "Wardrobe organization systems",
      "Food preparation and storage area organization",
      "Workshop and storage solutions",
      "Remote workspace configuration",
      "Decluttering support"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Organize_house-1920w-23.png"
  },
  "commercial-construction-cleanup": {
    title: "Business Construction Cleanup",
    description: "Expert post-construction cleaning solutions to ready your business space for use. We manage every aspect from particle elimination to finishing touches.",
    features: [
      "Construction waste elimination",
      "Particle and leftover cleaning",
      "Glass and hardware cleaning",
      "Surface preparation and cleaning",
      "Final review inspection"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/4-Reasons-Commercial-Cleaning-Services-Are-Importa-16.jpg"
  }
};

// Location content mapping
const locationContent: Record<string, {
  name: string;
  description: string;
}> = {
  "greensboro-nc": {
    name: "Greensboro",
    description: "Honored to serve the Greensboro, NC region with expert cleaning solutions."
  },
  "high-point-nc": {
    name: "High Point",
    description: "Delivering outstanding cleaning solutions to the High Point, NC area."
  },
  "winston-salem-nc": {
    name: "Winston-Salem",
    description: "Reliable cleaning solutions for Winston-Salem, NC homeowners and companies."
  }
};

export default function ServicePage({
  params,
}: {
  params: { city: string; service: string };
}) {
  const { city, service } = params;
  
  // Validate city and service
  const locationData = locationContent[city];
  const serviceData = serviceContent[service];
  
  if (!locationData || !serviceData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <HeaderNavigation />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-primary py-32 text-white"
          style={{
            backgroundImage: `url('${serviceData.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl mb-2">
              in {locationData.name}, NC
            </p>
            <p className="text-lg opacity-90">
              {locationData.description}
            </p>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-primary italic mb-6">
                  About This Solution
                </h2>
                <p className="text-lg text-text-primary mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  What You'll Get:
                </h3>
                <ul className="space-y-3 mb-8">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:336-715-7224"
                    className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-8 text-base font-semibold uppercase text-white shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors hover:bg-primary-dark"
                  >
                    Call Now: 336-715-7224
                  </a>
                  <a
                    href="/#quote"
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary py-4 px-8 text-base font-semibold uppercase text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Request Estimate
                  </a>
                </div>
              </div>

              {/* Right Column - Quote Form */}
              <div className="sticky top-24">
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary">
                  <QuoteFormSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary italic mb-6">
              Why Select Dream & Clean?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  More Than 20 Years Experience
                </h3>
                <p className="text-text-secondary">
                  Reliable cleaning solutions for more than twenty years throughout the Triad region.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Adaptable Scheduling
                </h3>
                <p className="text-text-secondary">
                  We adjust to your timetable to deliver convenient service appointments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Complete Satisfaction
                </h3>
                <p className="text-text-secondary">
                  We promise your full satisfaction with each cleaning session.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
