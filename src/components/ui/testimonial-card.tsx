import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  className?: string;
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  avatar, 
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "glass-card p-8 group hover:scale-105 transition-all duration-300",
      className
    )}>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5",
              i < rating ? "text-warning fill-current" : "text-muted-foreground"
            )} 
          />
        ))}
      </div>
      
      <blockquote className="text-lg mb-6 leading-relaxed">
        "{content}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
}