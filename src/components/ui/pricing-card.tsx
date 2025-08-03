import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  popular = false, 
  className,
  style 
}: PricingCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-8 relative group hover:scale-105 transition-all duration-300",
        popular && "ring-2 ring-primary shadow-glow",
        className
      )}
      style={style}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="heading-md mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-gradient">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={cn(
        "w-full py-4 rounded-lg font-semibold transition-all duration-300",
        popular 
          ? "btn-primary" 
          : "glass-button hover:text-primary"
      )}>
        Get Started
      </button>
    </div>
  );
}