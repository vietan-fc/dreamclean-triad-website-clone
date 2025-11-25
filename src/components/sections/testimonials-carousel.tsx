"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I have been living in High Point for over 30 years and have never experienced a cleaning company quite like this. Edie and her crew really run a tight ship. Their cleaners are all courteous and the house smells great when they leave. What I like about them is that they are able to customize their packages to suit your needs better than any other cleaning company.",
  },
  {
    quote: "Edie and her girls did a phenomenal job on my home. Their attention to detail is unmatched. I highly recommend them for any home or office needing a special touch for their cleaning in the Triad area.",
  },
  {
    quote: "The \"Dream and Clean\" crew is fantastic! Their attention to detail and getting into all the nooks and crannies is top notch! I highly recommend Dream & Clean for all your business and office cleaning needs.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Rotate every 6 seconds as per instructions

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative bg-cover bg-center py-24 font-body"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" aria-hidden="true" />

      <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
        <h2 className="font-display text-3xl font-semibold italic text-white mb-6">
          Reviews from Our Satisfied Clients
        </h2>
        
        <div className="relative flex min-h-[320px] w-full max-w-4xl items-center justify-center md:min-h-[240px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-x-0 px-4 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xl italic leading-[1.7] text-white md:text-2xl">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="my-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <a
          href="#"
          className="inline-block rounded-full bg-primary px-8 py-[14px] text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
        >
          Leave A Review
        </a>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;