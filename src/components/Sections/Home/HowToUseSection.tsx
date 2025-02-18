"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import LikeIcon from "../../Icons/LikeIcon";
import BalanceIcon from "../../Icons/BalanceIcon";
import CalendarIcon from "../../Icons/CalendarIcon";
import ExchangeIcon from "../../Icons/ExchangeIcon";
import HowToUseCard from "./HowToUseCard";
import HowToUseNavigation from "./HowToUseNavigation";
import useMediaQuery from "@/hooks/useMediaQuery";

const HowToUseSection = () => {
  const t = useTranslations("howToUseSection");
  const c = useTranslations("howToUseSection.cards");

  const isSmall = useMediaQuery("(max-width: 1279px)");

  const cards = [
    {
      icon: (
        <img
          src="/images/icons/download.png"
          className="w-10 xl:w-16"
          alt="download"
        />
      ),
      title: c("card1.title"),
      description: c("card1.description"),
    },
    {
      icon: <LikeIcon isSmall={isSmall} />,
      title: c("card2.title"),
      description: c("card2.description"),
    },
    {
      icon: <BalanceIcon isSmall={isSmall} />,
      title: c("card3.title"),
      description: c("card3.description"),
    },
    {
      icon: <CalendarIcon isSmall={isSmall} />,
      title: c("card4.title"),
      description: c("card4.description"),
    },
    {
      icon: <ExchangeIcon isSmall={isSmall} />,
      title: c("card5.title"),
      description: c("card5.description"),
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } =
        scrollContainerRef.current;

      if (isSmall) {
        const scrollStep = clientWidth * 0.8;
        const nextScrollPosition = Math.min(
          scrollLeft + scrollStep,
          scrollWidth - clientWidth,
        );

        scrollContainerRef.current.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: scrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft } = scrollContainerRef.current;

      if (isSmall) {
        const scrollStep = clientWidth * 0.8;
        const nextScrollPosition = Math.max(scrollLeft - scrollStep, 0);

        scrollContainerRef.current.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="mt-10 flex w-full flex-col overflow-hidden md:items-center xl:p-0 xl:pb-9 xl:pt-[155px]">
      <h2 className="px-6 text-[24px] font-bold leading-7 xl:text-[56px] xl:leading-[55px]">
        {t("title")}
      </h2>
      <div className="mt-10 flex w-full justify-end px-6 xl:max-w-[1130px]">
        <HowToUseNavigation
          isActiveLeft={scrollPosition > 0}
          isActiveRight={
            scrollContainerRef.current &&
            scrollPosition <
              scrollContainerRef.current.scrollWidth -
                scrollContainerRef.current.clientWidth
          }
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />
      </div>
      <div
        ref={scrollContainerRef}
        className="no-scrollbar flex w-full gap-6 overflow-scroll py-20 pl-6 pr-10 pt-10 xl:pl-[155px] 3xl:justify-center 3xl:pl-0"
      >
        {cards.map((card, index) => (
          <HowToUseCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default HowToUseSection;
