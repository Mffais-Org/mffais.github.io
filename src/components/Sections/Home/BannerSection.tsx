import Divider from "@/components/UI/Divider";
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
      <div className="flex flex-col gap-10 px-6 xl:gap-20 xl:px-16">
        <Divider />
        <div className="rounded-3xl bg-background px-6 py-10 xl:py-[84px]">
          <div className="mx-auto flex max-w-[1130px] flex-col-reverse items-center gap-12 md:flex-row">
            <img src="/images/Tracking.png" className="md:max-w-[310px]" />
            <p className="text-[24px] font-bold leading-8 xl:text-[40px] xl:leading-[48px]">
              {t("text")}
            </p>
          </div>
        </div>
        <Divider />
      </div>
    );
  }

  return (
    <div className="mx-6 flex flex-col rounded-[40px] bg-background xl:mx-auto xl:my-[112px] xl:max-w-[1312px] xl:gap-20 xl:py-[84px] 3xl:max-w-[1911px]">
      <div className="flex flex-col items-center justify-between gap-10 p-6 md:flex-row xl:p-0 xl:px-24">
        <div className="flex max-w-[500px] flex-col gap-6 md:w-1/2 xl:w-full xl:gap-0">
          <h3 className="text-[24px] font-bold leading-7 xl:mb-6 xl:text-[40px] xl:font-medium xl:leading-[44px]">
            {t2("title")}
          </h3>
          <p className="text-base xl:mb-8 xl:text-[20px] xl:leading-[34px]">
            {t2("description")}
          </p>
          <LinkButton className="justify-center xl:w-fit" href="#">
            {t2("buttonText")}
          </LinkButton>
        </div>
        <div>
          <img src="/images/Tracking.png" className="mt-6 xl:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
