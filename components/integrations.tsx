"use client";

import { motion } from "framer-motion";
import { 
  SlackLogo, 
  NotionLogo, 
  GoogleLogo, 
  FigmaLogo, 
  DiscordLogo, 
  MicrosoftExcelLogo 
} from "@phosphor-icons/react";

const integrations = [
  { name: "Notion", icon: NotionLogo, color: "hover:text-foreground" },
  { name: "Slack", icon: SlackLogo, color: "hover:text-[#4A154B]" },
  { name: "Google Docs", icon: GoogleLogo, color: "hover:text-[#4285F4]" },
  { name: "Figma", icon: FigmaLogo, color: "hover:text-[#F24E1E]" },
  { name: "Discord", icon: DiscordLogo, color: "hover:text-[#5865F2]" },
  { name: "Teams", icon: MicrosoftExcelLogo, color: "hover:text-[#6264A7]" },
];

export const Integrations = () => {
  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 tracking-tight">Works Everywhere You Write</h2>
            <p className="text-muted-foreground leading-relaxed">
              Verbex AI integrates seamlessly with the tools you use every day. No tab-switching, no friction—just polished prose wherever you work.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {integrations.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-2xl group transition-all"
              >
                <tool.icon size={32} weight="duotone" className={`text-muted-foreground transition-colors ${tool.color}`} />
                <span className="font-bold text-foreground/80">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
