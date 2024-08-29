import React from "react";
import style from "./Banner.module.scss";

import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  return (
    <div className={`${style.banner} flex-container`}>
      <img src="/img/cash-flow.svg" />
      <h3>{t("homePage.image4Desc")}</h3>
    </div>
  );
}
