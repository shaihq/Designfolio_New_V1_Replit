export default function EmailMockup() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-0">
      <div className="max-w-5xl mx-auto">
        <div 
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-portfolio-mockup"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center overflow-hidden">
                  <video 
                    className="w-full h-full object-cover rounded-2xl"
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

              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 sm:mb-4" data-testid="text-portfolio-name">
                  Bruce Wayne 👋
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed" data-testid="text-portfolio-description">
                  A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div 
                id="portfolio-card-1"
                className="bg-white dark:bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-lg invisible"
                data-testid="placeholder-project-1"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5 line-clamp-2" data-testid="text-project-1-title">
                    Redesigning fitness app experience for 4M users.
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/50" data-testid="text-project-1-category">
                    Project by Nandini
                  </p>
                </div>
              </div>

              <div 
                id="portfolio-card-2"
                className="bg-white dark:bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-lg invisible"
                data-testid="placeholder-project-2"
              >
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5 line-clamp-2" data-testid="text-project-2-title">
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
    </section>
  );
}
