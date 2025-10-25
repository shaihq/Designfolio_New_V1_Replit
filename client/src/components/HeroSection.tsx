import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-20 lg:py-16 xl:py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-12 lg:px-0">
          <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-4 sm:mb-6 text-foreground" data-testid="text-hero-headline">
            Building a portfolio was never meant to be hard.
          </h1>
          
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8" data-testid="text-hero-description">
            Designfolio helps you skip the busywork — structure, write, and publish your portfolio in hours, not weeks.
          </p>

          <Button 
            size="lg" 
            className="bg-foreground text-background border border-foreground rounded-full px-6 sm:px-8 md:px-10 py-5 sm:py-5 md:py-6 text-sm sm:text-base font-semibold hover:bg-foreground/80 transition-colors"
            data-testid="button-start-trial"
          >
            Start Your 7-Day Free Trial ($19)
          </Button>
        </div>
      </div>
    </section>
  );
}
