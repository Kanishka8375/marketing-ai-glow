import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "glass-card backdrop-blur-xl border-b border-white/10 shadow-glass" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gradient">
              ADmyBRAND AI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.email}
                </span>
                <button 
                  onClick={handleSignOut}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    Sign In
                  </button>
                </Link>
                <Link to="/auth">
                  <button className="btn-primary">
                    Start Free Trial
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                {user ? (
                  <>
                    <span className="text-sm text-muted-foreground">
                      Welcome, {user.email}
                    </span>
                    <button 
                      onClick={handleSignOut}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <button className="w-full btn-primary mb-2">
                        Start Free Trial
                      </button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        Sign In
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}