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
};

export const PROJECTS: Project[] = [
  {
    id: "artemis",
    title: "Artemis — Smart Waste Management Platform",
    clientType: "IoT / Operations",
    description:
      "Smart waste management platform combining software, mobile access, and IoT-enabled trash bins. Helps organizations monitor waste in real time, automate reporting, and improve collection efficiency. Built the fullstack from the ground up: frontend, mobile, backend, and IoT integration.",
    outcome: "From manual rounds to real-time monitoring — collection time cut by 60%",
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
    outcome: "SEO-optimized launch — ranking for target keywords within 30 days",
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
    outcome: "AI chatbot handles 80% of customer inquiries without human intervention",
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
};
