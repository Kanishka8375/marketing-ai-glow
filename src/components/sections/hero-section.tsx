import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-xl mb-8 animate-slide-up">
              Transform Your Brand with
              <br />
              <span className="text-gradient">ADmyBRAND AI Suite</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The ultimate AI-powered marketing platform that creates stunning campaigns, 
              analyzes performance, and scales your brand automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/auth">
                <button className="btn-primary group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <a href="#demo">
                <button className="btn-secondary group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">500M+</div>
                <div className="text-sm text-muted-foreground">Campaigns Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="relative group">
              <img 
                src={heroDashboard}
                alt="ADmyBRAND AI Dashboard showcasing advanced analytics and AI-powered marketing tools"
                className="w-full h-auto rounded-xl shadow-glass group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card p-4 animate-float">
                <div className="text-sm font-semibold text-gradient">AI Powered</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-sm font-semibold text-gradient">Real-time Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}