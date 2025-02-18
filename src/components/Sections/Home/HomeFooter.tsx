import React from "react";
import Logo from "../../Icons/Logo";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import ExternalLinkIcon from "../../Icons/ExternalLinkIcon";

type Props = {
  scrollToFeature?: () => void;
  scrollToMoneyFlow?: () => void;
};

const HomeFooter = ({ scrollToFeature, scrollToMoneyFlow }: Props) => {
  const t = useTranslations("homeFooterNav");
  const path = usePathname();
  const router = useRouter();

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

  const nav = [
    {
      label: t("features"),
      href: "/#feature",
      onClick: () => handleNavigation("feature"),
    },
    {
      label: t("moneyFlow"),
      href: "/#moneyFlow",
      onClick: () => handleNavigation("moneyFlow"),
    },
    {
      label: t("privacyPolicy"),
      href: "/legal/privacy-policy",
      icon: <ExternalLinkIcon />,
    },
    {
      label: t("termsAndConditions"),
      href: "/legal/terms-and-conditions",
      icon: <ExternalLinkIcon />,
    },
  ];

  return (
    <footer className="my-10 flex flex-col items-center gap-10 px-6 md:mx-auto md:items-center md:justify-between xl:my-0 xl:mb-[60px] xl:mt-[76px] xl:max-w-[1130px] xl:flex-row xl:gap-8 xl:px-0">
      <Logo />
      <div className="flex flex-col gap-8 md:w-full md:flex-row md:justify-center xl:justify-between xl:pl-20">
        {nav.map((item, index) => {
          if (item.icon)
            return (
              <Link
                className="flex items-center gap-2 text-base leading-[18px]"
                key={index}
                href={item.href}
                target="_blank"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <span className="opacity-50">{item.icon}</span>
              </Link>
            );
          else
            return (
              <span
                className="flex cursor-pointer items-center gap-2 text-base leading-[18px]"
                key={index}
                onClick={item.onClick}
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <span className="opacity-50">{item.icon}</span>
              </span>
            );
        })}
      </div>
    </footer>
  );
};

export default HomeFooter;
