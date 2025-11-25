import Link from 'next/link';

const RestaurantCleaningCallout = () => {
  return (
    <section className="bg-gradient-to-b from-[#e8f6f5] to-white py-24">
      <div className="container">
        <div className="mx-auto max-w-[800px] rounded-xl bg-white p-12 text-center shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
          <h2 className="italic text-primary">
            Elevate Your Restaurant's Sparkle!
          </h2>

          <p className="lead">
            Cleaning doesn't have to be one of a restaurant's daily worries! To ensure your restaurant maintains cleaning standards, Dream & Clean has experience in janitorial services. Our experts clean dining spaces and commercial kitchens.
          </p>
          <p className="lead font-medium">
            Want to provide a consistently excellent eating experience in a clean and healthy restaurant?
          </p>
          <p className="lead mb-0">
            Contact our team for a custom quote on regular scheduled cleaning services.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-[14px] font-semibold uppercase leading-none tracking-[0.5px] text-primary-foreground shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors duration-300 hover:bg-[#18A09d]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantCleaningCallout;