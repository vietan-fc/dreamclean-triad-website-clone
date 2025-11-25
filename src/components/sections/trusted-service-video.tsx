import React from 'react';

const TrustedServiceVideo = () => {
  return (
    <section 
      className="bg-primary py-16 md:py-24 relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/light-teal-background-with-subtle-water--5b11e569-20251125001216.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-primary/90 z-0"></div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-center md:text-left text-white">
            <h2 className="font-semibold text-2xl md:text-[32px] leading-[1.3] mb-6">
              Trusted Cleaning Service for Over 20 Years
            </h2>
            <p className="mb-8 opacity-90 leading-relaxed">
              A local and family-owned business, Dream & Clean was founded by Edie Henley over a decade ago. We strive to uphold our reputation for providing high-quality, friendly, and personalized cleaning services for both residential and commercial clients at a lower cost than our competitors. Instead of fancy digs, vehicles, and advertising, we keep our overhead lean and spend more money on our team. Equipped with the best supplies and tools available, we provide a 100% satisfaction guarantee. Get in touch with us today!
            </p>
            <a
              href="#"
              className="inline-block border-2 border-white text-white text-base font-semibold uppercase tracking-[0.5px] py-[14px] px-8 rounded-full transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              GET IN TOUCH
            </a>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <video
                controls
                className="w-full h-auto"
                src="https://vid.cdn-website.com/076c1fe1/videos/e7wGTS2vSi2bNMU0zzbA_My+Video-v.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedServiceVideo;