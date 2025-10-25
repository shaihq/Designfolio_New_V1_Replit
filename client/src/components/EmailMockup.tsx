import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function EmailMockup() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-3xl p-8 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-portfolio-mockup"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
            <div className="flex items-start gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
