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
  const locales = allLocales.filter(locale => locale !== currentLanguage);

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Popover className="relative">
      <PopoverButton className="flex relative  items-center gap-3 px-2 py-[14px] bg-background rounded-xl focus-within:outline-none">
        <div className=" flex w-5 h-5 rounded-full overflow-hidden">
          <ReactCountryFlag style={{ width: "20px", height: "20px", objectFit: "cover" }} countryCode={renderLocaleFlag(currentLanguage)} svg />
        </div>
        <span className="text-black uppercase leading-[18px] font-medium w-[50px] text-left">{currentLanguage}</span>
        <CaretDown />
      </PopoverButton>
      <PopoverPanel anchor="bottom end" className="mt-2 grid grid-cols-6 z-[99999] absolute  gap-2 shadow-card bg-white p-4 rounded-xl">
        {locales.map((locale, index) => (
          <div onClick={() => handleLanguageChange(locale)} className="flex  items-center gap-3 px-2 py-[14px] hover:bg-background rounded-xl cursor-pointer" key={index}>
            <div className=" flex w-5 h-5 rounded-full overflow-hidden">
              <ReactCountryFlag style={{ width: "20px", height: "20px", objectFit: "cover" }} countryCode={renderLocaleFlag(locale)} svg />
            </div>
            <span className="text-black uppercase leading-[18px] font-medium w-[50px] text-left">{locale}</span>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default LanguageSwitcher;
