"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const backgroundImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239147-1920w.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239035-1200w-12.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239104-1920w-7.jpeg"
];

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden font-body text-text-light">
      <div className="absolute inset-0 h-full w-full">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Residential and commercial cleaning services background"
            fill
            sizes="100vw"
            quality={80}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/80 z-10" />

      <div className="container relative z-20 mx-auto flex h-full min-h-[60vh] flex-col items-center justify-center px-4 py-28 text-center md:min-h-[75vh] md:py-32">
        <h1 className="max-w-3xl text-[24px] font-bold leading-[1.3] md:text-[40px] md:leading-[1.2]">
          Residential & Commercial Cleaning Services
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] font-medium leading-normal md:text-[20px]">
          Providing a Fresh Start for Clients in the High Point Area
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;