import { Header } from "@/components/layout/Header";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LiveKitchenSection } from "@/components/sections/LiveKitchenSection";
import { WhyTeyvaSection } from "@/components/sections/WhyTeyvaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyTeyvaSection />
        <LiveKitchenSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
