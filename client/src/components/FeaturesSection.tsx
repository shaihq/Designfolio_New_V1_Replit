import { Clock, Calendar, Mail, MessageSquare, Volume2 } from "lucide-react";

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

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif font-bold text-5xl md:text-6xl text-center text-foreground mb-6" data-testid="text-features-heading">
          Inbox chaos steals your time.
        </h2>
        
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="bg-red-50 border border-red-200 rounded-full px-6 py-3 flex items-center gap-3" data-testid="badge-time-wasted">
            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              90
            </div>
            <span className="text-base text-foreground">
              It's 4pm. Your last 3 'quick email checks' cost you 45 minutes...
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-full px-5 py-3 flex items-center gap-3 hover-elevate cursor-pointer"
              data-testid={`badge-feature-${index}`}
            >
              <feature.icon className={`h-5 w-5 ${feature.color}`} data-testid={`icon-feature-${index}`} />
              <span className="text-sm font-medium text-foreground" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
