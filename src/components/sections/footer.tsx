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
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
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
                Get In Touch
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
                <svg
                  width="25"
                  height="41"
                  viewBox="0 0 25 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute z-20"
                >
                  <path
                    d="M12.5 0C5.596 0 0 5.596 0 12.5C0 21.875 12.5 41 12.5 41C12.5 41 25 21.875 25 12.5C25 5.596 19.404 0 12.5 0ZM12.5 17.1875C9.763 17.1875 7.5625 14.987 7.5625 12.25C7.5625 9.513 9.763 7.3125 12.5 7.3125C15.237 7.3125 17.4375 9.513 17.4375 12.25C17.4375 14.987 15.237 17.1875 12.5 17.1875Z"
                    fill="#EF4444"
                  />
                </svg>
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
        Get an Estimate
      </a>
    </footer>
  );
};

export default Footer;