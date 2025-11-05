import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  Sparkles, 
  Share2, 
  Settings, 
  Bell, 
  Plus,
  Upload
} from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const [user] = useState({
    name: "Alex Johnson",
    role: "Product Designer",
    avatar: "",
    categories: [
      "Design Systems and Style Guides",
      "Human-Centered Design",
      "Branding and Conceptualization"
    ]
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-pointer" data-testid="link-home">
            <svg width="166" height="33" viewBox="0 0 166 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" data-testid="logo-icon">
              <path d="M15.4028 0.779664L10.1341 9.55991L5.13779 7.96851L15.4028 0.779664Z" fill="#FF553E"/>
              <path d="M4.1666 15.4033L0.77832 10.1346L7.96717 5.13828L4.1666 15.4033Z" fill="#FF553E"/>
              <path d="M0.77832 22.8655L4.1666 17.5969L7.96717 27.8619L0.77832 22.8655Z" fill="#FF553E"/>
              <path d="M10.1341 23.4401L5.13779 24.9976L15.4028 32.2203L10.1341 23.4401Z" fill="#FF553E"/>
              <path d="M17.5969 28.8317L22.8655 32.2199L24.9976 27.862L17.5969 28.8317Z" fill="#FF553E"/>
              <path d="M23.4401 22.8655L27.8619 24.9976L32.2202 15.4028L23.4401 22.8655Z" fill="#FF553E"/>
              <path d="M28.8317 10.1341L32.2199 5.13779L22.8655 0.779541L28.8317 10.1341Z" fill="#FF553E"/>
              <path d="M15.4028 4.1666L17.5969 7.96717L24.9976 5.13779L15.4028 4.1666Z" fill="#FF553E"/>
              <path d="M52.9609 23.0614V10.7114H55.7859V12.1364C56.5859 10.9864 58.0109 10.3364 59.6359 10.3364C62.7109 10.3364 64.3109 12.2364 64.3109 15.4614V23.0614H61.2609V16.1364C61.2609 14.0864 60.2859 13.1114 58.7109 13.1114C56.8859 13.1114 55.9859 14.3364 55.9859 16.2364V23.0614H52.9609Z" fill="currentColor"/>
              <path d="M70.7344 23.4114C66.7594 23.4114 64.2344 20.8364 64.2344 16.6864C64.2344 12.5364 66.7594 9.98633 70.7344 9.98633C74.7094 9.98633 77.2344 12.5364 77.2344 16.6864C77.2344 20.8364 74.7094 23.4114 70.7344 23.4114ZM70.7344 20.4864C72.9594 20.4864 74.1094 18.9114 74.1094 16.6864C74.1094 14.4614 72.9594 12.9114 70.7344 12.9114C68.5094 12.9114 67.3594 14.4614 67.3594 16.6864C67.3594 18.9114 68.5094 20.4864 70.7344 20.4864Z" fill="currentColor"/>
              <path d="M87.4531 23.0614H84.4031V21.4364C83.5781 22.7114 82.1281 23.4114 80.4781 23.4114C77.9781 23.4114 76.1031 21.8114 76.1031 18.8864V10.7114H79.1531V17.5864C79.1531 19.6364 80.1531 20.6364 81.7281 20.6364C83.5781 20.6364 84.4031 19.4114 84.4031 17.4114V10.7114H87.4531V23.0614Z" fill="currentColor"/>
              <path d="M95.8086 23.4114C92.4086 23.4114 90.1836 21.3114 90.1836 17.6114V10.7114H93.2336V17.0614C93.2336 19.2614 94.3586 20.4864 96.0586 20.4864C96.6586 20.4864 97.2836 20.3614 97.7586 20.1364L98.4086 22.8614C97.7086 23.2364 96.7586 23.4114 95.8086 23.4114Z" fill="currentColor"/>
              <path d="M106.761 23.0614H103.711V10.7114H106.536L106.786 12.3114C107.561 11.0614 109.061 10.3364 110.736 10.3364C113.836 10.3364 115.436 12.2614 115.436 15.4614V23.0614H112.386V16.1864C112.386 14.1114 111.361 13.1114 109.786 13.1114C107.911 13.1114 106.761 14.4114 106.761 16.4114V23.0614Z" fill="currentColor"/>
              <path d="M121.574 23.4114C118.024 23.4114 115.649 20.9114 115.649 16.6864C115.649 12.4614 118.024 9.98633 121.574 9.98633C123.324 9.98633 124.699 10.5614 125.699 11.5614L123.824 13.7114C123.249 13.1614 122.474 12.9114 121.649 12.9114C119.624 12.9114 118.774 14.3864 118.774 16.6864C118.774 18.9864 119.624 20.4864 121.649 20.4864C122.474 20.4864 123.249 20.2114 123.824 19.6614L125.699 21.8114C124.699 22.8114 123.324 23.4114 121.574 23.4114Z" fill="currentColor"/>
              <path d="M135.387 23.0614H132.087L128.212 18.3614V23.0614H125.162V6.26133H128.212V17.0114L131.987 10.7114H135.237L130.837 17.6364L135.387 23.0614Z" fill="currentColor"/>
              <path d="M144.15 23.4114C140.15 23.4114 137.625 20.8364 137.625 16.6864C137.625 12.5364 140.15 9.98633 144.125 9.98633C148.1 9.98633 150.625 12.5364 150.625 16.6864C150.625 20.8364 148.1 23.4114 144.15 23.4114ZM144.15 20.4864C146.375 20.4864 147.525 18.9114 147.525 16.6864C147.525 14.4614 146.375 12.9114 144.15 12.9114C141.925 12.9114 140.775 14.4614 140.775 16.6864C140.775 18.9114 141.925 20.4864 144.15 20.4864Z" fill="currentColor"/>
            </svg>
          </Link>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              data-testid="button-insights"
            >
              <Sparkles className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              data-testid="button-notifications"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              data-testid="button-share"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button 
              variant="default"
              className="gap-2"
              data-testid="button-publish-site"
            >
              Publish Site
            </Button>
            <Avatar data-testid="avatar-user">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Section */}
        <Card className="p-6 mb-8">
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20" data-testid="avatar-profile">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-2xl font-semibold mb-1" data-testid="text-user-name">
                    {user.name}
                  </h1>
                  <p className="text-muted-foreground" data-testid="text-user-role">
                    {user.role}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  data-testid="button-settings"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4" data-testid="container-categories">
                {user.categories.map((category, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-3 py-1"
                    data-testid={`badge-category-${index}`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* My Works Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4" data-testid="text-section-title">
            My works
          </h2>
          
          <Card className="p-12">
            <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2" data-testid="text-empty-state-title">
                Upload your first case study
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-empty-state-description">
                Show off your best work
              </p>
              
              <div className="flex gap-3">
                <Button 
                  variant="default"
                  className="gap-2"
                  data-testid="button-add-case-study"
                >
                  <Plus className="w-4 h-4" />
                  Add case study
                </Button>
                <Button 
                  variant="outline"
                  className="gap-2"
                  data-testid="button-write-using-ai"
                >
                  <Sparkles className="w-4 h-4" />
                  Write using AI
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
