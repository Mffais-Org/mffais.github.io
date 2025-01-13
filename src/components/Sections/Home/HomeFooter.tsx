import React from "react";
import Logo from "../../Icons/Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import ExternalLinkIcon from "../../Icons/ExternalLinkIcon";

const HomeFooter = () => {
  const t = useTranslations("homeFooterNav");

  const nav = [
    {
      label: t("features"),
      href: "#",
    },
    {
      label: t("moneyFlow"),
      href: "#",
    },
    {
      label: t("privacyPolicy"),
      href: "#",
      icon: <ExternalLinkIcon />,
    },
    {
      label: t("termsAndConditions"),
      href: "#",
      icon: <ExternalLinkIcon />,
    },
  ];

  return (
    <footer className="my-10 flex flex-col items-center gap-10 px-6 md:mx-auto md:items-center md:justify-between xl:my-0 xl:mb-[60px] xl:mt-[76px] xl:max-w-[1130px] xl:flex-row xl:gap-8 xl:px-0">
      <Logo />
      <div className="flex flex-col gap-8 md:w-full md:flex-row md:justify-center xl:justify-between xl:pl-20">
        {nav.map((item, index) => (
          <Link
            className="flex items-center gap-2 text-base leading-[18px]"
            key={index}
            href={item.href}
          >
            <span className="whitespace-nowrap">{item.label}</span>
            <span className="opacity-50">{item.icon}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default HomeFooter;
