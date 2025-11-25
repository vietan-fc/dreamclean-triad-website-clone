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
            Building Strong Client Relationships
          </h2>
          <p className="text-white text-[17px] leading-[1.7] mb-8">
            At Dream & Clean, we know our clients expect our work to be great, but we also realize the importance of establishing trusted and long-standing customer relationships. Cleaning a home or business is a personal service and we ensure our clients are not only happy with the cleaning we provide but that they also feel they are working with an experienced, respectful, and trustworthy cleaning staff. Word of mouth is our number one source of business, so your referral is our highest compliment. Care to tell us about your recent experience with the Dream & Clean team? We would greatly appreciate your feedback.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-[0.5px] py-3.5 px-8 rounded-md text-base transition-colors duration-300 hover:bg-primary-dark"
          >
            Leave A Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientRelationships;