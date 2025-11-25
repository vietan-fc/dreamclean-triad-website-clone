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
              Outstanding Home Cleaning Solutions
            </h2>
            <p className="mb-5 text-[17px] leading-[1.7] text-text-primary">
              Dream & Clean excels in delivering outstanding home cleaning solutions. Our expert cleaning professionals focus on every aspect, making sure your residence is comprehensively cleaned, disinfected, and tidied. From sleeping quarters and washrooms to cooking areas and common spaces, our reliable team handles all tasks so you won't need to!
            </p>
            <p className="mb-8 text-[17px] leading-[1.7] text-text-primary">
              Our mission is to deliver an immaculate environment where you can genuinely rest and recharge. Contact us immediately to arrange services—whether you need a single intensive cleaning session or ongoing regular maintenance, we're here to help. Give us a call today!
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-[14px] text-base font-semibold uppercase tracking-[0.5px] text-primary-foreground no-underline transition-colors duration-300 hover:bg-[#18A09D]"
              style={{ boxShadow: "0 4px 12px rgba(29, 184, 180, 0.3)" }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCleaningDetail;