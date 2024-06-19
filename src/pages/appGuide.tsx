import React, { useRef } from "react";
import { Navbar } from "../components";
import { AppGuideScreen } from "../screens/appGuide/AppGuideScreen";
import LanguageSwitcher from "../components/language-switcher/LanguageSwitcher";

export const AppGuide = () => {
  const featuresRef = useRef();
  const moneyFlowRef = useRef();

  return (
    <>
      <Navbar featuresRef={featuresRef} moneyFlowRef={moneyFlowRef} />
      <LanguageSwitcher />

      <AppGuideScreen />
    </>
  );
};
