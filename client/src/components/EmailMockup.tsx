import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Inbox, 
  Star, 
  Clock, 
  Send, 
  Edit3,
  Circle,
  X,
  FileText
} from "lucide-react";

const folders = [
  { name: "Inbox", icon: Inbox, count: 4 },
  { name: "Starred", icon: Star, count: null },
  { name: "Snoozed", icon: Clock, count: null },
  { name: "Sent", icon: Send, count: null },
  { name: "Drafts", icon: Edit3, count: null },
];

const labels = [
  { name: "Needs Reply", color: "bg-emerald-500", count: 8 },
  { name: "Action", color: "bg-red-500", count: 12 },
  { name: "PR", color: "bg-cyan-500", count: 16 },
  { name: "Calendar", color: "bg-amber-500", count: 4 },
  { name: "Payments", color: "bg-blue-500", count: 4 },
  { name: "Newsletter", color: "bg-orange-500", count: 24 },
  { name: "Marketing", color: "bg-purple-500", count: 16 },
  { name: "Other", color: "bg-gray-400", count: 3 },
];

export default function EmailMockup() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-3xl p-8 md:p-12 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-end)) 100%)"
          }}
          data-testid="container-email-mockup"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/95 text-foreground border-0 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2" data-testid="badge-security">
              <div className="bg-foreground text-background rounded-full p-1.5">
                <Circle className="h-3 w-3 fill-current" />
              </div>
              <span>Private & Secure</span>
              <span className="text-muted-foreground">•</span>
              <span>SOC2 Certified</span>
              <span className="text-muted-foreground">•</span>
              <span>GDPR Certified</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            <div className="w-full md:w-64 bg-white border-r border-border p-4">
              <div className="space-y-1 mb-6">
                {folders.map((folder) => (
                  <div
                    key={folder.name}
                    className={`flex items-center justify-between px-3 py-2 rounded-md hover-elevate cursor-pointer ${
                      folder.name === "Inbox" ? "bg-accent" : ""
                    }`}
                    data-testid={`folder-${folder.name.toLowerCase()}`}
                  >
                    <div className="flex items-center gap-3">
                      <folder.icon className="h-4 w-4 text-muted-foreground" />
                      <span className={`text-sm ${folder.name === "Inbox" ? "font-semibold" : ""}`}>
                        {folder.name}
                      </span>
                    </div>
                    {folder.count && (
                      <span className="text-xs text-muted-foreground" data-testid={`count-${folder.name.toLowerCase()}`}>
                        {folder.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xs font-semibold text-muted-foreground px-3 mb-2" data-testid="text-labels-heading">
                  Labels
                </h3>
                <div className="space-y-1">
                  {labels.map((label) => (
                    <div
                      key={label.name}
                      className="flex items-center justify-between px-3 py-2 rounded-md hover-elevate cursor-pointer"
                      data-testid={`label-${label.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex items-center gap-2">
                        <Circle className={`h-2 w-2 ${label.color} fill-current`} />
                        <span className="text-sm">{label.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground" data-testid={`count-label-${label.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {label.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 bg-card/50">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl" data-testid="card-email-preview">
                <h2 className="font-semibold text-xl mb-6 text-foreground" data-testid="text-email-subject">
                  Would love more info on Designfolio
                </h2>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gray-200 text-foreground">SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1" data-testid="text-sender-name">Sam Jones</h3>
                      <div className="text-sm text-foreground/70 leading-relaxed space-y-2">
                        <p>Hey Pete, I'd love to learn more about Designfolio and how it could help us at Vital.</p>
                        <p>Do you have a deck or something you could share? Also would you be available to for a chat sometime next week?</p>
                        <p className="text-foreground/60">Cheers Sam</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-orange-500 text-white">P</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-purple-100 text-purple-700 border-0 px-3 py-1 rounded-full text-xs font-medium" data-testid="badge-drafted">
                          Drafted by Emilia ✨
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-foreground/90 leading-relaxed space-y-3 mb-4" data-testid="text-email-body">
                        <p>Hey Sam,</p>
                        <p>Thanks for reaching out about Designfolio!</p>
                        <p>I've attached our deck to this email - it gives a good overview of what we do and how we've helped similar companies streamline their processes.</p>
                        <p>If you have any specific questions after looking it over, give me a shout and we can set up a quick call to dig deeper.</p>
                        <p>Cheers, Clara</p>
                      </div>

                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4 max-w-fit">
                        <FileText className="h-4 w-4 text-red-600" />
                        <div className="flex-1">
                          <div className="text-xs font-medium text-foreground" data-testid="text-attachment-name">Designfolio Sales Deck.pdf</div>
                          <div className="text-xs text-muted-foreground">1.9 MB</div>
                        </div>
                        <button className="text-red-600 hover:text-red-700">
                          <X className="h-3 w-3" />
                        </button>
                      </div>

                      <Button 
                        className="bg-primary text-primary-foreground rounded-lg"
                        data-testid="button-send"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
