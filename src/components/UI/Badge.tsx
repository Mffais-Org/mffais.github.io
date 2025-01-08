import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

const Badge: React.FC<Props> = ({ text, className }) => {
  return <span className={twMerge("w-fit bg-background-blue px-2 py-[6px] text-[18px] leading-none font-semibold text-font-blue rounded-full", className)}>{text}</span>;
};

export default Badge;
