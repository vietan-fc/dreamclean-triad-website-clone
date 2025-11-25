import React from 'react';
import { UserPlus, GaugeCircle, CalendarDays, SprayCan } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: UserPlus,
    title: 'Knowledgeable Staff',
    description: 'Our screened and experienced cleaning staff consists of highly trained and skilled professionals.',
  },
  {
    icon: GaugeCircle,
    title: 'Fast & Reliable Service',
    description: 'We prioritize delivering fast and efficient cleaning services without compromising on quality.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Scheduling',
    description: 'We offer flexible scheduling options, allowing you to tailor our cleaning services to your specific needs.',
  },
  {
    icon: SprayCan,
    title: 'Quality Supplies',
    description: 'We provide our own high-quality cleaning supplies and equipment, ensuring a hassle-free experience.',
  },
];

const FeaturesGrid = () => {
  return (
    <section 
      className="bg-accent py-16 relative"
      style={{ 
        backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b3822b99-555b-49a8-bb83-c8cf38e53eaf/generated_images/light-teal-background-with-subtle-water--5b11e569-20251125001216.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-accent/90 z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="h-14 w-14 stroke-1 text-primary mb-4" />
                <h6 className="text-base lg:text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h6>
                <p className="text-sm lg:text-[17px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;