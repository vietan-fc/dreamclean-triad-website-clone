import React from 'react';
import Image from 'next/image';

const OfficeOrganizationImages = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        <div className="relative aspect-video min-h-[300px] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Vibrant orange-themed open-plan office with modern desks and chairs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-video min-h-[300px] md:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
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