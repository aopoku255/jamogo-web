export const NAV_LINKS = [
  { href: "/ride", label: "Ride" },
  { href: "/drive", label: "Drive" },
  { href: "/safety", label: "Safety" },
  { href: "/cities", label: "Cities" },
  { href: "/about", label: "About" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { href: "/ride", label: "Ride with Jamogo" },
    { href: "/drive", label: "Drive with Jamogo" },
    { href: "/safety", label: "Safety" },
    { href: "/cities", label: "Cities" },
  ],
  company: [
    { href: "/about", label: "About us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
} as const;
