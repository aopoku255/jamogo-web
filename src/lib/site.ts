export const SITE = {
  name: "Jamogo",
  domain: "https://jamogo.hoveritx.com",
  tagline: "Name your fare. Ride smarter.",
  description:
    "Jamogo is a ride-pooling app for Ghana. Name your fare, ride solo or share with others going your way, and pay with mobile money.",
  emails: {
    hello: "hello@jamogo.hoveritx.com",
    privacy: "privacy@jamogo.hoveritx.com",
    legal: "legal@jamogo.hoveritx.com",
  },
} as const;

export const DRIVER_MAILTO =
  `mailto:${SITE.emails.hello}?subject=${encodeURIComponent(
    "I want to drive with Jamogo"
  )}&body=${encodeURIComponent(
    "Hi Jamogo,\n\nI'd like to sign up as a driver when applications open in my city.\n\nMy name:\nMy city:\nMy email: "
  )}`;
