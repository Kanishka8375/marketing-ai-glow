import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: CSSProperties;
}

export function FeatureCard({ icon, title, description, className, style }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-8 group hover:scale-105 transition-all duration-300 cursor-pointer",
        "hover:shadow-[0_0_30px_hsl(270_91%_65%/0.2)]",
        className
      )}
      style={style}
    >
      <div className="mb-6 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:animate-glow transition-all duration-300">
        {icon}
      </div>
      <h3 className="heading-md mb-4 group-hover:text-gradient transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}