import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Hexagon className="h-5 w-5 text-foreground" data-testid="logo-icon" />
            <span className="text-lg font-semibold text-foreground" data-testid="text-logo">Lynq</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-pricing">
              Pricing
            </a>
            <a href="#security" className="text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-security">
              Security
            </a>
            <a href="#compare" className="text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-compare">
              Compare
            </a>
            <a href="#docs" className="text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-docs">
              Docs
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#signin" className="text-[15px] text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-signin">
              Sign in
            </a>
            <Button size="default" className="bg-foreground text-background hover:bg-foreground rounded-full" data-testid="button-getstarted">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
