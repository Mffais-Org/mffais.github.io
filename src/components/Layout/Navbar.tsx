"use client";
import React from "react";
import Logo from "../Icons/Logo";
import { useTranslations } from "next-intl";
import LinkButton from "../UI/LinkButton";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import NavItem from "./NavItem";
import LanguageSwitcher from "../UI/LanguageSwitcher";

type Props = {
  scrollToFeature?: () => void;
  scrollToMoneyFlow?: () => void;
  isFeatureInView?: boolean;
  isMoneyFlowInView?: boolean;
  appGuide?: boolean;
};

const Navbar = ({ scrollToFeature, scrollToMoneyFlow, isFeatureInView, isMoneyFlowInView, appGuide }: Props) => {
  const t = useTranslations("navigation");
  const path = usePathname();
  const router = useRouter();

  const handleNavigation = (target: string) => {
    if (path === "/" && scrollToFeature) {
      if (target === "feature") {
        scrollToFeature();
        console.log("scrollToFeature");
      }
      if (target === "moneyFlow" && scrollToMoneyFlow) {
        scrollToMoneyFlow();
      }
    } else router.push(`/#${target}`);
  };

  const navigationItems = [
    {
      id: 1,
      name: t("features"),
      onClick: () => handleNavigation("feature"),
    },
    {
      id: 2,
      name: t("moneyFlow"),
      onClick: () => handleNavigation("moneyFlow"),
    },
    {
      id: 3,
      name: t("appGuide"),
      onClick: () => router.push("/app-guide"),
    },
  ];

  const activeNavigationId = isFeatureInView ? 1 : isMoneyFlowInView ? 2 : null;
  const filteredNavigationItems = appGuide ? navigationItems : navigationItems.filter(navigation => navigation.id !== 3);

  return (
    <div className="flex w-full justify-center">
      <div className="z-50 flex w-full items-center justify-between bg-white px-10 fixed top-0 h-[108px]">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>

          <ul className="ml-12 flex items-center gap-[72px] font-medium">
            {filteredNavigationItems.map(navigation => {
              const isActive = activeNavigationId === navigation.id;
              return (
                <li key={navigation.id}>
                  <NavItem name={navigation.name} isActive={navigation.id === 3 ? true : isActive} onClick={navigation.onClick} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {path === "/app-guide" ? null : (
            <LinkButton target="_blank" variant="icon" icon={<ExternalLinkIcon />} href="/app-guide">
              {t("appGuide")}
            </LinkButton>
          )}
          <LinkButton href="#">{t("getTheApp")}</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
