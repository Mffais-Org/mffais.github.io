"use client";
import Navbar from "@/components/Layout/Navbar";
import AccountSetup from "@/components/Sections/AppGuide/AccountSetup";
import AppGuideHero from "@/components/Sections/AppGuide/AppGuideHero";
import ForCollageStudents from "@/components/Sections/AppGuide/ForCollageStudents";
import ForMultipleJob from "@/components/Sections/AppGuide/ForMultipleJob";
import BannerSection from "@/components/Sections/Home/BannerSection";
import HomeFooter from "@/components/Sections/Home/HomeFooter";
import React from "react";

const AppGuidePage = () => {
  return (
    <>
      <Navbar appGuide />
      <AppGuideHero />
      <AccountSetup />
      <ForCollageStudents />
      <ForMultipleJob />
      <BannerSection variant="appGuide" />
      <HomeFooter />
    </>
  );
};

export default AppGuidePage;
