"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What exactly is Verbex AI and how can it help my writing?",
    answer:
      "Verbex AI is an intelligent writing assistant that leverages cutting-edge artificial intelligence to refine, optimize, and enhance your content. It provides real-time suggestions for grammar, style, tone, clarity, and conciseness, helping you produce professional-grade text effortlessly.",
  },
  {
    question: "How does Verbex AI ensure the quality and relevance of its suggestions?",
    answer:
      "Our proprietary AI models are continuously trained on vast, diverse datasets of high-quality linguistic content. This allows Verbex AI to understand nuanced contexts, writing styles, and industry-specific terminology, ensuring its suggestions are not only grammatically correct but also highly relevant and impactful.",
  },
  {
    question: "Can Verbex AI be used for team collaboration and large-scale projects?",
    answer:
      "Absolutely! Verbex AI is built with collaboration in mind. It offers robust features for team workspaces, allowing multiple users to co-edit documents in real-time, leave contextual comments, track changes, and maintain a consistent brand voice across all team members' contributions.",
  },
  {
    question: "What measures does Verbex AI take to protect my data and privacy?",
    answer:
      "Data security and user privacy are paramount at Verbex AI. All your documents, personal information, and usage data are protected with industry-leading encryption protocols, both in transit and at rest. We adhere strictly to global data protection regulations and ensure your content remains confidential and secure.",
  },
  {
    question: "Does Verbex AI integrate with my existing writing tools or platforms?",
    answer:
      "Verbex AI is designed for seamless integration. We offer a growing number of integrations with popular content management systems, word processors, and other productivity tools. Please visit our integrations page or contact support for a detailed list of current and upcoming compatible platforms.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">Your Questions, Answered: Everything About Verbex AI</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a burning question about how Verbex AI can elevate your writing? We've got the answers you need.
        </p>

        <div className="max-w-3xl mx-auto text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <AccordionItem value={`item-${index + 1}`} className="border-b border-border">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
