"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FooterCTA = () => {
  return (
    <section id="footer-cta" className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-4"
        >
          Ready to Elevate Your Content Creation?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
        >
          Join a growing community of professionals who are transforming their writing process with Verbex AI. Start your free trial today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Input
            type="email"
            placeholder="Your professional email"
            className="w-full sm:w-80 p-3 rounded-md bg-primary-foreground/20 border border-primary-foreground/30 focus:ring-2 focus:ring-primary-foreground focus:outline-none text-primary-foreground placeholder:text-primary-foreground/70"
          />
          <Button size="lg" className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Claim Your Free Trial
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
