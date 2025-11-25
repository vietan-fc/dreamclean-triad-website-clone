import React from 'react';
import Image from 'next/image';

const OfficeOrganizationImages = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        <div className="relative aspect-video min-h-[300px] md:min-h-[500px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-6899401-1200w-11.jpeg"
            alt="Vibrant orange-themed open-plan office with modern desks and chairs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-video min-h-[300px] md:min-h-[500px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/IMG_2299-1920w-8.jpg"
            alt="Burgundy and white themed office with glass partitions and motivational text on the wall"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default OfficeOrganizationImages;