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
        "mb-16 flex min-h-[420px] w-full justify-center gap-12",
        section.reverse ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div className="flex min-w-[420px] flex-col gap-12 pl-10 pr-[56px] pt-12">
        <span className="text-[40px] font-medium leading-[44px]">
          {section.title}
        </span>
        <p
          dangerouslySetInnerHTML={{ __html: section.description }}
          className="text-[25px] leading-[34px]"
        />
      </div>
      <div className="flex w-full max-w-[660px] items-center justify-center rounded-xl bg-background">
        <div className="">{section.image}</div>
      </div>
    </div>
  );
};

export default FeatureTwoColumnSection;
