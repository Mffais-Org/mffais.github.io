import React from "react";
import style from "./Footer.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import { GooglePlay, AppStore } from "../../components";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.subFooter}>
        <h4>{t("subFooter.giveItATry")}</h4>
        <div className={style.footerLogoWrapper}>
          <GooglePlay />
          <AppStore />
        </div>
        <h4>{t("subFooter.haveAnyQuestions")}</h4>
        <a
          className={`button ${style.contactSupport}`}
          target="_blank"
          href="mailto: support@mffais.com"
        >
          {t("subFooter.contactSupport")}
        </a>
      </div>
      <footer>
        <div className={style.nav}>
          <Link to="/#">
            <img src="/img/logo.svg" />
          </Link>
          <Link to="/#features">{t("headerAndFooter.features")}</Link>
          <Link to="/#moneyFlow">{t("headerAndFooter.moneyFlow")}</Link>
          <Link to="/privacy-policy/#">
            {t("headerAndFooter.privacyPolicy")}
          </Link>
          <Link to="/terms-and-conditions/#">
            {t("headerAndFooter.termsAndConditions")}
          </Link>
        </div>
        <div className={style.contactInfo}>
          <p>2436 E 4th Street, Ste #336</p>
          <p>Long Beach, CA 90814</p>
          <p>
            <a href="mailto:support@mffais.com">support@mffais.com</a>
          </p>
          <p>844-463-3247 / 844-4-MFFAIS (USA)</p>
        </div>
      </footer>
    </>
  );
}
