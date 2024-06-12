import React from "react";
import {
  Description,
  MainCardContainer,
  Title,
} from "./CardsGuideSection.style";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

export const Card = ({ title, description, imageSrc }: Props) => {
  return (
    <MainCardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <img src={imageSrc} style={{ width: "100%", height: "100%" }} />
    </MainCardContainer>
  );
};
