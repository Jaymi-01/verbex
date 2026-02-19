"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Lumina", color: "text-blue-500" },
  { name: "Veridian", color: "text-emerald-500" },
  { name: "Aether", color: "text-purple-500" },
  { name: "Nexus", color: "text-amber-500" },
  { name: "Orbit", color: "text-rose-500" },
  { name: "Lumina", color: "text-blue-500" },
  { name: "Veridian", color: "text-emerald-500" },
  { name: "Aether", color: "text-purple-500" },
  { name: "Nexus", color: "text-amber-500" },
  { name: "Orbit", color: "text-rose-500" },
];

export const SocialProof = () => {
  return (
    <section id="social-proof" className="py-16 bg-muted/30 border-y border-border overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Trusted by Innovative Teams
        </h2>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set of companies */}
          {companies.map((company, index) => (
            <div
              key={`company-1-${index}`}
              className="flex items-center justify-center min-w-[120px]"
            >
              <span className={`text-2xl md:text-3xl font-display font-black ${company.color} opacity-40 hover:opacity-100 transition-opacity cursor-default tracking-tighter`}>
                {company.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`company-2-${index}`}
              className="flex items-center justify-center min-w-[120px]"
            >
              <span className={`text-2xl md:text-3xl font-display font-black ${company.color} opacity-40 hover:opacity-100 transition-opacity cursor-default tracking-tighter`}>
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Fades for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};
