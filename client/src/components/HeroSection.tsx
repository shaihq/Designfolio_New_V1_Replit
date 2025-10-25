import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-visible">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="hidden lg:block absolute left-[-320px] top-20 w-64 sticky" style={{ top: '120px' }}>
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg transform -rotate-6 hover:rotate-0 transition-transform" data-testid="card-project-left">
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground mb-1" data-testid="text-project-left-title">
                Redesigning fitness app experience for 4M users.
              </h3>
              <p className="text-xs text-foreground/50" data-testid="text-project-left-category">
                Project by Nandini
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-[-320px] top-32 w-64 sticky" style={{ top: '140px' }}>
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg transform rotate-6 hover:rotate-0 transition-transform" data-testid="card-project-right">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground mb-1" data-testid="text-project-right-title">
                Developed a Blockchain app on Next.JS
              </h3>
              <p className="text-xs text-foreground/50" data-testid="text-project-right-category">
                Case Study by Chris
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-serif font-normal text-5xl md:text-7xl leading-tight mb-6 text-foreground" data-testid="text-hero-headline">
          Building a portfolio was never meant to be hard.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-8" data-testid="text-hero-description">
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
    </section>
  );
}
