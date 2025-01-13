import { useTranslations } from "next-intl";
import React from "react";
import StarIcon from "../../Icons/StarIcon";

const CenterImageSection = () => {
  const t = useTranslations("centerImageSection");

  return (
    <section className="mx-auto my-10 flex flex-col items-center gap-10 px-6 text-[24px] font-bold leading-7 md:flex-row md:justify-around xl:my-0 xl:mb-[124px] xl:max-w-[1130px] xl:justify-between xl:px-0 xl:text-[40px] xl:leading-[48px]">
      <div className="flex w-[280px] flex-col items-center justify-center tracking-tighter xl:mt-[102px] xl:justify-start xl:gap-[136px]">
        <StarIcon className="hidden w-8 xl:block" />
        <span>{t("leftText")}</span>
      </div>
      <div className="w-full max-w-[200px] xl:max-w-[342px]">
        <img src="/images/VerticalMobile.png" className="" />
      </div>
      <div className="flex w-[280px] flex-col items-center justify-center tracking-tighter xl:mt-[102px] xl:justify-start xl:gap-[136px]">
        <StarIcon className="hidden xl:block" />
        <span>{t("rightText")}</span>
      </div>
    </section>
  );
};

export default CenterImageSection;
