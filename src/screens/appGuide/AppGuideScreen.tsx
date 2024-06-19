import React from "react";
import { MainContainer, MainWrapper } from "./AppGuideScreen.style";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { CardsGuideSection } from "./cardsGuideSection/CardsGuideSection";

export const AppGuideScreen = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <HeroSection />
        <CardsGuideSection />
        <FeaturesSection />
      </MainWrapper>
    </MainContainer>
  );
};
