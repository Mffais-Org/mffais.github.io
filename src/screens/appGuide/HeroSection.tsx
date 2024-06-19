import React from "react";
import {
  HeroContainer,
  IconWrapper,
  SubTitle,
  Title,
} from "./AppGuideScreen.style";
import { SmileIcon } from "../../icons";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <HeroContainer>
      <Title>
        Mffais {t("guide")}
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
