import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {question}
        </h3>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-6 pt-0">
          <p className="text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}