"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { navLinksData } from "@/lib/navigation-data";

const MobileNavItem = ({ item, closeMenu }: { item: any; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSublinks = item.subLinks && item.subLinks.length > 0;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasSublinks) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      closeMenu();
    }
  };

  return (
    <div className="border-b border-border">
      <Link
        href={item.href || "#"}
        onClick={handleClick}
        className="flex items-center justify-between px-6 py-4 text-base font-medium uppercase text-text-primary"
      >
        {item.label}
        {hasSublinks && (
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
      {hasSublinks && isOpen && (
        <div className="bg-secondary pl-4">
          {item.subLinks.map((subItem: any) => (
            <MobileNavItem
              key={subItem.label}
              item={subItem}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1200px] items-center justify-between px-[30px]">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ezgif_com-webp-to-jpg-removebg-preview-a5d5d5b8-b1-1.png"
                alt="dream & clean logo"
                width={208}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-10">
            {navLinksData.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="group relative">
                  <button className="flex items-center gap-x-1 py-2 text-[15px] font-medium uppercase text-text-primary transition-colors hover:text-primary">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute top-full left-1/2 mt-2 w-56 -translate-x-1/2 rounded-md bg-white shadow-lg opacity-0 ring-1 ring-black ring-opacity-5 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="py-1">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.label} className="group/sub relative">
                          <a
                            href="#"
                            className="flex w-full items-center justify-between px-4 py-2 text-sm text-text-primary transition-colors hover:bg-gray-100 hover:text-primary"
                          >
                            <span>{subLink.label}</span>
                            <ChevronRight className="h-4 w-4" />
                          </a>
                          <div className="invisible absolute top-0 left-full ml-1 w-64 rounded-md bg-white shadow-lg opacity-0 ring-1 ring-black ring-opacity-5 transition-all duration-300 group-hover/sub:visible group-hover/sub:opacity-100">
                            <div className="py-1">
                              {subLink.subLinks.map((serviceLink) => (
                                <Link
                                  key={serviceLink.href}
                                  href={serviceLink.href}
                                  className="block px-4 py-2 text-sm text-text-primary transition-colors hover:bg-gray-100 hover:text-primary"
                                >
                                  {serviceLink.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative py-2 text-[15px] font-medium uppercase text-text-primary transition-colors after:absolute after:bottom-1 after:left-0 after:block after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href="tel:336-715-7224"
              className="flex items-center justify-center rounded-full bg-primary py-[14px] px-[32px] text-base font-semibold uppercase text-white shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors hover:bg-primary-dark"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-8 w-8 text-text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-[100] h-screen w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b3822b99-555b-49a8-bb83-c8cf38e53eaf-dreamandcleantriad-com/assets/images/ezgif_com-webp-to-jpg-removebg-preview-a5d5d5b8-b1-1.png"
                alt="dream & clean logo"
                width={170}
                height={46}
                className="h-12 w-auto"
              />
            </Link>
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="h-8 w-8 text-text-primary" />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            {navLinksData.map((link) => (
              <MobileNavItem key={link.label} item={link} closeMenu={closeMenu} />
            ))}
          </nav>
          <div className="p-6">
            <a
              href="tel:336-715-7224"
              className="flex w-full items-center justify-center gap-x-2 rounded-full bg-primary py-4 px-4 text-base font-semibold text-white shadow-[0_4px_12px_rgba(29,184,180,0.3)] transition-colors hover:bg-primary-dark"
            >
              <Phone className="h-5 w-5" />
              <span>CALL NOW 336-715-7224</span>
            </a>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/60 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}