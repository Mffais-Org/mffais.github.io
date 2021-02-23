import React from 'react';
import style from './Home.module.scss';
import { GooglePlay, Star } from '../../components';

export default function () {
  return (
    <section id="home" className={ `grid-two-even ${ style.home }` }>
      <div className={ `col ${ style.col }` }>
        <img className={ style.makeEndsMeet } src="/img/make-ends-meet.svg" />
        <p>
          Mffais helps you track cash flow and provides insight into future
          spending and savings.
        </p>
        <GooglePlay />
      </div>

      <div className={ `col ${ style.imgCol }` }>
        <img className={ style.phone } src="/img/home-phone.svg" />
        <Star className={ style.star1 } />
        <Star className={ style.star2 } />
        <Star className={ style.star3 } />
      </div>
    </section>
  );
}
