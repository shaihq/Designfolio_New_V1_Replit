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
  ChevronDown
} from "lucide-react";

const folders = [
  { name: "Inbox", icon: Inbox, count: 4 },
  { name: "Starred", icon: Star, count: null },
  { name: "Snoozed", icon: Clock, count: null },
  { name: "Sent", icon: Send, count: null },
  { name: "Drafts", icon: Edit3, count: null },
];

const labels = [
  { name: "Needs Reply", color: "bg-blue-500", count: 8 },
  { name: "Admin", color: "bg-green-500", count: 12 },
  { name: "PR", color: "bg-purple-500", count: 16 },
  { name: "Urgent", color: "bg-red-500", count: 1 },
  { name: "Payments", color: "bg-yellow-500", count: 4 },
  { name: "Newsletter", color: "bg-gray-400", count: 24 },
  { name: "Marketing", color: "bg-orange-500", count: 16 },
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-white/95 text-foreground border-0 px-4 py-2 rounded-full text-xs font-medium" data-testid="badge-private">
              🔒 Private & Secure
            </Badge>
            <Badge variant="secondary" className="bg-white/95 text-foreground border-0 px-4 py-2 rounded-full text-xs font-medium" data-testid="badge-soc2">
              🛡️ SOC2 Certified
            </Badge>
            <Badge variant="secondary" className="bg-white/95 text-foreground border-0 px-4 py-2 rounded-full text-xs font-medium" data-testid="badge-gdpr">
              ✓ GDPR Certified
            </Badge>
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-base" data-testid="text-sender-name">Sam Johns</h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-email-subject">Would love more info on Lynq</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0 px-3 py-1 rounded-full text-xs font-medium" data-testid="badge-drafted">
                    ✨ Drafted by Emilia
                  </Badge>
                </div>

                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed mb-6" data-testid="text-email-body">
                  <p>Hey Sam,</p>
                  
                  <p>
                    Thanks for reaching out about Lynq!
                  </p>
                  
                  <p>
                    I've attached our deck to this email. It gives a good overview of what we do and how we've helped similar companies streamline their processes.
                  </p>
                  
                  <p>
                    If you have any specific questions after looking it over, give me a shout and we can set up a quick call to dive deeper.
                  </p>
                  
                  <p>Cheers, Clara</p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary"
                    data-testid="button-send"
                  >
                    Send
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    data-testid="button-schedule"
                  >
                    <Clock className="h-4 w-4" />
                    Lynq: Send 9am
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
