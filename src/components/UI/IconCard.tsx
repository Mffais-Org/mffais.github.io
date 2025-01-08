import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const IconCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col">
      <>{icon}</>
      <h4 className="text-[26px] leading-[31px] mb-4 mt-6 font-medium">{title}</h4>
      <p className=" text-xl leading-[34px]">{description}</p>
    </div>
  );
};

export default IconCard;
