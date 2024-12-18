"use client";
import React from "react";
import Logo from "../Icons/Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LinkButton from "../UI/LinkButton";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";

const Navbar = () => {
  const t = useTranslations("navigation");
  const navigationItems = [
    {
      name: t("features"),
      href: "/#features",
    },
    {
      name: t("moneyFlow"),
      href: "/#money-flow",
    },
  ];

  return (
    <div className="flex w-full justify-center ">
      <div className="flex justify-between px-10 z-50 h-[108px] bg-white fixed top-0 items-center  w-full  ">
        <div className="flex items-center ">
          <Logo />
          <ul className="flex ml-12 items-center gap-[72px] font-medium">
            {navigationItems.map((navigation, index) => (
              <li key={index}>
                <Link href={navigation.href}>{navigation.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <LinkButton variant="icon" icon={<ExternalLinkIcon />} href="#">
            App guide
          </LinkButton>
          <LinkButton href="#">Get the app</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
