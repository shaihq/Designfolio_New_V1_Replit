import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronUp, ChevronDown, GraduationCap } from "lucide-react";

export function CourseCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed bottom-0 right-6 z-50 w-[300px] bg-white border border-border rounded-t-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
      isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'
    }`}>
      {/* Minimized Header / Toggle Area */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-[60px] flex items-center justify-between px-5 bg-white text-foreground rounded-t-2xl hover:bg-muted/30 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-border/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-4.5 h-4.5 text-foreground/80" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-[0.1em] font-bold text-foreground/30 mb-1">Upcoming</span>
            <span className="text-sm font-bold tracking-tight">Vibe coding for Designers</span>
          </div>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-foreground/5 rotate-180' : 'bg-transparent'}`}>
          <ChevronUp className="w-4 h-4 text-foreground/40" />
        </div>
      </button>

      {/* Content Area */}
      <div className={`p-6 space-y-6 overflow-y-auto max-h-[80vh] transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">Upcoming Batch</p>
          <h3 className="text-xl font-bold tracking-tight text-foreground">January 18th, 2026</h3>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">Seats Available</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-orange-500">Filling Fast</p>
            </div>
          </div>
          
          <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
            <div className="h-full w-[45%] bg-foreground/80 rounded-full"></div>
          </div>
          <p className="text-[11px] font-medium text-foreground/50">13 of 30 seats remaining</p>
        </div>

        <div className="space-y-5 pt-3">
          <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-11 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 no-default-hover-elevate transition-all">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
}
