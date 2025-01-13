import SmileIcon from "@/components/Icons/SmileIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AppGuideHero = () => {
  const t = useTranslations("appGuideHero");
  return (
    <section className="flex flex-col gap-4 px-6 py-10 md:items-center xl:mx-auto xl:max-w-[1312px] xl:gap-10 xl:px-48 xl:py-20">
      <div className="flex items-center gap-4">
        <h1 className="whitespace-nowrap text-[44px] font-bold leading-[52px] xl:text-[72px] xl:leading-[87px]">
          {t("title")}
        </h1>
        <SmileIcon className="w-10 xl:w-full" />
      </div>
      <span className="text-base xl:text-center xl:text-[40px] xl:font-medium xl:leading-[60px]">
        {t("subtitle")}
      </span>
    </section>
  );
};

export default AppGuideHero;
