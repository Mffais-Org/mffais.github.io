import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const IconCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col">
      <div>{icon}</div>
      <h4 className="my-4 text-[18px] font-medium leading-[22px] xl:my-0 xl:mb-4 xl:mt-6 xl:text-[26px] xl:leading-[31px]">
        {title}
      </h4>
      <p className="text-base xl:text-xl xl:leading-[34px]">{description}</p>
    </div>
  );
};

export default IconCard;
