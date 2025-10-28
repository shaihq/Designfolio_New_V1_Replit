import { Check, Zap, MousePointer2, Clock, Calendar, Mail, MessageSquare, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "Slow Response Times",
    color: "text-red-500"
  },
  {
    icon: Calendar,
    title: "Endless Back & Forth Booking Meetings",
    color: "text-green-500"
  },
  {
    icon: Mail,
    title: "Hours Wasted Managing Email",
    color: "text-blue-500"
  },
  {
    icon: MessageSquare,
    title: "Slow Replies Leading to Ghosted Leads",
    color: "text-blue-500"
  },
  {
    icon: Volume2,
    title: "Leads Lost in the Noise",
    color: "text-orange-500"
  },
];

const inspirationCards = [
  {
    step: "Step 1",
    title: "First, claim your unique link",
    description: "Choose a username",
    type: "input",
    example: "designfolio.me"
  },
  {
    step: "Step 2",
    title: "Setup your profile",
    description: "Your intro can be your game-changer",
    type: "profile"
  },
  {
    step: "Step 3",
    title: "Build your case study",
    description: "Highlight your best work",
    type: "showcase"
  },
  {
    step: "Step 4",
    title: "Publish your website",
    description: "Tell the world what you're capable of",
    type: "action"
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl text-center text-foreground mb-4 sm:mb-6" data-testid="text-features-heading">
          Your work deserves to be seen.
        </h2>
        
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-pink-50 border border-pink-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3.5" data-testid="badge-time-wasted">
            <span className="text-sm sm:text-base text-foreground">
              It's been 3 months. You've applied to 40+ jobs — but your work still lives in random Figma links.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-full px-3 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-2.5 hover-elevate cursor-pointer"
              data-testid={`badge-feature-${index}`}
            >
              <feature.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${feature.color}`} data-testid={`icon-feature-${index}`} />
              <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        <div className="columns-1 md:columns-2 gap-4 sm:gap-6 space-y-4 md:space-y-6">
          {inspirationCards.map((card, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover-elevate transition-all duration-300 break-inside-avoid mb-4 md:mb-6"
              data-testid={`card-inspiration-${index}`}
            >
              <Badge 
                variant="secondary" 
                className="mb-4 text-xs font-medium"
                data-testid={`badge-step-${index}`}
              >
                {card.step}
              </Badge>
              
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-2" data-testid={`text-card-title-${index}`}>
                {card.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-6" data-testid={`text-card-description-${index}`}>
                {card.description}
              </p>

              {card.type === "input" && (
                <div className="flex items-center gap-2" data-testid="input-unique-link">
                  <Input 
                    placeholder="ker" 
                    className="flex-1"
                    data-testid="input-username"
                  />
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md">
                    <span className="text-sm text-muted-foreground">{card.example}</span>
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" data-testid="icon-check" />
                    </div>
                  </div>
                </div>
              )}

              {card.type === "profile" && (
                <div className="space-y-6 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center" data-testid="profile-section">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-2xl">B</span>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground text-lg" data-testid="text-profile-name">Bruce Wayne</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded-md w-full" data-testid="skeleton-line-1"></div>
                    <div className="h-3 bg-muted rounded-md w-4/5" data-testid="skeleton-line-2"></div>
                    <div className="h-3 bg-muted rounded-md w-3/4" data-testid="skeleton-line-3"></div>
                    <div className="h-3 bg-muted rounded-md w-full mt-4" data-testid="skeleton-line-4"></div>
                    <div className="h-3 bg-muted rounded-md w-5/6" data-testid="skeleton-line-5"></div>
                  </div>
                </div>
              )}

              {card.type === "showcase" && (
                <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-md p-6 min-h-[280px] sm:min-h-[320px] flex items-center justify-center" data-testid="showcase-section">
                  <div className="bg-card rounded-md shadow-lg p-4 w-full max-w-[280px]">
                    <div className="space-y-3">
                      <div className="h-24 sm:h-28 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md" data-testid="showcase-image-1"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-14 sm:h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-md" data-testid="showcase-image-2"></div>
                        <div className="h-14 sm:h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-md" data-testid="showcase-image-3"></div>
                      </div>
                      <div className="h-2 bg-muted rounded-full w-3/4" data-testid="showcase-line-1"></div>
                      <div className="h-2 bg-muted rounded-full w-1/2" data-testid="showcase-line-2"></div>
                    </div>
                  </div>
                </div>
              )}

              {card.type === "action" && (
                <div className="flex items-center gap-4" data-testid="action-section">
                  <Button 
                    className="bg-foreground text-background hover:bg-foreground/90"
                    data-testid="button-publish"
                  >
                    <Zap className="w-4 h-4 mr-2" data-testid="icon-zap" />
                    Publish Website
                  </Button>
                  <MousePointer2 className="w-8 h-8 text-foreground" data-testid="icon-pointer" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
