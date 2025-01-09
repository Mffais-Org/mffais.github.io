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
      <h4 className="mb-4 mt-6 text-[26px] font-medium leading-[31px]">
        {title}
      </h4>
      <p className="text-xl leading-[34px]">{description}</p>
    </div>
  );
};

export default IconCard;
