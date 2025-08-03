import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({ 
  children, 
  className, 
  animation = "fadeIn",
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "slideUp":
          return "opacity-0 translate-y-10";
        case "slideLeft":
          return "opacity-0 translate-x-10";
        case "slideRight":
          return "opacity-0 -translate-x-10";
        case "scale":
          return "opacity-0 scale-95";
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
}