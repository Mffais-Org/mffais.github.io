import React from "react";
import { Star } from "../../components";
import style from "./HowMuchToSpend.module.scss";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  return (
    <section className={style.howMuchToSpend}>
      <div className="grid-three">
        <div className="col-text-with-image">
          <Star className={style.star1} />
          <h3 style={{ maxWidth: "320px" }}>{t("homePage.image1Desc1")}</h3>
        </div>
        <div className={`${style.phone} col`}>
          <img src="/img/how-much-to-spend.svg" />
        </div>
        <div className="col-text-with-image">
          <Star className={style.star2} />
          <div className={style.howMuchToSave}>
            <h3 style={{ maxWidth: "320px" }} className="float-right">
              {t("homePage.image1Desc2")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
