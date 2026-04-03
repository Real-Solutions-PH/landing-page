"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Founder {
  name: string;
  role: string;
  image?: string;
  description: string;
  expertise: string[];
  website?: string;
}

const FOUNDERS: Founder[] = [
  {
    name: "Ervin Piol",
    role: "Local Clients, BD, Full-stack & Mobile",
    image: "/founder-profiles/ervin-piol-profile.png",
    description:
      "Ervin specializes in full-stack and mobile engineering, bridging technical solutions with business development and client relations for local SMEs.",
    expertise: [
      "Full-Stack Dev",
      "Mobile App Dev",
      "Client Relations",
      "Business Development",
    ],
    website: "https://ervinpiol.realsolutionsph.com/",
  },
  {
    name: "Kairus Noah Tecson",
    role: "International Clients, Cloud & AI Engineering",
    image: "/founder-profiles/kairus-tecson-profile.png",
    description:
      "Kairus leads architecture, cloud, and AI engineering, focusing on scalable infrastructure and advanced integrations for both local and international clients.",
    expertise: [
      "AI Engineering",
      "Cloud Infrastructure",
      "Architecture",
      "International Clients",
    ],
    website: "https://www.schadenkai.space/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function FounderAvatar({ founder }: { founder: Founder }) {
  const [imgError, setImgError] = useState(false);
  const showImage = !!founder.image && !imgError;

  return (
    <div className="mt-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md dark:bg-card">
      {showImage ? (
        <Image
          src={founder.image!}
          alt={`${founder.name} profile photo`}
          width={64}
          height={64}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xl font-bold text-primary">
          {founder.name.charAt(0)}
        </span>
      )}
    </div>
  );
}

export function TeamSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm"
            >
              The Team
            </Badge>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Built by engineers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              You won&apos;t be talking to an account manager who forwards your
              queries to an offshore sweatshop. You work directly with the
              architects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full gap-8 md:grid-cols-2"
          >
            {FOUNDERS.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50"
              >
                <div className="flex h-32 w-full flex-col bg-gradient-to-br from-primary/10 to-accent/10 p-6 dark:from-primary/20 dark:to-accent/20">
                  <FounderAvatar founder={founder} />
                </div>
                <div className="flex flex-col p-8 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {founder.name}
                    </h3>
                    {founder.website && (
                      <a
                        href={founder.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${founder.name}'s personal website`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="mb-4 mt-1 text-sm font-medium text-primary">
                    {founder.role}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {founder.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {founder.expertise.map((skill, sIndex) => (
                      <Badge
                        key={sIndex}
                        variant="secondary"
                        className="bg-secondary/50 font-normal text-secondary-foreground text-[10px] shadow-none"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
