"use client";
import Navbar from "@/components/Layout/Navbar";
import AccountSetup from "@/components/Sections/AppGuide/AccountSetup";
import AppGuideHero from "@/components/Sections/AppGuide/AppGuideHero";
import ForCollageStudents from "@/components/Sections/AppGuide/ForCollageStudents";
import ForMultipleJob from "@/components/Sections/AppGuide/ForMultipleJob";
import BannerSection from "@/components/Sections/Home/BannerSection";
import React from "react";

const AppGuidePage = () => {
  return (
    <div className="">
      <Navbar appGuide />
      <AppGuideHero />
      <AccountSetup />
      <ForCollageStudents />
      <ForMultipleJob />
      <BannerSection variant="appGuide" />
    </div>
  );
};

export default AppGuidePage;
