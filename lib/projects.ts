export type Project = {
  id: string;
  title: string;
  clientType: string;
  description: string;
  outcome: string;
  tags: string[];
  service: string;
  featured: boolean;
  accentColor: string;
  letter: string;
  /** Public-relative path to a screenshot, e.g. /projects/pos-xero.png */
  image?: string;
  /** Multiple screenshots for the carousel */
  images?: string[];
  /** Live URL for the project */
  url?: string;
  /** Tailwind gradient classes used for the placeholder card cover */
  coverGradient: string;
  /** Tailoring image fit, especially useful for portrait screenshots */
  imageFit?: "cover" | "contain";
};

export const PROJECTS: Project[] = [
  {
    id: "artemis",
    title: "Artemis — Smart Waste Management Platform",
    clientType: "IoT / Operations",
    description:
      "Smart waste management platform combining software, mobile access, and IoT-enabled trash bins. Helps organizations monitor waste in real time, automate reporting, and improve collection efficiency. Built the fullstack from the ground up: frontend, mobile, backend, and IoT integration.",
    outcome:
      "From manual rounds to real-time monitoring — collection time cut by 60%",
    tags: ["IoT", "Mobile", "Backend", "Frontend", "System Integration"],
    service: "Custom Software & System Integration",
    featured: true,
    accentColor: "emerald",
    letter: "A",
    coverGradient: "from-emerald-600 via-teal-500 to-cyan-400",
    image: "/projects/artemis-1 copy.png",
    images: [
      "/projects/artemis-1 copy.png",
      "/projects/artemis-2.png",
      "/projects/artemis-3.png",
      "/projects/artemis-4.png",
      "/projects/artemis-5.png",
      "/projects/artemis-6.png",
      "/projects/artemis-7.png",
    ],
    url: "https://artemis-b18ae.web.app/",
  },
  {
    id: "evolve-talents",
    title: "Evolve Talents — Recruitment & VA Platform",
    clientType: "HR / Recruitment",
    description:
      "Premium recruitment and virtual assistant service that helps businesses scale by matching them with vetted remote professionals. Built the company website and handled SEO, positioning Evolve Talents as an end-to-end hiring partner covering recruiting, vetting, payroll, onboarding, and ongoing support.",
    outcome:
      "SEO-optimized launch — ranking for target keywords within 30 days",
    tags: ["Website", "SEO", "Marketing"],
    service: "Website & Web Application Development",
    featured: true,
    accentColor: "blue",
    letter: "E",
    coverGradient: "from-blue-600 via-blue-500 to-sky-400",
    image: "/projects/evolve-talents-1.png",
    images: [
      "/projects/evolve-talents-1.png",
      "/projects/evolve-talents-2.png",
      "/projects/evolve-talents-3.png",
      "/projects/evolve-talents-4.png",
    ],
    url: "https://evolve-talents-sample.netlify.app/",
  },
  {
    id: "bath-and-bark",
    title: "Bath & Bark — Pet Care Platform",
    clientType: "Retail / Pet Care",
    description:
      "Premium pet care business in Batangas offering grooming, wellness, and health support for dogs and other pets. Built the website, admin and members system, backend, and integrated an AI chatbot to handle customer inquiries and bookings.",
    outcome:
      "AI chatbot handles 80% of customer inquiries without human intervention",
    tags: ["Website", "Admin System", "Backend", "AI Integration"],
    service: "Custom Software & AI Integration",
    featured: true,
    accentColor: "orange",
    letter: "B",
    coverGradient: "from-orange-500 via-amber-500 to-yellow-400",
    image: "/projects/bath-and-bark-1.png",
    images: [
      "/projects/bath-and-bark-1.png",
      "/projects/bath-and-bark-2.png",
      "/projects/bath-and-bark-3.png",
    ],
    url: "https://bathandbark.realsolutionsph.com/",
  },
  {
    id: "aura",
    title: "Aura — AI-Powered Dating App",
    clientType: "Consumer App / AI",
    description:
      "A premium cross-platform mobile dating application completely designed and built using React Native and Expo. Aura leverages advanced AI integrations (including Google GenAI, ElevenLabs, and AssemblyAI) to provide personalized matchmaking and interactive voice-enabled AI assistants. The app features a stunning glassmorphic UI, comprehensive multi-language support, fluid animations, and robust OTP-based authentication.",
    outcome:
      "Seamless real-time AI integration, delivering a highly immersive and personalized user experience",
    tags: [
      "Mobile",
      "React Native",
      "AI",
      "Frontend / UI",
      "Voice Integration",
    ],
    service: "Mobile Application Development",
    featured: true,
    accentColor: "purple",
    letter: "A",
    coverGradient: "from-purple-600 via-fuchsia-500 to-pink-400",
    image: "/projects/aura-1.png",
    images: [
      "/projects/aura-1.png",
      "/projects/aura-2.png",
      "/projects/aura-3.png",
      "/projects/aura-4.png",
    ],
    imageFit: "contain",
  },
  {
    id: "food-costing-system",
    title: "Food Costing System",
    clientType: "Food & Beverage / Operations",
    description:
      "A comprehensive food costing and recipe management system built for restaurants and food businesses. Enables accurate ingredient cost tracking, recipe costing, and menu profitability analysis to help operators make data-driven pricing decisions and control food costs.",
    outcome:
      "Accurate, real-time food cost visibility across all menu items",
    tags: ["Web App", "Backend", "Dashboard", "Operations"],
    service: "Custom Software Development",
    featured: true,
    accentColor: "amber",
    letter: "F",
    coverGradient: "from-amber-500 via-orange-400 to-yellow-300",
    image: "/projects/food-costing-system-1.png",
    images: [
      "/projects/food-costing-system-1.png",
      "/projects/food-costing-system-2.png",
      "/projects/food-costing-system-3.png",
      "/projects/food-costing-system-4.png",
    ],
  },
  {
    id: "osms",
    title: "Orders & Subscription Management System",
    clientType: "E-Commerce / SaaS",
    description:
      "A full-featured orders and subscription management platform that handles the complete lifecycle of customer orders and recurring subscriptions. Includes order tracking, subscription billing, customer management, and reporting dashboards to streamline operations for subscription-based businesses.",
    outcome:
      "Fully automated subscription lifecycle management from sign-up to renewal",
    tags: ["Web App", "Backend", "Subscriptions", "E-Commerce"],
    service: "Custom Software Development",
    featured: true,
    accentColor: "sky",
    letter: "O",
    coverGradient: "from-sky-600 via-cyan-500 to-teal-400",
    image: "/projects/osms-1.png",
    images: [
      "/projects/osms-1.png",
      "/projects/osms-2.png",
      "/projects/osms-3.png",
      "/projects/osms-4.png",
      "/projects/osms-5.png",
    ],
  },
  {
    id: "hydroguide",
    title: "HydroGuide — Hydroponics Farm Management App",
    clientType: "AgriTech / Mobile",
    description:
      "A mobile app for iOS and Android built to help hydroponics growers manage crop guides, planting cycles, daily farm tasks, and inventory — all in one place. Designed for hobbyist to small commercial growers using DFT, NFT, Dutch bucket, and similar setups. Features setup management, plant batch tracking, a crop guide library, a setup-aware daily checklist engine, inventory with low-stock alerts, and a reporting dashboard.",
    outcome:
      "One app replaces spreadsheets and guesswork — growers always know what to do today",
    tags: ["Mobile", "Flutter", "Backend", "AgriTech", "IoT-Ready"],
    service: "Mobile Application Development",
    featured: true,
    accentColor: "green",
    letter: "H",
    coverGradient: "from-green-600 via-lime-500 to-emerald-400",
    imageFit: "contain",
    image: "/projects/hydroguide-1.png",
    images: [
      "/projects/hydroguide-1.png",
      "/projects/hydroguide-2.png",
      "/projects/hydroguide-3.png",
      "/projects/hydroguide-4.png",
      "/projects/hydroguide-5.png",
      "/projects/hydroguide-6.png",
      "/projects/hydroguide-7.png",
      "/projects/hydroguide-8.png",
      "/projects/hydroguide-9.png",
    ],
  },
  {
    id: "stocksense",
    title: "StockSense — Inventory Management System",
    clientType: "Retail / Operations",
    description:
      "A smart inventory management system designed to give businesses real-time stock visibility and control. Features include stock level tracking, low-inventory alerts, purchase order management, and analytics to minimize waste and prevent stockouts.",
    outcome:
      "Real-time inventory visibility leading to reduced stockouts and overstock",
    tags: ["Web App", "Backend", "Dashboard", "Inventory"],
    service: "Custom Software Development",
    featured: true,
    accentColor: "emerald",
    letter: "S",
    coverGradient: "from-emerald-500 via-green-400 to-teal-300",
    image: "/projects/stocksense-1.png",
    images: [
      "/projects/stocksense-1.png",
      "/projects/stocksense-2.png",
      "/projects/stocksense-3.png",
    ],
  },
];

export const ACCENT_CLASSES: Record<
  string,
  { bg: string; text: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/50",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-400",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/50",
    text: "text-purple-600 dark:text-purple-400",
    dot: "bg-purple-400",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/50",
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-400",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-900/50",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-400",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/50",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/50",
    text: "text-green-600 dark:text-green-400",
    dot: "bg-green-400",
  },
};
