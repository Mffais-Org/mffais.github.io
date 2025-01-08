import React from "react";

type Props = {
  text: string;
};

const Badge = ({ text }: Props) => {
  return <span className="bg-background-blue px-2 py-[6px] text-[18px] leading-none font-semibold text-font-blue rounded-full">{text}</span>;
};

export default Badge;
