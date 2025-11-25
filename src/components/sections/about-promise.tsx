import React from 'react';
import Image from 'next/image';

const AboutPromise = () => {
  return (
    <section className="bg-background-primary py-12 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-728471-1920w-9.jpeg"
              alt="Person cleaning wooden surface with a blue cloth"
              width={570}
              height={380}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-primary font-semibold italic text-2xl md:text-[32px] leading-[1.3] mb-6">
              We Promise to Leave No Corner Untouched
            </h2>
            <p className="text-text-primary text-sm md:text-[17px] leading-[1.7] mb-5">
              At Dream & Clean, we understand how stressful cleaning can be. That’s why we offer professional residential and commercial cleaning services throughout High Point and the surrounding areas. We guarantee to leave no spots untouched, providing your property with a fresh, clean start. Our skilled and qualified team focuses on achieving 100% customer satisfaction with every job, no matter the size.
            </p>
            <p className="text-text-primary text-sm md:text-[17px] leading-[1.7]">
              From residential homes to business properties, our experienced team of cleaners is dedicated to providing outstanding results and exceeding expectations. Discover the joy of a pristine and organized environment today—contact us now to schedule your next cleaning appointment.
            </p>
            <a
              href="#"
              className="inline-block mt-8 bg-primary text-primary-foreground font-semibold uppercase rounded-full py-[14px] px-8 text-base tracking-[0.5px] leading-none shadow-[0_4px_12px_rgba(29,184,180,0.3)] hover:bg-primary-dark transition-colors"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPromise;