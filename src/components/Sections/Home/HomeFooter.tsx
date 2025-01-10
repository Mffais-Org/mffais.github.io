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
    <footer className="mx-auto mb-[60px] mt-[76px] flex max-w-[1130px] items-center justify-between">
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
