import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SectionContainer } from "@/components/ui/section-container";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc",
    content: "ADmyBRAND AI has revolutionized our marketing workflow. We've seen a 300% increase in engagement and cut our content creation time in half.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Johnson",
    role: "CEO",
    company: "StartupVenture",
    content: "The AI-powered analytics have given us insights we never had before. Our ROI has improved by 250% since implementing ADmyBRAND.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    company: "BrandStudio",
    content: "As an agency, ADmyBRAND has become indispensable. Our clients love the consistent quality and speed of delivery.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Growth Manager",
    company: "EcomGrowth",
    content: "The automation features have scaled our marketing efforts beyond what we thought possible. Highly recommend to any growing business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionContainer background="mesh">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">
          Loved by <span className="text-gradient">10,000+ Marketers</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See what our customers are saying about their success with ADmyBRAND AI Suite
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 glass-button p-3 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 glass-button p-3 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary" 
                  : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}