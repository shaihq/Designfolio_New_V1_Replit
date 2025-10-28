import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmailMockup from "@/components/EmailMockup";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollingBanner from "@/components/ScrollingBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <EmailMockup />
      <TrustedBySection />
      <FeaturesSection />
      <Footer />
      <FooterBottom />
      <ScrollingBanner />
    </div>
  );
}
