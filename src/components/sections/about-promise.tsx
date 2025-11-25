import React from 'react';
import Image from 'next/image';

const AboutPromise = () => {
  return (
    <section className="bg-background-primary py-12 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=570&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Person cleaning wooden surface with a blue cloth"
              width={570}
              height={380}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-primary font-semibold italic text-2xl md:text-[32px] leading-[1.3] mb-6">
              We Commit to Cleaning Every Inch of Your Space
            </h2>
            <p className="text-text-primary text-sm md:text-[17px] leading-[1.7] mb-5">
              Here at Dream & Clean, we recognize the challenges that come with maintaining a clean space. This is why we provide expert residential and commercial cleaning services across High Point and neighboring communities. We ensure every area receives attention, giving your property a spotless, renewed beginning. Our talented and certified staff is committed to delivering complete client satisfaction on every assignment, regardless of scope.
            </p>
            <p className="text-text-primary text-sm md:text-[17px] leading-[1.7]">
              Whether it's private residences or commercial establishments, our seasoned cleaning professionals strive to deliver exceptional outcomes that go beyond what's expected. Experience the satisfaction of an immaculate and well-organized space—reach out today to book your upcoming cleaning service.
            </p>
            <a
              href="#"
              className="inline-block mt-8 bg-primary text-primary-foreground font-semibold uppercase rounded-full py-[14px] px-8 text-base tracking-[0.5px] leading-none shadow-[0_4px_12px_rgba(29,184,180,0.3)] hover:bg-primary-dark transition-colors"
            >
              BEGIN NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPromise;