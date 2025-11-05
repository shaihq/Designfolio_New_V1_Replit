import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

type OnboardingStep = 1 | 2 | 3 | 4;

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [customRole, setCustomRole] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const roles = [
    { label: "Product Designers", image: "/onboarding-animated-icons/productdesigner.png" },
    { label: "Developer / Engineer", image: "/onboarding-animated-icons/developer.png" },
    { label: "Data Scientists", image: "/onboarding-animated-icons/datascientist.png" },
    { label: "No-Code Makers", image: "/onboarding-animated-icons/nocodemakers.png" },
    { label: "Growth Marketers", image: "/onboarding-animated-icons/growthmarketer.png" },
    { label: "Brand / Content Strategists", image: "/onboarding-animated-icons/contentwriting.png" },
    { label: "Graphic Designers", image: "/onboarding-animated-icons/graphicdesigner.png" },
    { label: "Founder", image: "/onboarding-animated-icons/founder.png" },
    { label: "Educator/Teacher", image: "/onboarding-animated-icons/teacher.png" },
    { label: "Others", image: "/onboarding-animated-icons/others.png" }
  ];

  const goals = [
    { label: "Get hired", image: "/gethiredhand.png" },
    { label: "Personal Branding", image: "/personalbrandinghand.png" }
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

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (role !== "Others") {
      setTimeout(() => {
        setCurrentStep(2);
      }, 400);
    }
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    setTimeout(() => {
      setCurrentStep(3);
    }, 400);
  };

  const handleExperienceSelect = (experience: string) => {
    setSelectedExperience(experience);
    setTimeout(() => {
      setCurrentStep(4);
    }, 400);
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    } else {
      setLocation("/dashboard");
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      if (selectedRole === "Others") {
        return customRole.trim() !== "";
      }
      return selectedRole !== "";
    }
    if (currentStep === 2) return selectedGoal !== "";
    if (currentStep === 3) return selectedExperience !== "";
    if (currentStep === 4) return selectedInterests.length > 0;
    return false;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex gap-1 mb-3" data-testid="progress-bar">
            {[1, 2, 3, 4].map((step) => {
              const isCompleted = step < currentStep;
              const isCurrent = step === currentStep;
              const isActive = isCompleted || isCurrent;
              
              let gradient = '';
              if (step === 1) {
                gradient = 'linear-gradient(90deg, #FF9A56 0%, #FF8A7A 100%)';
              } else if (step === 2) {
                gradient = 'linear-gradient(90deg, #FF8A7A 0%, #F77BB1 100%)';
              } else if (step === 3) {
                gradient = 'linear-gradient(90deg, #F77BB1 0%, #D97DD8 100%)';
              } else {
                gradient = 'linear-gradient(90deg, #D97DD8 0%, #B47EE8 100%)';
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
              {Math.round((currentStep / 4) * 100)}% of magic completed
            </span>
            <motion.img 
              key={currentStep}
              src="/heartonfire.png" 
              alt="heart on fire" 
              className="w-6 h-6"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ 
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: [0.34, 1.56, 0.64, 1]
              }}
            />
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
                What describes you the best?
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step1-description">
                Help us tailor your experience to match your professional journey
              </p>

              <motion.div 
                className="grid grid-cols-2 gap-3 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {roles.map((role, index) => {
                  const isSelected = selectedRole === role.label;
                  const isOthers = role.label === "Others";
                  return (
                    <motion.button
                      key={role.label}
                      onClick={() => handleRoleSelect(role.label)}
                      className="px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all hover-elevate text-left flex items-center gap-3 relative overflow-hidden"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        }
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      data-testid={`button-role-${role.label.toLowerCase().replace(/[\s\/]/g, '-')}`}
                    >
                      <motion.img 
                        src={role.image} 
                        alt={role.label}
                        className="w-10 h-10 object-contain"
                        animate={isSelected ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="flex-1">{role.label}</span>
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
                    </motion.button>
                  );
                })}
              </motion.div>

              <AnimatePresence>
                {selectedRole === "Others" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8 space-y-2"
                  >
                    <Label htmlFor="custom-role" className="text-sm font-medium text-foreground">
                      Your Role
                    </Label>
                    <div className="bg-white dark:bg-white border-2 border-border rounded-full hover:border-foreground/20 focus-within:border-foreground/30 focus-within:shadow-[0_0_0_4px_hsl(var(--foreground)/0.12)] transition-all duration-300 ease-out">
                      <Input
                        id="custom-role"
                        type="text"
                        placeholder="Tell us your role..."
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                        className="border-0 bg-transparent h-11 px-4 focus-visible:ring-0 focus-visible:ring-offset-0 text-base text-foreground placeholder:text-base placeholder:text-muted-foreground/60"
                        data-testid="input-custom-role"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                What is your main goal with Designfolio?
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step2-description">
                Choose the one that matters most to you
              </p>

              <motion.div 
                className="flex flex-col gap-3 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {goals.map((goal) => {
                  const isSelected = selectedGoal === goal.label;
                  return (
                    <motion.button
                      key={goal.label}
                      onClick={() => handleGoalSelect(goal.label)}
                      className="px-6 py-4 rounded-2xl border-2 text-base font-medium transition-all hover-elevate text-left flex items-center gap-4 relative overflow-hidden"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      variants={{
                        hidden: { opacity: 0, x: -30, scale: 0.95 },
                        visible: { 
                          opacity: 1, 
                          x: 0, 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        }
                      }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      data-testid={`button-goal-${goal.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <motion.img 
                        src={goal.image} 
                        alt={goal.label}
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
                      <span className="flex-1">{goal.label}</span>
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
              </motion.div>

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
                What's your experience level?
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step3-description">
                This helps us recommend the right features for you
              </p>

              <motion.div 
                className="flex flex-col gap-3 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {experienceLevels.map((level) => {
                  const isSelected = selectedExperience === level.label;
                  return (
                    <motion.button
                      key={level.label}
                      onClick={() => handleExperienceSelect(level.label)}
                      className="px-6 py-4 rounded-2xl border-2 text-base font-medium transition-all hover-elevate text-left flex items-center gap-4 relative overflow-hidden"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      variants={{
                        hidden: { opacity: 0, x: -30, scale: 0.95 },
                        visible: { 
                          opacity: 1, 
                          x: 0, 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        }
                      }}
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
              </motion.div>

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
                  data-testid="button-next"
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl font-semibold mb-2 text-foreground" data-testid="text-step4-title">
                Choose your top skills
              </h1>
              <p className="text-sm text-foreground/60 mb-8" data-testid="text-step4-description">
                Pick a few skills to get started.
              </p>

              <motion.div 
                className="flex flex-wrap gap-2 mb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {interests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <motion.button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className="px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover-elevate relative flex items-center gap-2"
                      style={
                        isSelected
                          ? { backgroundColor: '#FFF5F0', borderColor: '#FF553E', color: '#FF553E' }
                          : { backgroundColor: 'transparent', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }
                      }
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { 
                          opacity: 1, 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }
                      }}
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
                    </motion.button>
                  );
                })}
              </motion.div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setCurrentStep(3)}
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
