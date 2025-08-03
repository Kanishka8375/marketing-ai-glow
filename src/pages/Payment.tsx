import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  const handlePayment = async (planType: string) => {
    if (!user) {
      toast.error("Please sign in to continue");
      navigate("/auth");
      return;
    }

    setIsLoading(true);
    
    // TODO: Implement Stripe payment integration
    toast.info("Payment integration coming soon!");
    
    setIsLoading(false);
  };

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses and startups",
      popular: false,
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
      id: "professional",
      name: "Professional",
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
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      popular: false,
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

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background mesh-gradient py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="heading-lg mb-4">
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your AI marketing journey today. Upgrade or downgrade at any time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`glass-card relative transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-2 ring-primary shadow-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-6 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="heading-md">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePayment(plan.id)}
                  disabled={isLoading}
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? "btn-primary" 
                      : "glass-button hover:text-primary"
                  }`}
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">✓ Cancel anytime</span>
            <span className="flex items-center gap-2">✓ 24/7 Support</span>
            <span className="flex items-center gap-2">✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  );
}