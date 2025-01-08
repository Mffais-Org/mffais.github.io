import SmileIcon from "@/components/Icons/SmileIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AppGuideHero = () => {
  const t = useTranslations("appGuideHero");
  return (
    <section className="flex flex-col gap-10 items-center px-[15%] py-20">
      <div className="flex items-center gap-4">
        <h1 className="text-[72px] font-bold leading-[87px]">{t("title")}</h1>
        <SmileIcon />
      </div>
      <span className="text-[40px] leading-[60px] text-center font-medium max-w-[908px] 3xl:max-w-full">{t("subtitle")}</span>
    </section>
  );
};

export default AppGuideHero;
