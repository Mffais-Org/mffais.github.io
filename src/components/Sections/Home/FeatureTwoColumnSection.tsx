import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  section: {
    image: React.ReactNode;
    title: string;
    description: string;
    reverse?: boolean;
  };
};

const FeatureTwoColumnSection = ({ section }: Props) => {
  return (
    <div
      className={twMerge(
        "mb-8 flex w-full flex-col-reverse justify-center gap-4 md:items-center xl:mb-16 xl:flex-row xl:gap-12",
        section.reverse ? "xl:flex-row-reverse" : "xl:flex-row",
      )}
    >
      <div className="flex flex-col gap-4 md:min-w-[660px] xl:min-w-[420px] xl:gap-12 xl:pl-10 xl:pr-[56px] xl:pt-12">
        <span className="text-[18px] font-medium leading-6 xl:text-[40px] xl:leading-[44px]">
          {section.title}
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className="text-base xl:text-[25px] xl:leading-[34px]"
        />
      </div>
      <div className="flex w-full items-center justify-center rounded-xl bg-background py-10 md:max-w-[660px] xl:min-h-[420px]">
        {section.image}
      </div>
    </div>
  );
};

export default FeatureTwoColumnSection;
