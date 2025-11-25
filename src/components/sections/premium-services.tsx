import Image from 'next/image';

const services = [
  {
    name: 'Residential Cleaning',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-2988860-1200w-10.jpeg',
    alt: 'Modern and clean residential living room',
  },
  {
    name: 'Commercial Cleaning',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/Commercial_Cleaning-1920w-13.jpg',
    alt: 'Bright and clean commercial office space',
  },
  {
    name: 'Eco-Friendly Cleaning',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-4239104-1920w-7.jpeg',
    alt: 'Hand in yellow glove using eco-friendly cleaning supplies',
  },
];

const PremiumServices = () => {
    return (
        <section className="bg-background-primary py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
                        CHECK OUT OUR COMPREHENSIVE RANGE OF
                    </p>
                    <h2 className="text-primary italic font-semibold text-[28px] lg:text-[36px] leading-tight mb-8">
                        Premium Cleaning Services
                    </h2>
                    <p className="text-text-primary text-base leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16">
                        We offer a comprehensive range of cleaning services to meet all your needs, including residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, window cleaning, and more. To request additional information or to get started with scheduling services, contact our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center mb-16 lg:mb-20">
                    {services.map((service) => (
                        <div key={service.name} className="flex flex-col items-center text-center group">
                            <div className="relative w-[300px] h-[300px] lg:w-[345px] lg:h-[345px] rounded-full overflow-hidden shadow-md mb-8">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    sizes="(max-width: 1023px) 300px, 345px"
                                />
                            </div>
                            <h3 className="text-primary font-semibold text-xl lg:text-2xl">
                                {service.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="/contact"
                        className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-widest py-[14px] px-8 rounded-full shadow-[0_4px_12px_rgba(29,184,180,0.3)] hover:bg-primary-dark transition-colors duration-300"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;