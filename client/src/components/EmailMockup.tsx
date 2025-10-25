import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function EmailMockup() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-3xl shadow-2xl pt-8 md:pt-12 px-8 md:px-12"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-portfolio-mockup"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full rounded-2xl">
                    <AvatarFallback className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-200 to-orange-100 text-foreground text-4xl">
                      <User className="w-16 h-16" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="text-portfolio-name">
                  Bruce Wayne 👋
                </h1>
                <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-2xl" data-testid="text-portfolio-description">
                  A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border overflow-hidden hover-elevate transition-all" data-testid="card-project-1">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-project-1-title">
                    Redesigning fitness app experience for 4M users.
                  </h3>
                  <p className="text-base text-foreground/50" data-testid="text-project-1-category">
                    UX Case study
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border overflow-hidden hover-elevate transition-all" data-testid="card-project-2">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-project-2-title">
                    Developed a Blockchain app on Next.JS
                  </h3>
                  <p className="text-base text-foreground/50" data-testid="text-project-2-category">
                    UX Case study
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
