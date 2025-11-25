import Image from "next/image";

const OrganizationServices = () => {
  return (
    <section className="bg-background-primary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-semibold italic text-primary mb-6">
            Organization of Homes and Businesses
          </h2>
          <p className="text-[17px] text-text-secondary max-w-[900px] mx-auto leading-relaxed">
            The organization of both homes and offices prioritizes functionality and efficiency tailored to their specific needs. Homes are designed for comfort and personal living, with spaces like living rooms for socializing, bedrooms for rest, kitchens for cooking, and home offices for remote work, alongside efficient storage and open layouts. Offices, in contrast, are organized to promote productivity and collaboration, featuring workstations, meeting rooms, break areas, and storage for supplies and documents.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=546&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Woman organizing folded clothes on a white shelving unit"
              width={546}
              height={364}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=546&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Woman viewing an organized closet with hanging clothes and shoe storage"
              width={546}
              height={364}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationServices;