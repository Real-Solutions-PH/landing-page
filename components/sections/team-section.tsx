"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const FOUNDERS = [
  {
    name: "Founder A",
    role: "Head of Delivery & Growth",
    description: "Startup experience; builds the systems and grows the brand.",
    expertise: ["Full-Stack Dev", "Mobile App Dev", "SEO", "UX/UI Design", "Project Management"],
  },
  {
    name: "Founder B",
    role: "CEO & Chief Architect",
    description: "Acting CEO and tech lead experience; designs and ships production AI systems.",
    expertise: ["AI Engineering", "Cloud Infrastructure", "DevOps", "Cybersecurity", "Architecture"],
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
    transition: { duration: 0.7, ease: "easeOut" as const }
  },
};

export function TeamSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Badge variant="outline" className="mb-6 uppercase tracking-widest text-[10px] text-muted-foreground border-border bg-background shadow-sm">
              The Team
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built by engineers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              You won&apos;t be talking to an account manager who forwards your queries to an offshore sweatshop. You work directly with the architects.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid w-full max-w-4xl gap-8 md:grid-cols-2"
          >
            {FOUNDERS.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-card/50"
              >
                <div className="flex h-32 w-full flex-col bg-gradient-to-br from-primary/10 to-accent/10 p-6 dark:from-primary/20 dark:to-accent/20">
                  <div className="mt-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md dark:bg-card">
                    <span className="text-xl font-bold text-primary">{founder.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex flex-col p-8 text-left">
                  <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{founder.role}</p>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {founder.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {founder.expertise.map((skill, sIndex) => (
                      <Badge key={sIndex} variant="secondary" className="bg-secondary/50 font-normal text-secondary-foreground text-[10px] shadow-none">
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
