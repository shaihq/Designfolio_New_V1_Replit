export default function PortfolioSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-3 sm:mb-4" data-testid="text-portfolio-heading">
          Featured Case Studies
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-center text-foreground/70 mb-8 sm:mb-12 md:mb-16" data-testid="text-portfolio-description">
          Explore how designers are building stunning portfolios
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div 
            id="portfolio-card-1" 
            className="opacity-30 bg-white dark:bg-card rounded-xl lg:rounded-2xl border-2 border-dashed border-border overflow-hidden shadow-lg"
            data-testid="card-portfolio-placeholder-1"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2" data-testid="text-portfolio-1-title">
                Redesigning fitness app experience for 4M users.
              </h3>
              <p className="text-xs md:text-sm text-foreground/50" data-testid="text-portfolio-1-category">
                Project by Nandini
              </p>
            </div>
          </div>

          <div 
            id="portfolio-card-2"
            className="opacity-30 bg-white dark:bg-card rounded-xl lg:rounded-2xl border-2 border-dashed border-border overflow-hidden shadow-lg"
            data-testid="card-portfolio-placeholder-2"
          >
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2" data-testid="text-portfolio-2-title">
                Developed a Blockchain app on Next.JS
              </h3>
              <p className="text-xs md:text-sm text-foreground/50" data-testid="text-portfolio-2-category">
                Case Study by Chris
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
