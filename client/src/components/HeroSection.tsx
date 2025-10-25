import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-visible">
      <div className="absolute left-4 top-4 md:-left-8 lg:left-4 xl:left-16 md:top-20 lg:top-28 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-10">
        <div className="sticky" style={{ top: '100px' }}>
          <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform" data-testid="card-project-left">
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-md lg:rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-2" data-testid="text-project-left-title">
                Redesigning fitness app experience for 4M users.
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-foreground/50" data-testid="text-project-left-category">
                Project by Nandini
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-8 md:-right-8 lg:right-4 xl:right-16 md:top-32 lg:top-40 md:bottom-auto w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-10">
        <div className="sticky" style={{ top: '120px' }}>
          <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform" data-testid="card-project-right">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-md lg:rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-2 sm:p-3 md:p-4">
              <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-foreground mb-0.5 sm:mb-1 line-clamp-2" data-testid="text-project-right-title">
                Developed a Blockchain app on Next.JS
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-foreground/50" data-testid="text-project-right-category">
                Case Study by Chris
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6 text-foreground" data-testid="text-hero-headline">
            Building a portfolio was never meant to be hard.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8" data-testid="text-hero-description">
            Designfolio helps you skip the busywork — structure, write, and publish your portfolio in hours, not weeks.
          </p>

          <Button 
            size="lg" 
            className="bg-foreground text-background border border-foreground rounded-full px-10 py-6 text-base font-semibold hover:bg-foreground/80 transition-colors"
            data-testid="button-start-trial"
          >
            Start Your 7-Day Free Trial ($19)
          </Button>
        </div>
      </div>
    </section>
  );
}
