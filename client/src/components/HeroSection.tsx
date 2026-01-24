import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Typewriter } from "@/components/ui/typewriter";
import { Sun } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/animated-grid";

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
  
  const names = ["john", "morgan", "sarah", "tom", "brad"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (inputValue || isFocused) return;
    
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [inputValue, isFocused, names.length]);

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

  // Add rotation on all devices for visual interest
  const leftCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    isMobile ? [-8, 0] : [-6, 0], 
    { clamp: true }
  );
  const leftCardRotate = useSpring(leftCardRotateRaw, springConfig);

  const rightCardRotateRaw = useTransform(
    scrollY, 
    [0, scrollRange], 
    isMobile ? [8, 0] : [6, 0], 
    { clamp: true }
  );
  const rightCardRotate = useSpring(rightCardRotateRaw, springConfig);
  
  const leftScaleRaw = useTransform(scrollY, [0, scrollRange], [leftInitialScale, 1], { clamp: true });
  const leftScale = useSpring(leftScaleRaw, springConfig);

  const rightScaleRaw = useTransform(scrollY, [0, scrollRange], [rightInitialScale, 1], { clamp: true });
  const rightScale = useSpring(rightScaleRaw, springConfig);

  // Fade out shadow as cards reach profile section
  const shadowOpacityRaw = useTransform(scrollY, [0, scrollRange], [1, 0], { clamp: true });
  const shadowOpacity = useSpring(shadowOpacityRaw, springConfig);
  
  const cardBoxShadow = useMotionTemplate`0 10px 15px -3px rgba(0, 0, 0, ${useTransform(shadowOpacity, (v) => v * 0.1)}), 0 4px 6px -4px rgba(0, 0, 0, ${useTransform(shadowOpacity, (v) => v * 0.1)})`;

  return (
    <section ref={sectionRef} className="relative overflow-visible py-8 sm:py-12 md:py-16 px-6">
      <AnimatedGrid />
      
      <motion.div 
        ref={leftCardRef}
        className="absolute -left-40 -top-12 lg:-left-8 xl:left-4 2xl:left-16 lg:top-20 xl:top-28 z-[31] will-change-transform"
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
        <motion.div 
          className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden flex flex-col" 
          style={{
            boxShadow: cardBoxShadow
          }}
          data-testid="card-project-left"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="/casestudyux1.svg" 
              alt="Fitness app redesign case study" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            <h3 className="font-heading text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]" data-testid="text-project-left-title">
              Redesigning fitness app experience for 4M users.
            </h3>
            <p className="text-xs md:text-sm text-foreground/50" data-testid="text-project-left-category">
              AI Fitness Tracker
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={rightCardRef}
        className="absolute -right-32 -bottom-20 lg:-right-8 xl:right-4 2xl:right-16 lg:top-32 xl:top-40 lg:bottom-auto z-[29] will-change-transform"
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
        <motion.div 
          className="bg-white dark:bg-card rounded-lg md:rounded-xl lg:rounded-2xl border border-border overflow-hidden flex flex-col" 
          style={{
            boxShadow: cardBoxShadow
          }}
          data-testid="card-project-right"
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src="/casestudyux2.svg" 
              alt="Blockchain crypto app case study" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:p-5 flex-1 flex flex-col">
            <h3 className="font-heading text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]" data-testid="text-project-right-title">
              Built a blockchain crypto app using Next.js
            </h3>
            <p className="text-xs md:text-sm text-foreground/50" data-testid="text-project-right-category">
              Launched on Product Hunt
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-12 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sun className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <p className="text-xs sm:text-sm font-medium text-foreground/60 uppercase tracking-wider">
              Built for{" "}
              <Typewriter
                text={["Product Designers", "Product Managers", "DEVs"]}
                speed={40}
                className="text-foreground font-semibold"
                waitTime={1000}
                deleteSpeed={25}
                loop={true}
                cursorChar={"_"}
              />
            </p>
          </motion.div>

          <motion.h1 
            className="font-heading font-semibold text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight mb-4 sm:mb-6 text-foreground" 
            data-testid="text-hero-headline"
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Building a portfolio was never meant to be hard.
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8" 
            data-testid="text-hero-description"
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Skip the busywork with Designfolio — publish in hours, not weeks.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="relative w-full sm:flex-1">
              <div className={`flex items-center bg-white dark:bg-white border-2 rounded-full w-full transition-all duration-300 ease-out cursor-text overflow-hidden ${
                error 
                  ? 'border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.12)]' 
                  : 'border-border hover:border-foreground/20 focus-within:border-foreground/30 focus-within:shadow-[0_0_0_4px_hsl(var(--foreground)/0.12)]'
              }`}>
                <div className="relative flex-1 h-14 sm:h-16">
                  <Input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (error) setError("");
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFocused && !inputValue ? "username" : ""}
                    className="border-0 bg-transparent h-full w-full px-5 sm:px-6 focus-visible:ring-0 focus-visible:ring-offset-0 !text-lg text-foreground placeholder:!text-lg placeholder:text-muted-foreground/60 relative z-10"
                    data-testid="input-name"
                  />
                {!inputValue && !isFocused && (
                  <motion.span
                    key={currentNameIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-5 sm:left-6 top-0 h-full flex items-center pointer-events-none text-lg text-foreground"
                  >
                    {names[currentNameIndex]}
                  </motion.span>
                )}
                </div>
                <span className="text-base sm:text-lg text-muted-foreground/60 pr-5 sm:pr-6 whitespace-nowrap">
                  .designfolio.me
                </span>
              </div>
              {error && (
                <p className="text-sm text-red-500 mt-2 ml-5" data-testid="error-username">
                  {error}
                </p>
              )}
            </div>
            <Button 
              onClick={() => {
                if (!inputValue.trim()) {
                  setError("Username is required");
                  return;
                }
                console.log("Username submitted:", inputValue);
              }}
              className="text-white rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full sm:w-auto whitespace-nowrap"
              style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
              data-testid="button-start-building"
            >
              Get started for free
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
