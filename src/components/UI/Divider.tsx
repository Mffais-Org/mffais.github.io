import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return (
    <div className={twMerge("h-[1px] w-full bg-black/10", className)}></div>
  );
};

export default Divider;
