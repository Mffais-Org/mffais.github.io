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
    <footer className="mb-[60px] mt-[76px] flex items-center justify-between px-[15%] 3xl:justify-evenly 3xl:gap-20">
      <Logo />
      {nav.map((item, index) => (
        <Link
          className="flex items-center gap-2 text-base leading-[18px]"
          key={index}
          href={item.href}
        >
          <span>{item.label}</span>
          <span className="opacity-50">{item.icon}</span>
        </Link>
      ))}
    </footer>
  );
};

export default HomeFooter;
