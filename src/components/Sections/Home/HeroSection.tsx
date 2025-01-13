import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/i18n/routing";
import GooglePlayImage from "../../images/GooglePlayImage";
import AppStoreImage from "../../images/AppStoreImage";

const HeroSection = () => {
  const t = useTranslations("heroSection");

  return (
    <section className="bg-background">
      <div className="mx-auto flex flex-col items-center gap-10 px-6 pb-10 pt-10 md:flex-row xl:min-h-[764px] xl:max-w-[1130px] xl:px-0 xl:pb-0 3xl:max-w-[1911]">
        <div className="md:w-1/2">
          <div className="flex flex-col">
            <h1 className="text-left text-[44px] font-bold leading-[52px] xl:text-[72px] xl:leading-[87px]">
              {t("title")}
            </h1>
            <p className="mt-10 text-left text-base text-font md:max-w-[70%] xl:text-[26px] xl:leading-[44px]">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex items-center gap-4 xl:gap-8">
              <Link href="#" className="hover:shadow-custom">
                <GooglePlayImage />
              </Link>
              <Link href="#" className="hover:shadow-custom">
                <AppStoreImage />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 xl:justify-end">
          <img
            className="-mb-[66px] w-1/2 xl:w-fit"
            src="/images/HeroPhone.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
