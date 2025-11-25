import React from 'react';

const TrustedServiceVideo = () => {
  return (
    <section 
      className="bg-primary py-16 md:py-24 relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3')",
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
              Reliable Cleaning Solutions for More Than Two Decades
            </h2>
            <p className="mb-8 opacity-90 leading-relaxed">
              A community-based and family-operated company, Dream & Clean was established by Edie Henley more than ten years back. We work hard to maintain our standing for delivering superior, warm, and customized cleaning solutions for both home and business customers at more affordable rates than other providers. Rather than investing in extravagant facilities, fleets, and marketing, we maintain lean operations and allocate more resources to our workforce. Armed with top-tier supplies and equipment on the market, we offer a complete satisfaction promise. Reach out to us now!
            </p>
            <a
              href="#"
              className="inline-block border-2 border-white text-white text-base font-semibold uppercase tracking-[0.5px] py-[14px] px-8 rounded-full transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              CONTACT US NOW
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