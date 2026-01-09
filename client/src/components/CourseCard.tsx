import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronUp, ChevronDown, GraduationCap } from "lucide-react";

export function CourseCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed bottom-0 right-6 z-50 w-[340px] bg-white border border-border rounded-t-2xl shadow-lg transition-all duration-500 ease-in-out transform ${
      isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-48px)]'
    }`}>
      {/* Minimized Header / Toggle Area */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-12 flex items-center justify-between px-6 bg-white border-b border-border/50 text-foreground rounded-t-2xl hover:bg-muted/50 transition-colors group"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center transition-colors">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Upcoming Course</span>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
          {isExpanded ? <ChevronDown className="w-4 h-4 text-foreground/40" /> : <ChevronUp className="w-4 h-4 text-foreground/40" />}
        </div>
      </button>

      {/* Content Area */}
      <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
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

        <div className="grid grid-cols-2 gap-6 pt-1">
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">Cost</p>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-foreground/80">₹4,200 (India)</p>
              <p className="text-sm font-semibold text-foreground/80">$50 (Global)</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">What You'll Get</p>
            <p className="text-sm font-semibold text-foreground/80 leading-snug">Live workshop & recordings</p>
          </div>
        </div>

        <div className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">Duration • Time</p>
          <p className="text-sm font-semibold text-foreground/80">3 days • 8:00 PM IST</p>
        </div>

        <div className="space-y-5 pt-3">
          <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-11 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 no-default-hover-elevate transition-all">
            Apply Now
          </Button>
          
          <div className="text-center space-y-3.5">
            <p className="text-[10px] font-bold tracking-[0.15em] text-foreground/40 uppercase">Next Cohort Pricing: ₹5,999</p>
            <p className="text-[10px] text-foreground/25 leading-relaxed italic">Limited cohort size for personalized feedback.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
