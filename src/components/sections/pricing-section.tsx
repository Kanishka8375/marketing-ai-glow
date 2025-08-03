import { PricingCard } from "@/components/ui/pricing-card";
import { SectionContainer } from "@/components/ui/section-container";

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 AI-generated content pieces/month",
      "Basic analytics and reporting",
      "5 social media accounts",
      "Email support",
      "Template library access",
      "Brand guidelines setup"
    ]
  },
  {
    title: "Professional",
    price: "$99",
    description: "Ideal for growing businesses and agencies",
    popular: true,
    features: [
      "Up to 10,000 AI-generated content pieces/month",
      "Advanced analytics and predictive insights",
      "Unlimited social media accounts",
      "Priority support + live chat",
      "Custom templates and workflows",
      "A/B testing and optimization",
      "Team collaboration tools",
      "API access"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited AI-generated content",
      "White-label solutions",
      "Advanced integrations",
      "Dedicated account manager",
      "Custom AI model training",
      "Enterprise security features",
      "SLA guarantees",
      "On-premise deployment options"
    ]
  }
];

export function PricingSection() {
  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">
          Simple, <span className="text-gradient">Transparent Pricing</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your business. Upgrade or downgrade at any time with no hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-6">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">✓ Cancel anytime</span>
          <span className="flex items-center gap-2">✓ 24/7 Support</span>
          <span className="flex items-center gap-2">✓ 99.9% Uptime SLA</span>
        </div>
      </div>
    </SectionContainer>
  );
}