export default function EmailMockup() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div 
          className="rounded-2xl sm:rounded-3xl p-1 sm:p-1.5"
          style={{
            background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)"
          }}
          data-testid="container-portfolio-gradient"
        >
          <div 
            className="bg-background dark:bg-card rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12"
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

            <div className="pt-8">
              <h4 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-6" data-testid="text-projects-heading">
                Featured Projects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div 
                  id="portfolio-card-1"
                  className="bg-card dark:bg-card/50 rounded-xl border border-border overflow-hidden shadow-sm hover-elevate"
                  data-testid="placeholder-project-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1.5 line-clamp-2" data-testid="text-project-1-title">
                      Redesigning fitness app experience for 4M users.
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/50" data-testid="text-project-1-category">
                      Project by Nandini
                    </p>
                  </div>
                </div>

                <div 
                  id="portfolio-card-2"
                  className="bg-card dark:bg-card/50 rounded-xl border border-border overflow-hidden shadow-sm hover-elevate"
                  data-testid="placeholder-project-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1.5 line-clamp-2" data-testid="text-project-2-title">
                      Developed a Blockchain app on Next.JS
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/50" data-testid="text-project-2-category">
                      Case Study by Chris
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
