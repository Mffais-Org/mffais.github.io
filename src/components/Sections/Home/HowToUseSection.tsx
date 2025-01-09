"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import LikeIcon from "../../Icons/LikeIcon";
import BalanceIcon from "../../Icons/BalanceIcon";
import CalendarIcon from "../../Icons/CalendarIcon";
import ExchangeIcon from "../../Icons/ExchangeIcon";
import HowToUseCard from "./HowToUseCard";
import HowToUseNavigation from "./HowToUseNavigation";

const HowToUseSection = () => {
  const t = useTranslations("howToUseSection");
  const c = useTranslations("howToUseSection.cards");

  const cards = [
    {
      icon: <img src="/images/icons/download.png" className=" w-16" />,
      title: c("card1.title"),
      description: c("card1.description"),
    },
    {
      icon: <LikeIcon />,
      title: c("card2.title"),
      description: c("card2.description"),
    },
    {
      icon: <BalanceIcon />,
      title: c("card3.title"),
      description: c("card3.description"),
    },
    {
      icon: <CalendarIcon />,
      title: c("card4.title"),
      description: c("card4.description"),
    },
    {
      icon: <ExchangeIcon />,
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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: scrollContainerRef.current.clientWidth, behavior: "smooth" });
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
    <section className="w-full pt-[155px]  pb-9 flex flex-col items-center overflow-hidden  ">
      <h2 className="text-[56px] font-bold leading-[55px]">{t("title")}</h2>
      <div className="mt-11 max-w-[1130px] flex justify-end w-full">
        <HowToUseNavigation isActiveLeft={scrollPosition > 0} isActiveRight={scrollPosition === 0} scrollLeft={scrollLeft} scrollRight={scrollRight} />
      </div>
      <div ref={scrollContainerRef} className="flex xl:pl-[155px] pr-10 3xl:pl-0 3xl:justify-center gap-6 w-full  overflow-scroll pt-10 py-20 no-scrollbar ">
        {cards.map((card, index) => (
          <HowToUseCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default HowToUseSection;
