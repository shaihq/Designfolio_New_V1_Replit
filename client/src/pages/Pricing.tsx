import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import FooterBottom from "@/components/FooterBottom";
import { useEffect } from "react";
import { Check, X } from "lucide-react";
import { Link } from "wouter";

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
                <div className="min-w-full" data-testid="table-pricing-comparison">
                  <div className="grid grid-cols-[2fr_1.5fr_1.5fr] gap-px bg-border rounded-lg overflow-hidden">
                    <div className="bg-muted/50 px-6 py-4 font-semibold" data-testid="header-feature">
                      Feature
                    </div>
                    <div className="bg-muted/50 px-6 py-4 font-semibold text-center" data-testid="header-free">
                      Free Plan
                    </div>
                    <div className="bg-primary/5 px-6 py-4 font-semibold text-center" data-testid="header-lifetime">
                      Lifetime Plan
                    </div>

                    {comparisonRows.map((row, index) => (
                      <>
                        <div 
                          key={`${row.testId}-feature`}
                          className={`bg-card px-6 py-5 font-medium ${index === comparisonRows.length - 1 ? '' : ''}`}
                          data-testid={`feature-${row.testId}`}
                        >
                          {row.feature}
                        </div>
                        <div 
                          key={`${row.testId}-free`}
                          className={`bg-card px-6 py-5 ${index === comparisonRows.length - 1 ? '' : ''}`}
                          data-testid={`free-${row.testId}`}
                        >
                          {typeof row.free === 'object' ? (
                            <div className="flex items-center justify-center gap-2">
                              {row.free.type === 'unavailable' ? (
                                <X className="h-4 w-4 text-muted-foreground shrink-0" />
                              ) : (
                                <Check className="h-4 w-4 text-primary shrink-0" />
                              )}
                              <span className="text-sm text-muted-foreground text-center">
                                {row.free.text}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center text-sm">
                              {row.free}
                            </div>
                          )}
                        </div>
                        <div 
                          key={`${row.testId}-lifetime`}
                          className={`bg-primary/5 px-6 py-5 ${index === comparisonRows.length - 1 ? '' : ''}`}
                          data-testid={`lifetime-${row.testId}`}
                        >
                          {typeof row.lifetime === 'object' ? (
                            <div className="flex items-center justify-center gap-2">
                              {row.lifetime.type === 'included' && (
                                <Check className="h-4 w-4 text-primary shrink-0" />
                              )}
                              <span className="text-sm text-center">
                                {row.lifetime.text}
                              </span>
                            </div>
                          ) : (
                            <div className="text-center text-sm">
                              {row.lifetime}
                            </div>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <Link href="/signup">
                  <Button 
                    size="lg"
                    className="px-12"
                    data-testid="button-get-started-free"
                  >
                    Get Started for Free
                  </Button>
                </Link>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6" data-testid="text-section-faq">
                  Frequently Asked Questions
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" data-testid="accordion-faq-lifetime">
                    <AccordionTrigger data-testid="text-faq-lifetime">
                      What does lifetime access mean?
                    </AccordionTrigger>
                    <AccordionContent data-testid="text-faq-lifetime-answer">
                      <p className="text-muted-foreground leading-relaxed">
                        Lifetime access means you pay once and get access to all current and future features forever. No recurring fees, no hidden costs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" data-testid="accordion-faq-refund">
                    <AccordionTrigger data-testid="text-faq-refund">
                      Do you offer refunds?
                    </AccordionTrigger>
                    <AccordionContent data-testid="text-faq-refund-answer">
                      <div className="text-muted-foreground leading-relaxed space-y-3">
                        <p>
                          All purchases are non-refundable as access is delivered instantly.
                        </p>
                        <p>
                          Refunds are only considered in exceptional cases such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Duplicate payments caused by a technical issue</li>
                          <li>Payment deducted but access not activated within 24 hours</li>
                        </ul>
                        <p>
                          If this happens, email{" "}
                          <a 
                            href="mailto:shai@designfolio.me" 
                            className="text-primary hover:underline"
                            data-testid="link-refund-email"
                          >
                            shai@designfolio.me
                          </a>
                          {" "}within 48 hours of your payment along with proof of transaction. Each request is reviewed individually. Refunds, if approved, take 5 working days to process.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" data-testid="accordion-faq-payment">
                    <AccordionTrigger data-testid="text-faq-payment">
                      What payment methods do you accept?
                    </AccordionTrigger>
                    <AccordionContent data-testid="text-faq-payment-answer">
                      <p className="text-muted-foreground leading-relaxed">
                        We accept all major credit cards, debit cards, UPI (India), and international payment methods depending on your region.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" data-testid="accordion-faq-really-lifetime">
                    <AccordionTrigger data-testid="text-faq-really-lifetime">
                      Is lifetime access really lifetime?
                    </AccordionTrigger>
                    <AccordionContent data-testid="text-faq-really-lifetime-answer">
                      <p className="text-muted-foreground leading-relaxed">
                        Yes! One payment unlocks all current and future features, templates, and updates — forever.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" data-testid="accordion-faq-pricing-change">
                    <AccordionTrigger data-testid="text-faq-pricing-change">
                      Will pricing change in the future?
                    </AccordionTrigger>
                    <AccordionContent data-testid="text-faq-pricing-change-answer">
                      <p className="text-muted-foreground leading-relaxed">
                        Yes. Lifetime access is currently priced at ₹4,500 (India) and $99 (Global) and may increase later. Early buyers keep their lifetime access permanently.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
