import { useTranslations } from "next-intl";
import React from "react";
import SmileIcon from "../../Icons/SmileIcon";

const TwoImageSection = () => {
  const t = useTranslations("twoImageSection");
  return (
    <section className="mb-[124px] flex flex-col">
      <div className="3xl: flex justify-between gap-20 px-[15%]">
        <img src="/images/TwoImageSectionLeft.png" />
        <img src="/images/TwoImageSectionRight.png" />
        <div className="flex max-w-[342px] flex-col items-center">
          <div className="py-[62px]">
            <SmileIcon className="w-12" />
          </div>
          <p className="text-[40px] font-bold leading-[48px]">{t("text")}</p>
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
