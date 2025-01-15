"use client";
import React from "react";
import Logo from "../Icons/Logo";
import { useTranslations } from "next-intl";
import LinkButton from "../UI/LinkButton";
import ExternalLinkIcon from "../Icons/ExternalLinkIcon";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import NavItem from "./NavItem";
import LanguageSwitcher from "../UI/LanguageSwitcher";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  scrollToFeature?: () => void;
  scrollToMoneyFlow?: () => void;
  isFeatureInView?: boolean;
  isMoneyFlowInView?: boolean;
  appGuide?: boolean;
};

const Navbar = ({
  scrollToFeature,
  scrollToMoneyFlow,
  isFeatureInView,
  isMoneyFlowInView,
  appGuide,
}: Props) => {
  const t = useTranslations("navigation");
  const path = usePathname();
  const router = useRouter();
  const isSmall = useMediaQuery("(max-width: 1280px)");

  console.log(isSmall);

  const handleNavigation = (target: string) => {
    if (path === "/" && scrollToFeature) {
      if (target === "feature") {
        scrollToFeature();
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

  const activeNavigationId = isFeatureInView ? 1 : isMoneyFlowInView ? 2 : 3;

  const filteredNavigationItems =
    !appGuide && !isSmall
      ? navigationItems.filter((navigation) => navigation.id !== 3)
      : navigationItems;

  return (
    <div className="fixed top-0 z-[9999] flex h-[70px] w-full justify-center border border-black/10 bg-white xl:h-[108px]">
      <div className="flex w-full items-center justify-between px-6 xl:px-10">
        <div className="flex w-full items-center md:gap-10 xl:w-auto xl:gap-0">
          <Link className="mr-2" href="/">
            <Logo />
          </Link>
          <ul className="flex w-full items-center gap-4 text-[11px] font-medium leading-[18px] md:justify-start md:gap-10 xl:ml-12 xl:gap-[72px] xl:text-[16px]">
            {filteredNavigationItems.map((navigation) => {
              const isActive = activeNavigationId === navigation.id;
              return (
                <li key={navigation.id}>
                  <NavItem
                    name={navigation.name}
                    isSmall={isSmall}
                    isActive={
                      isSmall && navigation.id === 3
                        ? path === "/app-guide"
                        : isActive
                    }
                    onClick={navigation.onClick}
                  />
                </li>
              );
            })}
          </ul>
          <div className="block xl:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          {path === "/app-guide" ? null : (
            <LinkButton
              target="_blank"
              variant="icon"
              icon={<ExternalLinkIcon />}
              href="/app-guide"
            >
              {t("appGuide")}
            </LinkButton>
          )}
          <LinkButton className="hidden xl:flex" href="#">
            {t("getTheApp")}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
