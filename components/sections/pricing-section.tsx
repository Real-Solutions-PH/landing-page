"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type PricingItem = {
  name: string;
  time?: string;
  intlPrice: string;
  phOriginalPrice: string;
  phPromoPrice: string;
  description: string;
};

type PricingCategory = {
  title: string;
  description?: string;
  items: PricingItem[];
};

type RoadmapPhase = {
  phase: number;
  title: string;
  description: string;
  categories: PricingCategory[];
};

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Discovery Audit",
    description: "Map your tools, workflows, gaps, and software opportunities before heavy engineering begins.",
    categories: [
      {
        title: "Discovery Package",
        items: [
          {
            name: "System Clarity Audit",
            time: "3–5 days",
            intlPrice: "$700 – $1,200",
            phOriginalPrice: "₱15,000 – ₱30,000",
            phPromoPrice: "₱10,000 – ₱22,000",
            description: "Workflow audit, pain-point mapping, systems map, solution brief, MVP recommendation, detailed estimate.",
          },
        ],
      },
    ],
  },
  {
    phase: 2,
    title: "Prototype Sprint",
    description: "Interactive clickable prototypes and technical feasibility validations. See it before we build it.",
    categories: [
      {
        title: "Prototyping",
        items: [
          {
            name: "Rapid Prototype Sprint",
            time: "1–2 weeks",
            intlPrice: "$2,000 – $4,000",
            phOriginalPrice: "₱40,000 – ₱80,000",
            phPromoPrice: "₱28,000 – ₱58,000",
            description: "Interactive clickable prototype, user flow validation, technical feasibility review, refined requirements.",
          },
        ],
      },
    ],
  },
  {
    phase: 3,
    title: "Engineering & MVP Build",
    description: "Production-grade development across operational tools, integrations, AI features, and mobile platforms.",
    categories: [
      {
        title: "Integration & System Dev",
        items: [
          {
            name: "Integration Starter (1–2 systems)",
            time: "2–4 weeks",
            intlPrice: "$3,500 – $7,000",
            phOriginalPrice: "₱60,000 – ₱140,000",
            phPromoPrice: "₱42,000 – ₱100,000",
            description: "1–2 system integrations (e.g., POS + accounting), basic dashboard, deployment, testing.",
          },
          {
            name: "Integration MVP (3–5 systems)",
            time: "4–8 weeks",
            intlPrice: "$7,000 – $16,000",
            phOriginalPrice: "₱140,000 – ₱320,000",
            phPromoPrice: "₱98,000 – ₱224,000",
            description: "3–5 system integrations, workflow automation, role-based dashboards, admin panel, API webhooks.",
          },
          {
            name: "Advanced Integration Suite (6+ systems)",
            time: "8–12 weeks",
            intlPrice: "$16,000 – $32,000",
            phOriginalPrice: "₱320,000 – ₱650,000",
            phPromoPrice: "₱224,000 – ₱455,000",
            description: "6+ integrations, complex workflows, real-time sync, analytics dashboards, multi-user management.",
          },
        ],
      },
      {
        title: "Custom Software",
        items: [
          {
            name: "Simple Business Tool",
            time: "3–5 weeks",
            intlPrice: "$6,000 – $13,000",
            phOriginalPrice: "₱90,000 – ₱220,000",
            phPromoPrice: "₱63,000 – ₱154,000",
            description: "Single-purpose internal tool (booking system, tracker, CRM), basic auth, admin panel.",
          },
          {
            name: "Custom Software MVP",
            time: "6–10 weeks",
            intlPrice: "$13,000 – $36,000",
            phOriginalPrice: "₱220,000 – ₱650,000",
            phPromoPrice: "₱154,000 – ₱455,000",
            description: "Multi-module system, user auth, role management, core workflows, reporting, admin panel, deployment.",
          },
          {
            name: "Advanced Business Platform",
            time: "10–16 weeks",
            intlPrice: "$36,000 – $75,000+",
            phOriginalPrice: "₱650,000 – ₱1,500,000+",
            phPromoPrice: "₱455,000 – ₱1,050,000+",
            description: "Complex business logic, multi-tenant support, advanced integrations, analytics, scalable architecture.",
          },
        ],
      },
      {
        title: "Website & Web App",
        items: [
          {
            name: "Business Website",
            time: "1–3 weeks",
            intlPrice: "$3,000 – $5,500",
            phOriginalPrice: "₱25,000 – ₱65,000",
            phPromoPrice: "₱17,500 – ₱45,500",
            description: "Marketing site, CMS, contact forms, basic SEO, mobile-responsive.",
          },
          {
            name: "Advanced Website",
            time: "3–5 weeks",
            intlPrice: "$5,500 – $12,000",
            phOriginalPrice: "₱65,000 – ₱160,000",
            phPromoPrice: "₱45,500 – ₱112,000",
            description: "Custom design, animations, advanced features, blog/CMS, lead generation tools.",
          },
          {
            name: "Web Portal / SaaS Frontend",
            time: "6–10 weeks",
            intlPrice: "$12,000 – $28,000",
            phOriginalPrice: "₱160,000 – ₱420,000",
            phPromoPrice: "₱112,000 – ₱294,000",
            description: "User portals, dashboards, auth system, backend integration, admin management.",
          },
        ],
      },
      {
        title: "AI Development",
        items: [
          {
            name: "AI Feature Add-on",
            time: "2–4 weeks",
            intlPrice: "$5,000 – $9,000",
            phOriginalPrice: "₱20,000 – ₱55,000",
            phPromoPrice: "₱14,000 – ₱38,500",
            description: "Single-purpose AI feature (FAQ bot, document Q&A, knowledge assistant) embedded in existing system.",
          },
          {
            name: "Custom AI Workflow",
            time: "4–8 weeks",
            intlPrice: "$9,000 – $18,000",
            phOriginalPrice: "₱55,000 – ₱160,000",
            phPromoPrice: "₱38,500 – ₱112,000",
            description: "Multi-step AI workflow (document processing, AI-assisted decisions, workflow copilot), integrated into operations.",
          },
          {
            name: "AI-Powered Platform",
            time: "8–14 weeks",
            intlPrice: "$18,000 – $45,000+",
            phOriginalPrice: "₱160,000 – ₱450,000+",
            phPromoPrice: "₱112,000 – ₱315,000+",
            description: "Full AI-native system (RAG system, multi-agent workflow, custom LLM integration, analytics).",
          },
        ],
      },
      {
        title: "Mobile Development",
        items: [
          {
            name: "Simple Mobile App",
            time: "6–10 weeks",
            intlPrice: "$13,000 – $27,000",
            phOriginalPrice: "₱120,000 – ₱320,000",
            phPromoPrice: "₱84,000 – ₱224,000",
            description: "Single-platform (iOS or Android), basic features, auth, 3–5 screens.",
          },
          {
            name: "Cross-Platform MVP",
            time: "10–14 weeks",
            intlPrice: "$27,000 – $52,000",
            phOriginalPrice: "₱320,000 – ₱700,000",
            phPromoPrice: "₱224,000 – ₱490,000",
            description: "React Native/Flutter app, auth, core features, backend integration, deployment.",
          },
          {
            name: "Advanced Mobile Platform",
            time: "14–20 weeks",
            intlPrice: "$52,000 – $100,000+",
            phOriginalPrice: "₱700,000 – ₱1,400,000+",
            phPromoPrice: "₱490,000 – ₱980,000+",
            description: "Complex features, offline support, push notifications, analytics, admin backend.",
          },
        ],
      },
    ],
  },
  {
    phase: 4,
    title: "Managed Growth (Retainers)",
    description: "Ongoing support and iterative feature growth to ensure long-term stability after MVP completion.",
    categories: [
      {
        title: "Retainer Packages",
        items: [
          {
            name: "Care Plan",
            time: "Ongoing",
            intlPrice: "$600 – $1,300/mo",
            phOriginalPrice: "₱5,000 – ₱12,000/mo",
            phPromoPrice: "₱3,500 – ₱8,400/mo",
            description: "Bug fixes, monitoring, security patches, backups, monthly health check, async support.",
          },
          {
            name: "Growth Plan",
            time: "Ongoing",
            intlPrice: "$1,600 – $3,800/mo",
            phOriginalPrice: "₱14,000 – ₱35,000/mo",
            phPromoPrice: "₱9,800 – ₱24,500/mo",
            description: "Everything in Care + monthly feature work (8–16 hours), optimization, advisory, roadmap planning.",
          },
          {
            name: "Dedicated Support",
            time: "Ongoing",
            intlPrice: "$4,500 – $8,500+/mo",
            phOriginalPrice: "₱38,000 – ₱80,000+/mo",
            phPromoPrice: "₱26,600 – ₱56,000+/mo",
            description: "Priority support, weekly planning, continuous feature development (40+ hours/month), strategic advisory.",
          },
          {
            name: "AI Operations Add-on",
            time: "Ongoing",
            intlPrice: "$1,000 – $2,200/mo",
            phOriginalPrice: "₱8,000 – ₱18,000/mo",
            phPromoPrice: "₱5,600 – ₱12,600/mo",
            description: "Prompt optimization, chatbot updates, knowledge base refresh, usage analytics, model performance monitoring.",
          },
        ],
      },
    ],
  },
];

