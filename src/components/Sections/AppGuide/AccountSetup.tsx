import StarIcon from "@/components/Icons/StarIcon";
import { useTranslations } from "next-intl";
import React from "react";

const AccountSetup = () => {
  const t = useTranslations("accountSetup");
  return (
    <section className="flex flex-col gap-20 items-center px-[15%] bg-background py-[100px] ">
      <div className="relative h-fit  ">
        <h2 className="text-[56px] leading-none font-bold ">{t("title")}</h2>
        <StarIcon className="w-5 absolute -top-8 right-6" />
        <StarIcon className="w-10 absolute -top-5 -right-12" />
      </div>
      <div className="flex justify-center items-center gap-10">
        <img src="/images/AccountSetupCard.png" alt="Account Setup" />
        <img src="/images/AccountSetupCard2.png" alt="Account Setup" />
        <img src="/images/AccountSetupCard3.png" alt="Account Setup" />
      </div>
    </section>
  );
};

export default AccountSetup;
