import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 sm:pt-40 pb-16 relative">
        {/* Background Grid - matching HeroSection */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at center, transparent 20%, hsl(var(--background)) 70%),
              linear-gradient(to right, hsl(var(--foreground) / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 80px 80px, 80px 80px'
          }}
        />

        <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
          <motion.h1 
            className="font-heading font-semibold text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl leading-tight mb-4 sm:mb-6 text-foreground max-w-3xl mx-auto" 
            data-testid="text-resume-headline"
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Upload your resume to generate a beautiful personal site in seconds
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8" 
            data-testid="text-resume-description"
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Skip the busywork with Designfolio — publish in hours, not weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card 
              className="max-w-2xl mx-auto p-12 sm:p-20 border-2 border-dashed border-border bg-white dark:bg-card/50 hover:border-primary/50 hover:bg-muted/5 transition-all duration-300 cursor-pointer group relative overflow-hidden rounded-3xl shadow-sm" 
              data-testid="card-resume-upload"
            >
              <div className="flex flex-col items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <p className="text-xl sm:text-2xl font-semibold text-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-muted-foreground text-lg">
                    PDF, DOCX, or TXT (max. 10MB)
                  </p>
                </div>

                <div className="w-full max-w-xs mx-auto pt-4">
                  <Input 
                    type="file" 
                    className="hidden" 
                    id="resume-upload"
                    accept=".pdf,.docx,.txt"
                    data-testid="input-resume-file"
                  />
                  <Button 
                    asChild
                    className="w-full rounded-full h-14 sm:h-16 text-lg font-semibold bg-[#FF553E] hover:bg-[#E64935] text-white border-none transition-transform active:scale-95"
                  >
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      Select Resume
                    </label>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.p 
            className="text-muted-foreground text-base mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            By uploading, you agree to our <a href="/terms-conditions" className="underline hover:text-foreground transition-colors">Terms of Service</a>
          </motion.p>
        </div>
      </main>

      <Footer />
      <FooterBottom />
    </div>
  );
}
