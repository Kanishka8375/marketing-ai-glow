import { Bot, BarChart3, Zap, Target, Shield, Palette } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionContainer } from "@/components/ui/section-container";

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Content Generation",
    description: "Generate compelling ad copy, social media posts, and marketing content with advanced AI that understands your brand voice."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Real-time insights and predictive analytics to optimize your campaigns and maximize ROI across all channels."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automated Workflows",
    description: "Set up intelligent automation that scales your marketing efforts while maintaining quality and brand consistency."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Smart Targeting",
    description: "AI-powered audience segmentation and targeting to reach the right customers at the perfect moment."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Brand Safety",
    description: "Advanced content moderation and brand guidelines enforcement to protect your reputation across all platforms."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Studio",
    description: "Professional design tools and templates to create stunning visuals that align perfectly with your brand identity."
  }
];

export function FeaturesSection() {
  return (
    <SectionContainer background="gradient">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">
          Powerful Features for <span className="text-gradient">Modern Marketing</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to create, manage, and optimize your marketing campaigns with the power of AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
          />
        ))}
      </div>
    </SectionContainer>
  );
}