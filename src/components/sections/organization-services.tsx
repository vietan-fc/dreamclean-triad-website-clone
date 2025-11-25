import Image from "next/image";

const OrganizationServices = () => {
  return (
    <section className="bg-background-primary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-semibold italic text-primary mb-6">
            Structuring Residences and Workplaces
          </h2>
          <p className="text-[17px] text-text-secondary max-w-[900px] mx-auto leading-relaxed">
            The structuring of both residences and workplaces emphasizes practicality and productivity customized to their individual demands. Residences are crafted for relaxation and private living, with areas such as family rooms for gathering, sleeping quarters for relaxation, food preparation spaces for meal creation, and remote workspaces for telecommuting, combined with smart storage solutions and spacious designs. Workplaces, on the other hand, are structured to enhance output and teamwork, including individual desks, conference spaces, relaxation zones, and filing systems for materials and paperwork.
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