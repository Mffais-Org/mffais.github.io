import SmileIcon from "@/components/Icons/SmileIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AppGuideHero = () => {
  const t = useTranslations("appGuideHero");
  return (
    <section className="mx-auto flex max-w-[1312px] flex-col items-center gap-10 px-48 py-20">
      <div className="flex items-center gap-4">
        <h1 className="text-[72px] font-bold leading-[87px]">{t("title")}</h1>
        <SmileIcon />
      </div>
      <span className="text-center text-[40px] font-medium leading-[60px]">
        {t("subtitle")}
      </span>
    </section>
  );
};

export default AppGuideHero;
