import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-6" data-testid="text-tagline">
          AI Email Assistant
        </p>
        
        <h1 className="font-serif font-bold text-5xl md:text-7xl leading-tight mb-6 text-foreground" data-testid="text-hero-headline">
          Email Handled<span className="text-primary">*</span>
          <br />
          Save 6+ hours a week
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
          Connect Gmail or Outlook in 30 seconds and let Emilia triage messages, write replies in your voice, and book meetings automatically—so you can focus on real work.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-works-with">
            <span>Works with</span>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-chart-4" />
              <Mail className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        <Button 
          size="lg" 
          className="bg-foreground text-background hover:bg-foreground px-8 py-6 text-base font-semibold rounded-full min-h-12"
          data-testid="button-start-trial"
        >
          Start Your 7-Day Free Trial ($19)
        </Button>
      </div>
    </section>
  );
}
