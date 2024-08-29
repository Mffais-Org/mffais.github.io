import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import style from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className={style.container} onClick={() => setOpen(!open)}>
      <div className={style.dropdownTitle}>Select language</div>
      {open && (
        <div className={style.dropdownContainer}>
          <div className={style.language} onClick={() => changeLanguage("en")}>
            English
          </div>
          <div className={style.language} onClick={() => changeLanguage("fr")}>
            French
          </div>
          <div className={style.language} onClick={() => changeLanguage("bg")}>
            Bulgarian
          </div>
          <div className={style.language} onClick={() => changeLanguage("bn")}>
            Bengali
          </div>
          <div className={style.language} onClick={() => changeLanguage("ca")}>
            Catalan
          </div>
          <div className={style.language} onClick={() => changeLanguage("cs")}>
            Czech
          </div>
          <div className={style.language} onClick={() => changeLanguage("da")}>
            Danish
          </div>
          <div className={style.language} onClick={() => changeLanguage("de")}>
            German
          </div>
          <div className={style.language} onClick={() => changeLanguage("el")}>
            Greek
          </div>
          <div className={style.language} onClick={() => changeLanguage("es")}>
            Spanish
          </div>
          <div className={style.language} onClick={() => changeLanguage("fi")}>
            Finnish
          </div>
          <div className={style.language} onClick={() => changeLanguage("hi")}>
            Hindi
          </div>
          <div className={style.language} onClick={() => changeLanguage("hu")}>
            Hungarian
          </div>
          <div className={style.language} onClick={() => changeLanguage("id")}>
            Indonesian
          </div>
          <div className={style.language} onClick={() => changeLanguage("it")}>
            Italian
          </div>
          <div className={style.language} onClick={() => changeLanguage("ja")}>
            Japanese
          </div>
          <div className={style.language} onClick={() => changeLanguage("ko")}>
            Korean
          </div>
          <div className={style.language} onClick={() => changeLanguage("lt")}>
            Lithuanian
          </div>
          <div className={style.language} onClick={() => changeLanguage("mr")}>
            Marathi
          </div>
          <div className={style.language} onClick={() => changeLanguage("ms")}>
            Malay
          </div>
          <div className={style.language} onClick={() => changeLanguage("nl")}>
            Dutch
          </div>
          <div className={style.language} onClick={() => changeLanguage("no")}>
            Norwegian
          </div>
          <div className={style.language} onClick={() => changeLanguage("pl")}>
            Polish
          </div>
          <div className={style.language} onClick={() => changeLanguage("pt")}>
            Portuguese
          </div>
          <div className={style.language} onClick={() => changeLanguage("ro")}>
            Romanian
          </div>
          <div className={style.language} onClick={() => changeLanguage("ru")}>
            Russian
          </div>
          <div className={style.language} onClick={() => changeLanguage("sk")}>
            Slovak
          </div>
          <div className={style.language} onClick={() => changeLanguage("sr")}>
            Serbian
          </div>
          <div className={style.language} onClick={() => changeLanguage("sv")}>
            Swedish
          </div>
          <div className={style.language} onClick={() => changeLanguage("th")}>
            Thai
          </div>
          <div className={style.language} onClick={() => changeLanguage("tl")}>
            Tagalog
          </div>
          <div className={style.language} onClick={() => changeLanguage("tr")}>
            Turkish
          </div>
          <div className={style.language} onClick={() => changeLanguage("uk")}>
            Ukrainian
          </div>
          <div className={style.language} onClick={() => changeLanguage("vi")}>
            Vietnamese
          </div>
          <div className={style.language} onClick={() => changeLanguage("zh")}>
            Chinese
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
