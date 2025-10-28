import { Card } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 sm:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight" data-testid="text-footer-headline">
                It was supposed to take a weekend, not a quarter.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <p className="text-base text-foreground leading-relaxed" data-testid="text-intro">
                  You just wanted to show your work, not learn five new tools to do it.
                </p>

                <p className="text-base text-foreground leading-relaxed" data-testid="text-options">
                  There are endless ways to "build a portfolio."
                  Figma templates, Notion pages, Framer sites — all promising to help you stand out.
                  You've probably tried a few. Yet, here you are — still without something you're proud to share.
                </p>

                <p className="text-base font-semibold text-foreground leading-relaxed" data-testid="text-problem">
                  Unfortunately, most portfolio builders end up the same way —
                  overwhelming, too technical, or simply never finished.
                  You know that feeling, right?
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base text-foreground leading-relaxed" data-testid="text-solution">
                    Not Designfolio.
                    Designfolio is refreshingly simple — built by designers who've been in your shoes.
                    It's fast, no-code, and focused on one thing: getting your best work online.
                  </p>

                  <p className="text-base font-semibold text-foreground leading-relaxed" data-testid="text-pitch">
                    Because your projects aren't the problem.
                    Your portfolio process is.
                  </p>

                  <p className="text-base text-foreground leading-relaxed" data-testid="text-invitation">
                    So, give it a spin. Claim your domain, add your work, and hit publish.
                    You'll be surprised how quickly "work in progress" turns into "link in bio."
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="text-2xl sm:text-3xl font-heading text-foreground" data-testid="text-signature">
                    — Shai
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-semibold" data-testid="text-contact">
                      <a 
                        href="mailto:shai@designfolio.me" 
                        className="text-primary hover:underline"
                        data-testid="link-email"
                      >
                        shai@designfolio.me
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground italic" data-testid="text-role">
                      Founder
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
