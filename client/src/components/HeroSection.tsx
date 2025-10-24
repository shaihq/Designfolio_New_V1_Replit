import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif font-normal text-5xl md:text-7xl leading-tight mb-6 text-foreground" data-testid="text-hero-headline">
          Building a portfolio was never meant to be hard.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
          Designfolio helps you skip the busywork — structure, write, and publish your portfolio in hours, not weeks.
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
          className="bg-foreground text-background px-8 py-6 text-base font-semibold rounded-full min-h-12"
          data-testid="button-start-trial"
        >
          Start Your 7-Day Free Trial ($19)
        </Button>
      </div>
    </section>
  );
}
