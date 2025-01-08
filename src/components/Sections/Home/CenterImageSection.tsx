import { useTranslations } from "next-intl";
import React from "react";
import StarIcon from "../../Icons/StarIcon";

const CenterImageSection = () => {
  const t = useTranslations("centerImageSection");

  return (
    <section className="flex justify-between gap-[114px] mb-[124px] px-[15%]">
      <div className="flex w-full items-center  flex-col gap-[136px] mt-[102px]">
        <StarIcon className="w-8" />
        <span className="text-[40px] leading-[48px] font-bold">{t("leftText")}</span>
      </div>
      <div className="min-w-[342px]">
        <img src="/images/VerticalMobile.png" />
      </div>
      <div className="flex w-full items-center flex-col gap-[136px] mt-[102px]">
        <StarIcon />
        <span className="text-[40px] leading-[48px] font-bold">{t("rightText")}</span>
      </div>
    </section>
  );
};

export default CenterImageSection;
