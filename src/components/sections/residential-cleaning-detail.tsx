import Image from "next/image";

const ResidentialCleaningDetail = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-16">
          {/* Left Column: Image */}
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=570&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Dream & Clean team of four people in white uniforms holding cleaning supplies and smiling"
              width={570}
              height={380}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="text-left">
            <h2 className="mb-6 font-semibold italic leading-[1.3] text-[32px] text-primary">
              Exceptional Residential Cleaning Services
            </h2>
            <p className="mb-5 text-[17px] leading-[1.7] text-text-primary">
              At Dream & Clean, we specialize in providing exceptional residential cleaning services. Our skilled team of cleaners pays attention to every detail, ensuring that your living spaces are thoroughly cleaned, sanitized, and organized. From bedrooms and bathrooms to kitchens and living areas, our trusted team takes care of everything so you don't have to!
            </p>
            <p className="mb-8 text-[17px] leading-[1.7] text-text-primary">
              Our goal is to provide you with a pristine space where you can truly relax and unwind. Reach out to us right away to schedule services, whether you require a one-time deep cleaning or regularly occurring cleaning services, we've got you covered. Call us today!
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-[14px] text-base font-semibold uppercase tracking-[0.5px] text-primary-foreground no-underline transition-colors duration-300 hover:bg-[#18A09D]"
              style={{ boxShadow: "0 4px 12px rgba(29, 184, 180, 0.3)" }}
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCleaningDetail;