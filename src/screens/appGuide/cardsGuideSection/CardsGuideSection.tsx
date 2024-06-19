import React from "react";
import { Card } from "./Card";
import { Container, MainContainer } from "./CardsGuideSection.style";

export const CardsGuideSection = () => {
  return (
    <MainContainer>
      <Container>
        <Card
          title="Setup your Mffais balance"
          description="Enter your bank balance and add all future incomes and expenses you’re
        aware of."
          imageSrc="/img/descriptionCardImageDesktop1.jpg"
        />
        <Card
          title="Keep your balance up to date"
          description="When you receive an income, mark it as received. When you pay an expense, mark it as spent."
          imageSrc="/img/descriptionCardImageDesktop2.jpg"
        />
      </Container>
      <Container>
        <Card
          title="Clear your transactions"
          description="Clear your transactions and compare your Mffais balance to your bank—to catch hidden costs"
          imageSrc="/img/descriptionCardImageDesktop3.jpg"
        />
        <Card
          title="Money flow"
          description="Check and edit future transactions — up to a year in the future. "
          imageSrc="/img/descriptionCardImageDesktop4.jpg"
        />
        <Card
          title="Video tutorial"
          description="Watch our video tutorial for a quick and easy walkthrough."
          imageSrc="/img/descriptionCardImageDesktop4.jpg"
        />
      </Container>
    </MainContainer>
  );
};
