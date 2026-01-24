import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-3xl w-full space-y-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight tracking-tight text-foreground" data-testid="text-resume-headline">
            Upload your resume to generate a beautiful personal site in seconds
          </h1>

          <Card className="p-8 sm:p-12 border-2 border-dashed border-muted-foreground/20 bg-muted/5 hover:bg-muted/10 transition-colors cursor-pointer group" data-testid="card-resume-upload">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-2">
                <p className="text-xl font-medium text-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-muted-foreground">
                  PDF, DOCX, or TXT (max. 10MB)
                </p>
              </div>

              <div className="w-full max-w-xs mx-auto">
                <Input 
                  type="file" 
                  className="hidden" 
                  id="resume-upload"
                  accept=".pdf,.docx,.txt"
                  data-testid="input-resume-file"
                />
                <Button 
                  asChild
                  className="w-full rounded-full h-12 text-lg font-semibold bg-[#FF553E] hover:bg-[#E64935] text-white border-none"
                >
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    Select Resume
                  </label>
                </Button>
              </div>
            </div>
          </Card>

          <p className="text-muted-foreground text-sm">
            By uploading, you agree to our <a href="/terms-conditions" className="underline hover:text-foreground">Terms of Service</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
