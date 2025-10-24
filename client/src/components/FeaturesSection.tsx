import { Card } from "@/components/ui/card";
import { Clock, Calendar, Mail, Ghost, Volume2 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Slow Response Times",
    description: "It's 4pm. Your last 3 'quick email checks' cost you 45 minutes...",
    color: "text-red-500"
  },
  {
    icon: Calendar,
    title: "Endless Back & Forth Booking Meetings",
    description: "The endless ping-pong of scheduling emails that take hours to resolve",
    color: "text-green-500"
  },
  {
    icon: Mail,
    title: "Hours Wasted Managing Email",
    description: "Precious hours spent triaging, categorizing, and responding to messages",
    color: "text-blue-500"
  },
  {
    icon: Ghost,
    title: "Slow Replies Leading to Ghosted Leads",
    description: "Opportunities slipping away because you couldn't respond fast enough",
    color: "text-purple-500"
  },
  {
    icon: Volume2,
    title: "Leads Lost in the Noise",
    description: "Important messages buried under newsletters and notifications",
    color: "text-orange-500"
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-center text-foreground mb-4" data-testid="text-features-heading">
          Inbox chaos steals your time.
        </h2>
        <p className="text-center text-lg text-foreground/70 mb-4 max-w-2xl mx-auto" data-testid="text-features-subheading">
          It's 4pm. Your last 3 'quick email checks' cost you 45 minutes...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 cursor-pointer border border-border bg-card"
              data-testid={`card-feature-${index}`}
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="h-8 w-8" data-testid={`icon-feature-${index}`} />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-card-foreground" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
