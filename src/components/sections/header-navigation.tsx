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
        className="flex items-center justify-between px-6 py-4 text-base font-bold uppercase text-text-primary hover:bg-secondary/50 transition-colors"
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
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=208&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="dream & clean logo"
                width={208}
                height={56}
                className="h-16 w-auto transition-all duration-300"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-8 xl:gap-x-10">
            {navLinksData.map((link) =>
              link.subLinks ? (
                <div key={link.label} className="group relative">
                  <button className="flex items-center gap-x-1 py-2 text-[15px] font-bold uppercase text-text-primary transition-colors hover:text-primary tracking-wide">
                    {link.label}
                    <ChevronDown className="h-4 w-4 stroke-[3px]" />
                  </button>
                  <div className="invisible absolute top-full left-1/2 mt-4 w-60 -translate-x-1/2 rounded-lg bg-white shadow-xl opacity-0 ring-1 ring-black ring-opacity-5 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:mt-2">
                    <div className="py-2">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.label} className="group/sub relative">
                          <a
                            href="#"
                            className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-secondary hover:text-primary"
                          >
                            <span>{subLink.label}</span>
                            <ChevronRight className="h-4 w-4" />
                          </a>
                          <div className="invisible absolute top-0 left-full ml-2 w-64 rounded-lg bg-white shadow-xl opacity-0 ring-1 ring-black ring-opacity-5 transition-all duration-300 group-hover/sub:visible group-hover/sub:opacity-100">
                            <div className="py-2">
                              {subLink.subLinks.map((serviceLink) => (
                                <Link
                                  key={serviceLink.href}
                                  href={serviceLink.href}
                                  className="block px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-secondary hover:text-primary"
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
                  className="relative py-2 text-[15px] font-bold uppercase text-text-primary transition-colors hover:text-primary tracking-wide after:absolute after:bottom-0 after:left-0 after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center lg:flex">
            <a
              href="tel:336-715-7224"
              className="flex items-center justify-center rounded-full bg-primary py-3 px-8 text-base font-bold uppercase text-white shadow-[0_4px_14px_rgba(29,184,180,0.4)] transition-all duration-300 hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(29,184,180,0.6)] hover:-translate-y-0.5"
            >
              <Phone className="mr-2 h-5 w-5 fill-current" />
              Call Now
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 text-text-primary hover:text-primary transition-colors"
            >
              <Menu className="h-9 w-9" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-[100] h-screen w-full max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-5 bg-secondary/30">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=170&q=80&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="dream & clean logo"
                width={170}
                height={46}
                className="h-10 w-auto"
              />
            </Link>
            <button onClick={closeMenu} aria-label="Close menu" className="p-2 text-text-primary hover:text-destructive transition-colors">
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto py-4">
            {navLinksData.map((link) => (
              <MobileNavItem key={link.label} item={link} closeMenu={closeMenu} />
            ))}
          </nav>
          <div className="p-6 bg-secondary/30 border-t border-border">
            <a
              href="tel:336-715-7224"
              className="flex w-full items-center justify-center gap-x-2 rounded-full bg-primary py-4 px-4 text-base font-bold text-white shadow-lg transition-transform active:scale-95"
            >
              <Phone className="h-5 w-5 fill-current" />
              <span>CALL NOW 336-715-7224</span>
            </a>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}