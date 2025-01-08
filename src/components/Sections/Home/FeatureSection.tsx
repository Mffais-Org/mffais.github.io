import { useTranslations } from "next-intl";
import React from "react";
import StarIcon from "../../Icons/StarIcon";
import SetupImage from "../../images/SetupImage";
import FeatureTwoColumnSection from "./FeatureTwoColumnSection";
import FocusOnFutureImage from "../../images/FocusOnFutureImage";
import ClearTransactionsImage from "../../images/ClearTransactionsImage";

type Props = {
  ref: React.RefObject<HTMLElement | null>;
};

const FeatureSection = ({ ref }: Props) => {
  const t = useTranslations("featureSection");
  const c = useTranslations("featureSection.twoColumnSections");

  const twoColumnSections = [
    {
      image: <SetupImage />,
      title: c("section1.title"),
      description: c("section1.description"),
    },
    {
      image: <FocusOnFutureImage />,
      title: c("section2.title"),
      description: c("section2.description"),
      reverse: true,
    },
    {
      image: <ClearTransactionsImage />,
      title: c("section3.title"),
      description: c("section3.description"),
    },
  ];
  return (
    <section ref={ref} className="flex flex-col items-center px-[15%]">
      <h2 className="text-[56px] font-bold leading-[55px] mb-[60px]">{t("title")}</h2>
      <StarIcon />
      <h3 className="mt-9 text-[40px] leading-[48px] text-center font-medium px-20 pb-[124px]">{t("subtitle")}</h3>
      {twoColumnSections.map((section, index) => (
        <FeatureTwoColumnSection key={index} section={section} />
      ))}
      <div className="w-full h-[1px] bg-black/10 mb-[124px] mt-[60px]"></div>
    </section>
  );
};

export default FeatureSection;
