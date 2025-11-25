export const services = [
  { href: "/cleaning-service", label: "Cleaning Solutions" },
  { href: "/residential-cleaning-service", label: "Home Cleaning" },
  { href: "/commercial-cleaning-service", label: "Business Cleaning" },
  { href: "/deep-cleaning", label: "Intensive Cleaning" },
  { href: "/home-organizing", label: "Residence Organization" },
  {
    href: "/commercial-construction-cleanup",
    label: "Business Construction Cleanup",
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