const ADD_ONS: PricingCategory = {
  title: "Optional Add-Ons & Services",
  description: "Specialized enhancements, setup, and specific feature expansions.",
  items: [
    {
      name: "Technical Documentation",
      time: "1–2 weeks",
      intlPrice: "$900 – $2,800",
      phOriginalPrice: "₱8,000 – ₱25,000",
      phPromoPrice: "₱5,600 – ₱17,500",
      description: "API docs, system architecture, deployment guides, user manuals.",
    },
    {
      name: "Staff Training",
      time: "1 week",
      intlPrice: "$600 – $1,600",
      phOriginalPrice: "₱6,000 – ₱18,000",
      phPromoPrice: "₱4,200 – ₱12,600",
      description: "Live training sessions (2–4 hours), video tutorials, Q&A support.",
    },
    {
      name: "Live Support Setup",
      time: "1–2 weeks",
      intlPrice: "$1,200 – $3,200",
      phOriginalPrice: "₱10,000 – ₱30,000",
      phPromoPrice: "₱7,000 – ₱21,000",
      description: "Help desk integration, ticketing system, support workflows.",
    },
    {
      name: "Analytics Dashboard",
      time: "2–4 weeks",
      intlPrice: "$2,500 – $6,500",
      phOriginalPrice: "₱28,000 – ₱80,000",
      phPromoPrice: "₱19,600 – ₱56,000",
      description: "Custom business intelligence dashboard, KPI tracking, reporting.",
    },
    {
      name: "Multi-language Support (i18n)",
      time: "1–3 weeks",
      intlPrice: "$1,800 – $5,500",
      phOriginalPrice: "₱15,000 – ₱55,000",
      phPromoPrice: "₱10,500 – ₱38,500",
      description: "Internationalization (i18n), translation integration, locale management.",
    },
    {
      name: "Mobile Wrapper (WebView)",
      time: "1–2 weeks",
      intlPrice: "$2,200 – $5,500",
      phOriginalPrice: "₱20,000 – ₱55,000",
      phPromoPrice: "₱14,000 – ₱38,500",
      description: "Convert web app to mobile app (iOS/Android) using WebView or similar.",
    },
  ],
};

