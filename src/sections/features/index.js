import React, { useRef } from "react";
import { Star } from "../../components";
import { FeatureCard } from "../../components";
import style from "./Features.module.scss";
import { useTranslation } from "react-i18next";

const Features = ({ featuresRef }) => {
  const { t } = useTranslation();
  const featureCards = [
    {
      title: t("homePage.card1Title"),
      text: t("homePage.card1Desc"),
      imgUrl: "/img/illustration-1.svg",
    },
    {
      title: t("homePage.card2Title"),
      text: t("homePage.card2Desc1"),
      text2: t("homePage.card2Desc2"),
      imgUrl: "/img/illustration-2.svg",
    },
    {
      title: t("homePage.card3Title"),
      text: t("homePage.card3Desc"),
      imgUrl: "/img/illustration-3.svg",
    },
  ];
  return (
    <section id="features" ref={featuresRef}>
      <div className={style.header}>
        <h1>{t("homePage.cardsTitle")}</h1>
        <Star />
        <h2>{t("homePage.cardsDesc")}</h2>
      </div>
      {featureCards.map((obj, index) => (
        <div key={`featureCard${index}`} className={style.featureCard}>
          <FeatureCard {...obj} imgIsLeft={index % 2 == 1} />
        </div>
      ))}
    </section>
  );
};

export default Features;
