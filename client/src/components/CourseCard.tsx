import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, GraduationCap, Calendar, MessageSquare, Link2, Folder, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CourseCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed bottom-0 right-6 z-50 w-[340px] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
      isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'
    }`}>
      {/* Container with shadow and gradient top */}
      <div className="bg-[#f8faff] border border-blue-100 rounded-t-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header Label */}
        <div className="bg-gradient-to-r from-[#7bb7ff] to-[#4c97ff] h-10 flex items-center justify-center">
          <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Upcoming Course</span>
        </div>

        {/* Header Toggle Section */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex flex-col px-7 py-5 bg-white text-foreground hover:bg-slate-50 transition-colors group relative"
        >
          {/* Main Card Content */}
          <div className="w-full flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 pr-4 text-left">Vibe coding for Designers</h2>
            <span className="text-[12px] font-medium text-slate-400 whitespace-nowrap pt-1">Jan 18, 2026</span>
          </div>
          
          <p className="text-[13px] text-slate-400 leading-relaxed text-left mb-6 line-clamp-2">
            Designing the basic structure of the modern workflow. Focus on organizing creative dat...
          </p>

          <div className="flex items-center justify-between w-full">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            {/* Status Badge */}
            <Badge variant="secondary" className="bg-[#e2f5e9] text-[#4a9c6d] hover:bg-[#e2f5e9] border-0 px-4 py-1.5 rounded-lg font-medium text-[13px]">
              Filling Fast
            </Badge>
          </div>

          {/* Dotted Border overlay for the inner section */}
          <div className="absolute inset-x-4 inset-y-4 border border-dashed border-slate-200 rounded-2xl pointer-events-none opacity-60"></div>
        </button>

        {/* Content Area (Stats & Actions) */}
        <div className={`px-4 pb-4 space-y-4 bg-white transition-all duration-300 ${isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none overflow-hidden'}`}>
          {/* Bottom Stats Row */}
          <div className="flex items-center gap-2 pt-2">
            <div className="flex-1 bg-white border border-slate-100 rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span className="text-[13px] font-bold text-slate-900">13</span>
              <span className="text-[12px] text-slate-400">Seats</span>
            </div>
            <div className="flex-1 bg-white border border-slate-100 rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
              <Link2 className="w-4 h-4 text-slate-400" />
              <span className="text-[13px] font-bold text-slate-900">4</span>
              <span className="text-[12px] text-slate-400">Days</span>
            </div>
            <div className="flex-1 bg-white border border-slate-100 rounded-xl p-2.5 flex items-center gap-2 shadow-sm">
              <Folder className="w-4 h-4 text-slate-400" />
              <span className="text-[13px] font-bold text-slate-900">12</span>
              <span className="text-[12px] text-slate-400">Modules</span>
            </div>
            <button className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
              <Plus className="w-4 h-4 text-slate-900" />
            </button>
          </div>

          <Button 
            className="w-full bg-[#2541b2] hover:bg-[#1e3491] text-white rounded-2xl h-12 text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-900/10 active:scale-95 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              // Action logic
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
}

