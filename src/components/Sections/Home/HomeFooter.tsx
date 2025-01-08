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
    <footer className="flex items-center justify-between 3xl:justify-evenly 3xl:gap-20 px-[15%] mt-[76px] mb-[60px]">
      <Logo />
      {nav.map((item, index) => (
        <Link className="text-base flex items-center leading-[18px] gap-2" key={index} href={item.href}>
          <span>{item.label}</span>
          <span className="opacity-50">{item.icon}</span>
        </Link>
      ))}
    </footer>
  );
};

export default HomeFooter;
