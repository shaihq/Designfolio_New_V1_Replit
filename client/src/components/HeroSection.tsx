import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const portfolioTriggerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const lastWidthRef = useRef<number>(0);
  
  const [leftCardOffset, setLeftCardOffset] = useState({ x: 0, y: 0 });
  const [rightCardOffset, setRightCardOffset] = useState({ x: 0, y: 0 });
  const [leftCardScale, setLeftCardScale] = useState(1);
  const [rightCardScale, setRightCardScale] = useState(1);
  const [scrollRange, setScrollRange] = useState(800);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const updateCardPositions = () => {
      const currentWidth = window.innerWidth;
      
      // Only recalculate if width actually changed (not just height from browser chrome)
      if (lastWidthRef.current !== 0 && Math.abs(currentWidth - lastWidthRef.current) < 1) {
        return;
      }
      
      lastWidthRef.current = currentWidth;
      
      const portfolioCard1 = document.getElementById("portfolio-card-1");
      const portfolioCard2 = document.getElementById("portfolio-card-2");
      
      let maxDeltaY = 0;
      
      if (portfolioCard1 && leftCardRef.current) {
        const leftRect = leftCardRef.current.getBoundingClientRect();
        const portfolio1Rect = portfolioCard1.getBoundingClientRect();
        
        const scaleRatio = portfolio1Rect.width / leftRect.width;
        
        // Calculate center positions
        const leftCenterX = leftRect.left + leftRect.width / 2;
        const leftCenterY = leftRect.top + window.scrollY + leftRect.height / 2;
        const portfolio1CenterX = portfolio1Rect.left + portfolio1Rect.width / 2;
        const portfolio1CenterY = portfolio1Rect.top + window.scrollY + portfolio1Rect.height / 2;
        
        // Calculate offset from center to center
        const deltaX = portfolio1CenterX - leftCenterX;
        const deltaY = portfolio1CenterY - leftCenterY;
        
        setLeftCardOffset({ x: deltaX, y: deltaY });
        setLeftCardScale(scaleRatio);
        maxDeltaY = Math.max(maxDeltaY, Math.abs(deltaY));
      }
      
      if (portfolioCard2 && rightCardRef.current) {
        const rightRect = rightCardRef.current.getBoundingClientRect();
        const portfolio2Rect = portfolioCard2.getBoundingClientRect();
        
        const scaleRatio = portfolio2Rect.width / rightRect.width;
        
        // Calculate center positions
        const rightCenterX = rightRect.left + rightRect.width / 2;
        const rightCenterY = rightRect.top + window.scrollY + rightRect.height / 2;
        const portfolio2CenterX = portfolio2Rect.left + portfolio2Rect.width / 2;
        const portfolio2CenterY = portfolio2Rect.top + window.scrollY + portfolio2Rect.height / 2;
        
        // Calculate offset from center to center
        const deltaX = portfolio2CenterX - rightCenterX;
        const deltaY = portfolio2CenterY - rightCenterY;
        
        setRightCardOffset({ x: deltaX, y: deltaY });
        setRightCardScale(scaleRatio);
        maxDeltaY = Math.max(maxDeltaY, Math.abs(deltaY));
      }
      
      // Set scroll range based on the maximum distance either card needs to travel
      // Use a much smaller multiplier on mobile for faster animation (less scroll needed)
      const multiplier = isMobile ? 0.15 : 0.6;
      const calculatedScrollRange = Math.max(maxDeltaY * multiplier, 200);
      setScrollRange(calculatedScrollRange);
    };

    updateCardPositions();
    window.addEventListener("resize", updateCardPositions);
    const timeoutId = setTimeout(updateCardPositions, 100);

    return () => {
      window.removeEventListener("resize", updateCardPositions);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  const { scrollY } = useScroll();

  // Desktop: scroll-linked animation with spring smoothing
  // Mobile: no scroll tracking (animation handled by whileInView)
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };

  const leftCardTranslateYRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.y],
    { clamp: true }
  );
  const leftCardTranslateYSpring = useSpring(leftCardTranslateYRaw, springConfig);

  const leftCardTranslateXRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.x],
    { clamp: true }
  );
  const leftCardTranslateXSpring = useSpring(leftCardTranslateXRaw, springConfig);

  const rightCardTranslateYRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.y],
    { clamp: true }
  );
  const rightCardTranslateYSpring = useSpring(rightCardTranslateYRaw, springConfig);

  const rightCardTranslateXRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.x],
    { clamp: true }
  );
  const rightCardTranslateXSpring = useSpring(rightCardTranslateXRaw, springConfig);

  const leftCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    [-6, 0], 
    { clamp: true }
  );
  const leftCardRotateSpring = useSpring(leftCardRotateRaw, springConfig);

  const rightCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    [6, 0], 
    { clamp: true }
  );
  const rightCardRotateSpring = useSpring(rightCardRotateRaw, springConfig);
  
  const leftScaleRaw = useTransform(scrollY, [0, scrollRange], [1, leftCardScale], { clamp: true });
  const leftScaleSpring = useSpring(leftScaleRaw, springConfig);

  const rightScaleRaw = useTransform(scrollY, [0, scrollRange], [1, rightCardScale], { clamp: true });
  const rightScaleSpring = useSpring(rightScaleRaw, springConfig);

  return (
    <section ref={sectionRef} className="relative overflow-visible py-20 sm:py-24 md:py-20 lg:py-16 xl:py-24 px-6">
      {isMobile && (
        <motion.div
          ref={portfolioTriggerRef}
          className="absolute pointer-events-none"
          style={{ top: "100vh" }}
          onViewportEnter={() => setAnimateCards(true)}
          viewport={{ once: true }}
        />
      )}
      <motion.div 
        ref={leftCardRef}
        className="absolute -left-16 top-4 sm:top-6 md:top-8 lg:-left-8 xl:left-4 2xl:left-16 lg:top-20 xl:top-28 w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-10 origin-center will-change-transform"
        style={isMobile ? {} : {
          y: leftCardTranslateYSpring,
          x: leftCardTranslateXSpring,
          rotate: leftCardRotateSpring,
          scale: leftScaleSpring,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        initial={isMobile ? { opacity: 1, y: 0, x: 0, scale: 1 } : false}
        animate={isMobile && animateCards ? { 
          y: leftCardOffset.y, 
          x: leftCardOffset.x, 
          scale: leftCardScale,
        } : {}}
        transition={isMobile ? { 
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1
        } : undefined}
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
        className="absolute -right-16 bottom-4 sm:bottom-6 md:bottom-8 lg:-right-8 xl:right-4 2xl:right-16 lg:top-32 xl:top-40 lg:bottom-auto w-28 sm:w-32 md:w-36 lg:w-48 xl:w-56 2xl:w-64 z-10 origin-center will-change-transform"
        style={isMobile ? {} : {
          y: rightCardTranslateYSpring,
          x: rightCardTranslateXSpring,
          rotate: rightCardRotateSpring,
          scale: rightScaleSpring,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        initial={isMobile ? { opacity: 1, y: 0, x: 0, scale: 1 } : false}
        animate={isMobile && animateCards ? { 
          y: rightCardOffset.y, 
          x: rightCardOffset.x, 
          scale: rightCardScale,
        } : {}}
        transition={isMobile ? { 
          duration: 0.6, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.15
        } : undefined}
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
