import Image from "next/image";

const CommercialCleaningDetail = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start gap-8 text-left">
            <h3 className="font-semibold italic text-primary text-[32px] leading-[1.3]">
              Commercial Cleaning Made Effortless
            </h3>
            <p className="text-text-primary text-[17px] leading-[1.7]">
              We are your trusted partner for professional commercial cleaning services that help maintain a clean and inviting workspace. We understand the unique needs of businesses and offer comprehensive cleaning solutions tailored to your specific industry and facility. Our experienced team is equipped to handle offices, retail spaces, restaurants, medical facilities, and more, ensuring a clean and hygienic environment for your employees and customers. Boost productivity and leave a lasting impression with our commercial cleaning services—contact us today.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-[0.5px] rounded-full px-8 py-3.5 text-base shadow-[0_4px_12px_rgba(29,184,180,0.3)] hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </div>

          {/* Image Column */}
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/4-Reasons-Commercial-Cleaning-Services-Are-Importa-16.jpg"
              alt="Modern open office space with colorful chairs and ample natural light"
              width={585}
              height={390}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialCleaningDetail;