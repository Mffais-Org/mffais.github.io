import React, { useRef } from "react";
import { Navbar } from "../components";
import { AppGuideScreen } from "../screens/appGuide/AppGuideScreen";

export const AppGuide = () => {
  const featuresRef = useRef();
  const moneyFlowRef = useRef();

  return (
    <>
      <Navbar featuresRef={featuresRef} moneyFlowRef={moneyFlowRef} />
      <AppGuideScreen />
    </>
  );
};
