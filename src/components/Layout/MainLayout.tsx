import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className="mt-[108px]">{children}</div>;
};

export default MainLayout;
