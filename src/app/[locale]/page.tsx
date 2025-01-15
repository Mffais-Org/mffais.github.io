"use client";

import Navbar from "@/components/Layout/Navbar";
import BannerSection from "@/components/Sections/Home/BannerSection";
import CenterImageSection from "@/components/Sections/Home/CenterImageSection";
import CTASection from "@/components/Sections/Home/CTASection";
import FeatureSection from "@/components/Sections/Home/FeatureSection";
import HeroSection from "@/components/Sections/Home/HeroSection";
import HomeFooter from "@/components/Sections/Home/HomeFooter";
import HowToUseSection from "@/components/Sections/Home/HowToUseSection";
import MoneyFlowSection from "@/components/Sections/Home/MoneyFlowSection";
import TwoImageSection from "@/components/Sections/Home/TwoImageSection";
import useIsInView from "@/hooks/useInView";
import { useRouter } from "@/i18n/routing";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const featureRef = useRef<HTMLElement>(null);
  const moneyFlowRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [initialLoad, setInitialLoad] = useState(true);

  const scrollToFeature = (updateURL = true) => {
    if (featureRef.current) {
      const offset = 150;
      const elementPosition =
        featureRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    if (updateURL) {
      router.replace("/#feature", { scroll: false });
    }
  };

  const scrollToMoneyFlow = (updateURL = true) => {
    if (moneyFlowRef.current) {
      const offset = 100;
      const elementPosition =
        moneyFlowRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      if (updateURL) {
        router.replace("/#moneyFlow", { scroll: false });
      }
    }
  };

  const isFeatureInView = useIsInView(featureRef);
  const isMoneyFlowInView = useIsInView(moneyFlowRef);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === "feature") {
      scrollToFeature(false);
    } else if (hash === "moneyFlow") {
      scrollToMoneyFlow(false);
    }
    setInitialLoad(false);
  }, []);

  return (
    <>
      <Navbar
        isFeatureInView={isFeatureInView}
        isMoneyFlowInView={isMoneyFlowInView}
        scrollToFeature={() => scrollToFeature(!initialLoad)}
        scrollToMoneyFlow={() => scrollToMoneyFlow(!initialLoad)}
      />
      <HeroSection />
      <HowToUseSection />
      <FeatureSection ref={featureRef} />
      <CenterImageSection />
      <MoneyFlowSection ref={moneyFlowRef} />
      <TwoImageSection />
      <BannerSection />
      <CTASection />
      <HomeFooter
        scrollToFeature={() => scrollToFeature(!initialLoad)}
        scrollToMoneyFlow={() => scrollToMoneyFlow(!initialLoad)}
      />
    </>
  );
}
