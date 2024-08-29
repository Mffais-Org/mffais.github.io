import React from "react";
import { Card } from "./Card";
import { Container, MainContainer } from "./CardsGuideSection.style";
import { useTranslation } from "react-i18next";

export const CardsGuideSection = () => {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <Container>
        <Card
          title={t("appGuide.card1Title")}
          description={t("appGuide.card1Desc")}
          imageSrc="/img/descriptionCardImageDesktop1.jpg"
        />
        <Card
          title={t("appGuide.card2Title")}
          description={t("appGuide.card2Desc")}
          imageSrc="/img/descriptionCardImageDesktop2.jpg"
        />
      </Container>
      <Container>
        <Card
          title={t("appGuide.card3Title")}
          description={t("appGuide.card3Desc")}
          imageSrc="/img/descriptionCardImageDesktop3.jpg"
        />
        <Card
          title={t("appGuide.card4Title")}
          description={t("appGuide.card4Desc")}
          imageSrc="/img/descriptionCardImageDesktop4.jpg"
        />
        <Card
          title={t("appGuide.card5Title")}
          description={t("appGuide.card5Desc")}
          imageSrc="/img/descriptionCardImageDesktop5.jpg"
        />
      </Container>
    </MainContainer>
  );
};
