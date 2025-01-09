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
      <PopoverButton className="relative flex items-center gap-3 rounded-xl bg-background px-2 py-[14px] focus-within:outline-none">
        <div className="flex h-5 w-5 overflow-hidden rounded-full">
          <ReactCountryFlag
            style={{ width: "20px", height: "20px", objectFit: "cover" }}
            countryCode={renderLocaleFlag(currentLanguage)}
            svg
          />
        </div>
        <span className="w-[50px] text-left font-medium uppercase leading-[18px] text-black">
          {currentLanguage}
        </span>
        <CaretDown />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom end"
        className="shadow-card absolute z-[99999] mt-2 grid grid-cols-6 gap-2 rounded-xl bg-white p-4"
      >
        {locales.map((locale, index) => (
          <div
            onClick={() => handleLanguageChange(locale)}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-[14px] hover:bg-background"
            key={index}
          >
            <div className="flex h-5 w-5 overflow-hidden rounded-full">
              <ReactCountryFlag
                style={{ width: "20px", height: "20px", objectFit: "cover" }}
                countryCode={renderLocaleFlag(locale)}
                svg
              />
            </div>
            <span className="w-[50px] text-left font-medium uppercase leading-[18px] text-black">
              {locale}
            </span>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageSwitcher;
