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
      <div className="w-full max-w-3xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all font-semibold ${
                    step === currentStep
                      ? "text-white"
                      : step < currentStep
                      ? "text-white"
                      : "border-border bg-transparent text-muted-foreground"
                  }`}
                  style={
                    step <= currentStep
                      ? { backgroundColor: '#FF553E', borderColor: '#FF553E' }
                      : {}
                  }
                  data-testid={`stepper-${step}`}
                >
                  {step < currentStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm">{step}</span>
                  )}
                </div>
                {step < 3 && (
                  <div 
                    className="h-0.5 w-16 transition-all"
                    style={
                      step < currentStep
                        ? { backgroundColor: '#FF553E' }
                        : { backgroundColor: 'hsl(var(--border))' }
                    }
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-sm font-medium text-muted-foreground mb-2" data-testid="text-step-indicator">
            Step {currentStep} of 3
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground" data-testid="text-step1-title">
                What are your main goals?
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 mb-12" data-testid="text-step1-description">
                Select all that apply to help us personalize your experience
              </p>

              <div className="flex flex-wrap gap-3 mb-16">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className="px-6 py-3.5 rounded-full border-2 text-base font-medium transition-all hover-elevate"
                    style={
                      selectedGoals.includes(goal)
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedGoals.includes(goal)) {
                        e.currentTarget.style.backgroundColor = '#E64935';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedGoals.includes(goal)) {
                        e.currentTarget.style.backgroundColor = '#FF553E';
                      }
                    }}
                    data-testid={`button-goal-${goal.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {goal}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="text-white rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full sm:w-auto whitespace-nowrap"
                style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground" data-testid="text-step2-title">
                What's your experience level?
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 mb-12" data-testid="text-step2-description">
                This helps us recommend the right features for you
              </p>

              <div className="flex flex-col gap-3 mb-16">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedExperience(level)}
                    className="px-6 py-4 rounded-full border-2 text-base font-medium transition-all hover-elevate text-left"
                    style={
                      selectedExperience === level
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedExperience === level) {
                        e.currentTarget.style.backgroundColor = '#E64935';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedExperience === level) {
                        e.currentTarget.style.backgroundColor = '#FF553E';
                      }
                    }}
                    data-testid={`button-experience-${level.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="h-14 sm:h-16 text-base sm:text-lg font-semibold rounded-full px-8 sm:px-10 order-2 sm:order-1"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="text-white rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full sm:flex-1 whitespace-nowrap order-1 sm:order-2"
                  style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground" data-testid="text-step3-title">
                Choose your top skills
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 mb-12" data-testid="text-step3-description">
                Pick a few skills to get started.
              </p>

              <div className="flex flex-wrap gap-3 mb-16">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className="px-6 py-3.5 rounded-full border-2 text-base font-medium transition-all hover-elevate"
                    style={
                      selectedInterests.includes(interest)
                        ? { backgroundColor: '#FF553E', borderColor: '#FF553E', color: 'white' }
                        : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedInterests.includes(interest)) {
                        e.currentTarget.style.backgroundColor = '#E64935';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedInterests.includes(interest)) {
                        e.currentTarget.style.backgroundColor = '#FF553E';
                      }
                    }}
                    data-testid={`button-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setCurrentStep(2)}
                  variant="outline"
                  className="h-14 sm:h-16 text-base sm:text-lg font-semibold rounded-full px-8 sm:px-10 order-2 sm:order-1"
                  data-testid="button-back"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="text-white rounded-full h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-semibold no-default-hover-elevate no-default-active-elevate transition-colors w-full sm:flex-1 whitespace-nowrap order-1 sm:order-2"
                  style={{ backgroundColor: '#FF553E', borderColor: '#FF553E' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64935'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF553E'}
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
