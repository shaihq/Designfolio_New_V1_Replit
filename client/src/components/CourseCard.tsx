import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function CourseCard() {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[340px] bg-[#f4f3ef] border border-border/50 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Decorative corner cut (top right) */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-white" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
      
      <div className="p-6 space-y-6">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Upcoming Batch</p>
          <h3 className="text-2xl font-bold tracking-tight text-[#1a1c20]">January 18th, 2026</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Seats Available</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f97316]"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f97316]">Filling Fast</p>
            </div>
          </div>
          
          <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
            <div className="h-full w-[45%] bg-gradient-to-r from-[#f97316] to-[#ef4444] rounded-full"></div>
          </div>
          <p className="text-sm font-medium text-foreground/60">13 of 30 seats remaining</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Cost</p>
            <p className="text-sm font-bold text-[#1a1c20]">₹4,200 (India) /</p>
            <p className="text-sm font-bold text-[#1a1c20]">$50 (Global)</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">What You'll Get</p>
            <p className="text-sm font-bold text-[#1a1c20] leading-tight">Live workshop</p>
            <p className="text-sm font-bold text-[#1a1c20] leading-tight">(recordings included)</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Duration • Time</p>
          <p className="text-sm font-bold text-[#1a1c20]">3 days • 8:00 PM IST</p>
        </div>

        <div className="space-y-4 pt-2">
          <Button className="w-full bg-[#2541b2] hover:bg-[#1e3491] text-white rounded-full h-12 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_4px_0_0_#1a2e7e] active:translate-y-[2px] active:shadow-[0_2px_0_0_#1a2e7e] transition-all">
            <Sparkles className="w-3 h-3" />
            Apply Now
            <Sparkles className="w-3 h-3" />
          </Button>
          
          <div className="text-center space-y-4">
            <p className="text-[11px] font-bold tracking-widest text-[#2541b2] uppercase">Next Cohort Pricing: ₹5,999</p>
            <p className="text-[11px] text-foreground/40 leading-relaxed italic">Limited cohort size for personalized feedback.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
