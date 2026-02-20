"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "@phosphor-icons/react";

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Essential AI Writing Tools",
      "Limited Document Storage",
      "Access to Community Forums",
      "Basic Grammar & Spell Check",
      "Up to 5 AI Generations/month",
    ],
    cta: "Start Free Today",
    highlight: false,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    annualPrice: 199,
    features: [
      "Advanced AI-Powered Drafting",
      "Unlimited Cloud Storage",
      "Dedicated Email Support",
      "Comprehensive Grammar & Style Checks",
      "AI-driven Plagiarism Detection",
      "Unlimited AI Generations",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Team",
    monthlyPrice: 49,
    annualPrice: 499,
    features: [
      "All Pro Features Included",
      "Centralized Team Workspaces",
      "Advanced User Management",
      "Personalized Onboarding & Training",
      "Priority Customer Success Manager",
      "Role-Based Access Control",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the perfect plan to match your creative needs and scale your content strategy.
        </p>

        {/* Monthly/Annual Toggle - Segmented Control */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1 bg-muted rounded-xl flex items-center border border-border w-full max-w-[300px]">
            {/* Sliding Background */}
            <motion.div
              initial={false}
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-lg shadow-sm"
            />
            
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative flex-1 py-2 text-sm font-bold transition-colors duration-200 z-10 ${
                !isAnnual ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative flex-1 py-2 text-sm font-bold transition-colors duration-200 z-10 ${
                isAnnual ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card
                className={`relative h-full flex flex-col p-8 bg-card border-2 transition-all duration-300 ${
                  tier.highlight ? "border-primary shadow-2xl scale-105 z-10" : "border-border hover:border-primary/30"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-bold font-display mb-2 text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tier.name === "Free" && "Perfect for individual explorers."}
                    {tier.name === "Pro" && "For serious creators and pros."}
                    {tier.name === "Team" && "Collaborative power for teams."}
                  </CardDescription>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold font-display text-foreground">$</span>
                    <motion.span
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-6xl font-black font-display text-foreground"
                    >
                      {isAnnual ? Math.floor(tier.annualPrice / 12) : tier.monthlyPrice}
                    </motion.span>
                    <span className="text-muted-foreground font-medium">/mo</span>
                  </div>
                  {isAnnual && tier.annualPrice > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-primary font-semibold mt-2"
                    >
                      Billed ${tier.annualPrice} annually
                    </motion.p>
                  )}
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <ul className="space-y-4 text-left">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle size={18} weight="bold" className="text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-0 mt-10">
                  <Button size="lg" className="w-full font-bold" variant={tier.highlight ? "default" : "outline"} asChild>
                    <Link href="/signup">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
