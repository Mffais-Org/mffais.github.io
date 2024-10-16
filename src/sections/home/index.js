import React from "react";
import style from "./Home.module.scss";
import { GooglePlay, Star, AppStore } from "../../components";

export default function () {
  return (
    <section id="home" className={`grid-two-even ${style.home}`}>
      <div className={`col ${style.col}`}>
        <div className={style.makeEndsMeet}>
          <img src="/img/make-ends-meet.svg" />
          <Star className={style.mobileStar} />
        </div>
        <p>
          Mffais helps you track cash <br className={style.phoneBr} />
          flow and <br />
          provides insight into <br className={style.phoneBr} />
          future spending <br />
          and savings.
        </p>
        <GooglePlay />
        <AppStore />
      </div>

      <div className={`col ${style.imgCol}`}>
        <img className={style.phone} src="/img/home-phone.svg" />
        <img className={style.phone} src="/img/home-phone-without-stars.svg" />
      </div>
    </section>
  );
}
