// src/config/site.js

// Replace remaining blank business details before publishing.
// Never place API keys, passwords, EINs, or private documents here.

export const site = {
  // Keep true while remaining details and form setup are unfinished.
  demoMode: true,

  business: {
    name: "Jack Boi Trucking",
    legalName: "Jack Boi Trucking LLC",
    shortName: "Jack Boi Trucking",
    tagline: "Dispatch support. Clear communication.",

    description:
      "Truck dispatch support for owner-operators and carriers, " +
      "including load search, rate negotiation, paperwork " +
      "coordination, and route planning.",

    website: "https://jackboitrucking.com",

    // Make sure this domain email inbox is set up and working.
    phone: "+1 (640) 286-8274",
    email: "info@jackboitrucking.com",

    address: {
      street: "240 Antique Alley",
      city: "Register",
      state: "GA",
      postalCode: "30452",
      country: "USA",
    },

    hours: {
      display: "Business hours to be confirmed",
      timezone: "",
    },

    coverage: "Service coverage to be confirmed",

    registration: {
      showOnWebsite: false,
      label: "Business registration",
      publicReference: "",
    },
  },

  branding: {
    logoUrl: "/logo.png",
    primaryColor: "#0F766E",
    accentColor: "#F59E0B",
    backgroundColor: "#F8FAFC",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Dispatch support for your next move",
    title: "Keep your wheels moving.",
    highlightedTitle: "Keep your business in focus.",

    description:
      "Get practical support with finding loads, discussing rates, " +
      "and coordinating dispatch paperwork—while you stay in " +
      "control of the loads you accept.",

    primaryButton: {
      label: "Discuss Your Dispatch Needs",
      href: "/contact",
    },

    secondaryButton: {
      label: "Explore Our Services",
      href: "/services",
    },
  },

  about: {
    heading: "A dispatch partner built around your operation.",

    introduction:
      "We help owner-operators and carriers coordinate the daily " +
      "details of dispatching. Our approach starts with understanding " +
      "your equipment, preferred lanes, and operating needs.",

    paragraphs: [
      "We support load searches, broker communication, rate " +
        "discussions, and paperwork coordination.",

      "You review and approve loads before moving forward. " +
        "We focus on clear communication and organized follow-through.",
    ],
  },

  services: [
    {
      id: "load-search",
      icon: "Search",
      title: "Load Search",
      description:
        "Support finding available loads that fit your equipment, " +
        "preferred lanes, and schedule.",
    },
    {
      id: "rate-negotiation",
      icon: "Handshake",
      title: "Rate Negotiation",
      description:
        "Help discussing load rates and terms with brokers, " +
        "subject to your approval.",
    },
    {
      id: "paperwork",
      icon: "FileText",
      title: "Paperwork Coordination",
      description:
        "Support organizing rate confirmations and dispatch-related " +
        "documents for the loads you accept.",
    },
    {
      id: "route-planning",
      icon: "Route",
      title: "Route Planning",
      description:
        "Help reviewing load routes and scheduling considerations " +
        "around your operating preferences.",
    },
    {
      id: "broker-communication",
      icon: "MessagesSquare",
      title: "Broker Communication",
      description:
        "Coordinate load-related conversations and keep you " +
        "informed about relevant updates.",
    },
    {
      id: "dispatch-support",
      icon: "Headset",
      title: "Dispatch Coordination",
      description:
        "A contact point for dispatch questions and coordination " +
        "during your agreed service hours.",
    },
  ],

  equipment: [
    "Dry Van",
    "Reefer",
    "Flatbed",
    "Step Deck",
    "Power Only",
  ],

  process: [
    {
      step: "01",
      title: "Tell Us About Your Operation",
      description:
        "Share your equipment, preferred lanes, availability, " +
        "and dispatch needs.",
    },
    {
      step: "02",
      title: "Review the Service",
      description:
        "Discuss the service scope, fees, required documents, " +
        "and communication preferences.",
    },
    {
      step: "03",
      title: "Approve Your Loads",
      description:
        "Review proposed loads and decide which opportunities " +
        "work for your operation.",
    },
    {
      step: "04",
      title: "Stay Informed",
      description:
        "Receive coordination and updates through the " +
        "communication channels you agree to use.",
    },
  ],

  faq: [
    {
      question: "Do you guarantee loads or earnings?",
      answer:
        "No. Load availability and rates depend on market conditions, " +
        "equipment, location, and other factors.",
    },
    {
      question: "Who decides which loads to accept?",
      answer:
        "The carrier or owner-operator reviews and approves loads. " +
        "Dispatch support does not replace your operating decisions.",
    },
    {
      question: "How can I discuss dispatch services?",
      answer:
        "Submit the contact form with details about your operation. " +
        "Our team will respond through an available contact channel.",
    },
    {
      question: "Do I have to agree to SMS to submit an inquiry?",
      answer:
        "No. SMS consent is optional, and you can submit an inquiry " +
        "without subscribing to text messages.",
    },
  ],

  sms: {
    // Keep disabled until the checkbox, form, and consent record
    // process are operational.
    enabled: false,

    purpose:
      "dispatch service inquiries, consultation scheduling, " +
      "and requested service updates",

    frequency: "Message frequency varies.",
    rates: "Message and data rates may apply.",
    optOut: "Reply STOP to opt out.",
    help: "Reply HELP for assistance.",
    purchaseCondition: "Consent is not a condition of purchase.",

    privacyPath: "/privacy-policy",
    termsPath: "/terms-and-conditions",
  },

  contact: {
    heading: "Let’s discuss your dispatch needs.",

    description:
      "Tell us about your equipment, preferred lanes, and the " +
      "support you are looking for.",

    submitLabel: "Send Inquiry",
    endpoint: "/api/contact",
  },

  policies: {
    // Add the actual date when you review and publish these policies.
    effectiveDate: "",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms & Conditions",
  },

  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },

  images: {
    hero:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85",

    about:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",

    services:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
  },
};

// Shared helpers ensure all pages use the same contact details.

export function getPhoneHref() {
  const number = site.business.phone.replace(/[^\d+]/g, "");
  return number ? `tel:${number}` : null;
}

export function getEmailHref() {
  return site.business.email
    ? `mailto:${site.business.email}`
    : null;
}

export function getAddress() {
  const address = site.business.address;

  return [
    address.street,
    address.city,
    address.state,
    address.postalCode,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");
}

export function getSmsConsentText() {
  return [
    `I consent to receive SMS from ${site.business.legalName}`,
    `about ${site.sms.purpose}.`,
    site.sms.frequency,
    site.sms.rates,
    site.sms.optOut,
    site.sms.help,
    site.sms.purchaseCondition,
  ].join(" ");
}

export function getSmsHelpText() {
  const contact =
    site.business.email || site.business.phone;

  return contact
    ? `For assistance, contact ${contact}.`
    : "Support contact details will be provided before SMS enrollment opens.";
}