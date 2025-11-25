import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white font-body" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      {/* Main content section */}
      <div className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Column 1: Logo & Socials */}
            <div className="flex flex-col items-center lg:items-start">
              <Link href="/" className="mb-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ezgif_com-webp-to-jpg-removebg-preview-502w-6.png"
                  alt="Dream & Clean Logo"
                  width={200}
                  height={54}
                  className="mx-auto lg:mx-0"
                />
              </Link>
              <div className="flex items-center space-x-3">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Contact Info */}
            <div className="text-center lg:text-left">
              <h4 className="text-primary font-semibold text-lg md:text-xl mb-6">
                Contact Information
              </h4>
              <div className="space-y-4 text-base">
                <div>
                  <strong className="font-semibold block text-text-primary">Phone:</strong>
                  <a href="tel:336-715-7224" className="text-text-secondary hover:text-primary transition-colors">
                    336-715-7224
                  </a>
                </div>
                <div>
                  <strong className="font-semibold block text-text-primary">Email:</strong>
                  <a href="mailto:dreamcleantriad@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                    dreamcleantriad@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Map Placeholder */}
            <div className="h-[250px] lg:h-[280px] rounded-lg overflow-hidden">
              <div className="bg-gray-200 w-full h-full flex items-center justify-center relative">
                <p className="text-gray-500 font-medium z-10">Map</p>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/marker-icon-26.png"
                  alt="Map marker pin"
                  width={25}
                  height={41}
                  className="absolute z-20"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#20b2aa] py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white">
            © 2025 All Rights Reserved | Dream & Clean
          </p>
        </div>
      </div>

      {/* Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-5 right-5 z-[1000] bg-[#20b2aa] text-white font-semibold py-3 px-6 rounded-full shadow-[0_4px_12px_rgba(32,178,170,0.4)] hover:bg-primary-dark transition-colors duration-300 text-sm uppercase tracking-wider"
      >
        Request Quote
      </a>
    </footer>
  );
};

export default Footer;