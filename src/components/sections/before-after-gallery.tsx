"use client";

import { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    isPlaceholder: false,
    before: {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Messy kitchen counter before cleaning',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Clean kitchen counter after cleaning',
    },
  },
  {
    id: 2,
    isPlaceholder: false,
    before: {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Cluttered kitchen before organizing',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Organized kitchen after cleaning',
    },
  },
  {
    id: 3,
    isPlaceholder: false,
    before: {
      src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Dirty bathtub before cleaning',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Clean bathtub after cleaning',
    },
  },
  {
    id: 4,
    isPlaceholder: false,
    before: {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Messy bedroom before cleaning',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80&auto=format&fit=crop&ixlib=rb-4.0.3',
      alt: 'Organized bedroom after cleaning',
    },
  },
];

const Placeholder = ({ alt }: { alt: string }) => (
  <div
    className="w-full bg-gray-100 flex items-center justify-center text-gray-500 text-center p-8 aspect-[4/3] rounded-lg"
  >
    <span className="text-sm">{alt}</span>
  </div>
);

const BeforeAfterGallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);
  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <>
      <section id="Gallery" className="bg-background-primary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-primary italic text-[32px] md:text-[36px] leading-[1.3] font-semibold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cleaning Services That Get Results
          </h2>
          <p className="text-center text-text-secondary max-w-4xl mx-auto mb-12 md:mb-16 text-base md:text-lg leading-relaxed">
            If you would like to see evidence of our exceptional cleaning services, check out our gallery of before and after images below. Impressed with our stellar results? Get in touch with Dream & Clean today to experience a pristine clean for yourself!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-2 gap-0">
                    {/* Before Image */}
                    <div className="relative group cursor-pointer" onClick={() => openLightbox(item.before.src)}>
                      <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                        BEFORE
                      </div>
                      {item.isPlaceholder || imageErrors[item.before.src] ? (
                        <Placeholder alt={item.before.alt} />
                      ) : (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.before.src}
                            alt={item.before.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            onError={() => handleImageError(item.before.src)}
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* After Image */}
                    <div className="relative group cursor-pointer" onClick={() => openLightbox(item.after.src)}>
                      <div className="absolute top-2 right-2 z-10 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                        AFTER
                      </div>
                      {item.isPlaceholder || imageErrors[item.after.src] ? (
                        <Placeholder alt={item.after.alt} />
                      ) : (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.after.src}
                            alt={item.after.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            onError={() => handleImageError(item.after.src)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close lightbox"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Full-size view"
              width={1200}
              height={900}
              className="rounded-lg max-w-full max-h-[95vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BeforeAfterGallery;