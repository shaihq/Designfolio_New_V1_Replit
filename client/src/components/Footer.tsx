import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shaiSignature from "@assets/shaisign_1761634274798.png";

export default function Footer() {
  const names = ["john", "morgan", "sarah", "tom", "brad"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (inputValue || isFocused) return;
    
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [inputValue, isFocused, names.length]);

  return (
    <footer className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 sm:p-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-heading leading-tight" data-testid="text-footer-headline">
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
                  <div className="flex items-center" data-testid="image-signature">
                    <img src={shaiSignature} alt="Shai's signature" className="h-8 sm:h-10 w-auto" />
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

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-2xl mx-auto pt-4">
              <div className="relative w-full sm:flex-1">
                <div className="flex items-center bg-white dark:bg-white border-2 border-border rounded-full w-full hover:border-foreground/20 focus-within:border-foreground/30 focus-within:shadow-[0_0_0_4px_hsl(var(--foreground)/0.12)] transition-all duration-300 ease-out cursor-text overflow-hidden">
                  <div className="relative flex-1 h-14 sm:h-16">
                    <Input 
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder={isFocused && !inputValue ? "username" : ""}
                      className="border-0 bg-transparent h-full w-full px-5 sm:px-6 focus-visible:ring-0 focus-visible:ring-offset-0 !text-lg text-foreground placeholder:!text-lg placeholder:text-muted-foreground/60 relative z-10"
                      data-testid="input-name-footer"
                    />
                    {!inputValue && !isFocused && (
                      <motion.span
                        key={currentNameIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-5 sm:left-6 top-0 h-full flex items-center pointer-events-none text-lg text-foreground"
                      >
                        {names[currentNameIndex]}
                      </motion.span>
                    )}
                  </div>
                  <span className="text-base sm:text-lg text-muted-foreground/60 pr-5 sm:pr-6 whitespace-nowrap">
                    .designfolio.me
                  </span>
                </div>
              </div>
              <Button 
                className="text-white rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full sm:w-auto whitespace-nowrap"
                style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
                data-testid="button-start-building-footer"
              >
                Get started for free
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
