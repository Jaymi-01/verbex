"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Words Refined", value: "1.2M", suffix: "+" },
  { label: "Hours Saved", value: "48K", suffix: "+" },
  { label: "Active Users", value: "85K", suffix: "" },
  { label: "Tone Accuracy", value: "99", suffix: "%" },
];

const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isAbbreviated = value.includes('M') || value.includes('K');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = numericValue;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-primary tracking-tight">
      {isAbbreviated ? count.toFixed(1).replace(/\.0$/, '') : Math.floor(count)}
      {value.replace(/[0-9.]/g, '')}
      {suffix}
    </span>
  );
};

export const ImpactStats = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4 sm:gap-x-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 px-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
