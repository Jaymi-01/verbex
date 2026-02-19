"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkle, Feather, RocketLaunch } from "@phosphor-icons/react";

const featureCards = [
  {
    icon: Sparkle,
    title: "Intelligent AI Co-pilot",
    description: "Receive real-time, context-aware suggestions for grammar, style, tone, and conciseness, making your writing shine.",
  },
  {
    icon: Feather,
    title: "Seamless Collaboration",
    description: "Co-author documents, leave contextual feedback, and track revisions effortlessly with intuitive multi-user editing.",
  },
  {
    icon: RocketLaunch,
    title: "Boost Productivity",
    description: "Accelerate your writing process with smart shortcuts, automated formatting, and templates that save you valuable time.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight text-foreground">Unlock Your Full Writing Potential</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Verbex provides a comprehensive suite of tools designed to enhance every stage of your content creation workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors shadow-xl">
                <CardHeader className="p-8 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon size={28} className="text-primary" weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
