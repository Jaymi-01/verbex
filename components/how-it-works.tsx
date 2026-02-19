"use client";

import { motion } from "framer-motion";
import { PenNib, ShareNetwork, ChartLine } from "@phosphor-icons/react";

const steps = [
  {
    icon: PenNib,
    title: "Write Naturally",
    description: "Start writing your content as you normally would. Verbex AI works in the background.",
  },
  {
    icon: ShareNetwork,
    title: "Get Instant Suggestions",
    description: "Receive real-time AI-powered suggestions for grammar, style, and content improvement.",
  },
  {
    icon: ChartLine,
    title: "Refine & Publish",
    description: "Accept suggestions, make edits, and publish your polished content with confidence.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">Your Writing Journey, Simplified in Three Steps</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience the effortless flow of content creation with Verbex AI's intuitive and powerful workflow.
        </p>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 md:space-x-12">
          {/* Connecting Line (for desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 mx-20">
            <div className="absolute left-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-70"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative z-10 flex flex-col items-center p-6 bg-background rounded-lg shadow-lg border border-border"
            >
              <div className="relative w-16 h-16 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-3xl font-bold mb-4">
                {index + 1}
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 animate-ping-slow"></div>
              </div>
              <step.icon size={48} className="text-secondary mb-4" weight="duotone" />
              <h3 className="text-xl font-bold font-display mb-2">
                {index === 0 && "Seamlessly Draft Your Content"}
                {index === 1 && "Receive Intelligent Enhancements"}
                {index === 2 && "Refine, Polish, and Publish with Confidence"}
              </h3>
              <p className="text-muted-foreground text-center">
                {index === 0 && "Begin writing naturally. Verbex AI integrates invisibly, ready to assist without interrupting your creative flow."}
                {index === 1 && "Get real-time, AI-powered suggestions for grammar, style, tone, and clarity, tailored to your unique voice."}
                {index === 2 && "Effortlessly accept or modify suggestions, ensuring every piece of content you produce is impactful and error-free."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
