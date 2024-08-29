import React from "react";
import style from "./Home.module.scss";
import { GooglePlay, Star, AppStore } from "../../components";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();

  return (
    <section id="home" className={`grid-two-even ${style.home}`}>
      <div className={`col ${style.col}`}>
        <div className={style.makeEndsMeet}>
          <img src="/img/make-ends-meet.svg" />
          <Star className={style.mobileStar} />
        </div>
        <p>{t("homePage.desc")}</p>
        <GooglePlay text="" />
        <AppStore text="" />
      </div>

      <div className={`col ${style.imgCol}`}>
        <img className={style.phone} src="/img/home-phone.svg" />
        <img className={style.phone} src="/img/home-phone-without-stars.svg" />
      </div>
    </section>
  );
}
