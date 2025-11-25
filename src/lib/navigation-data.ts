export const services = [
  { href: "/cleaning-service", label: "Cleaning Service" },
  { href: "/residential-cleaning-service", label: "Residential Cleaning" },
  { href: "/commercial-cleaning-service", label: "Commercial Cleaning" },
  { href: "/deep-cleaning", label: "Deep Cleaning" },
  { href: "/home-organizing", label: "Home Organizing" },
  {
    href: "/commercial-construction-cleanup",
    label: "Commercial Construction Cleanup",
  },
];

export const locations = [
  { slug: "greensboro-nc", label: "Greensboro" },
  { slug: "high-point-nc", label: "High Point" },
  { slug: "winston-salem-nc", label: "Winston-Salem" },
];

export const navLinksData = [
  { href: "/", label: "Home" },
  {
    label: "Areas We Serve",
    subLinks: locations.map((loc) => ({
      label: loc.label,
      subLinks: services.map((s) => ({
        ...s,
        href: `/${loc.slug}${s.href}`,
      })),
    })),
  },
  { href: "/#Gallery", label: "Gallery" },
  { href: "/#FAQs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];
