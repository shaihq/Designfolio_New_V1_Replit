import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function EmailMockup() {
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState(800);
  
  useEffect(() => {
    const updateScrollRange = () => {
      const portfolioCard1 = document.getElementById("portfolio-card-1");
      const portfolioCard2 = document.getElementById("portfolio-card-2");
      const heroSection = document.querySelector("section");
      
      let maxDeltaY = 0;
      
      if (portfolioCard1 && heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const portfolio1Rect = portfolioCard1.getBoundingClientRect();
        
        const heroAbsoluteTop = heroRect.top + window.scrollY;
        const portfolio1AbsoluteTop = portfolio1Rect.top + window.scrollY;
        
        const deltaY = portfolio1AbsoluteTop - heroAbsoluteTop;
        maxDeltaY = Math.max(maxDeltaY, deltaY);
      }
      
      if (portfolioCard2 && heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const portfolio2Rect = portfolioCard2.getBoundingClientRect();
        
        const heroAbsoluteTop = heroRect.top + window.scrollY;
        const portfolio2AbsoluteTop = portfolio2Rect.top + window.scrollY;
        
        const deltaY = portfolio2AbsoluteTop - heroAbsoluteTop;
        maxDeltaY = Math.max(maxDeltaY, deltaY);
      }
      
      // Use same calculation as HeroSection - maximum distance either card needs to travel
      const calculatedScrollRange = Math.max(maxDeltaY * 1.2, 400);
      setScrollRange(calculatedScrollRange);
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    const timeoutId = setTimeout(updateScrollRange, 100);

    return () => {
      window.removeEventListener("resize", updateScrollRange);
      clearTimeout(timeoutId);
    };
  }, []);
  
  const cardOpacity = useTransform(scrollY, [scrollRange * 0.6, scrollRange], [0, 1]);
  const cardScale = useTransform(scrollY, [scrollRange * 0.6, scrollRange], [0.95, 1]);

  return (
    <section className="py-8 sm:py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-portfolio-mockup"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-4 sm:p-8 md:p-12">
            <div className="flex items-start gap-3 sm:gap-6 mb-6 sm:mb-12">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full rounded-xl sm:rounded-2xl">
                    <AvatarFallback className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 text-foreground text-2xl sm:text-4xl">
                      <User className="w-10 h-10 sm:w-16 sm:h-16" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2 sm:mb-4" data-testid="text-portfolio-name">
                  Bruce Wayne 👋
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl" data-testid="text-portfolio-description">
                  A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div 
                id="portfolio-card-1"
                className="bg-white dark:bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-lg"
                style={{
                  opacity: cardOpacity,
                  scale: cardScale,
                }}
                data-testid="placeholder-project-1"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2" data-testid="text-project-1-title">
                    Redesigning fitness app experience for 4M users.
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-foreground/50" data-testid="text-project-1-category">
                    Project by Nandini
                  </p>
                </div>
              </motion.div>

              <motion.div 
                id="portfolio-card-2"
                className="bg-white dark:bg-card rounded-xl sm:rounded-2xl border border-border overflow-hidden shadow-lg"
                style={{
                  opacity: cardOpacity,
                  scale: cardScale,
                }}
                data-testid="placeholder-project-2"
              >
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2" data-testid="text-project-2-title">
                    Developed a Blockchain app on Next.JS
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-foreground/50" data-testid="text-project-2-category">
                    Case Study by Chris
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
