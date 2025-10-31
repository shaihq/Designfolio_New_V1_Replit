import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FooterBottom from "@/components/FooterBottom";
import { useEffect } from "react";

export default function RefundPolicy() {
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
            Refund & Cancellation Policy
          </h1>
          
          <div className="space-y-6 text-foreground">
            <p className="text-sm text-muted-foreground" data-testid="text-last-updated">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <p className="text-lg leading-relaxed" data-testid="text-refund-policy">
                All payments made for Designfolio Pro (Lifetime) are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-contact">
                Questions?
              </h2>
              <p className="leading-relaxed" data-testid="text-contact-content">
                If you have questions about our Refund & Cancellation Policy, please reach out to us at{" "}
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
