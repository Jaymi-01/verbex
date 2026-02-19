import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { ImpactStats } from "@/components/impact-stats";
import { Features } from "@/components/features";
import { ToneSwitcher } from "@/components/tone-switcher";
import { HowItWorks } from "@/components/how-it-works";
import { LanguageSupport } from "@/components/language-support";
import { InteractiveDemo } from "@/components/interactive-demo";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Integrations } from "@/components/integrations";
import { FooterCTA } from "@/components/footer-cta";
import { Footer } from "@/components/footer"; // Import Footer component

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <SocialProof />
        <ImpactStats />
        <Features />
        <ToneSwitcher />
        <HowItWorks />
        <InteractiveDemo />
        <LanguageSupport />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Integrations />
        <FooterCTA />
      </main>
      <Footer /> {/* Render the Footer component outside main */}
    </>
  );
}
