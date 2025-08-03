export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
    </div>
  );
}