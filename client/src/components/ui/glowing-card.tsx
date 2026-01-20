
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  isElevated?: boolean;
}

export function GlowingCard({ children, className, isElevated }: GlowingCardProps) {
  return (
    <div className={`relative group p-[1px] rounded-2xl overflow-hidden h-full ${className}`}>
      {/* Animated Border/Glow Effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, transparent 0%, #FF553E 10%, transparent 20%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Background Dot/Light that moves along the edges */}
      <motion.div 
        className="absolute w-24 h-24 bg-[#FF553E]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={{
          top: ["-10%", "-10%", "90%", "90%", "-10%"],
          left: ["-10%", "90%", "90%", "-10%", "-10%"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content Card */}
      <div className={`relative h-full w-full rounded-[15px] bg-white transition-all duration-300 ${isElevated ? 'bg-foreground/5' : ''}`}>
        {children}
      </div>
    </div>
  );
}
