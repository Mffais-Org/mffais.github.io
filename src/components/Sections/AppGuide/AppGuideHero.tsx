import SmileIcon from "@/components/Icons/SmileIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AppGuideHero = () => {
  const t = useTranslations("appGuideHero");
  return (
    <section className="flex flex-col items-center gap-10 px-[15%] py-20">
      <div className="flex items-center gap-4">
        <h1 className="text-[72px] font-bold leading-[87px]">{t("title")}</h1>
        <SmileIcon />
      </div>
      <span className="max-w-[908px] text-center text-[40px] font-medium leading-[60px] 3xl:max-w-full">
        {t("subtitle")}
      </span>
    </section>
  );
};

export default AppGuideHero;
