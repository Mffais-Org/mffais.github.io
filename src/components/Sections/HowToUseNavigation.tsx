import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import { twMerge } from "tailwind-merge";

type Props = {
  scrollLeft: () => void;
  scrollRight: () => void;
  isActiveLeft: boolean;
  isActiveRight: boolean;
};

const HowToUseNavigation = ({ scrollLeft, scrollRight, isActiveLeft, isActiveRight }: Props) => {
  return (
    <div className="flex items-center gap-[10px] 3xl:hidden">
      <button onClick={scrollLeft} className={twMerge("p-[14px] border-2 border-black/10 rounded-xl", isActiveLeft ? "bg-primaryYellow border-[0.5px]" : "")}>
        <ArrowIcon />
      </button>
      <button onClick={scrollRight} className={twMerge("p-[14px] border-2 border-black/10 rounded-xl rotate-180", isActiveRight ? "bg-primaryYellow ring-0" : "")}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default HowToUseNavigation;
