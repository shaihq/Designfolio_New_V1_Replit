import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import EmailMockup from "@/components/EmailMockup";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <EmailMockup />
      <FeaturesSection />
    </div>
  );
}
