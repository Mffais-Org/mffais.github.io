import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import GooglePlayImage from "../images/GooglePlayImage";
import AppStoreImage from "../images/AppStoreImage";
import LinkButton from "../UI/LinkButton";

const CTASection = () => {
  const t = useTranslations("CTASection");
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between 3xl:justify-center 3xl:gap-20 py-[100px] px-[15%]">
        <div className="flex gap-10 items-center">
          <span className="text-[28px] leading-9 font-medium">{t("leftText")}</span>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:shadow-custom">
              <GooglePlayImage />
            </Link>
            <Link href="#" className="hover:shadow-custom">
              <AppStoreImage />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[28px] leading-9 font-medium">{t("rightText")}</span>
          <LinkButton href="#">{t("buttonText")}</LinkButton>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/10 "></div>
    </section>
  );
};

export default CTASection;
