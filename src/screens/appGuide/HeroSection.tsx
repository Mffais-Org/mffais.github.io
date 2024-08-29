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
        {t("appGuide.title")}
        <IconWrapper>
          <SmileIcon />
        </IconWrapper>
      </Title>
      <SubTitle>{t("appGuide.desc")}</SubTitle>
    </HeroContainer>
  );
};
