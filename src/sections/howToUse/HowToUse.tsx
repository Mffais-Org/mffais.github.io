import React from "react";
import {
  MainContainer,
  CardsContainer,
  EmptyCard,
  ArrowsContainer,
  SingleArrow,
} from "./HowToUse.style";
import { Card } from "./Card";
import { ArrowLeft, ArrowRight } from "../../icons";

export const HowToUse = () => {
  return (
    <MainContainer>
      <h1>How to use Mffais</h1>
      <ArrowsContainer>
        <SingleArrow>
          <ArrowLeft />
        </SingleArrow>
        <SingleArrow>
          <ArrowRight />
        </SingleArrow>
      </ArrowsContainer>

      <CardsContainer>
        <EmptyCard></EmptyCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </MainContainer>
  );
};
