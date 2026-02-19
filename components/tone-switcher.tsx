"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Briefcase, Smiley, MagicWand, ShieldCheck } from "@phosphor-icons/react";

const tones = [
  {
    id: "professional",
    name: "Professional",
    icon: Briefcase,
    text: "We are writing to formally notify you that the project has reached its conclusion and the deliverables are now ready for your final inspection.",
    color: "bg-blue-500",
  },
  {
    id: "casual",
    name: "Casual",
    icon: Smiley,
    text: "Hey! Just wanted to let you know the project is all wrapped up. It's ready for you to take a look whenever you have a second!",
    color: "bg-emerald-500",
  },
  {
    id: "persuasive",
    name: "Persuasive",
    icon: MagicWand,
    text: "Unlock the full potential of your business with our completed project—now perfectly crafted and ready for your immediate review.",
    color: "bg-purple-500",
  },
  {
    id: "assertive",
    name: "Assertive",
    icon: ShieldCheck,
    text: "The project is complete. Review the final deliverables now to ensure we stay on track for the next phase of implementation.",
    color: "bg-rose-500",
  },
];

export const ToneSwitcher = () => {
  const [activeTone, setActiveTone] = useState(tones[0]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">Master the Art of Tone</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Instantly adapt your message to any audience. Click a tone to see Verbex AI in action.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {tones.map((tone) => (
              <Button
                key={tone.id}
                variant={activeTone.id === tone.id ? "default" : "outline"}
                onClick={() => setActiveTone(tone)}
                className={`h-14 rounded-xl transition-all duration-300 ${
                  activeTone.id === tone.id ? "scale-105 shadow-lg" : "hover:bg-muted"
                }`}
              >
                <tone.icon size={20} weight={activeTone.id === tone.id ? "fill" : "regular"} className="mr-2" />
                {tone.name}
              </Button>
            ))}
          </div>

          <div className="relative p-8 md:p-12 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden min-h-[200px] flex items-center justify-center">
            {/* Animated background glow */}
            <motion.div
              animate={{ 
                backgroundColor: activeTone.id === "professional" ? "rgba(59, 130, 246, 0.05)" : 
                               activeTone.id === "casual" ? "rgba(16, 185, 129, 0.05)" :
                               activeTone.id === "persuasive" ? "rgba(168, 85, 247, 0.05)" :
                               "rgba(244, 63, 94, 0.05)"
              }}
              className="absolute inset-0 z-0"
            />
            
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTone.id}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl font-medium text-foreground leading-relaxed relative z-10"
              >
                "{activeTone.text}"
              </motion.p>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MagicWand size={16} className="text-primary animate-pulse" />
            <span>AI-generated rewrite optimized for impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};
