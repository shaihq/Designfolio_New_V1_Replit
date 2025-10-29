import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, ArrowLeft } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export default function Signup() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email signup:", formData);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <div className="pt-16 sm:pt-20 relative">
        <div 
          className="absolute left-0 right-0 z-0"
          style={{
            top: '0',
            bottom: '0',
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at center, transparent 20%, hsl(var(--background)) 70%),
              linear-gradient(to right, hsl(var(--foreground) / 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground) / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: 'cover, 80px 80px, 80px 80px'
          }}
        />

        <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 text-foreground" data-testid="text-signup-headline">
                {showEmailForm ? "Create your account" : "Get started for free"}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed" data-testid="text-signup-description">
                {showEmailForm 
                  ? "Fill in your details to continue" 
                  : "Join thousands managing their inbox smarter"
                }
              </p>
            </div>

            <Card 
              className="relative p-6 sm:p-8 bg-muted/40 border-border/30 overflow-visible shadow-none"
              style={{
                boxShadow: 'inset 0 3px 8px 0 rgb(0 0 0 / 0.08), inset 0 -3px 8px 0 rgb(0 0 0 / 0.05)'
              }}
            >
              {!showEmailForm ? (
                <div className="space-y-4">
                  <div 
                    className="bg-white border border-border rounded-full px-5 py-3 flex items-center justify-center gap-3 hover-elevate cursor-pointer"
                    onClick={handleGoogleSignup}
                    data-testid="button-signup-google"
                  >
                    <SiGoogle className="w-5 h-5 text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      Sign up with Google
                    </span>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-muted/40 px-3 text-muted-foreground font-medium">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div 
                    className="bg-white border border-border rounded-full px-5 py-3 flex items-center justify-center gap-3 hover-elevate cursor-pointer"
                    onClick={() => setShowEmailForm(true)}
                    data-testid="button-signup-email"
                  >
                    <Mail className="w-5 h-5 text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      Sign up with Email
                    </span>
                  </div>

                  <p className="text-center text-sm text-foreground/70 mt-8 pt-4">
                    Already have an account?{" "}
                    <a href="#login" className="text-primary hover:underline font-medium" data-testid="link-login">
                      Log in
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEmailSignup} className="space-y-5">
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground -ml-2 -mt-2 mb-4 hover-elevate px-2 py-1 rounded-md"
                    data-testid="button-back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">Full name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-2 border-border rounded-md"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-2 border-border rounded-md"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      className="bg-white border-2 border-border rounded-md"
                      data-testid="input-password"
                    />
                    <p className="text-xs text-muted-foreground pt-1">
                      Must be at least 8 characters long
                    </p>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeToTerms: checked as boolean })
                      }
                      className="mt-0.5"
                      data-testid="checkbox-terms"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I agree to the{" "}
                      <a href="#terms" className="text-primary hover:underline" data-testid="link-terms">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#privacy" className="text-primary hover:underline" data-testid="link-privacy">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white rounded-full h-14 px-8 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors mt-6"
                    style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
                    disabled={!formData.agreeToTerms}
                    data-testid="button-create-account"
                  >
                    Create account
                  </Button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-muted/40 px-3 text-muted-foreground font-medium">
                        Or
                      </span>
                    </div>
                  </div>

                  <div 
                    className="bg-white border border-border rounded-full px-5 py-3 flex items-center justify-center gap-3 hover-elevate cursor-pointer"
                    onClick={handleGoogleSignup}
                    data-testid="button-signup-google-alt"
                  >
                    <SiGoogle className="w-5 h-5 text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      Sign up with Google
                    </span>
                  </div>

                  <p className="text-center text-sm text-foreground/70 mt-8 pt-4">
                    Already have an account?{" "}
                    <a href="#login" className="text-primary hover:underline font-medium" data-testid="link-login-alt">
                      Log in
                    </a>
                  </p>
                </form>
              )}
            </Card>

            <div className="mt-8 text-center">
              <p className="text-xs text-foreground/50">
                Protected by industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
