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
    title: 'Expert Team Members',
    description: 'Our vetted and seasoned cleaning team is comprised of thoroughly educated and competent specialists.',
  },
  {
    icon: GaugeCircle,
    title: 'Quick & Dependable Service',
    description: 'We focus on providing rapid and effective cleaning solutions while maintaining our high standards.',
  },
  {
    icon: CalendarDays,
    title: 'Adaptable Timetables',
    description: 'We provide customizable scheduling alternatives, enabling you to personalize our cleaning offerings to match your unique requirements.',
  },
  {
    icon: SprayCan,
    title: 'Premium Equipment',
    description: 'We bring our own top-tier cleaning products and tools, guaranteeing a seamless and convenient experience.',
  },
];

const FeaturesGrid = () => {
  return (
    <section 
      className="bg-accent py-20 lg:py-24 relative overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80&auto=format&fit=crop&ixlib=rb-4.0.3')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-default"
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="h-16 w-16 text-primary stroke-[1.5] relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h6 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">
                  {feature.title}
                </h6>
                
                <p className="text-base leading-relaxed text-slate-600 font-medium">
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