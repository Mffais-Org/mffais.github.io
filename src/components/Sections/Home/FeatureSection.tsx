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
    <section
      ref={ref}
      className="mx-auto flex flex-col px-6 md:items-center xl:max-w-[1130px] xl:px-0"
    >
      <h2 className="mb-4 text-[24px] font-bold leading-7 xl:mb-[60px] xl:text-[56px] xl:leading-[55px]">
        {t("title")}
      </h2>
      <StarIcon className="w-10 self-center xl:w-full" />
      <h3 className="my-10 text-[18px] font-medium leading-6 xl:px-20 xl:pb-[124px] xl:text-center xl:text-[40px] xl:leading-[48px]">
        {t("subtitle")}
      </h3>
      {twoColumnSections.map((section, index) => (
        <FeatureTwoColumnSection key={index} section={section} />
      ))}
      <div className="h-[1px] w-full bg-black/10 xl:mb-[124px] xl:mt-[60px]"></div>
    </section>
  );
};

export default FeatureSection;
