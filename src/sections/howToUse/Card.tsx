import React from "react";
import { SingleCard, CardDesc, CardTitle } from "./HowToUse.style";
import { CardIcon1 } from "../../icons";

export const Card = () => {
  return (
    <SingleCard>
      <CardIcon1 />
      <CardTitle>Download the Mffais app from the store</CardTitle>
      <CardDesc>
        Stay updated with the latest market movements and investment strategies
        at your fingertips.
      </CardDesc>
    </SingleCard>
  );
};
