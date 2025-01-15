import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  ref: React.RefObject<HTMLElement | null>;
};

const MoneyFlowSection = ({ ref }: Props) => {
  const t = useTranslations("moneyFlowSection");
  return (
    <section
      ref={ref}
      className="mb-10 bg-background px-6 pt-10 xl:mb-[124px] xl:px-0 xl:pt-[124px]"
    >
      <div className="mx-auto flex flex-col xl:max-w-[1130px] xl:items-center">
        <h2 className="mb-10 text-left text-[24px] font-bold leading-7 md:text-center xl:text-[56px] xl:leading-[55px]">
          {t("title")}
        </h2>
        <p className="text-left text-[18px] leading-7 tracking-[0.26px] md:text-center xl:mb-[94px] xl:px-36 xl:text-[26px] xl:leading-[44px]">
          {t("description")}
        </p>
        <div className="relative flex w-full flex-col items-center justify-center xl:mb-[115px] xl:min-h-[386px] xl:max-w-[792px] xl:flex-row">
          <div className="absolute h-[300px] w-[300px] rounded-full border-8 border-primaryYellow xl:h-[386px] xl:w-[386px]"></div>
          <img
            src="/images/MoneyFlowLeft.png"
            className="z-10 max-w-[70%] xl:max-w-full"
            alt="Money flow"
          />
          <img
            src="/images/MoneyFlowRight.png"
            className="z-10 max-w-[70%] xl:max-w-full"
            alt="Money flow"
          />
        </div>
      </div>
    </section>
  );
};

export default MoneyFlowSection;
