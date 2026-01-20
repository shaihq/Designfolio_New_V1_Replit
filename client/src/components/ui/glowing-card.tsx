
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  isElevated?: boolean;
}

export function GlowingCard({ children, className, isElevated }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group p-[1px] rounded-2xl overflow-hidden h-full ${className}`}
    >
      {/* Aesthetic Border Glow (Spotlight effect) */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255, 85, 62, 0.2), transparent 80%)`
          ),
        }}
      />

      {/* Moving Perimeter Glow (Soft edge trail) */}
      <motion.div
        className="absolute inset-[-2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(255, 85, 62, 0.4) 10%, transparent 20%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Background soft glow that follows mouse */}
      <motion.div 
        className="absolute w-64 h-64 bg-[#FF553E]/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          x: useTransform(smoothX, (v) => v - 128),
          y: useTransform(smoothY, (v) => v - 128),
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
