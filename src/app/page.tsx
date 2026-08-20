import { CorporateSection } from "@/components/sections/CorporateSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { DownloadAppSection } from "@/components/sections/DownloadAppSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LiveKitchenSection } from "@/components/sections/LiveKitchenSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { PreOrderSection } from "@/components/sections/PreOrderSection";
import { WhyDinDinSection } from "@/components/sections/WhyDinDinSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <WhyDinDinSection />
      <LiveKitchenSection />
      <MenuSection />
      <PreOrderSection />
      <DeliverySection />
      <CorporateSection />
      <DownloadAppSection />
      <Footer />
    </main>
  );
}
