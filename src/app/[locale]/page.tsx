"use client";
import Navbar from "@/components/Layout/Navbar";
import BannerSection from "@/components/Sections/BannerSection";
import CenterImageSection from "@/components/Sections/CenterImageSection";
import CTASection from "@/components/Sections/CTASection";
import FeatureSection from "@/components/Sections/FeatureSection";
import HeroSection from "@/components/Sections/HeroSection";
import HomeFooter from "@/components/Sections/HomeFooter";
import HowToUseSection from "@/components/Sections/HowToUseSection";
import MoneyFlowSection from "@/components/Sections/MoneyFlowSection";
import TwoImageSection from "@/components/Sections/TwoImageSection";
import useIsInView from "@/hooks/useInView";
import { useRef } from "react";

export default function Home() {
  const featureRef = useRef<HTMLElement>(null);
  const moneyFlowRef = useRef<HTMLElement>(null);

  const scrollToFeature = () => {
    if (featureRef.current) {
      const offset = 100;
      const elementPosition = featureRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const scrollToMoneyFlow = () => {
    if (moneyFlowRef.current) {
      const offset = 100;
      const elementPosition = moneyFlowRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const isFeatureInView = useIsInView(featureRef);
  const isMoneyFlowInView = useIsInView(moneyFlowRef);

  return (
    <>
      <Navbar isFeatureInView={isFeatureInView} isMoneyFlowInView={isMoneyFlowInView} scrollToFeature={scrollToFeature} scrollToMoneyFlow={scrollToMoneyFlow} />
      <HeroSection />
      <HowToUseSection />
      <FeatureSection ref={featureRef} />
      <CenterImageSection />
      <MoneyFlowSection ref={moneyFlowRef} />
      <TwoImageSection />
      <BannerSection />
      <CTASection />
      <HomeFooter />
    </>
  );
}
