import BannerSection from "@/components/Sections/BannerSection";
import CenterImageSection from "@/components/Sections/CenterImageSection";
import CTASection from "@/components/Sections/CTASection";
import FeatureSection from "@/components/Sections/FeatureSection";
import HeroSection from "@/components/Sections/HeroSection";
import HomeFooter from "@/components/Sections/HomeFooter";
import HowToUseSection from "@/components/Sections/HowToUseSection";
import MoneyFlowSection from "@/components/Sections/MoneyFlowSection";
import TwoImageSection from "@/components/Sections/TwoImageSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowToUseSection />
      <FeatureSection />
      <CenterImageSection />
      <MoneyFlowSection />
      <TwoImageSection />
      <BannerSection />
      <CTASection />
      <HomeFooter />
    </>
  );
}
