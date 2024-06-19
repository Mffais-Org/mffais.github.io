import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>
        {t("button.english")}
      </button>
      <button onClick={() => changeLanguage("fr")}>{t("button.french")}</button>
    </div>
  );
};

export default LanguageSwitcher;
