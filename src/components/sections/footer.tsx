import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "API", href: "/api" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Templates", href: "/templates" },
      { label: "Case Studies", href: "/case-studies" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Security", href: "/security" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                ADmyBRAND AI
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The ultimate AI-powered marketing platform that transforms how businesses create, manage, and optimize their brand campaigns.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>hello@admybrand.ai</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="glass-button p-3 rounded-lg hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="glass-button p-3 rounded-lg hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="glass-button p-3 rounded-lg hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 ADmyBRAND AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>🔒 SOC 2 Compliant</span>
            <span>✓ GDPR Ready</span>
            <span>⚡ 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}