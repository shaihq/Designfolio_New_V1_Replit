import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, ArrowLeft, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-background to-[hsl(var(--gradient-end))] opacity-[0.03]" />
      
      <div className="absolute top-10 left-10 hidden lg:block">
        <div className="w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-40 h-40 rounded-full bg-[hsl(var(--gradient-end))]/5 blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-2xl">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
            {showEmailForm ? "Create your account" : "Get started"}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            {showEmailForm 
              ? "Fill in your details to continue" 
              : "Join thousands of users managing their emails smarter"
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
                  className="w-full h-12 text-base font-medium gap-3"
                  onClick={handleGoogleSignup}
                  data-testid="button-signup-google"
                >
                  <SiGoogle className="w-5 h-5" />
                  Sign up with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-medium gap-3"
                  onClick={() => setShowEmailForm(true)}
                  data-testid="button-signup-email"
                >
                  <Mail className="w-5 h-5" />
                  Sign up with Email
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Already have an account?{" "}
                  <a href="#login" className="text-primary hover:underline" data-testid="link-login">
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

                <div className="flex items-start space-x-2">
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
                  className="w-full h-11 text-base font-medium"
                  disabled={!formData.agreeToTerms}
                  data-testid="button-create-account"
                >
                  Create account
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
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
                  className="w-full h-11 text-base font-medium gap-3"
                  onClick={handleGoogleSignup}
                  data-testid="button-signup-google-alt"
                >
                  <SiGoogle className="w-5 h-5" />
                  Sign up with Google
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Already have an account?{" "}
                  <a href="#login" className="text-primary hover:underline" data-testid="link-login-alt">
                    Log in
                  </a>
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By signing up, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
