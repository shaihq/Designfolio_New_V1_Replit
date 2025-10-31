import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageCircle, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card className="p-8 sm:p-12">
          <h1 className="text-4xl font-bold mb-6" data-testid="text-page-title">
            Contact & Support
          </h1>
          
          <div className="space-y-8 text-foreground">
            <section>
              <p className="text-lg leading-relaxed" data-testid="text-intro">
                We're here to help! Whether you have a question, need technical support, or just want to share feedback, we'd love to hear from you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" data-testid="text-section-email">
                Email Support
              </h2>
              <Card className="p-6 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <Mail className="w-6 h-6 text-primary" data-testid="icon-email" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" data-testid="text-email-title">
                      General Inquiries & Support
                    </h3>
                    <p className="text-muted-foreground mb-2" data-testid="text-email-description">
                      For any questions, technical issues, or account-related matters
                    </p>
                    <a 
                      href="mailto:shai@designfolio.me" 
                      className="text-primary hover:underline font-medium"
                      data-testid="link-support-email"
                    >
                      shai@designfolio.me
                    </a>
                    <p className="text-sm text-muted-foreground mt-2" data-testid="text-response-time">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" data-testid="text-section-support">
                What We Can Help With
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-card">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-1" data-testid="icon-questions" />
                    <div>
                      <h3 className="font-semibold mb-1" data-testid="text-help-questions">
                        Questions
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-help-questions-desc">
                        General inquiries about Designfolio features and capabilities
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card">
                  <div className="flex items-start gap-3">
                    <FileQuestion className="w-5 h-5 text-primary mt-1" data-testid="icon-technical" />
                    <div>
                      <h3 className="font-semibold mb-1" data-testid="text-help-technical">
                        Technical Support
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-help-technical-desc">
                        Issues with your portfolio, account, or platform functionality
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" data-testid="text-section-faq">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2" data-testid="text-faq-1-question">
                    How do I get started with Designfolio?
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-faq-1-answer">
                    Simply claim your username on the homepage and start building your portfolio for free. No credit card required to get started.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" data-testid="text-faq-2-question">
                    Can I use my own domain name?
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-faq-2-answer">
                    Yes! Paid plans include the option to connect your own custom domain to your Designfolio portfolio.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" data-testid="text-faq-3-question">
                    How do I cancel my subscription?
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-faq-3-answer">
                    You can cancel anytime from your account settings. Your access continues until the end of your billing period. See our{" "}
                    <Link href="/refund-policy">
                      <a className="text-primary hover:underline" data-testid="link-refund-policy">
                        Refund Policy
                      </a>
                    </Link>
                    {" "}for more details.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2" data-testid="text-faq-4-question">
                    What kind of content can I showcase?
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-faq-4-answer">
                    You can showcase any type of creative work including design projects, photography, illustrations, case studies, and more. As long as it's your work or you have permission to display it.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-center" data-testid="text-feedback">
                  Have feedback or suggestions?{" "}
                  <a 
                    href="mailto:shai@designfolio.me?subject=Feedback" 
                    className="text-primary hover:underline font-medium"
                    data-testid="link-feedback-email"
                  >
                    We'd love to hear from you
                  </a>
                </p>
              </Card>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
