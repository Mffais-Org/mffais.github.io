import React from "react";
import style from "./MoneyFlow.module.scss";
import { useTranslation } from "react-i18next";

export const MoneyFlow = ({ moneyFlowRef }) => {
  const { t } = useTranslation();
  return (
    <section id="moneyFlow" className={style.moneyFlow} ref={moneyFlowRef}>
      <div className={style.header}>
        <h1>{t("homePage.image2Title")}</h1>
        <div>
          <p>{t("homePage.image2Desc1")}</p>
          <p>{t("homePage.image2Desc2")}</p>
          <p>{t("homePage.image2Desc3")}</p>
        </div>
      </div>

      <div className={`grid-two-even ${style.cards}`}>
        <MoneyFlowCard />
        <MoneyFlowCard isCardSecond={true} />
        <div className={style.circle}></div>
      </div>
    </section>
  );
};

const MoneyFlowCard = ({ isCardSecond }) => {
  const createRow = (imgUrl, title, date, amount, isReceived = false) => {
    return (
      <div className={style.row}>
        <span>{isReceived && <img src="/img/check.svg" />}</span>
        <div>
          <p>
            <img src={`/img/${imgUrl}.svg`} /> {title}
          </p>
          <p className={style.grayText}>{date}</p>
        </div>
        <div className={style.money}>
          <p>{amount}</p>
          {isReceived && <p className={style.received}>Received</p>}
        </div>
      </div>
    );
  };

  return (
    <div className={`${style.col} col`}>
      <div className={style.card}>
        <p className={style.cardTopText}>
          <span>Dec 4 - Dec 5</span>
          <span>$1,100.00</span>
        </p>
        {createRow("up", "Paycheck", "Dec 4th, Mon", "$500.00", !!isCardSecond)}
        {createRow("down", "Paycheck", "Dec 10th, Tue", "-$400.00")}
        <p className={style.grayText}>Period total $100.00</p>
      </div>
    </div>
  );
};
