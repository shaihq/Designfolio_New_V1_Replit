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
        <div className="mb-8">
          <div className="flex gap-1 mb-3" data-testid="progress-bar">
            {[1, 2, 3].map((step) => {
              const isCompleted = step < currentStep;
              const isCurrent = step === currentStep;
              
              let gradient = '';
              if (step === 1) {
                gradient = isCompleted || isCurrent
                  ? 'linear-gradient(90deg, #FFA726 0%, #FF6F00 100%)'
                  : 'linear-gradient(90deg, #E0E0E0 0%, #BDBDBD 100%)';
              } else if (step === 2) {
                gradient = isCompleted || isCurrent
                  ? 'linear-gradient(90deg, #EC407A 0%, #AB47BC 100%)'
                  : 'linear-gradient(90deg, #E0E0E0 0%, #BDBDBD 100%)';
              } else {
                gradient = isCompleted || isCurrent
                  ? 'linear-gradient(90deg, #42A5F5 0%, #1E88E5 100%)'
                  : 'linear-gradient(90deg, #E0E0E0 0%, #BDBDBD 100%)';
              }
              
              return (
                <div
                  key={step}
                  className="flex-1 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{
                    background: gradient,
                    opacity: isCompleted || isCurrent ? 1 : 0.3,
                  }}
                  data-testid={`stepper-${step}`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-1.5" data-testid="text-step-indicator">
            <span className="text-sm font-semibold text-foreground">
              {Math.round((currentStep / 3) * 100)}% of magic completed
            </span>
            <span className="text-sm font-semibold text-foreground/40">+</span>
          </div>
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
              <h1 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-step1-title">
                What are your main goals?
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step1-description">
                Select all that apply to help us personalize your experience
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className="px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover-elevate"
                    style={
                      selectedGoals.includes(goal)
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
                    data-testid={`button-goal-${goal.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors"
                data-testid="button-next"
              >
                Continue
                <ArrowRight className="ml-2 w-4 h-4" />
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
              <h1 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-step2-title">
                What's your experience level?
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step2-description">
                This helps us recommend the right features for you
              </p>

              <div className="flex flex-col gap-2 mb-8">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedExperience(level)}
                    className="px-5 py-3 rounded-full border-2 text-sm font-medium transition-all hover-elevate text-left"
                    style={
                      selectedExperience === level
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
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
                  className="h-11 text-base font-semibold rounded-full px-6"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors"
                  data-testid="button-next"
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
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
              <h1 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-step3-title">
                Choose your top skills
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step3-description">
                Pick a few skills to get started.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className="px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover-elevate"
                    style={
                      selectedInterests.includes(interest)
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
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
                  className="h-11 text-base font-semibold rounded-full px-6"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none border-0 rounded-full h-11 px-6 text-base font-semibold no-default-hover-elevate no-default-active-elevate transition-colors"
                  data-testid="button-complete"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
