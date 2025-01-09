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
      <div className="flex flex-col gap-20 px-16">
        <div className="h-[1px] w-full bg-black/10"></div>
        <div className="flex items-center gap-[100px] rounded-3xl bg-background py-[84px] pl-[92px] pr-[67px] 3xl:justify-center">
          <img src="/images/Tracking.png" className="w-[310px]" />
          <p className="text-[40px] font-bold leading-[48px]">{t("text")}</p>
        </div>
        <div className="h-[1px] w-full bg-black/10"></div>
      </div>
    );
  }

  return (
    <div className="my-[112px] flex flex-col gap-20 px-16">
      <div className="flex items-center justify-between gap-[100px] rounded-3xl bg-background py-[84px] pl-[92px] pr-[67px] 3xl:justify-center">
        <div className="flex max-w-[500px] flex-col">
          <h3 className="mb-6 text-[40px] font-medium leading-[44px]">
            {t2("title")}
          </h3>
          <p className="mb-8 text-[20px] leading-[34px]">{t2("description")}</p>
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
