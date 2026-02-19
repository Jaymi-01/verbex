"use client";

import { motion } from "framer-motion";
import { Globe } from "@phosphor-icons/react";

const languages = [
  { name: "English", x: "20%", y: "30%", delay: 0 },
  { name: "Español", x: "70%", y: "20%", delay: 0.5 },
  { name: "Français", x: "15%", y: "60%", delay: 1 },
  { name: "Deutsch", x: "80%", y: "55%", delay: 1.5 },
  { name: "日本語", x: "40%", y: "80%", delay: 2 },
  { name: "中文", x: "65%", y: "75%", delay: 2.5 },
];

export const LanguageSupport = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">Fluent in Global Business</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Verbex AI supports over 30 languages, ensuring your message is clear, culturally relevant, and impactful no matter where your audience is.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Contextual Accuracy", "Cultural Nuance", "Idiomatic Fluency", "Local Tone Matching"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center">
            {/* Stylized Animated Globe Container */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-secondary/10 rounded-full"
              />

              {/* Central Globe Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-12 bg-primary/5 rounded-full"
                >
                  <Globe size={120} weight="duotone" className="text-primary opacity-20 md:scale-150" />
                </motion.div>
              </div>

              {/* Floating Languages */}
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: lang.delay },
                    opacity: { duration: 0.5, delay: lang.delay },
                    scale: { duration: 0.5, delay: lang.delay }
                  }}
                  className="absolute bg-card border border-border px-4 py-2 rounded-full shadow-xl text-sm font-bold flex items-center gap-2 z-20"
                  style={{ left: lang.x, top: lang.y }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {lang.name}
                </motion.div>
              ))}

              {/* Connection Lines (Glows) */}
              <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
