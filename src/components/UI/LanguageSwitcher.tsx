"use client";
import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

import { useLocale } from "next-intl";
import { locales as allLocales, usePathname, useRouter } from "@/i18n/routing";
import ReactCountryFlag from "react-country-flag";
import CaretDown from "../Icons/CaretDown";
import { renderLocaleFlag } from "@/utils/utils";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = useLocale();
  const locales = allLocales.filter((locale) => locale !== currentLanguage);

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Popover className="relative">
      <PopoverButton className="relative flex items-center gap-2 rounded-xl bg-background px-2 py-2 focus-within:outline-none xl:gap-3 xl:px-2 xl:py-[14px]">
        <div className="flex h-4 w-4 overflow-hidden rounded-full xl:h-5 xl:w-5">
          <ReactCountryFlag
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
            countryCode={renderLocaleFlag(currentLanguage)}
            svg
          />
        </div>
        <span className="hidden text-left text-[11px] font-medium uppercase leading-[18px] text-black xl:block xl:w-[50px] xl:text-[16px]">
          {currentLanguage}
        </span>
        <CaretDown />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom end"
        className="shadow-card absolute z-[99999] mt-2 grid grid-cols-3 gap-2 rounded-xl bg-white p-4 md:grid-cols-4 xl:h-auto xl:grid-cols-6"
      >
        {locales.map((locale, index) => (
          <div
            onClick={() => handleLanguageChange(locale)}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-[14px] hover:bg-background"
            key={index}
          >
            <div className="flex h-4 w-4 overflow-hidden rounded-full xl:h-5 xl:w-5">
              <ReactCountryFlag
                style={{ width: "20px", height: "20px", objectFit: "cover" }}
                countryCode={renderLocaleFlag(locale)}
                svg
              />
            </div>
            <span className="text-left text-[11px] font-medium uppercase leading-[18px] text-black xl:w-[50px] xl:text-base">
              {locale}
            </span>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageSwitcher;