const PricingCard = ({ item, location, delayIndex = 0 }: { item: PricingItem; location: string; delayIndex?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: delayIndex * 0.1, type: "spring", stiffness: 100 }}
    className="flex flex-col p-6 rounded-2xl bg-white dark:bg-card border border-border shadow-sm hover:border-primary/30 transition-all hover:-translate-y-1"
  >
    <div className="flex justify-between items-start mb-3 gap-4">
      <h4 className="text-md font-bold leading-tight text-foreground">{item.name}</h4>
      {item.time && (
        <Badge variant="secondary" className="font-normal text-[10px] whitespace-nowrap bg-muted/50 text-muted-foreground border-transparent">
          {item.time}
        </Badge>
      )}
    </div>

    <p className="text-sm text-muted-foreground mb-6 flex-1">{item.description}</p>

    <div className="flex flex-col pt-4 border-t border-border mt-auto min-h-[64px] justify-center">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        {location === "LOADING" ? "Loading rate..." : location === "PH" ? "Local Promos (PH)" : "International Rate"}
      </span>

      <div className="text-foreground">
        {location === "LOADING" ? (
          <div className="h-6 w-32 animate-pulse rounded bg-muted mt-1"></div>
        ) : location === "PH" ? (
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through opacity-70 mb-0.5 tracking-tight">{item.phOriginalPrice}</span>
            <span className="text-lg font-bold text-primary leading-none tracking-tight">{item.phPromoPrice}</span>
          </div>
        ) : (
          <span className="text-lg font-bold text-foreground leading-none tracking-tight">{item.intlPrice}</span>
        )}
      </div>
    </div>
  </motion.div>
);

