import { useTranslations } from "next-intl";
import React from "react";
import TitleImage from "../images/TitleImage";
import { Link } from "@/i18n/routing";
import GooglePlayImage from "../images/GooglePlayImage";
import AppStoreImage from "../images/AppStoreImage";

const HeroSection = () => {
  const t = useTranslations("heroSection");

  return (
    <section className="bg-background  ">
      <div className="flex h-full min-h-[764px] items-center px-[15%] ">
        <div className="flex w-1/2 flex-col pl-4 ">
          <TitleImage />
          <p className="text-font text-[26px] mt-10 leading-[44px] max-w-[70%]">{t("subtitle")}</p>
          <div className="flex items-center gap-8 mt-8">
            <Link href="#" className="hover:shadow-custom">
              <GooglePlayImage />
            </Link>
            <Link href="#" className="hover:shadow-custom">
              <AppStoreImage />
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end ">
          <img className="-mb-[66px]" src="/images/HeroPhone.png" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
