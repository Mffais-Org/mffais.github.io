"use client";
import Navbar from "@/components/Layout/Navbar";
import CTASection from "@/components/Sections/Home/CTASection";
import HomeFooter from "@/components/Sections/Home/HomeFooter";
import Divider from "@/components/UI/Divider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LegalLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="mt-[70px] xl:mt-[108px]">
        {children}
        <Divider className="mx-6 xl:mx-16" />
        <CTASection />
        <Divider className="mx-6 xl:mx-16" />
      </div>
      <HomeFooter />
    </div>
  );
};

export default LegalLayout;
