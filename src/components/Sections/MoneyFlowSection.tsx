import { useTranslations } from "next-intl";
import React from "react";

const MoneyFlowSection = () => {
  const t = useTranslations("moneyFlowSection");
  return (
    <section className="flex items-center flex-col mb-[124px] px-[15%] bg-background pt-[124px]">
      <h2 className="text-[56px] leading-[55px] font-bold mb-10">{t("title")}</h2>
      <p className="text-center text-[26px] leading-[44px] px-[18%] tracking-[0.26px] mb-[94px] ">{t("description")}</p>
      <div className="flex relative min-h-[386px] mb-[115px]  justify-center items-center max-w-[792px] w-full">
        <div className="w-[386px] h-[386px] rounded-full border-8 border-primaryYellow absolute"></div>
        <img src="/images/MoneyFlowLeft.png" className="z-10" />
        <img src="/images/MoneyFlowRight.png" className="z-10" />
      </div>
    </section>
  );
};

export default MoneyFlowSection;
