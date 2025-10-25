import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function EmailMockup() {
  return (
    <section className="py-8 sm:py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-portfolio-mockup"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden p-4 sm:p-8 md:p-12">
            <div className="flex items-start gap-3 sm:gap-6 mb-6 sm:mb-12">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full rounded-xl sm:rounded-2xl">
                    <AvatarFallback className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 text-foreground text-2xl sm:text-4xl">
                      <User className="w-10 h-10 sm:w-16 sm:h-16" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2 sm:mb-4" data-testid="text-portfolio-name">
                  Bruce Wayne 👋
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl" data-testid="text-portfolio-description">
                  A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-200 rounded-xl sm:rounded-2xl aspect-[4/3] animate-pulse" data-testid="placeholder-project-1"></div>
              <div className="bg-gray-200 rounded-xl sm:rounded-2xl aspect-[4/3] animate-pulse" data-testid="placeholder-project-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
