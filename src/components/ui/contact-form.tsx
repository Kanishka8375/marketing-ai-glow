import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
    
    // Show success message (you could use a toast here)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="your@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Your company name"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Tell us about your project and how we can help..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full btn-primary",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}