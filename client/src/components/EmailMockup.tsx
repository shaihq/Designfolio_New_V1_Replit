export default function EmailMockup() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div 
          className="rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 gradient-border-animate"
          data-testid="container-portfolio-gradient"
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12"
            data-testid="container-portfolio-mockup"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 pb-8 border-b border-border">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-md">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      data-testid="video-avatar"
                    >
                      <source src="/avatarui1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2" data-testid="text-portfolio-name">
                  Bruce Wayne
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/60 mb-4" data-testid="text-portfolio-role">
                  Product Designer & Developer
                </p>
                <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed mb-4" data-testid="text-portfolio-description">
                  A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and gamified learning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full" data-testid="badge-location">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Gotham City
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-accent-foreground text-xs sm:text-sm rounded-full" data-testid="badge-availability">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="4" className="text-green-500" />
                    </svg>
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div 
                id="portfolio-card-1"
                className="bg-muted/30 dark:bg-muted/20 rounded-xl border border-dashed border-border overflow-hidden"
                data-testid="placeholder-project-1"
              >
                <div className="aspect-video bg-muted/40 dark:bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/40 flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="h-5 bg-muted/40 dark:bg-muted/30 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted/30 dark:bg-muted/20 rounded w-1/2"></div>
                </div>
              </div>

              <div 
                id="portfolio-card-2"
                className="bg-muted/30 dark:bg-muted/20 rounded-xl border border-dashed border-border overflow-hidden"
                data-testid="placeholder-project-2"
              >
                <div className="aspect-video bg-muted/40 dark:bg-muted/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-muted/50 dark:bg-muted/40 flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="h-5 bg-muted/40 dark:bg-muted/30 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted/30 dark:bg-muted/20 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
