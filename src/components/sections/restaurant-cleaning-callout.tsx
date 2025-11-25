import Link from 'next/link';

const RestaurantCleaningCallout = () => {
  return (
    <section className="bg-gradient-to-b from-[#e8f6f5] to-white py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] rounded-xl bg-white p-12 text-center shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
          <h2 className="italic text-primary">
            Enhance Your Dining Establishment's Brilliance!
          </h2>

          <p className="lead">
            Keeping things clean shouldn't be a constant concern for restaurant owners! To help your establishment uphold cleanliness standards, Dream & Clean brings expertise in maintenance services. Our specialists handle dining areas and business kitchen spaces.
          </p>
          <p className="lead font-medium">
            Looking to offer a consistently outstanding dining experience in a pristine and sanitary restaurant?
          </p>
          <p className="lead mb-0">
            Reach out to our team for a personalized estimate on routine scheduled maintenance services.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-[14px] font-semibold uppercase leading-none tracking-[0.5px] text-primary-foreground shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors duration-300 hover:bg-[#18A09d]"
            >
              Get an Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCleaningCallout;