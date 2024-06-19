import React from "react";
import {
  Description,
  ImageContainer,
  MainCardContainer,
  Title,
  TopSection,
} from "./CardsGuideSection.style";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

export const Card = ({ title, description, imageSrc }: Props) => {
  return (
    <MainCardContainer>
      <TopSection>
        <Title>{title}</Title> <Description>{description}</Description>
      </TopSection>
      <ImageContainer>
        <img src={imageSrc} style={{ width: "100%", height: "100%" }} />
      </ImageContainer>
    </MainCardContainer>
  );
};
