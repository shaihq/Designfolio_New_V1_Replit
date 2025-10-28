import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-2" data-testid="logo-icon">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 sm:h-8 w-auto">
              <path d="M15.4028 0.779664C15.6377 -0.259891 17.1189 -0.259886 17.3537 0.779669L18.9775 7.96851C19.1297 8.64225 19.9029 8.9625 20.4869 8.59371L26.7184 4.65866C27.6195 4.08962 28.6669 5.137 28.0979 6.03812L24.1628 12.2696C23.794 12.8537 24.1143 13.6268 24.788 13.779L31.9769 15.4028C33.0164 15.6377 33.0164 17.1189 31.9769 17.3537L24.788 18.9775C24.1143 19.1297 23.794 19.9029 24.1628 20.4869L28.0979 26.7184C28.6669 27.6195 27.6195 28.6669 26.7184 28.0979L20.4869 24.1628C19.9029 23.794 19.1297 24.1143 18.9775 24.788L17.3537 31.9769C17.1189 33.0164 15.6377 33.0164 15.4028 31.9769L13.779 24.788C13.6268 24.1143 12.8537 23.794 12.2696 24.1628L6.03812 28.0979C5.137 28.6669 4.08963 27.6195 4.65866 26.7184L8.59371 20.4869C8.9625 19.9029 8.64225 19.1297 7.96851 18.9775L0.779664 17.3537C-0.259891 17.1189 -0.259886 15.6377 0.779669 15.4028L7.96851 13.779C8.64225 13.6268 8.9625 12.8537 8.59371 12.2696L4.65866 6.03812C4.08962 5.137 5.137 4.08963 6.03812 4.65866L12.2696 8.59371C12.8537 8.9625 13.6268 8.64225 13.779 7.96851L15.4028 0.779664Z" fill="#FF553E"/>
            </svg>
            <span className="text-lg sm:text-xl font-semibold text-foreground">Designfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <a href="#howitworks" className="text-sm text-foreground hover-elevate px-4 py-2 rounded-md font-medium" data-testid="link-howitworks">
              How it works
            </a>
            <a href="#features" className="text-sm text-foreground hover-elevate px-4 py-2 rounded-md font-medium" data-testid="link-features">
              Features
            </a>
            <a href="#pricing" className="text-sm text-foreground hover-elevate px-4 py-2 rounded-md font-medium" data-testid="link-pricing">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost"
              size="default"
              className="text-sm font-medium"
              data-testid="button-login"
            >
              Log in
            </Button>
            <Button 
              size="default" 
              className="bg-foreground text-background border border-foreground rounded-full px-5 sm:px-6 text-sm font-semibold no-default-hover-elevate no-default-active-elevate hover:bg-foreground/90 transition-colors" 
              data-testid="button-getstarted"
            >
              It's Free → Try now!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
