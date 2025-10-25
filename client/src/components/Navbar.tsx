import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <Hexagon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" data-testid="logo-icon" />
            <span className="text-base sm:text-lg font-semibold text-foreground" data-testid="text-logo">
              Design<span className="italic">folio</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#howitworks" className="text-sm sm:text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-howitworks">
              How it works?
            </a>
            <a href="#otheraitools" className="text-sm sm:text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-otheraitools">
              Other AI tools
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#login" className="text-sm sm:text-[15px] text-foreground hover-elevate px-2 sm:px-3 py-2 rounded-md" data-testid="link-login">
              Login
            </a>
            <Button 
              size="default" 
              className="bg-foreground text-background border border-foreground rounded-full px-3 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base font-medium hover:bg-foreground/80 transition-colors" 
              data-testid="button-getstarted"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
