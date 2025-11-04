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
    { label: "Just starting out", image: "/startingout.png" },
    { label: "Intermediate", image: "/intermediate.png" },
    { label: "Advanced", image: "/advanced.png" }
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
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at center, transparent 20%, hsl(var(--background)) 70%),
            linear-gradient(to right, hsl(var(--foreground) / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: 'cover, 80px 80px, 80px 80px'
        }}
      />
      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-8">
          <div className="flex gap-1 mb-3" data-testid="progress-bar">
            {[1, 2, 3].map((step) => {
              const isCompleted = step < currentStep;
              const isCurrent = step === currentStep;
              const isActive = isCompleted || isCurrent;
              
              let gradient = '';
              if (step === 1) {
                gradient = 'linear-gradient(90deg, #FF9A56 0%, #FF7B9C 100%)';
              } else if (step === 2) {
                gradient = 'linear-gradient(90deg, #FF7B9C 0%, #E374C8 100%)';
              } else {
                gradient = 'linear-gradient(90deg, #E374C8 0%, #B47EE8 100%)';
              }
              
              return (
                <div
                  key={step}
                  className="flex-1 h-2 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: '#E5E5E5',
                  }}
                  data-testid={`stepper-${step}`}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: gradient,
                    }}
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: isActive ? '100%' : '0%'
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </div>
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
                {goals.map((goal) => {
                  const isSelected = selectedGoals.includes(goal);
                  return (
                    <button
                      key={goal}
                      onClick={() => handleGoalToggle(goal)}
                      className="px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover-elevate relative flex items-center gap-2"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      data-testid={`button-goal-${goal.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Check className="w-4 h-4" style={{ color: '#FF553E' }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span>{goal}</span>
                    </button>
                  );
                })}
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

              <div className="flex flex-col gap-3 mb-8">
                {experienceLevels.map((level) => {
                  const isSelected = selectedExperience === level.label;
                  return (
                    <motion.button
                      key={level.label}
                      onClick={() => setSelectedExperience(level.label)}
                      className="px-6 py-4 rounded-2xl border-2 text-base font-medium transition-all hover-elevate text-left flex items-center gap-4 relative overflow-hidden"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      data-testid={`button-experience-${level.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <motion.img 
                        src={level.image} 
                        alt={level.label}
                        className="w-12 h-12 object-contain"
                        animate={isSelected ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="flex-1">{level.label}</span>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Check className="w-5 h-5" style={{ color: '#FF553E' }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
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
                {interests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className="px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover-elevate relative flex items-center gap-2"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      data-testid={`button-interest-${interest.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <Check className="w-4 h-4" style={{ color: '#FF553E' }} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span>{interest}</span>
                    </button>
                  );
                })}
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
