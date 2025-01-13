import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { twMerge } from "tailwind-merge";

type Props = {
  scrollLeft: () => void;
  scrollRight: () => void;
  isActiveLeft: boolean;
  isActiveRight: boolean | null;
};

const HowToUseNavigation = ({
  scrollLeft,
  scrollRight,
  isActiveLeft,
  isActiveRight,
}: Props) => {
  return (
    <div className="flex items-center gap-[10px] 2xl:hidden">
      <button
        onClick={scrollLeft}
        className={twMerge(
          "rounded-xl border-2 border-black/10 p-[14px]",
          isActiveLeft ? "border-[0.5px] bg-primaryYellow" : "",
        )}
      >
        <ArrowIcon />
      </button>
      <button
        onClick={scrollRight}
        className={twMerge(
          "rotate-180 rounded-xl border-2 border-black/10 p-[14px]",
          isActiveRight ? "bg-primaryYellow ring-0" : "",
        )}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default HowToUseNavigation;
