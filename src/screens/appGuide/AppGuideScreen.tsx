import React from "react";
import { MainContainer, MainWrapper } from "./AppGuideScreen.style";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";

export const AppGuideScreen = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <HeroSection />
        <FeaturesSection />
      </MainWrapper>
    </MainContainer>
  );
};
