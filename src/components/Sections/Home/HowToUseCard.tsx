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
    <div className="shadow-card flex min-w-[80vw] flex-col gap-6 rounded-xl p-6 text-font md:min-w-[371px] md:max-w-[371px]">
      <>{card.icon}</>
      <span className="text-[18px] font-medium leading-[22px] xl:text-[26px] xl:leading-[28px]">
        {card.title}
      </span>
      <span className="text-base xl:text-[20px] xl:leading-[34px]">
        {card.description}
      </span>
    </div>
  );
};

export default HowToUseCard;
