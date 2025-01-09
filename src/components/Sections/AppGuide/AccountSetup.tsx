import StarIcon from "@/components/Icons/StarIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AccountSetup = () => {
  const t = useTranslations("accountSetup");
  return (
    <section className="flex flex-col items-center gap-20 bg-background px-[15%] py-[100px]">
      <div className="relative h-fit">
        <h2 className="text-[56px] font-bold leading-none">{t("title")}</h2>
        <StarIcon className="absolute -top-8 right-6 w-5" />
        <StarIcon className="absolute -right-12 -top-5 w-10" />
      </div>
      <div className="flex items-center justify-center gap-10">
        <img src="/images/AccountSetupCard.png" alt="Account Setup" />
        <img src="/images/AccountSetupCard2.png" alt="Account Setup" />
        <img src="/images/AccountSetupCard3.png" alt="Account Setup" />
      </div>
    </section>
  );
};

export default AccountSetup;
