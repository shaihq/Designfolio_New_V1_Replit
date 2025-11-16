import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterBottom from "@/components/FooterBottom";
import { useEffect } from "react";
import { Check, X } from "lucide-react";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comparisonRows = [
    {
      feature: "Pricing",
      free: "₹0",
      lifetime: "₹4,500 (India) / $99 (Global)",
      testId: "pricing"
    },
    {
      feature: "Custom Domain",
      free: { type: "unavailable", text: "Not available" },
      lifetime: { type: "included", text: "Included" },
      testId: "custom-domain"
    },
    {
      feature: "Number of Case Studies",
      free: "2 only",
      lifetime: "Unlimited",
      testId: "case-studies"
    },
    {
      feature: "Number of Projects",
      free: "1 project",
      lifetime: "Unlimited",
      testId: "projects"
    },
    {
      feature: "Templates",
      free: "Limited starter templates",
      lifetime: "All templates (now & forever)",
      testId: "templates"
    },
    {
      feature: "Themes",
      free: "Limited",
      lifetime: "All current + future themes",
      testId: "themes"
    },
    {
      feature: "Branding Removal",
      free: { type: "unavailable", text: "Designfolio branding visible" },
      lifetime: { type: "included", text: "Remove branding" },
      testId: "branding"
    },
    {
      feature: "Analytics (Views Tracking)",
      free: { type: "unavailable", text: "Not available" },
      lifetime: { type: "included", text: "Included" },
      testId: "analytics"
    },
    {
      feature: "Future Updates & Features",
      free: { type: "unavailable", text: "Not included" },
      lifetime: { type: "included", text: "Lifetime access" },
      testId: "updates"
    },
    {
      feature: "Support",
      free: "Standard",
      lifetime: "Priority",
      testId: "support"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Card className="p-8 sm:p-12">
            <h1 className="text-4xl font-bold mb-6" data-testid="text-page-title">
              Pricing
            </h1>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed" data-testid="text-intro">
                Choose the plan that works best for you. Get lifetime access with all features included.
              </p>

              <div className="overflow-x-auto mt-8">
                <table className="w-full border-collapse" data-testid="table-pricing-comparison">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 pr-4 font-semibold" data-testid="header-feature">Feature</th>
                      <th className="text-left py-4 px-4 font-semibold" data-testid="header-free">Free Plan</th>
                      <th className="text-left py-4 pl-4 font-semibold" data-testid="header-lifetime">Lifetime Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.testId} className="border-b" data-testid={`row-${row.testId}`}>
                        <td className="py-4 pr-4 font-medium" data-testid={`feature-${row.testId}`}>
                          {row.feature}
                        </td>
                        <td className="py-4 px-4" data-testid={`free-${row.testId}`}>
                          {typeof row.free === 'object' ? (
                            <div className="flex items-center gap-2">
                              {row.free.type === 'unavailable' ? (
                                <X className="h-5 w-5 text-destructive shrink-0" />
                              ) : (
                                <Check className="h-5 w-5 text-primary shrink-0" />
                              )}
                              <span className={row.free.type === 'unavailable' ? 'text-muted-foreground' : ''}>
                                {row.free.text}
                              </span>
                            </div>
                          ) : (
                            <span>{row.free}</span>
                          )}
                        </td>
                        <td className="py-4 pl-4" data-testid={`lifetime-${row.testId}`}>
                          {typeof row.lifetime === 'object' ? (
                            <div className="flex items-center gap-2">
                              {row.lifetime.type === 'included' && (
                                <Check className="h-5 w-5 text-primary shrink-0" />
                              )}
                              <span>{row.lifetime.text}</span>
                            </div>
                          ) : (
                            <span>{row.lifetime}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full"
                  data-testid="button-get-started-free"
                >
                  Get Started Free
                </Button>
                <Button 
                  size="lg"
                  className="w-full"
                  data-testid="button-get-lifetime"
                >
                  Get Lifetime Access
                </Button>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-faq">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-lifetime">
                      What does lifetime access mean?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-lifetime-answer">
                      Lifetime access means you pay once and get access to all current and future features forever. No recurring fees, no hidden costs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-upgrade">
                      Can I upgrade from Free to Lifetime?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-upgrade-answer">
                      Absolutely! You can upgrade to the Lifetime plan at any time from your account settings. All your existing projects and data will be preserved.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-refund">
                      Do you offer refunds?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-refund-answer">
                      We offer a 30-day money-back guarantee on the Lifetime plan. If you're not satisfied, contact us for a full refund. See our{" "}
                      <a 
                        href="/refund-policy" 
                        className="text-primary hover:underline"
                        data-testid="link-refund-policy"
                      >
                        Refund Policy
                      </a>
                      {" "}for more details.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-payment">
                      What payment methods do you accept?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-payment-answer">
                      We accept all major credit cards, debit cards, and PayPal for your convenience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12 pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-contact">
                  Need Help Choosing?
                </h2>
                <p className="leading-relaxed" data-testid="text-contact-content">
                  If you have any questions about our pricing or need help choosing the right plan, please contact us at{" "}
                  <a 
                    href="mailto:shai@designfolio.me" 
                    className="text-primary hover:underline"
                    data-testid="link-contact-email"
                  >
                    shai@designfolio.me
                  </a>
                </p>
              </section>
            </div>
          </Card>
        </div>
        <FooterBottom />
      </div>
    </div>
  );
}
