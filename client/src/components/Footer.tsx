import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 sm:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight" data-testid="text-footer-headline">
                Wrestling with projects?
                <br />
                It doesn't have to be this hard.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <p className="text-base text-foreground leading-relaxed" data-testid="text-intro">
                  There are lots of ways to manage projects. And there's plenty of software promising to help. You've probably tried some. Yet, here you are.
                </p>

                <p className="text-base font-semibold text-foreground leading-relaxed" data-testid="text-problem">
                  Unfortunately, most project management systems are either overwhelming, inadequate, bewildering, or chaotic. You know?
                </p>

                <p className="text-base text-foreground leading-relaxed" data-testid="text-solution">
                  Not Basecamp. Basecamp is refreshingly straightforward, with a 21-year track record to back it up. Longevity isn't luck — it's proof it works. And you'll work better with it too.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base text-foreground leading-relaxed" data-testid="text-pitch">
                    <span className="font-semibold">Basecamp is famously no-nonsense, effective, and reliable.</span> The trifecta. It's{" "}
                    <a 
                      href="#" 
                      className="text-primary font-semibold hover:underline"
                      data-testid="link-designed-for"
                    >
                      designed for smaller, hungrier businesses
                    </a>
                    , not big, sluggish ones.{" "}
                    <a 
                      href="#" 
                      className="text-primary font-semibold hover:underline"
                      data-testid="link-testimonials"
                    >
                      Over 30 pages of customer testimonials
                    </a>{" "}
                    detail how things run better on Basecamp.
                  </p>

                  <p className="text-base text-foreground leading-relaxed" data-testid="text-invitation">
                    So, we invite you to poke around, watch the video below, and{" "}
                    <a 
                      href="#" 
                      className="text-primary font-semibold hover:underline"
                      data-testid="link-try-free"
                    >
                      try Basecamp for free
                    </a>
                    . We'd be honored to have you as a customer. Thank you.
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="text-2xl sm:text-3xl font-heading italic text-foreground" data-testid="text-signature">
                    Jason Fried
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-semibold" data-testid="text-title">
                      Jason Fried,{" "}
                      <a 
                        href="mailto:jason@basecamp.com" 
                        className="text-primary hover:underline"
                        data-testid="link-email"
                      >
                        jason@basecamp.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground italic" data-testid="text-role">
                      Co-founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
