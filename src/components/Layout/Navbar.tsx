"use client";
import React from "react";
import Logo from "../Icons/Logo";
import { useTranslations } from "next-intl";
import LinkButton from "../UI/LinkButton";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import { Link } from "@/i18n/routing";
import NavItem from "./NavItem";
import LanguageSwitcher from "../UI/LanguageSwitcher";

type Props = {
  scrollToFeature: () => void;
  scrollToMoneyFlow: () => void;
  isFeatureInView: boolean;
  isMoneyFlowInView: boolean;
};

const Navbar = ({ scrollToFeature, scrollToMoneyFlow, isFeatureInView, isMoneyFlowInView }: Props) => {
  const t = useTranslations("navigation");
  const navigationItems = [
    {
      id: 1,
      name: t("features"),
      onClick: scrollToFeature,
    },
    {
      id: 2,
      name: t("moneyFlow"),
      onClick: scrollToMoneyFlow,
    },
  ];

  const activeNavigationId = isFeatureInView ? 1 : isMoneyFlowInView ? 2 : null;

  return (
    <div className="flex w-full justify-center">
      <div className="z-50 flex w-full items-center justify-between bg-white px-10 fixed top-0 h-[108px]">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>

          <ul className="ml-12 flex items-center gap-[72px] font-medium">
            {navigationItems.map(navigation => {
              const isActive = activeNavigationId === navigation.id;

              return (
                <li key={navigation.id}>
                  <NavItem name={navigation.name} isActive={isActive} onClick={navigation.onClick} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
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
