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
    title: "Professional Cleaning Service",
    description: "Our comprehensive cleaning service provides top-to-bottom cleaning for your space. We use eco-friendly products and professional-grade equipment to ensure exceptional results every time.",
    features: [
      "Deep cleaning of all surfaces",
      "Eco-friendly cleaning products",
      "Professional-grade equipment",
      "Flexible scheduling options",
      "100% satisfaction guarantee"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239147-1920w.jpeg"
  },
  "residential-cleaning-service": {
    title: "Residential Cleaning Services",
    description: "Transform your home into a pristine sanctuary with our exceptional residential cleaning services. Our experienced team ensures every corner of your home sparkles.",
    features: [
      "Customized cleaning plans",
      "Kitchen and bathroom deep cleaning",
      "Dusting and vacuuming",
      "Floor care and polishing",
      "Trusted and background-checked staff"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-2988860-1200w-10.jpeg"
  },
  "commercial-cleaning-service": {
    title: "Commercial Cleaning Services",
    description: "Keep your business looking professional with our comprehensive commercial cleaning services. We work around your schedule to minimize disruption to your operations.",
    features: [
      "Office and workspace cleaning",
      "Restroom sanitization",
      "Floor maintenance",
      "Window cleaning",
      "After-hours service available"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Commercial_Cleaning-1920w-13.jpg"
  },
  "deep-cleaning": {
    title: "Deep Cleaning Services",
    description: "Our deep cleaning service goes beyond regular cleaning to tackle built-up dirt and grime. Perfect for spring cleaning, move-ins, or special occasions.",
    features: [
      "Intensive cleaning of all areas",
      "Detailed appliance cleaning",
      "Baseboards and trim cleaning",
      "Cabinet and drawer cleaning",
      "Behind and under furniture"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-728471-1920w-9.jpeg"
  },
  "home-organizing": {
    title: "Home Organizing Services",
    description: "Create a clutter-free, functional space with our professional home organizing services. We help you maximize your space and maintain organization long-term.",
    features: [
      "Closet organization systems",
      "Kitchen and pantry organization",
      "Garage and storage solutions",
      "Home office setup",
      "Downsizing assistance"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Organize_house-1920w-23.png"
  },
  "commercial-construction-cleanup": {
    title: "Commercial Construction Cleanup",
    description: "Professional post-construction cleaning services to prepare your commercial space for occupancy. We handle all the details from dust removal to final polish.",
    features: [
      "Post-construction debris removal",
      "Dust and residue cleaning",
      "Window and fixture cleaning",
      "Floor preparation and cleaning",
      "Final walk-through inspection"
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
    description: "Proudly serving the Greensboro, NC area with professional cleaning services."
  },
  "high-point-nc": {
    name: "High Point",
    description: "Providing exceptional cleaning services to the High Point, NC community."
  },
  "winston-salem-nc": {
    name: "Winston-Salem",
    description: "Trusted cleaning services for Winston-Salem, NC residents and businesses."
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
                  About This Service
                </h2>
                <p className="text-lg text-text-primary mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  What's Included:
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
                    Request Quote
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
              Why Choose Dream & Clean?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  20+ Years Experience
                </h3>
                <p className="text-text-secondary">
                  Trusted cleaning services for over two decades in the Triad area.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-text-secondary">
                  We work around your schedule to provide convenient service times.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  100% Satisfaction
                </h3>
                <p className="text-text-secondary">
                  We guarantee your complete satisfaction with every cleaning.
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
