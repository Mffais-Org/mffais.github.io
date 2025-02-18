import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

const Badge: React.FC<Props> = ({ text, className }) => {
  return (
    <span
      className={twMerge(
        "w-fit rounded-full bg-background-blue px-2 py-[6px] text-[16px] font-semibold leading-none text-font-blue xl:text-[18px]",
        className,
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
