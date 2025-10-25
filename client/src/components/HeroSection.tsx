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

        <Button 
          size="lg" 
          className="bg-foreground text-background border border-foreground rounded-full px-8 text-base font-semibold"
          data-testid="button-start-trial"
        >
          Start Your 7-Day Free Trial ($19)
        </Button>
      </div>
    </section>
  );
}
