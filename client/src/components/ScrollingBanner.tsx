import { Star } from "lucide-react";

const testimonials = [
  "Perfect solution",
  "Really great",
  "Outstanding",
  "Best app for teams",
  "Awesome service",
  "Gets better and better",
  "Love it",
  "Highly recommend",
  "Game changer",
  "Exactly what I needed",
];

export default function ScrollingBanner() {
  return (
    <div className="w-full bg-foreground py-4 overflow-hidden" data-testid="banner-scrolling">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...testimonials, ...testimonials].map((text, index) => (
          <div key={index} className="inline-flex items-center gap-2 px-6">
            <span className="text-background font-medium text-sm sm:text-base" data-testid={`text-testimonial-${index}`}>
              "{text}"
            </span>
            <div className="flex gap-0.5" data-testid={`stars-${index}`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
