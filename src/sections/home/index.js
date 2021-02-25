import React from 'react';
import style from './Home.module.scss';
import { GooglePlay } from '../../components';

export default function () {
  return (
    <section id="home" className={ `grid-two-even ${ style.home }` }>
      <div className={ `col ${ style.col }` }>
        <img className={ style.makeEndsMeet } src="/img/make-ends-meet.svg" />
        <p>
          Mffais helps you track cash <br className={ style.phoneBr } />
          flow and <br />
          provides insight into <br className={ style.phoneBr } />
          future spending <br />
          and savings.
        </p>
        <GooglePlay />
      </div>

      <div className={ `col ${ style.imgCol }` }>
        <img className={ style.phone } src="/img/home-phone.svg" />
        <img className={ style.phone } src="/img/home-phone-without-stars.svg" />
      </div>
    </section>
  );
}
