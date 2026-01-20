"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion, AnimatePresence } from "framer-motion"

interface DockProps {
  className?: string
  items: {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick?: () => void
    active?: boolean
  }[]
}

export default function Dock({ items, className }: DockProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "flex items-end gap-2 px-3 py-2 rounded-3xl",
          "border border-border/50 bg-background/70 backdrop-blur-2xl shadow-xl shadow-black/5"
        )}
      >
        <TooltipProvider delayDuration={100}>
          {items.map((item, i) => {
            const isActive = item.active
            const isHovered = hovered === i

            return (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <motion.div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? -5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="relative flex flex-col items-center"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "rounded-2xl relative w-12 h-12 no-default-hover-elevate no-default-active-elevate",
                        "transition-colors duration-200",
                        isActive ? "bg-primary/10" : "hover:bg-primary/5",
                        isHovered && "bg-primary/5 shadow-lg shadow-primary/20"
                      )}
                      onClick={() => {
                        item.onClick?.()
                      }}
                    >
                      <item.icon
                        className={cn(
                          "h-6 w-6 transition-colors",
                          isActive ? "text-primary" : "text-foreground"
                        )}
                      />
                      {/* Glowing ring effect */}
                      {isHovered && (
                        <motion.span
                          layoutId="glow"
                          className="absolute inset-0 rounded-2xl border border-primary/40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="bg-foreground text-background border-none px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
                >
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </motion.div>
    </div>
  )
}
