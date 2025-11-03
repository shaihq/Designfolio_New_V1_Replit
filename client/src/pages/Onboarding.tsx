import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

type OnboardingStep = 1 | 2 | 3;

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const goals = [
    "Build portfolio",
    "Showcase projects",
    "Get hired",
    "Personal branding",
    "Share knowledge",
    "Network"
  ];

  const experienceLevels = [
    "Just starting out",
    "Some experience",
    "Intermediate",
    "Advanced",
    "Expert"
  ];

  const interests = [
    "Web Design",
    "UI/UX",
    "Development",
    "Photography",
    "Illustration",
    "Motion Design",
    "3D Design",
    "Writing"
  ];

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    } else {
      setLocation("/dashboard");
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedGoals.length > 0;
    if (currentStep === 2) return selectedExperience !== "";
    if (currentStep === 3) return selectedInterests.length > 0;
    return false;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${
                    step === currentStep
                      ? "border-foreground bg-foreground text-background"
                      : step < currentStep
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-transparent text-muted-foreground"
                  }`}
                  data-testid={`stepper-${step}`}
                >
                  {step < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-medium">{step}</span>
                  )}
                </div>
                {step < 3 && (
                  <div className={`h-0.5 w-12 transition-all ${
                    step < currentStep ? "bg-foreground" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-2" data-testid="text-step-indicator">
            Step {currentStep}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-step1-title">
                What are your main goals?
              </h1>
              <p className="text-lg text-foreground/60 mb-10" data-testid="text-step1-description">
                Select all that apply to help us personalize your experience
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className={`px-6 py-3 rounded-full border-2 text-base font-medium transition-all hover-elevate ${
                      selectedGoals.includes(goal)
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border"
                    }`}
                    data-testid={`button-goal-${goal.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full sm:w-auto min-w-[200px] h-12 text-base font-semibold rounded-full"
                data-testid="button-next"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-step2-title">
                What's your experience level?
              </h1>
              <p className="text-lg text-foreground/60 mb-10" data-testid="text-step2-description">
                This helps us recommend the right features for you
              </p>

              <div className="flex flex-col gap-3 mb-12">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedExperience(level)}
                    className={`px-6 py-4 rounded-full border-2 text-base font-medium transition-all hover-elevate text-left ${
                      selectedExperience === level
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border"
                    }`}
                    data-testid={`button-experience-${level.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="h-12 text-base font-semibold rounded-full px-8"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 sm:flex-initial sm:min-w-[200px] h-12 text-base font-semibold rounded-full"
                  data-testid="button-next"
                >
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-step3-title">
                What are you interested in?
              </h1>
              <p className="text-lg text-foreground/60 mb-10" data-testid="text-step3-description">
                Pick a few areas that match your creative interests
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-6 py-3 rounded-full border-2 text-base font-medium transition-all hover-elevate ${
                      selectedInterests.includes(interest)
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border"
                    }`}
                    data-testid={`button-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setCurrentStep(2)}
                  variant="outline"
                  className="h-12 text-base font-semibold rounded-full px-8"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 sm:flex-initial sm:min-w-[200px] h-12 text-base font-semibold rounded-full"
                  data-testid="button-complete"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
