import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const lastWidthRef = useRef<number>(0);
  
  const [leftCardOffset, setLeftCardOffset] = useState({ x: 0, y: 0 });
  const [rightCardOffset, setRightCardOffset] = useState({ x: 0, y: 0 });
  const [leftInitialScale, setLeftInitialScale] = useState(1);
  const [rightInitialScale, setRightInitialScale] = useState(1);
  const [leftCardWidth, setLeftCardWidth] = useState<number | null>(null);
  const [rightCardWidth, setRightCardWidth] = useState<number | null>(null);
  const [scrollRange, setScrollRange] = useState(800);

  useEffect(() => {
    const updateCardPositions = (force = false) => {
      const currentWidth = window.innerWidth;
      
      // Only skip recalculation if width unchanged AND not forced
      // This allows recalculation when layout shifts due to fonts/height changes
      if (!force && lastWidthRef.current !== 0 && Math.abs(currentWidth - lastWidthRef.current) < 1) {
        return;
      }
      
      lastWidthRef.current = currentWidth;
      
      const portfolioCard1 = document.getElementById("portfolio-card-1");
      const portfolioCard2 = document.getElementById("portfolio-card-2");
      
      let maxDeltaY = 0;
      
      // Desired hero widths (responsive based on breakpoint)
      const getDesiredHeroWidth = () => {
        if (currentWidth >= 1536) return 256; // 2xl:w-64
        if (currentWidth >= 1280) return 224; // xl:w-56
        if (currentWidth >= 1024) return 192; // lg:w-48
        if (currentWidth >= 768) return 144;  // md:w-36
        if (currentWidth >= 640) return 128;  // sm:w-32
        return 112; // w-28
      };
      
      if (portfolioCard1 && leftCardRef.current) {
        // Get portfolio card dimensions
        const portfolio1Rect = portfolioCard1.getBoundingClientRect();
        
        // Set card to match portfolio width
        setLeftCardWidth(portfolio1Rect.width);
        
        // Calculate initial scale (how small the card should appear in hero)
        const desiredHeroWidth = getDesiredHeroWidth();
        const initialScale = desiredHeroWidth / portfolio1Rect.width;
        setLeftInitialScale(initialScale);
        
        // Temporarily disable transforms to get accurate position
        const leftElement = leftCardRef.current;
        const prevTransform = leftElement.style.transform;
        leftElement.style.transform = "none";
        
        const leftRect = leftElement.getBoundingClientRect();
        
        // Calculate center positions
        const leftCenterX = leftRect.left + leftRect.width / 2;
        const leftCenterY = leftRect.top + window.scrollY + leftRect.height / 2;
        const portfolio1CenterX = portfolio1Rect.left + portfolio1Rect.width / 2;
        const portfolio1CenterY = portfolio1Rect.top + window.scrollY + portfolio1Rect.height / 2;
        
        // Calculate offset from center to center
        const deltaX = portfolio1CenterX - leftCenterX;
        const deltaY = portfolio1CenterY - leftCenterY;
        
        setLeftCardOffset({ x: deltaX, y: deltaY });
        maxDeltaY = Math.max(maxDeltaY, Math.abs(deltaY));
        
        // Restore transform
        leftElement.style.transform = prevTransform;
      }
      
      if (portfolioCard2 && rightCardRef.current) {
        // Get portfolio card dimensions
        const portfolio2Rect = portfolioCard2.getBoundingClientRect();
        
        // Set card to match portfolio width
        setRightCardWidth(portfolio2Rect.width);
        
        // Calculate initial scale (how small the card should appear in hero)
        const desiredHeroWidth = getDesiredHeroWidth();
        const initialScale = desiredHeroWidth / portfolio2Rect.width;
        setRightInitialScale(initialScale);
        
        // Temporarily disable transforms to get accurate position
        const rightElement = rightCardRef.current;
        const prevTransform = rightElement.style.transform;
        rightElement.style.transform = "none";
        
        const rightRect = rightElement.getBoundingClientRect();
        
        // Calculate center positions
        const rightCenterX = rightRect.left + rightRect.width / 2;
        const rightCenterY = rightRect.top + window.scrollY + rightRect.height / 2;
        const portfolio2CenterX = portfolio2Rect.left + portfolio2Rect.width / 2;
        const portfolio2CenterY = portfolio2Rect.top + window.scrollY + portfolio2Rect.height / 2;
        
        // Calculate offset from center to center
        const deltaX = portfolio2CenterX - rightCenterX;
        const deltaY = portfolio2CenterY - rightCenterY;
        
        setRightCardOffset({ x: deltaX, y: deltaY });
        maxDeltaY = Math.max(maxDeltaY, Math.abs(deltaY));
        
        // Restore transform
        rightElement.style.transform = prevTransform;
      }
      
      // Set scroll range based on the maximum distance either card needs to travel
      // Use a much smaller multiplier on mobile for faster animation (less scroll needed)
      const multiplier = isMobile ? 0.15 : 0.6;
      const calculatedScrollRange = Math.max(maxDeltaY * multiplier, 200);
      setScrollRange(calculatedScrollRange);
    };

    // Initial calculation
    updateCardPositions();
    
    // Wait for fonts to load, then recalculate after layout settles
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          updateCardPositions(true);
        });
      });
    });
    
    // Fallback timeout for browsers that don't support fonts API
    const timeoutId = setTimeout(() => updateCardPositions(true), 300);
    
    const handleResize = () => updateCardPositions();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  const { scrollY } = useScroll();

  // Spring configuration - more responsive on mobile for better performance
  const springConfig = isMobile 
    ? { stiffness: 200, damping: 30, mass: 0.5 }
    : { stiffness: 100, damping: 30, mass: 1 };

  const leftCardTranslateYRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.y],
    { clamp: true }
  );
  const leftCardTranslateY = useSpring(leftCardTranslateYRaw, springConfig);

  const leftCardTranslateXRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, leftCardOffset.x],
    { clamp: true }
  );
  const leftCardTranslateX = useSpring(leftCardTranslateXRaw, springConfig);

  const rightCardTranslateYRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.y],
    { clamp: true }
  );
  const rightCardTranslateY = useSpring(rightCardTranslateYRaw, springConfig);

  const rightCardTranslateXRaw = useTransform(
    scrollY,
    [0, scrollRange],
    [0, rightCardOffset.x],
    { clamp: true }
  );
  const rightCardTranslateX = useSpring(rightCardTranslateXRaw, springConfig);

  // Simplify animations on mobile - no rotation, only translation and scale
  const leftCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    isMobile ? [0, 0] : [-6, 0], 
    { clamp: true }
  );
  const leftCardRotate = useSpring(leftCardRotateRaw, springConfig);

  const rightCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    isMobile ? [0, 0] : [6, 0], 
    { clamp: true }
  );
  const rightCardRotate = useSpring(rightCardRotateRaw, springConfig);
  
  const leftScaleRaw = useTransform(scrollY, [0, scrollRange], [leftInitialScale, 1], { clamp: true });
  const leftScale = useSpring(leftScaleRaw, springConfig);

  const rightScaleRaw = useTransform(scrollY, [0, scrollRange], [rightInitialScale, 1], { clamp: true });
  const rightScale = useSpring(rightScaleRaw, springConfig);

  return (
    <section ref={sectionRef} className="relative overflow-visible py-20 sm:py-24 md:py-20 lg:py-16 xl:py-24 px-6">
      <motion.div 
        ref={leftCardRef}
        className="absolute -left-32 top-0 lg:-left-8 xl:left-4 2xl:left-16 lg:top-20 xl:top-28 z-0 will-change-transform"
        style={{
          width: leftCardWidth ? `${leftCardWidth}px` : undefined,
          y: leftCardTranslateY,
          x: leftCardTranslateX,
          z: 0,
          rotate: leftCardRotate,
          scale: leftScale,
          transformOrigin: "center",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg flex flex-col" data-testid="card-project-left">
          <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white/20 rounded-md lg:rounded-xl backdrop-blur-sm"></div>
            </div>
          </div>
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]" data-testid="text-project-left-title">
              Redesigning fitness app experience for 4M users.
            </h3>
            <p className="text-xs md:text-sm text-foreground/50" data-testid="text-project-left-category">
              Project by Nandini
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        ref={rightCardRef}
        className="absolute -right-32 -bottom-20 lg:-right-8 xl:right-4 2xl:right-16 lg:top-32 xl:top-40 lg:bottom-auto z-0 will-change-transform"
        style={{
          width: rightCardWidth ? `${rightCardWidth}px` : undefined,
          y: rightCardTranslateY,
          x: rightCardTranslateX,
          z: 0,
          rotate: rightCardRotate,
          scale: rightScale,
          transformOrigin: "center",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden shadow-lg flex flex-col" data-testid="card-project-right">
          <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white/20 rounded-md lg:rounded-xl backdrop-blur-sm"></div>
            </div>
          </div>
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]" data-testid="text-project-right-title">
              Developed a Blockchain app on Next.JS
            </h3>
            <p className="text-xs md:text-sm text-foreground/50" data-testid="text-project-right-category">
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
