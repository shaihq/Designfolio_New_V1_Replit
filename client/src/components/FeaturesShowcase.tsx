import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
          <Card className="p-4 space-y-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center" data-testid="mock-thumbnail-1">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">Preview</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold" data-testid="text-feature-title-1">
                AI Case Study Writer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-1">
                Describe your project in a few lines — Designfolio shapes it into a clear, well-structured case study that actually sounds like you.
              </p>
            </div>
          </Card>

          <Card className="p-4 space-y-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center" data-testid="mock-thumbnail-2">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">Preview</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold" data-testid="text-feature-title-2">
                AI Case Study Analyzer
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-feature-description-2">
                Designfolio compares it with thousands of top portfolios and gives you an honest, easy-to-read report — what's strong, what's missing, and how to improve.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
