import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import GooglePlayImage from "../../images/GooglePlayImage";
import AppStoreImage from "../../images/AppStoreImage";
import LinkButton from "../../UI/LinkButton";

const CTASection = () => {
  const t = useTranslations("CTASection");
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between px-[15%] py-[100px] 3xl:justify-center 3xl:gap-20">
        <div className="flex items-center gap-10">
          <span className="text-[28px] font-medium leading-9">
            {t("leftText")}
          </span>
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
          <span className="text-[28px] font-medium leading-9">
            {t("rightText")}
          </span>
          <LinkButton href="#">{t("buttonText")}</LinkButton>
        </div>
      </div>
      <div className="h-[1px] w-full bg-black/10"></div>
    </section>
  );
};

export default CTASection;
