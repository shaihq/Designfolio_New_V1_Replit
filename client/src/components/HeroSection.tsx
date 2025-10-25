import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  
  const [leftCardOffset, setLeftCardOffset] = useState({ x: 0, y: 0 });
  const [rightCardOffset, setRightCardOffset] = useState({ x: 0, y: 0 });
  const [scrollRange, setScrollRange] = useState(800);

  useEffect(() => {
    const updateCardPositions = () => {
      const portfolioCard1 = document.getElementById("portfolio-card-1");
      const portfolioCard2 = document.getElementById("portfolio-card-2");
      
      let maxDeltaY = 0;
      
      if (portfolioCard1 && leftCardRef.current) {
        const leftRect = leftCardRef.current.getBoundingClientRect();
        const portfolio1Rect = portfolioCard1.getBoundingClientRect();
        
        const leftAbsoluteTop = leftRect.top + window.scrollY;
        const portfolio1AbsoluteTop = portfolio1Rect.top + window.scrollY;
        
        const deltaX = portfolio1Rect.left - leftRect.left;
        const deltaY = portfolio1AbsoluteTop - leftAbsoluteTop;
        
        setLeftCardOffset({ x: deltaX, y: deltaY });
        maxDeltaY = Math.max(maxDeltaY, deltaY);
      }
      
      if (portfolioCard2 && rightCardRef.current) {
        const rightRect = rightCardRef.current.getBoundingClientRect();
        const portfolio2Rect = portfolioCard2.getBoundingClientRect();
        
        const rightAbsoluteTop = rightRect.top + window.scrollY;
        const portfolio2AbsoluteTop = portfolio2Rect.top + window.scrollY;
        
        const deltaX = portfolio2Rect.left - rightRect.left;
        const deltaY = portfolio2AbsoluteTop - rightAbsoluteTop;
        
        setRightCardOffset({ x: deltaX, y: deltaY });
        maxDeltaY = Math.max(maxDeltaY, deltaY);
      }
      
      // Set scroll range based on the maximum distance either card needs to travel
      // Use a smaller multiplier for faster animation (0.5x the actual distance)
      const calculatedScrollRange = Math.max(maxDeltaY * 0.5, 300);
      setScrollRange(calculatedScrollRange);
    };

    updateCardPositions();
    window.addEventListener("resize", updateCardPositions);
    const timeoutId = setTimeout(updateCardPositions, 100);

    return () => {
      window.removeEventListener("resize", updateCardPositions);
      clearTimeout(timeoutId);
    };
  }, []);

  const { scrollY } = useScroll();

  const leftCardTranslateY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.y]
  );

  const leftCardTranslateX = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.x]
  );

  const rightCardTranslateY = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.y]
  );

  const rightCardTranslateX = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.x]
  );

  const leftCardRotate = useTransform(scrollY, [0, scrollRange], [-6, 0]);
  const rightCardRotate = useTransform(scrollY, [0, scrollRange], [6, 0]);
  
  const heroCardScale = useTransform(scrollY, [scrollRange * 0.6, scrollRange], [0.7, 1]);
  const heroCardOpacity = useTransform(scrollY, [scrollRange * 0.9, scrollRange * 1.1], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-visible py-20 sm:py-24 md:py-20 lg:py-16 xl:py-24 px-6">
      <motion.div 
        ref={leftCardRef}
        className="absolute -left-16 top-4 sm:top-6 md:top-8 lg:-left-8 xl:left-4 2xl:left-16 lg:top-20 xl:top-28 w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-0"
        style={{
          y: leftCardTranslateY,
          x: leftCardTranslateX,
          rotate: leftCardRotate,
          scale: heroCardScale,
          opacity: heroCardOpacity,
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
        ref={rightCardRef}
        className="absolute -right-16 bottom-4 sm:bottom-6 md:bottom-8 lg:-right-8 xl:right-4 2xl:right-16 lg:top-32 xl:top-40 lg:bottom-auto w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-0"
        style={{
          y: rightCardTranslateY,
          x: rightCardTranslateX,
          rotate: rightCardRotate,
          scale: heroCardScale,
          opacity: heroCardOpacity,
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
