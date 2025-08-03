import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient" | "mesh";
}

export function SectionContainer({ 
  children, 
  className, 
  background = "default" 
}: SectionContainerProps) {
  return (
    <section className={cn(
      "py-20 px-4 relative overflow-hidden",
      background === "gradient" && "bg-gradient-mesh",
      background === "mesh" && "mesh-gradient",
      className
    )}>
      {background === "gradient" && (
        <div className="absolute inset-0 grid-pattern opacity-20" />
      )}
      <div className="container mx-auto max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
}