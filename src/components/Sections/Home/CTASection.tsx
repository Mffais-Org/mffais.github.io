import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import GooglePlayImage from "../../images/GooglePlayImage";
import AppStoreImage from "../../images/AppStoreImage";
import LinkButton from "../../UI/LinkButton";

const CTASection = () => {
  const t = useTranslations("CTASection");
  return (
    <section className="flex flex-col px-6 xl:px-16">
      <div className="flex w-full flex-col items-start justify-between gap-10 py-10 xl:mx-auto xl:max-w-[1130px] xl:flex-row xl:items-center xl:py-[100px]">
        <div className="flex w-full items-center justify-between md:justify-center md:gap-10 xl:justify-start">
          <span className="whitespace-nowrap text-[18px] font-medium leading-7 xl:text-[28px] xl:leading-9">
            {t("leftText")}
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="https://play.google.com/store/apps/details?id=com.mffais.app"
              className="hover:shadow-custom"
              target="_blank"
            >
              <GooglePlayImage />
            </Link>
            <Link
              href="https://apps.apple.com/hr/app/mffais/id1574144672"
              target="_blank"
              className="hover:shadow-custom"
            >
              <AppStoreImage />
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:justify-center md:gap-10 xl:justify-between">
          <span className="text-[18px] font-medium leading-7 xl:text-[28px] xl:leading-9">
            {t("rightText")}
          </span>
          <LinkButton mailto href="support@mffais.com">
            {t("buttonText")}
          </LinkButton>
        </div>
      </div>
      <div className="h-[1px] w-full bg-black/10"></div>
    </section>
  );
};

export default CTASection;
