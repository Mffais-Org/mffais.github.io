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
    <div className={twMerge("flex justify-center w-full min-h-[420px] max-w-[1130px] mb-16 gap-12", section.reverse ? "flex-row-reverse" : "flex-row")}>
      <div className="w-[40%] max-w-[420px]  pt-12 pl-10  pr-[56px] flex flex-col gap-12">
        <span className="text-[40px] leading-[44px] font-medium">{section.title}</span>
        <p dangerouslySetInnerHTML={{ __html: section.description }} className="text-[25px] leading-[34px]" />
      </div>
      <div className="max-w-[660px] w-full bg-background rounded-xl flex justify-center items-center">
        <div className="">{section.image}</div>
      </div>
    </div>
  );
};

export default FeatureTwoColumnSection;
