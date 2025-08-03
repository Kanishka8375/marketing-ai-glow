import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DemoSection } from "@/components/sections/demo-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mesh-gradient">
      <Navigation />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="demo">
        <DemoSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
