import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles, Brain } from "lucide-react";

function FeatureCta({ children, testId }: { children: string; testId: string }) {
  return (
    <button 
      className="inline-flex items-center gap-1.5 text-sm font-medium group"
      style={{ color: '#FF553E' }}
      data-testid={testId}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

export default function FeaturesShowcase() {
  const features = [
    "Can I stop overthinking what to write first?",
    "Can writing case studies stop feeling like work?",
    "Can documenting your work actually feel natural?",
    "Can I publish everything in one place without extra tools?"
  ];

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-heading leading-tight" data-testid="text-showcase-headline">
              Can telling your story be simple? Yes.
            </h2>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2" data-testid={`feature-item-${index}`}>
                <Check className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
                <span 
                  className="px-2 py-0.5 text-xs font-bold tracking-wide uppercase flex-shrink-0"
                  style={{
                    background: '#10B981',
                    color: '#fff',
                    transform: 'rotate(-2deg)',
                    fontFamily: "'Kalam', cursive",
                    borderRadius: '4px'
                  }}
                  data-testid={`badge-yes-${index}`}
                >
                  YES!
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover-elevate">
            <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden" 
                 style={{ background: 'linear-gradient(135deg, rgba(255, 85, 62, 0.08) 0%, rgba(255, 85, 62, 0.02) 100%)' }}
                 data-testid="mock-thumbnail-1">
              <Sparkles className="w-16 h-16" style={{ color: '#FF553E', opacity: 0.3 }} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold" data-testid="text-feature-title-1">
                AI Case Study Writer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-1">
                Describe your project in a few lines — Designfolio shapes it into a clear, well-structured case study that actually sounds like you.
              </p>
              <FeatureCta testId="button-cta-1">
                Start with AI
              </FeatureCta>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover-elevate">
            <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden" 
                 style={{ background: 'linear-gradient(135deg, rgba(255, 85, 62, 0.08) 0%, rgba(255, 85, 62, 0.02) 100%)' }}
                 data-testid="mock-thumbnail-2">
              <Brain className="w-16 h-16" style={{ color: '#FF553E', opacity: 0.3 }} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold" data-testid="text-feature-title-2">
                AI Case Study Analyzer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-2">
                Designfolio compares it with thousands of top portfolios and gives you an honest, easy-to-read report — what's strong, what's missing, and how to improve.
              </p>
              <FeatureCta testId="button-cta-2">
                Try Designfolio AI
              </FeatureCta>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
