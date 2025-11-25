import React from 'react';

const EmployeeApplicationCta = () => {
    return (
        <section
            className="relative bg-background-primary py-16 md:py-24"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at top, rgba(184, 230, 229, 0.3), transparent 70%)'
                }}
            />
            <div className="relative mx-auto max-w-[1000px] px-6 lg:px-8">
                <div 
                    className="bg-card rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.08)] p-8 md:p-16 text-center"
                >
                    <h2 
                        className="font-semibold text-primary text-2xl md:text-[32px] italic"
                        style={{ lineHeight: '1.3', letterSpacing: '-0.3px' }}
                    >
                        Join Our Team: Dream & Clean's Employee Application Form
                    </h2>

                    <p 
                        className="mt-6 text-text-primary max-w-4xl mx-auto text-base md:text-[17px]"
                        style={{ lineHeight: '1.7' }}
                    >
                        Our employee application opens the door to a fulfilling career at Dream and Clean, where you can become a valued member of our dedicated team of cleaning and organizing experts. Join us in providing top-notch services, making a difference in clients' lives, and growing professionally in a dynamic and supportive environment.
                    </p>

                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block bg-primary text-primary-foreground font-semibold text-base py-3.5 px-8 rounded-full shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-all duration-300 ease-in-out hover:bg-primary-dark hover:shadow-lg hover:scale-105"
                        >
                            Application Form
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployeeApplicationCta;