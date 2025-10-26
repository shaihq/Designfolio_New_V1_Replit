import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmailMockup from "@/components/EmailMockup";
import FeaturesSection from "@/components/FeaturesSection";
import GridOverlay from "@/components/GridOverlay";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <GridOverlay />
      <Navbar />
      <HeroSection />
      <EmailMockup />
      <FeaturesSection />
    </div>
  );
}
