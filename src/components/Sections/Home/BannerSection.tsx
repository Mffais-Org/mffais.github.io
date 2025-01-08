import LinkButton from "@/components/UI/LinkButton";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  variant?: "home" | "appGuide";
};

const BannerSection = ({ variant = "home" }: Props) => {
  const t = useTranslations("bannerSection");
  const t2 = useTranslations("banner2Section");

  if (variant === "home") {
    return (
      <div className=" px-16 flex flex-col gap-20">
        <div className="w-full h-[1px] bg-black/10 "></div>
        <div className="bg-background rounded-3xl flex items-center 3xl:justify-center gap-[100px] pl-[92px] pr-[67px] py-[84px]">
          <img src="/images/Tracking.png" className="w-[310px]" />
          <p className="text-[40px] leading-[48px] font-bold">{t("text")}</p>
        </div>
        <div className="w-full h-[1px] bg-black/10 "></div>
      </div>
    );
  }

  return (
    <div className=" px-16 flex flex-col gap-20 my-[112px]">
      <div className="bg-background rounded-3xl justify-between flex items-center 3xl:justify-center gap-[100px] pl-[92px] pr-[67px] py-[84px]">
        <div className="flex flex-col max-w-[500px]">
          <h3 className="text-[40px] font-medium leading-[44px] mb-6">{t2("title")}</h3>
          <p className="text-[20px] leading-[34px] mb-8">{t2("description")}</p>
          <LinkButton className="w-fit" href="#">
            {t2("buttonText")}
          </LinkButton>
        </div>
        <img src="/images/Tracking.png" />
      </div>
    </div>
  );
};

export default BannerSection;
