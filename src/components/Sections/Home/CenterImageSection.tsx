import { useTranslations } from "next-intl";
import React from "react";
import StarIcon from "../../Icons/StarIcon";

const CenterImageSection = () => {
  const t = useTranslations("centerImageSection");

  return (
    <section className="mx-auto mb-[124px] flex justify-between xl:max-w-[1130px]">
      <div className="mt-[102px] flex w-[280px] flex-col items-center gap-[136px] tracking-tighter">
        <StarIcon className="w-8" />
        <span className="text-[40px] font-bold leading-[48px]">
          {t("leftText")}
        </span>
      </div>
      <div className="w-full max-w-[342px]">
        <img src="/images/VerticalMobile.png" />
      </div>
      <div className="mt-[102px] flex w-[280px] flex-col items-center gap-[136px] tracking-tighter">
        <StarIcon />
        <span className="text-[40px] font-bold leading-[48px]">
          {t("rightText")}
        </span>
      </div>
    </section>
  );
};

export default CenterImageSection;
