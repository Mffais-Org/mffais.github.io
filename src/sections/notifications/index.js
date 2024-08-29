import React from "react";
import style from "./Notifications.module.scss";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  return (
    <div className={style.borderBottom}>
      <section className={style.notifications}>
        <div className="grid-three">
          <div className={`${style.phoneImgForDesktop} col`}>
            <img src="/img/notifications-1.svg" />
          </div>
          <div className={`${style.phoneImgForDesktop} col`}>
            <img src="/img/notifications-2.svg" />
          </div>

          <div className="col-text-with-image">
            <div>
              <div className="float-right">
                <div className={style.smiley}>
                  <img src="/img/smiley.svg" />
                </div>
                <h3 style={{ maxWidth: "320px" }}>
                  {t("homePage.image3Desc")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`${style.phoneImgForMobile} col`}>
        <img src="/img/notifications-1.svg" />
        <img src="/img/notifications-2.svg" />
      </div>
    </div>
  );
}
