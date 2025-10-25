import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [portfolioOffset, setPortfolioOffset] = useState(0);

  useEffect(() => {
    const updatePortfolioPosition = () => {
      const portfolioCard = document.getElementById("portfolio-card-1");
      if (portfolioCard && sectionRef.current) {
        const heroRect = sectionRef.current.getBoundingClientRect();
        const portfolioRect = portfolioCard.getBoundingClientRect();
        const offset = portfolioRect.top - heroRect.top + window.scrollY - sectionRef.current.offsetTop;
        setPortfolioOffset(offset);
      }
    };

    updatePortfolioPosition();
    window.addEventListener("resize", updatePortfolioPosition);
    const timeoutId = setTimeout(updatePortfolioPosition, 100);

    return () => {
      window.removeEventListener("resize", updatePortfolioPosition);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollY } = useScroll();

  const scrollRange = 800;
  const scrollProgress = useTransform(scrollY, [0, scrollRange], [0, 1]);

  const cardTranslateY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, portfolioOffset]
  );

  const cardOpacity = useTransform(scrollY, [0, scrollRange * 0.6, scrollRange], [1, 1, 0]);

  const leftCardRotate = useTransform(scrollY, [0, scrollRange], [-6, 0]);
  const rightCardRotate = useTransform(scrollY, [0, scrollRange], [6, 0]);

  const leftCardTranslateX = useTransform(
    scrollY,
    [0, scrollRange],
    [0, typeof window !== 'undefined' ? window.innerWidth * 0.15 : 100]
  );

  const rightCardTranslateX = useTransform(
    scrollY,
    [0, scrollRange],
    [0, typeof window !== 'undefined' ? -window.innerWidth * 0.15 : -100]
  );

  return (
    <section ref={sectionRef} className="relative overflow-visible py-20 sm:py-24 md:py-20 lg:py-16 xl:py-24 px-6">
      <motion.div 
        className="absolute -left-16 top-4 sm:top-6 md:top-8 lg:-left-8 xl:left-4 2xl:left-16 lg:top-20 xl:top-28 w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-0"
        style={{
          y: cardTranslateY,
          x: leftCardTranslateX,
          opacity: cardOpacity,
          rotate: leftCardRotate,
        }}
      >
        <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg" data-testid="card-project-left">
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
      </motion.div>

      <motion.div 
        className="absolute -right-16 bottom-4 sm:bottom-6 md:bottom-8 lg:-right-8 xl:right-4 2xl:right-16 lg:top-32 xl:top-40 lg:bottom-auto w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-0"
        style={{
          y: cardTranslateY,
          x: rightCardTranslateX,
          opacity: cardOpacity,
          rotate: rightCardRotate,
        }}
      >
        <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg" data-testid="card-project-right">
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
      </motion.div>

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