export function PricingSection() {
  const [location, setLocation] = useState<"PH" | "INTL" | "LOADING">("LOADING");

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country === "PH") {
          setLocation("PH");
        } else {
          setLocation("INTL");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch location:", err);
        setLocation("INTL"); // Fallback
      });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm">
              Pricing Roadmap
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Custom software &amp; integration pricing — Philippines &amp; International
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We do not hide our pricing. Philippine SMEs and international clients need to know the numbers to make decisions. Our engagement model guides you from discovery to scaled operations.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
          {/* Continuous vertical roadmap timeline line */}
          <div className="absolute left-[36px] md:left-[80px] top-6 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-primary/5 rounded-full z-0 hidden sm:block" />

          {ROADMAP_PHASES.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative flex flex-col w-full z-10">
              {/* Phase Marker Bubble */}
              <div className="hidden sm:flex absolute left-[36px] md:left-[80px] top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center border-[6px] border-background shadow-sm z-10 text-primary-foreground font-bold text-lg">
                {phase.phase}
              </div>

              {/* Phase Content aligned to right of marker */}
              <div className="pl-4 pr-4 sm:pl-[90px] md:pl-[160px] md:pr-0 w-full mt-1.5 flex flex-col">
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Phase {phase.phase}</h3>
                  <h2 className="text-3xl font-bold text-foreground">{phase.title}</h2>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{phase.description}</p>
                </div>

                <div className="flex flex-col gap-12">
                  {phase.categories.map((category, catIndex) => (
                    <div key={catIndex} className="flex flex-col w-full">
                      {/* Show category title only if there's multiple to distinguish them */}
                      {phase.categories.length > 1 && (
                        <h4 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border/40">
                          {category.title}
                        </h4>
                      )}

                      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {category.items.map((item, itemIndex) => (
                          <PricingCard key={`${catIndex}-${itemIndex}`} item={item} location={location} delayIndex={itemIndex % 3} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add-ons Section at the very bottom, breaking out of the strict roadmap phases */}
          <div className="relative flex flex-col w-full mt-8 pt-8 border-t border-border/50 pl-4 pr-4 sm:pl-[90px] md:pl-[160px] md:pr-0">
             <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">{ADD_ONS.title}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">{ADD_ONS.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {ADD_ONS.items.map((item, itemIndex) => (
                   <PricingCard key={`addon-${itemIndex}`} item={item} location={location} delayIndex={itemIndex % 3} />
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
