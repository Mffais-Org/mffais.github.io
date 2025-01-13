import StarIcon from "@/components/Icons/StarIcon";
import useVerticalScroll from "@/hooks/useVerticalScroll";
import { useTranslations } from "next-intl";
import React from "react";

const AccountSetup = () => {
  const t = useTranslations("accountSetup");
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    scrollContainerRef,
  } = useVerticalScroll();
  return (
    <section
      onMouseLeave={handleMouseUp}
      className="bg-background py-10 xl:py-[100px]"
    >
      <div className="flex flex-col gap-10 md:items-center xl:mx-auto xl:max-w-[1312px] xl:gap-20 3xl:max-w-[1911px]">
        <div className="relative h-fit w-fit px-6">
          <h2 className="text-[24px] font-bold leading-7 xl:text-[56px] xl:leading-none">
            {t("title")}
          </h2>
          <StarIcon className="absolute -top-8 right-10 w-5 xl:right-6" />
          <StarIcon className="absolute -right-4 -top-8 w-8 xl:-right-12 xl:-top-5 xl:w-10" />
        </div>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="no-scrollbar mdTablet:justify-center mdTablet:cursor-auto flex w-full cursor-grab items-center gap-4 overflow-x-scroll px-6 xl:gap-10 xl:px-14"
        >
          <img
            src="/images/AccountSetupCard.png"
            alt="Account Setup"
            className="pointer-events-none max-w-[290px] xl:max-w-full"
          />
          <img
            src="/images/AccountSetupCard2.png"
            alt="Account Setup"
            className="pointer-events-none max-w-[290px] xl:max-w-full"
          />
          <img
            src="/images/AccountSetupCard3.png"
            alt="Account Setup"
            className="pointer-events-none max-w-[290px] xl:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AccountSetup;
