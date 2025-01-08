import { useTranslations } from "next-intl";
import React from "react";
import SmileIcon from "../../Icons/SmileIcon";

const TwoImageSection = () => {
  const t = useTranslations("twoImageSection");
  return (
    <section className="flex flex-col mb-[124px] ">
      <div className="flex px-[15%]  gap-20 justify-between 3xl:">
        <img src="/images/TwoImageSectionLeft.png" />
        <img src="/images/TwoImageSectionRight.png" />
        <div className="flex flex-col items-center max-w-[342px]">
          <div className="py-[62px]">
            <SmileIcon className="w-12" />
          </div>
          <p className="text-[40px] leading-[48px] font-bold">{t("text")}</p>
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;
