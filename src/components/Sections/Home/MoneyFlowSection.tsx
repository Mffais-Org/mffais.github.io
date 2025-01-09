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
      className="mb-[124px] flex flex-col items-center bg-background px-[15%] pt-[124px]"
    >
      <h2 className="mb-10 text-[56px] font-bold leading-[55px]">
        {t("title")}
      </h2>
      <p className="mb-[94px] px-[18%] text-center text-[26px] leading-[44px] tracking-[0.26px]">
        {t("description")}
      </p>
      <div className="relative mb-[115px] flex min-h-[386px] w-full max-w-[792px] items-center justify-center">
        <div className="absolute h-[386px] w-[386px] rounded-full border-8 border-primaryYellow"></div>
        <img src="/images/MoneyFlowLeft.png" className="z-10" />
        <img src="/images/MoneyFlowRight.png" className="z-10" />
      </div>
    </section>
  );
};

export default MoneyFlowSection;
