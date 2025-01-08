import React from "react";

type Props = {
  card: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
};

const HowToUseCard = ({ card }: Props) => {
  return (
    <div className="shadow-card p-6 flex text-font flex-col min-w-[371px] max-w-[371px]  gap-6 rounded-xl">
      <>{card.icon}</>
      <span className="text-[26px] leading-[28px] font-medium">{card.title}</span>
      <span className=" text-[20px] leading-[34px]">{card.description}</span>
    </div>
  );
};

export default HowToUseCard;
