import React from 'react';

const ClientRelationships = () => {
  const backgroundImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/pexels-photo-380768-1920w-17.jpeg";

  return (
    <section
      className="relative w-full py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 25, 25, 0.8), rgba(25, 25, 25, 0.2)), url('${backgroundImageUrl}')`,
      }}
    >
      <div className="container">
        <div className="w-full md:w-3/5">
          <h2 className="text-white text-[32px] leading-tight font-semibold italic mb-6">
            Fostering Lasting Customer Connections
          </h2>
          <p className="text-white text-[17px] leading-[1.7] mb-8">
            At Dream & Clean, we understand our clients demand excellent work, and we also acknowledge the value of building reliable and enduring customer partnerships. Cleaning a residence or commercial space is an intimate service, and we make certain our clients are not just content with the cleaning we deliver but also sense they're collaborating with a knowledgeable, considerate, and dependable cleaning crew. Personal recommendations are our primary business driver, so your endorsement means everything to us. Would you like to share your latest experience with the Dream & Clean team? We'd love to hear from you.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-[0.5px] py-3.5 px-8 rounded-md text-base transition-colors duration-300 hover:bg-primary-dark"
          >
            Submit Your Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientRelationships;