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
    <div className={twMerge("flex justify-center w-full min-h-[420px] max-w-[1128px] mb-16 gap-[48px]", section.reverse ? "flex-row-reverse" : "flex-row")}>
      <div className="w-[40%] max-w-[420px]  py-12 pl-4  pr-[56px] flex flex-col gap-12">
        <span className="text-[40px] leading-[44px] font-medium">{section.title}</span>
        <p dangerouslySetInnerHTML={{ __html: section.description }} className="text-[25px] leading-[34px]" />
      </div>
      <div className="w-[60%] bg-background rounded-xl flex justify-center items-center">
        <div>{section.image}</div>
      </div>
    </div>
  );
};

export default FeatureTwoColumnSection;
