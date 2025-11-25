"use client";

import { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    isPlaceholder: false,
    before: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ab3299_338a10a954564a32bfdfa2989a3f66f2-mv2-300h-20.jpeg',
      alt: 'Messy kitchen counter before cleaning',
    },
    after: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ab3299_17ceb522bc254c4daf28ef0ac4196770-mv2-300h-21.jpeg',
      alt: 'Clean kitchen counter after cleaning',
    },
  },
  {
    id: 2,
    isPlaceholder: false,
    before: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/cluttered-kitchen-counter-with-many-item-28f3dab2-20251125001216.jpg',
      alt: 'Cluttered kitchen before organizing',
    },
    after: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/organized-kitchen-counter-clean-and-tidy-43ad6099-20251125001217.jpg',
      alt: 'Organized kitchen after cleaning',
    },
  },
  {
    id: 3,
    isPlaceholder: false,
    before: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/dirty-bathtub-with-stains-and-soap-scum--0f25eeb9-20251125001217.jpg',
      alt: 'Dirty bathtub before cleaning',
    },
    after: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/sparkling-clean-white-bathtub-bathroom-i-3583bad2-20251125001217.jpg',
      alt: 'Clean bathtub after cleaning',
    },
  },
  {
    id: 4,
    isPlaceholder: false,
    before: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Untitled_design__281_29-300h-19.png',
      alt: 'Messy bedroom before cleaning',
    },
    after: {
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ab3299_ea3166be0e994f709868e330126725e7-mv2-300h-22.jpeg',
      alt: 'Organized bedroom after cleaning',
    },
  },
];

const Placeholder = ({ alt }: { alt: string }) => (
  <div
    className="w-full bg-muted flex items-center justify-center text-muted-foreground text-center p-4 aspect-[3/4]"
    style={{ maxHeight: '400px' }}
  >
    <span>{alt}</span>
  </div>
);

const BeforeAfterGallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      <section id="Gallery" className="bg-background-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center text-primary italic text-[32px] leading-[1.3] font-semibold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cleaning Services That Get Results
          </h2>
          <p className="text-center text-text-secondary max-w-4xl mx-auto mb-12 text-base leading-relaxed">
            If you would like to see evidence of our exceptional cleaning services, check out our gallery of before and after images below. Impressed with our stellar results? Get in touch with Dream & Clean today to experience a pristine clean for yourself!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id}>
                <h3
                  className="text-center text-[28px] leading-tight font-semibold mb-4 text-text-primary"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Before and After
                </h3>
                <div className="border border-black p-1">
                  <div className="grid grid-cols-2 gap-1">
                    {item.isPlaceholder ? (
                      <Placeholder alt={item.before.alt} />
                    ) : (
                      <div className="cursor-pointer" onClick={() => openLightbox(item.before.src)}>
                        <Image
                          src={item.before.src}
                          alt={item.before.alt}
                          width={225}
                          height={300}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: '400px' }}
                        />
                      </div>
                    )}
                    {item.isPlaceholder ? (
                      <Placeholder alt={item.after.alt} />
                    ) : (
                      <div className="cursor-pointer" onClick={() => openLightbox(item.after.src)}>
                        <Image
                          src={item.after.src}
                          alt={item.after.alt}
                          width={225}
                          height={300}
                          className="w-full h-auto object-cover"
                          style={{ maxHeight: '400px' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Full-size view"
              width={1200}
              height={900}
              objectFit="contain"
              className="rounded-lg max-w-[90vw] max-h-[90vh] w-auto h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BeforeAfterGallery;