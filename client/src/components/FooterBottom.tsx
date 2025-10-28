import { Link } from "wouter";

export default function FooterBottom() {
  return (
    <div className="w-full border-t">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Designfolio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-colors" 
              data-testid="link-privacy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-colors" 
              data-testid="link-terms"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/refund" 
              className="text-sm text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-colors" 
              data-testid="link-refund"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
