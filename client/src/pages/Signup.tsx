import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3 text-foreground" data-testid="text-signup-headline">
                {showEmailForm ? "Create your account" : "Get started for free"}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed" data-testid="text-signup-description">
                {showEmailForm 
                  ? "Fill in your details to continue" 
                  : "Join thousands managing their inbox smarter"
                }
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="space-y-1 pb-4">
                {showEmailForm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-fit -ml-2 mb-2"
                    onClick={() => setShowEmailForm(false)}
                    data-testid="button-back"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                <CardTitle className="text-xl sm:text-2xl">
                  {showEmailForm ? "Sign up with email" : "Choose your signup method"}
                </CardTitle>
                <CardDescription>
                  {showEmailForm 
                    ? "Create a secure account to get started" 
                    : "Select how you'd like to create your account"
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {!showEmailForm ? (
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full min-h-12 text-base font-medium gap-3"
                      onClick={handleGoogleSignup}
                      data-testid="button-signup-google"
                    >
                      <SiGoogle className="w-5 h-5" />
                      Sign up with Google
                    </Button>

                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full min-h-12 text-base font-medium gap-3"
                      onClick={() => setShowEmailForm(true)}
                      data-testid="button-signup-email"
                    >
                      <Mail className="w-5 h-5" />
                      Sign up with Email
                    </Button>

                    <p className="text-center text-xs text-muted-foreground mt-6 pt-4">
                      Already have an account?{" "}
                      <a href="#login" className="text-primary hover:underline font-medium" data-testid="link-login">
                        Log in
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        data-testid="input-password"
                      />
                      <p className="text-xs text-muted-foreground">
                        Must be at least 8 characters long
                      </p>
                    </div>

                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, agreeToTerms: checked as boolean })
                        }
                        data-testid="checkbox-terms"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
                      className="w-full min-h-11 text-base font-medium mt-6"
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
                        <span className="bg-card px-2 text-muted-foreground">
                          Or
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full min-h-11 text-base font-medium gap-3"
                      onClick={handleGoogleSignup}
                      data-testid="button-signup-google-alt"
                    >
                      <SiGoogle className="w-5 h-5" />
                      Sign up with Google
                    </Button>

                    <p className="text-center text-xs text-muted-foreground mt-6 pt-4">
                      Already have an account?{" "}
                      <a href="#login" className="text-primary hover:underline font-medium" data-testid="link-login-alt">
                        Log in
                      </a>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground">
                Protected by industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
