import Image from "next/image";

const CommercialCleaningDetail = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start gap-8 text-left">
            <h3 className="font-semibold italic text-primary text-[32px] leading-[1.3]">
              Business Cleaning Simplified
            </h3>
            <p className="text-text-primary text-[17px] leading-[1.7]">
              We serve as your reliable ally for expert business cleaning solutions that keep your workplace spotless and welcoming. We appreciate the distinct requirements of various companies and deliver thorough cleaning approaches customized to your particular sector and location. Our proficient crew is prepared to manage corporate offices, storefronts, dining establishments, healthcare centers, and additional venues, guaranteeing a sanitary and safe atmosphere for your staff and patrons. Enhance efficiency and create a memorable impact with our business cleaning offerings—reach out now.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-[0.5px] rounded-full px-8 py-3.5 text-base shadow-[0_4px_12px_rgba(29,184,180,0.3)] hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Contact Us
            </a>
          </div>

          {/* Image Column */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=585&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Modern open office space with colorful chairs and ample natural light"
              width={585}
              height={390}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialCleaningDetail;