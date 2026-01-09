import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmailMockup from "@/components/EmailMockup";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollingBanner from "@/components/ScrollingBanner";
import { CourseCard } from "@/components/CourseCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <HeroSection />
        <EmailMockup />
        <TrustedBySection />
        <FeaturesSection />
        <FeaturesShowcase />
        <Footer />
        <FooterBottom />
        <ScrollingBanner />
        <CourseCard />
      </div>
    </div>
  );
}
