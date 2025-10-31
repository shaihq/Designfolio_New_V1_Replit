import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";

export default function RefundPolicy() {
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
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-overview">
                Policy Overview
              </h2>
              <p className="leading-relaxed" data-testid="text-overview-content">
                We want you to be completely satisfied with Designfolio. This Refund & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-free-trial">
                Free Trial Period
              </h2>
              <p className="leading-relaxed" data-testid="text-free-trial-content">
                Designfolio offers a free tier that allows you to explore our platform at no cost. You can upgrade to a paid plan at any time. There are no charges or cancellation requirements for free accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-cancellation">
                Subscription Cancellation
              </h2>
              <p className="leading-relaxed mb-3" data-testid="text-cancellation-intro">
                You may cancel your subscription at any time:
              </p>
              <ul className="list-disc pl-6 space-y-2" data-testid="list-cancellation-details">
                <li>Cancellations take effect at the end of the current billing period</li>
                <li>You will retain access to paid features until the end of your billing period</li>
                <li>No partial refunds are provided for unused time within a billing period</li>
                <li>You can cancel through your account settings or by contacting support</li>
                <li>After cancellation, your account will revert to the free tier</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-refunds">
                Refund Policy
              </h2>
              <p className="leading-relaxed mb-3" data-testid="text-refunds-intro">
                We offer refunds under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-3" data-testid="list-refund-circumstances">
                <li>Within 14 days of your first payment if you're unsatisfied with the service</li>
                <li>If you were charged in error or duplicate charges occurred</li>
                <li>If there was a technical issue that prevented you from using the service</li>
              </ul>
              <p className="leading-relaxed" data-testid="text-refunds-note">
                Refunds are processed within 5-10 business days and will be issued to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-no-refund">
                Non-Refundable Situations
              </h2>
              <p className="leading-relaxed mb-3" data-testid="text-no-refund-intro">
                Refunds will not be provided in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2" data-testid="list-no-refund-situations">
                <li>After 14 days from the initial payment date</li>
                <li>For renewal charges (unless cancelled before renewal date)</li>
                <li>If your account was terminated due to violation of our Terms of Service</li>
                <li>For change of mind after using the service beyond the refund period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-section-process">
                How to Request a Refund
              </h2>
              <p className="leading-relaxed mb-3" data-testid="text-process-intro">
                To request a refund:
              </p>
              <ol className="list-decimal pl-6 space-y-2" data-testid="list-refund-process">
                <li>Contact us at{" "}
                  <a 
                    href="mailto:shai@designfolio.me" 
                    className="text-primary hover:underline"
                    data-testid="link-refund-email"
                  >
                    shai@designfolio.me
                  </a>
                </li>
                <li>Include your account email and transaction details</li>
                <li>Provide a brief explanation of your refund request</li>
                <li>We will review and respond within 2-3 business days</li>
              </ol>
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
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}
