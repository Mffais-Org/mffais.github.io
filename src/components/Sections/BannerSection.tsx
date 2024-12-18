import { useTranslations } from "next-intl";
import React from "react";

const BannerSection = () => {
  const t = useTranslations("bannerSection");
  return (
    <div className=" px-16 flex flex-col gap-20">
      <div className="w-full h-[1px] bg-black/10 "></div>
      <div className="bg-background rounded-3xl flex items-center 3xl:justify-center gap-[100px] pl-[92px] pr-[67px] py-[84px]">
        <img src="/images/Tracking.png" />
        <p className="text-[40px] leading-[48px] font-bold">{t("text")}</p>
      </div>
      <div className="w-full h-[1px] bg-black/10 "></div>
    </div>
  );
};

export default BannerSection;
