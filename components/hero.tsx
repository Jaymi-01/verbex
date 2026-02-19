"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full animate-glow delay-700" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight text-foreground mb-4"
        >
          Transform Your Ideas into <br className="hidden sm:inline" /> Polished Prose with Verbex AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Your intelligent writing assistant that crafts, refines, and perfects your content for maximum impact. Say goodbye to writer's block.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Email Capture Input + CTA */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 p-3 rounded-md bg-card border border-border focus:ring-2 focus:ring-primary focus:outline-none text-foreground"
          />
          <Button size="lg" className="w-full sm:w-auto">
            Start Your Free Trial
          </Button>
        </motion.div>
        {/* Floating UI Mockup Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
            <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="mx-auto bg-background rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                verbex-ai-editor.txt
              </div>
            </div>
            <div className="p-6 md:p-10 text-left">
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded-full w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded-full w-full animate-pulse delay-75" />
                <div className="h-4 bg-muted rounded-full w-5/6 animate-pulse delay-150" />
                <div className="h-4 bg-primary/20 rounded-full w-2/3 animate-pulse delay-200" />
                <div className="pt-4 space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">V</div>
                    <div className="bg-primary/5 rounded-2xl rounded-tl-none p-4 border border-primary/10">
                      <p className="text-sm text-foreground leading-relaxed">
                        I've analyzed your draft. Let's enhance the tone to be more persuasive. 
                        Should we focus on the <span className="text-primary font-medium italic underline decoration-2">problem-solving</span> aspect or the <span className="text-primary font-medium italic underline decoration-2">innovation</span> factor?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-muted rounded-full w-4/5 animate-pulse delay-300" />
                <div className="h-4 bg-muted rounded-full w-full animate-pulse delay-500" />
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
