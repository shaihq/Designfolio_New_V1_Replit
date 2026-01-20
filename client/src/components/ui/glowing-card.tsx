
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  isElevated?: boolean;
}

export function GlowingCard({ children, className, isElevated }: GlowingCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for the follow effect
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative group p-[1.5px] rounded-2xl overflow-hidden h-full ${className}`}
    >
      {/* Smudged/Blurred Rotating Line (The "Aesthetic" Border) */}
      <motion.div 
        className="absolute inset-[-50%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 40%, rgba(255, 85, 62, 0.4) 50%, transparent 60%, transparent 100%)",
          filter: "blur(20px)", // Smudges the line
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle Mouse-following Spotlight (The smudge that follows you) */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(255, 85, 62, 0.15), transparent 80%)`
          ),
          filter: "blur(10px)",
        }}
      />

      {/* Main Content Card */}
      <div 
        className={`relative h-full w-full rounded-[15px] bg-white transition-all duration-300 ${isElevated ? 'bg-foreground/5' : ''}`}
        style={{
          boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.04)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
