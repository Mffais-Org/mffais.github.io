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
    <div className="shadow-card flex min-w-[371px] max-w-[371px] flex-col gap-6 rounded-xl p-6 text-font">
      <>{card.icon}</>
      <span className="text-[26px] font-medium leading-[28px]">
        {card.title}
      </span>
      <span className="text-[20px] leading-[34px]">{card.description}</span>
    </div>
  );
};

export default HowToUseCard;
