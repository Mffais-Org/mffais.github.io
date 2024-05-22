import React from "react";
import {
  HeroContainer,
  IconWrapper,
  SubTitle,
  Title,
} from "./AppGuideScreen.style";
import { SmileIcon } from "../../icons";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>
        Mffais guide
        <IconWrapper>
          <SmileIcon />
        </IconWrapper>
      </Title>
      <SubTitle>
        To ensure you make the most out of our app, read our expert tips to
        guide you along the way.
      </SubTitle>
    </HeroContainer>
  );
};
