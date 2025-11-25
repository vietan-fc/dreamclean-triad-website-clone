"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const backgroundImages = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
];

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Increased to 5s for better viewing experience

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden font-body text-text-light h-[650px] md:h-[750px]">
      {/* Background Images */}
      <div className="absolute inset-0 h-full w-full">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Residential and commercial cleaning services background"
            fill
            sizes="100vw"
            quality={90}
            priority={index === 0}
            className={`object-cover transition-all duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay - More sophisticated than flat black */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-10" />

      {/* Content */}
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center pb-20 md:pb-24">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-lg animate-[fadeInUp_1s_ease-out_forwards]">
            Residential & Commercial <br className="hidden md:block" />
            <span className="text-primary">Cleaning Services</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-2xl font-medium text-gray-100 leading-relaxed drop-shadow-md animate-[fadeIn_1.5s_ease-out_0.5s_forwards] opacity-0">
            Providing a Fresh Start for Clients in the High Point Area
          </p>

          <div className="pt-8 animate-[fadeIn_1.5s_ease-out_1s_forwards] opacity-0 md:hidden">
            {/* Mobile CTA if needed, though Quote Form is sticky on desktop */}
            <a href="#quote-form" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg active:scale-95 transition-transform">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;