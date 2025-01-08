"use client";
import Navbar from "@/components/Layout/Navbar";
import AccountSetup from "@/components/Sections/AppGuide/AccountSetup";
import AppGuideHero from "@/components/Sections/AppGuide/AppGuideHero";
import ForCollageStudents from "@/components/Sections/AppGuide/ForCollageStudents";
import React from "react";

const AppGuidePage = () => {
  return (
    <div>
      <Navbar appGuide />
      <AppGuideHero />
      <AccountSetup />
      <ForCollageStudents />
    </div>
  );
};

export default AppGuidePage;
