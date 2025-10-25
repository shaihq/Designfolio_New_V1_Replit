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
    <section className="py-12 sm:py-16 md:py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-4 sm:mb-6" data-testid="text-features-heading">
          Inbox chaos steals your time.
        </h2>
        
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative inline-flex items-start">
            <div className="bg-pink-50 border border-pink-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3.5 pr-12 sm:pr-16" data-testid="badge-time-wasted">
              <span className="text-sm sm:text-base text-foreground">
                It's 4pm. Your last 3 'quick email checks' cost you 45 minutes...
              </span>
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-sm sm:text-base font-bold shadow-md">
              90
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
      </div>
    </section>
  );
}
