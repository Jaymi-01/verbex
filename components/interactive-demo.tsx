"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkle } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";

const textToType = "Crafting exceptional content shouldn't be a struggle. Verbex AI is designed to augment your creativity, providing precise, intelligent feedback exactly when you need it. From intricate reports to engaging marketing copy, elevate every word.";
const aiSuggestions = [
  "Clarity: 'augment your creativity' -> 'amplify your creative output' for stronger verb.",
  "Conciseness: 'intricate reports to engaging marketing copy' -> 'reports to marketing copy' to reduce redundancy.",
  "Tone: Consider adding a touch of urgency: 'Elevate every word, now.'",
  "Grammar: Ensure consistency: 'intricate reports' should be 'intricate reports,' or 'detailed reports.'",
];

export const InteractiveDemo = () => {
  const [typedText, setTypedText] = useState("");
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText(textToType.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (typedText === textToType) {
      const suggestionInterval = setInterval(() => {
        setSuggestionIndex((prev) => (prev + 1) % aiSuggestions.length);
      }, 4000);
      return () => clearInterval(suggestionInterval);
    }
  }, [typedText]);

  return (
    <section id="interactive-demo" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight">Your Words, Refined in Real-Time</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how Verbex AI understands context and suggests improvements as you type.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Text Editor */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-border shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="min-h-[250px] text-lg md:text-xl font-body leading-relaxed text-foreground/90 relative">
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 bg-primary h-7 align-middle ml-1 shadow-[0_0_8px_var(--primary)]"
                />
              </div>
            </Card>
          </motion.div>

          {/* AI Suggestions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[400px]"
          >
            <Card className="h-full p-8 bg-primary/5 border-primary/20 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8 text-primary">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkle size={24} weight="fill" className="animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-display">Verbex Insight</h3>
              </div>
              <div className="relative min-h-[180px]">
                <motion.div
                  key={suggestionIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-background/80 rounded-xl border border-primary/10 shadow-sm">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Suggestion</p>
                    <p className="text-foreground leading-relaxed font-medium">
                      {aiSuggestions[suggestionIndex]}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1.5 w-12 bg-primary rounded-full" />
                    <div className="h-1.5 w-4 bg-primary/20 rounded-full" />
                    <div className="h-1.5 w-4 bg-primary/20 rounded-full" />
                  </div>
                </motion.div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
