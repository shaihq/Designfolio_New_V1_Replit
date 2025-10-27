import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmailMockup from "@/components/EmailMockup";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <EmailMockup />
      <TrustedBySection />
      <FeaturesSection />
    </div>
  );
}
