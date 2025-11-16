import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterBottom from "@/components/FooterBottom";
import { useEffect } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                Choose the plan that works best for you. All plans include our core features to help you create a stunning portfolio.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6" data-testid="card-plan-free">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2" data-testid="text-plan-free-title">
                        Free
                      </h2>
                      <div className="mb-4">
                        <span className="text-4xl font-bold" data-testid="text-plan-free-price">$0</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3" data-testid="list-free-features">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Up to 3 portfolio projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Basic templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Public portfolio page</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Community support</span>
                      </li>
                    </ul>

                    <Button 
                      className="w-full" 
                      variant="outline"
                      data-testid="button-get-started-free"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 border-primary" data-testid="card-plan-pro">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-semibold" data-testid="text-plan-pro-title">
                          Pro
                        </h2>
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md">
                          Popular
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="text-4xl font-bold" data-testid="text-plan-pro-price">$9</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3" data-testid="list-pro-features">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Unlimited portfolio projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Premium templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Custom domain support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>Remove Designfolio branding</span>
                      </li>
                    </ul>

                    <Button 
                      className="w-full"
                      data-testid="button-get-started-pro"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-faq">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-cancel">
                      Can I cancel anytime?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-cancel-answer">
                      Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-upgrade">
                      Can I upgrade or downgrade my plan?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-upgrade-answer">
                      Absolutely! You can upgrade or downgrade your plan at any time from your account settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-faq-refund">
                      Do you offer refunds?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-refund-answer">
                      We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund. See our{" "}
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
